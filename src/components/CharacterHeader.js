import React from 'react';
import PropTypes from 'prop-types';

import './CharacterHeader.css';
import { Button, ScrollView, TextInput, Select, Table, GroupBox, MenuList } from 'react95';
import styled from 'styled-components';
import Soldiers, { soldierTypes } from '../data/Units';
import { FACTION } from '../data/Misc';
import Items, { itemList } from '../data/Items';
import { Tooltip } from 'react-tooltip';

const formatSoldierType = soldierType => `${Soldiers[soldierType].name}`;

const SoldierTypeSelector = ({ soldierType, onTypeChange, factionType }) => {
  const allowedSoldiers = factionType
    ? soldierTypes.filter(st =>
      Soldiers[st] &&
      Soldiers[st][FACTION] &&
      Soldiers[st][FACTION].includes(factionType)
    ) : soldierTypes;

  const options = allowedSoldiers.map(st => ({
    value: st,
    label: formatSoldierType(st)
  }));

  return (<Select onChange={(soldierType) => onTypeChange(soldierType.value)} options={options}/>);
};

export const CharacterHeader = ({ name, factionType, soldierType, equipment = [], onNameChange, onTypeChange, onEquipChange }) => {
  const factionItems = factionType ? Items[factionType] : {};
  const equipmentOptions = Object.entries(factionItems || {}).map(([key, value]) => ({
    key,
    ...value
  }));

  const handleAddEquipment = (e) => {
    const value = e.target.value || equipmentInput;
    const selected = equipmentOptions.find(opt => opt.name === value);
    if (selected && !equipment.includes(selected.key)) {
      onEquipChange([...equipment, selected.key]);
    }
    setEquipmentInput('');
  };

  // Handler for removing equipment
  const handleRemoveEquipment = (key) => {
    onEquipChange(equipment.filter(eq => eq !== key));
  };

  const safeEquipment = Array.isArray(equipment) ? equipment : [];

  const [equipmentInput, setEquipmentInput] = React.useState('');

  return <div className="characterHeader">
    <span className='unit-type-select'><SoldierTypeSelector
      soldierType={soldierType}
      onTypeChange={onTypeChange}
      factionType={factionType}
    /></span>
    <span className='name-input'><TextInput onChange={(event) => onNameChange(event.target.value)}
      type="text"
      value={name} /></span>
    <span className='equipment-input'>
      <TextInput
        list="equipment-options"
        placeholder={!factionType ? 'Select a faction first' : 'Add equipment'}
        disabled={!factionType}
        value={equipmentInput}
        onChange={e => setEquipmentInput(e.target.value)}
        onBlur={handleAddEquipment}
        onKeyDown={e => {
          if (e.key === 'Enter') handleAddEquipment(e);
        }}
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
      <Table>
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
            <MenuList key={key}>
              <span className='equipment-list'
                data-tooltip-id={`equipment-tooltip-${key}`}
                data-tooltip-content={tooltipContent}
                style={{ textDecoration: "underline dotted", cursor: "help" }}
              >
                <strong>{item.name}</strong>
              </span>
              <Tooltip id={`equipment-tooltip-${key}`} place="bottom" />
              <Button size='sm' variant='square' type="button" onClick={() => handleRemoveEquipment(key)}>x</Button>
            </MenuList>
          );
        })}
      </Table>
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