import React from 'react';

import CharacterShape from '../shapes/CharacterShape';
import Stats from './Stats';
import CharacterHeader from './CharacterHeader';

import './Soldier.css';
import { factionTypes } from '../data/Factions';
import Soldiers, { soldierTypes } from '../data/Units';
import { FACTION } from '../data/Misc';

const Soldier = ({ soldier, setSoldier }) => {
  return (
    <div className="soldier">
      <CharacterHeader 
      name={soldier.name} 
      soldierType={soldier.soldierType} 
      factionType={soldier.factionType}
      onNameChange={(name) => setSoldier({ ...soldier, name })}
      onTypeChange={(type) => {
        if(factionTypes.includes(type)){
          const firstAvailable = soldierTypes.find(st =>
            Soldiers[st][FACTION] && Soldiers[st][FACTION].includes(type)
          );
          setSoldier({
            ...soldier,
            factionType: type,
            soldierType: firstAvailable,
          });
        } else{
          setSoldier({...soldier, soldierType:type});
        }
      }}
        />
      <Stats character={soldier} />
    </div>
    );
};

Soldier.propTypes = {
  soldier: CharacterShape.isRequired
};

export default Soldier;