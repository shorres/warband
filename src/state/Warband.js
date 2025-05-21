import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES } from '../data/Misc';

import { generateSoldierName, generateWizardName } from "../data/Names";
import Soldiers, { TRENCH_PILGRIM } from "../data/Soldiers";
import { CHRONOMANCER } from '../data/WizardTypes';

export const VERSIONS = {
  V1: "V1",
};

export const addSoldier = (warband, setWarband) => {
  if (warband.soldiers.length === 8) {
    return;
  }
  const newSoldier = {
    ...Soldiers[TRENCH_PILGRIM],
    uid: uuidv4(),
    name: generateSoldierName(),
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