import React from 'react';
import PropTypes from 'prop-types';

import './CharacterHeader.css';
import HereticLegionUnits from '../data/HereticLegionUnits';
import AntiochUnits from '../data/AntiochUnits';
import BlackGrailUnits from '../data/BlackGrailUnits';
import SevenHeadedUnits from '../data/SevenHeadedUnits';
import SultanateUnits from '../data/SultanateUnits';
import TrenchPilgrimUnits from '../data/TrenchPilgrimUnits';
import WizardTypes, { wizardTypes } from '../data/WizardTypes';
import Soldiers, { soldierTypes } from '../data/Soldiers';

const getTitle = (wizardType, soldierType, isApprentice) => {
  if (isApprentice) {
    return 'Apprentice';
  }
  if (wizardType) {
    return 'Wizard';
  }
  if (soldierType) {
    return 'Soldier';
  }
};

const getType = (wizardType) => wizardType ? 'School' : 'Type';

const formatSoldierType = soldierType => `${Soldiers[soldierType].name}${Soldiers[soldierType].isSpecialist ? '*' : ''} (${Soldiers[soldierType].cost}gc)`;

const WizardTypeSelector = ({ wizardType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={wizardType}>
    {wizardTypes.map(wt => <option key={wt} value={wt}>{WizardTypes[wt].name}</option>)}
  </select>);

const SoldierTypeSelector = ({ soldierType, onTypeChange }) => (
  <select onChange={(event) => onTypeChange(event.target.value)} value={soldierType}>
    {soldierTypes.map(st => <option key={st} value={st}>{formatSoldierType(st)}</option>)}
  </select>);

export const CharacterHeader = ({ name, wizardType, soldierType, onNameChange, onTypeChange }) => {
  return <div className="characterHeader">
    <span className="blue highlight">{getTitle(soldierType)}</span>
    <span className='span-half'><input onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} /></span>
    {<span className="blue highlight">{getType(soldierType)}</span>}
    {<span><WizardTypeSelector wizardType={wizardType} onTypeChange={onTypeChange} /></span>}
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