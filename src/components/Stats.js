import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';
import CharacterFeatures from '../data/CharacterFeatures';
import SoldierShape from '../shapes/SoldierShape';
import {ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ABILITIES } from '../data/Misc';

const formatFeatures = abilities => {
  if (!abilities) return '';
  if (Array.isArray(abilities)) {
    return abilities.map(ability => CharacterFeatures[ability]?.name || ability).join(', ');
  }
  // If it's a string (from CSV), split by comma and trim
  if (typeof abilities === 'string') {
    return abilities
      .split(',')
      .map(a => a.trim())
      .map(ability => CharacterFeatures[ability]?.name || ability)
      .join(', ');
  }
  return '';
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
    [EQUIPMENT]: equipment,
    [KEYWORDS]: keywords,
    [FACTION]: faction,
  } = character;
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Melee</th>
          <th>Ranged</th>
          <th>Armour</th>
          <th>Base</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{movement}</td>
          <td>{formatStat(melee)}</td>
          <td>{formatStat(ranged)}</td>
          <td>{armour}</td>
          <td>{base}</td>
        </tr>
        <tr>
          <td colSpan={6}>
            <strong>Keywords:</strong> {formatFeatures(keywords)}
          </td>
        </tr>
        {abilities && (
          <tr>
            <td colSpan={6}>
              <strong>Abilities:</strong> {formatFeatures(abilities)}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  character: PropTypes.oneOfType(SoldierShape).isRequired,
};

export default Stats;