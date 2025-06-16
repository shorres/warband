import React from 'react';
import PropTypes from 'prop-types';
//import { Tooltip } from 'react-tooltip';
import { Table, TableDataCell, TableHeadCell, TableBody, TableHead, TableRow, Tooltip } from 'react95';

import './Stats.css';
import CharacterFeatures from '../data/UnitAbilities';
import characterShape from '../shapes/CharacterShape';
import Keywords from '../data/Keywords';
import {ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ABILITIES } from '../data/Misc';

const formatKeywords = (keywords, tooltipId = null) => {
  if (!keywords) return '';
  const keyList = Array.isArray(keywords)
    ? keywords
    : typeof keywords === 'string'
      ? keywords.split(',').map(a => a.trim())
      : [];

  return keyList.map((keyword, i) => {
    const kw = Keywords[keyword];
    const name = kw?.name || keyword;
    const description = kw?.description || '';
    if (description) {
      return (
        <Tooltip 
          key={keyword + i}
          text={description}
          position="bottom"
          style={{width:'30em', whiteSpace:'pre', color:'black'}}
        >
          <span
            className='keyword-tooltip'
            style={{ textDecoration: "underline dotted", cursor: "help"}}
          >
            {name}
            {i < keyList.length - 1 ? ' / ' : ''}
          </span>
        </Tooltip>
      );
    }
    return (
      <span key={keyword + i} className='keyword-tooltip'>
        {name}
      </span>
    );
  });
};

const formatAbilities = (abilities = null) => {
  if (!abilities) return '';
  const abilityList = Array.isArray(abilities)
    ? abilities
    : typeof abilities === 'string'
      ? abilities.split(',').map(a => a.trim())
      : [];

  return abilityList.map((ability, i) => {
    const abilityFound = CharacterFeatures[ability];
    const name = abilityFound?.name || ability;
    const description = abilityFound?.description || '';
    if (description) {
      return (
        <Tooltip
          key={ability + i}
          text={description}
          position="bottom"
          style={{width:'30em', whiteSpace:'pre-wrap', color:'black'}}
        >
          <span
            className='ability-tooltip'
            style={{ textDecoration: "underline dotted", cursor: "help"}}
          >
            {name}
            {i < abilities.length - 1 ? ' / ' : ''}
          </span>
        </Tooltip>
      );
    }
    return (
      <span key={ability + i} className='ability-tooltip'>
        {name}
      </span>
    );
  });
};

const formatStat = stat => stat >= 0 ? `+${stat}` : stat === 0 ? stat : `${stat}`;

export const Stats = ({character}) => {
  const {
    [MOVEMENT]: movement,
    [MELEE]: melee,
    [RANGED]: ranged,
    [ARMOUR]: armour,
    [BASE]: base,
    [ABILITIES]: abilities,
    [KEYWORDS]: keywords,
  } = character;
  return (
    <Table className="stats-table">
      <TableHead>
        <TableRow>
          <TableHeadCell>Movement</TableHeadCell>
          <TableHeadCell>Melee</TableHeadCell>
          <TableHeadCell>Ranged</TableHeadCell>
          <TableHeadCell>Armour</TableHeadCell>
          <TableHeadCell>Base</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableDataCell>{movement}</TableDataCell>
          <TableDataCell>{formatStat(melee)}</TableDataCell>
          <TableDataCell>{formatStat(ranged)}</TableDataCell>
          <TableDataCell>{armour}</TableDataCell>
          <TableDataCell>{base}</TableDataCell>
        </TableRow>
        <TableRow>
          <TableDataCell colSpan={6} >
            <strong>Keywords:</strong> {formatKeywords(keywords, 'keywords-tooltip')}
          </TableDataCell>
        </TableRow>
        {abilities && (
          <TableRow>
            <TableDataCell colSpan={6}>
              <strong>Abilities:</strong> {formatAbilities(abilities, 'ability-tooltip')}
            </TableDataCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

Stats.propTypes = {
  character: PropTypes.shape(characterShape).isRequired,
};

export default Stats;