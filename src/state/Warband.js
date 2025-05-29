import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES } from '../data/Misc';

import { generateSoldierName} from "../data/Names";
import Soldiers, { soldierTypes } from "../data/Units";
import { factionTypes } from '../data/Factions';

export const VERSIONS = {
  V1: "V1",
};

export const addSoldier = (warband, setWarband) => {
  if (warband.soldiers.length === 15) {
    return;
  }

  let defaultSoldierType = soldierTypes[0];
  if(warband.factionType == 'The Principality of New Antioch'){
    defaultSoldierType = soldierTypes[25];
  } else if (warband.factionType == 'Trench Pilgrims'){
    defaultSoldierType = soldierTypes[9];
  }else if (warband.factionType == 'The Court of the Seven Headed Serpent'){
    defaultSoldierType = soldierTypes[42];
  }else if (warband.factionType == 'The Heretic Legion'){
    defaultSoldierType = soldierTypes[0];
  }else if (warband.factionType == 'The Cult of the Black Grail'){
    defaultSoldierType = soldierTypes[34];
  }else if (warband.factionType == 'The Iron Sultanate'){
    defaultSoldierType = soldierTypes[17];
  }

  const newSoldier = {
    ...Soldiers[defaultSoldierType],
    uid: uuidv4(),
    name: generateSoldierName(),
    soldierType: defaultSoldierType,
    factionType: warband.factionType
  };
  setWarband({ ...warband, soldiers: [...warband.soldiers, newSoldier] });
};

export const findSoldierIdx = (warband, uid) => warband.soldiers.findIndex(s => s.uid === uid);

export const setSoldier = (warband, setWarband, newSoldier) => {
  const soldierIdx = findSoldierIdx(warband, newSoldier.uid);
  
  if (warband.soldiers[soldierIdx].soldierType !== newSoldier.soldierType) {
    warband.soldiers[soldierIdx] = {
      ...Soldiers[newSoldier.soldierType],
      uid: newSoldier.uid,
      name: newSoldier.name,
      soldierType: newSoldier.soldierType,
      factionType: newSoldier.factionType
    };
  } else {
    warband.soldiers[soldierIdx] = newSoldier;
  }

  setWarband({ ...warband });
};

export const undo = (setWarband, setHistory, history) => {
  if(history.length != 0){
  setWarband({ ...history.pop() });
  setHistory(history);
  }
}