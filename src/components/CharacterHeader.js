import React from 'react';
import PropTypes from 'prop-types';

import './CharacterHeader.css';
import grailLogo from '../assets/Black_Grail_Logo.png';
import pilgrimLogo from '../assets/Trench_Pilgrims_Logo.png';
import courtLogo from '../assets/Court_Logo.png';
import sultanLogo from '../assets/Iron_Sultante_Logo.png';
import antiochLogo from '../assets/New_Antioch_Logo.png';
import legionLogo from '../assets/Heretic_Legion_Logo.png';
import Factions, { factionTypes } from "../data/Factions";
import Soldiers, { soldierTypes } from '../data/Units';
import { FACTION } from '../data/Misc';
import Items, { itemList } from '../data/Items';
import { Tooltip } from 'react-tooltip';

const factionLogos = {
  'The Principality of New Antioch': antiochLogo,
  'The Court of the Seven Headed Serpent': courtLogo,
  'The Iron Sultanate': sultanLogo,
  'The Cult of the Black Grail': grailLogo,
  'Trench Pilgrims': pilgrimLogo,
  'The Heretic Legion': legionLogo
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

export const CharacterHeader = ({ name, factionType, soldierType, equipment = [], onNameChange, onTypeChange, onEquipChange }) => {
  console.log(name, factionType, soldierType);
  const factionItems = factionType ? Items[factionType] : {};
  const equipmentOptions = Object.entries(factionItems || {}).map(([key, value]) => ({
    key,
    ...value

  }));

  const handleAddEquipment = (e) => {
    const selected = equipmentOptions.find(opt => opt.name === e.target.value);
    if (selected && !equipment.includes(selected.key)) {
      onEquipChange([...equipment, selected.key]);
    }
    // Optionally clear the input after selection
    e.target.value = '';
  };

  // Handler for removing equipment
  const handleRemoveEquipment = (key) => {
    onEquipChange(equipment.filter(eq => eq !== key));
  };

  console.log(equipment)
  const safeEquipment = Array.isArray(equipment) ? equipment : [];
  return <div className="characterHeader">
    <span className="faction-label">
      {factionType && factionLogos[factionType] ? (
        <img src={factionLogos[factionType]} alt={factionType} className="faction-logo" />
      ) : null}
    </span>
    <span className="faction-select"><FactionTypeSelector factionType={factionType} onTypeChange={onTypeChange} /></span>
    <span className='unit-type-select'><SoldierTypeSelector
      soldierType={soldierType}
      onTypeChange={onTypeChange}
      factionType={factionType}
    /></span>
    <span className='name-input'><input onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} /></span>
    <span className='equipment-input'>
      <input
        list="equipment-options"
        placeholder={!factionType ? 'Select a faction first' : 'Add equipment'}
        disabled={!factionType}
        onChange={handleAddEquipment}
      />
      <datalist id="equipment-options">
        {equipmentOptions.map(opt => (
          <option
            key={opt.key}
            value={opt.name}
            label={
              [
                opt.name,
                opt.range ? `Range: ${opt.range}` : null,
                opt.type ? `Type: ${opt.type}` : null,
                opt.modifiers ? `Modifiers: ${opt.modifiers}` : null,
                opt.limit ? `Limit: ${opt.limit}` : null
              ].filter(Boolean).join(' | ')
            }
          />
        ))}
      </datalist>
      {/* Show selected equipment with info and remove button */}
      <ul>
  {safeEquipment.map(key => {
    const item = equipmentOptions.find(opt => opt.key === key);
    if (!item) return null;
    // Build tooltip content
    const tooltipContent = [
      item.range ? `Range: ${item.range}` : null,
      item.type ? `Type: ${item.type}` : null,
      item.modifiers ? `Modifiers: ${item.modifiers}` : null,
      item.limit ? `Limit: ${item.limit}` : null
    ].filter(Boolean).join(' | ');
    return (
      <li key={key}>
        <span
          data-tooltip-id={`equipment-tooltip-${key}`}
          data-tooltip-content={tooltipContent}
          style={{ textDecoration: "underline dotted", cursor: "help" }}
        >
          <strong>{item.name}</strong>
        </span>
        <Tooltip id={`equipment-tooltip-${key}`} place="bottom" />
        <button type="button" onClick={() => handleRemoveEquipment(key)}>Remove</button>
      </li>
    );
  })}
</ul>
    </span>
  </div>
};

CharacterHeader.propTypes = {
  name: PropTypes.string,
  soldierType: PropTypes.oneOf(soldierTypes),
  onNameChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
  equipment: PropTypes.array.isRequired,
  onEquipChange: PropTypes.func.isRequired
};

export default CharacterHeader;