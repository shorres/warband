import React from 'react';
import PropTypes from 'prop-types';

import './CharacterHeader.css';
import grailLogo from '../assets/Black_Grail_Logo.png';
import pilgrimLogo from '../assets/Trench_Pilgrims_Logo.png';
import courtLogo from '../assets/Court_Logo.png';
import sultanLogo from '../assets/Iron_Sultante_Logo.png';
import antiochLogo from '../assets/New_Antioch_Logo.png';
import legionLogo from '../assets/Heretic_Legion_Logo.png';
import Factions, {factionTypes} from "../data/Factions";
import Soldiers, {soldierTypes} from '../data/Units';
import { FACTION } from '../data/Misc';

const factionLogos={
  'The Principality of New Antioch':antiochLogo,
  'The Court of the Seven Headed Serpent':courtLogo,
  'The Iron Sultanate':sultanLogo,
  'The Cult of the Black Grail':grailLogo,
  'Trench Pilgrims':pilgrimLogo,
  'The Heretic Legion':legionLogo
}

const formatSoldierType = soldierType => `${Soldiers[soldierType].name}`;

const FactionTypeSelector = ({ factionType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={factionType}>
    {factionTypes.map(wt => <option key={wt} value={wt}>{Factions[wt].name}</option>)}
  </select>);

const SoldierTypeSelector = ({ soldierType, onTypeChange, factionType }) => {
  const allowedSoldiers = factionType 
    ? soldierTypes.filter(st =>
      Soldiers[st] &&
      Soldiers[st][FACTION] &&
      Soldiers[st][FACTION].includes(factionType)
    ) : soldierTypes;
  
  return (
    <select onChange={(event) => onTypeChange(event.target.value)} value={soldierType}>
      {allowedSoldiers.map(st => <option key={st} value={st}>{formatSoldierType(st)}</option>)}
    </select>);
};

export const CharacterHeader = ({ name, factionType, soldierType, onNameChange, onTypeChange }) => {
  return <div className="characterHeader">
    <span className="faction-label">
      {factionType && factionLogos[factionType] ? (
        <img src={factionLogos[factionType]} alt={factionType} className="faction-logo" />
      ) : null}
    </span>
    <span className="faction-select"><FactionTypeSelector factionType={factionType} onTypeChange={onTypeChange} /></span>
    <span className='name-input'><input onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} /></span>
    <span className='unit-type-select'><SoldierTypeSelector 
      soldierType={soldierType} 
      onTypeChange={onTypeChange}
      factionType={factionType}
      /></span>
  </div>
};

CharacterHeader.propTypes = {
  name: PropTypes.string,
  soldierType: PropTypes.oneOf(soldierTypes),
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default CharacterHeader;