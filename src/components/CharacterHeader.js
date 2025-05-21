import React from 'react';
import PropTypes from 'prop-types';

import './CharacterHeader.css';
import HereticLegionUnits from '../data/HereticLegionUnits';
import AntiochUnits from '../data/AntiochUnits';
import BlackGrailUnits from '../data/BlackGrailUnits';
import SevenHeadedUnits from '../data/SevenHeadedUnits';
import SultanateUnits from '../data/SultanateUnits';
import TrenchPilgrimUnits from '../data/TrenchPilgrimUnits';
import Factions, {factionTypes} from "../data/Factions";
//import WizardTypes, { wizardTypes } from '../data/WizardTypes';
import Soldiers, { soldierTypes } from '../data/Soldiers';

const getTitle = (factionType, soldierType, isApprentice) => {
  if (isApprentice) {
    return 'Apprentice';
  }
  if (factionType) {
    return factionType.name;
  }
  if (soldierType) {
    return 'Soldier';
  }
};

const getType = (factionType) => factionType ? 'School' : 'Faction';

const formatSoldierType = soldierType => `${Soldiers[soldierType].name}`;

const WizardTypeSelector = ({ factionType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={factionType}>
    {factionTypes.map(wt => <option key={wt} value={wt}>{Factions[wt].name}</option>)}
  </select>);

const SoldierTypeSelector = ({ soldierType, onTypeChange, factionType }) => {
  const allowedSoldiers = factionType && soldierTypes[factionType] ? soldierTypes[factionType] : soldierTypes;
  return (
    <select onChange={(event) => onTypeChange(event.target.value)} value={soldierType}>
      {allowedSoldiers.map(st => <option key={st} value={st}>{formatSoldierType(st)}</option>)}
    </select>);
};

export const CharacterHeader = ({ name, factionType, soldierType, onNameChange, onTypeChange }) => {
  return <div className="characterHeader">
    <span className="blue highlight">{getTitle(soldierType)}</span>
    <span className='span-half'><input onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} /></span>
    {<span className="blue highlight">{getType(soldierType)}</span>}
    {<span><WizardTypeSelector factionType={factionType} onTypeChange={onTypeChange} /></span>}
    <span className="red highlight"></span>
    {<span className='span-full'><SoldierTypeSelector soldierType={soldierType} onTypeChange={onTypeChange}/></span>}
  </div>
};

CharacterHeader.propTypes = {
  name: PropTypes.string,
  soldierType: PropTypes.oneOf(soldierTypes),
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
};

export default CharacterHeader;