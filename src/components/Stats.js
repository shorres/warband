import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'react-tooltip';
import { Table, TableDataCell, TableHeadCell, TableBody, TableHead, TableRow } from 'react95';

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
    if (tooltipId && description) {
      return (
        <span
          key={keyword + i}
          className='keyword-tooltip'
          data-tooltip-id={tooltipId}
          data-tooltip-content={description}
          style={{ textDecoration: "underline dotted", cursor: "help" }}
        >
          {name}
          {i < keyList.length - 1 ? ' / ' : ''}
        </span>
      );
    }
    return (
      <span key={keyword + i} className='keyword-tooltip'>
        {name}
        {i < keyList.length - 1 ? ' / ' : ''}
      </span>
    );
  });
};

const formatAbilities = (abilities, tooltipId = null) => {
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
    if (tooltipId && description) {
      return (
        <span
          key={ability + i}
          className='ability-tooltip'
          data-tooltip-id={tooltipId}
          data-tooltip-content={description}
          style={{ textDecoration: "underline dotted", cursor: "help" }}
        >
          {name}
          {i < abilityList.length - 1 ? ' / ' : ''}
        </span>
      );
    }
    return (
      <span key={ability + i} className='ability-tooltip'>
        {name}
        {i < abilityList.length - 1 ? ' / ' : ''}
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
          <TableDataCell colSpan={6}>
            <strong>Keywords:</strong> {formatKeywords(keywords, 'keywords-tooltip')}
            <Tooltip id='keywords-tooltip' place='bottom'/>
          </TableDataCell>
        </TableRow>
        {abilities && (
          <TableRow>
            <TableDataCell colSpan={6}>
              <strong>Abilities:</strong> {formatAbilities(abilities, 'ability-tooltip')}
              <Tooltip id='ability-tooltip' place='bottom'/>
            </TableDataCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

Stats.propTypes = {
  character: PropTypes.oneOfType(characterShape).isRequired,
};

export default Stats;