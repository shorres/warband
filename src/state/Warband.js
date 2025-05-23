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
  if (warband.soldiers.length === 8) {
    return;
  }

  const defaultSoldierType = soldierTypes[0];
  const defaultFactionType = Soldiers[defaultSoldierType][FACTION]?.[0] || factionTypes[0];

  const newSoldier = {
    ...Soldiers[defaultSoldierType],
    uid: uuidv4(),
    name: generateSoldierName(),
    soldierType: defaultSoldierType,
    factionType: defaultFactionType
  };
  warband.soldiers.push(newSoldier);
  setWarband({ ...warband });
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
  setWarband({ ...history.pop() });
  setHistory(history);
}