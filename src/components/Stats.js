import React from 'react';
import PropTypes from 'prop-types';

import './Stats.css';
import CharacterFeatures from '../data/CharacterFeatures';
import WizardShape from '../shapes/WizardShape';
import SoldierShape from '../shapes/SoldierShape';
import {ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES } from '../data/Misc';

const formatFeatures = abilities => abilities.map(ability => CharacterFeatures[ability].name).join(', ');

const formatStat = stat => stat >= 0 ? `+${stat}` : stat === 0 ? stat : `${stat}`;

export const Stats = ({character}) => {
  const {
    [MOVEMENT]: movement,
    [MELEE]: melee,
    [RANGED]: ranged,
    [ARMOUR]: armour,
    [BASE]: base,
    // abilities: ability,
    [EQUIPMENT]: equipment,
    [KEYWORDS]: keywords,
    [FACTION]: faction,
  } = character;
  return (<div className="stats">
    <span className="highlight centered statName--movement">Movement</span>
    <span className="highlight centered statName--ranged">Ranged</span>
    <span className="highlight centered statName--melee">Melee</span>
    <span className="highlight centered statName--armour">Armour</span>
    <span className="highlight centered statName--base">Base</span>
    <span className="highlight centered statName--abilities">Abilities</span>
    <span className="highlight centered statName--keywords">Keywords</span>

    {/* {abilities && <span className="span-2 highlight">Abilities</span>} */}
    <span className="centered">
      {movement}
    </span>
    <span className="centered">
      {formatStat(melee)}
    </span>
    <span className="centered">
      {formatStat(ranged)}
    </span>
    <span className="centered">
      {armour}
    </span>
    <span className="centered">
      {formatStat(base)}
    </span>
    <span className="centered">
      {keywords}
    </span>
    {/* {abilities && <span className="span-2">{formatFeatures(abilities)}</span>} */}
  </div>);
};

Stats.propTypes = {
  character: PropTypes.oneOfType([WizardShape, SoldierShape]).isRequired,
};

export default Stats;