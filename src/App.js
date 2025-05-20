import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import { generateWizardName } from './data/Names';
import { addSoldier, setSoldier, setWizard, undo, useWarband, VERSIONS } from './state/Warband';
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES } from './data/Misc';
import ExportCSVButton from './components/ExportCSVButton';


const encodeWarband = (warband) => {
  const encoded = btoa(JSON.stringify(warband));
  window.location.hash = encoded;
};

const decodeWarband = (encoded, setWarband) => {
  const decoded = atob(encoded);
  try {
    setWarband(JSON.parse(decoded));
  } catch (e) {
    console.error(e);
  }
}

const DEFAULT_WIZARD = {
  name: generateWizardName(),
  wizardType: SIGILIST,
  [MOVEMENT]: 6,
  [MELEE]: 2,
  [RANGED]: 0,
  [ARMOUR]: 10,
  [BASE]: 14,
  [FACTION]: 4,
  [EQUIPMENT]: 0,
  [KEYWORDS]: "TEST",
  [ABILITIES]: 2
};

function App() {

  const [firstLoad, setFirstLoad] = useState(true);

  const [warband, _setWarband] = useState({
    soldiers: []
  });

  const warbandCost = warband.soldiers.reduce((sum, soldier) => sum + soldier.cost, 0);

  const setWarband = (value) => {
    encodeWarband(value);
    _setWarband(value);
  };

const flattenWarbandForCSV = (warband) => {
  const { soldiers } = warband;

  // Helper to add a type label
  const withType = (obj, type) => ({ type, ...obj });

  // Remove any non-primitive or unwanted fields if needed
  const clean = ({ uid, ...rest }) => rest;

  // Build the array
  return [
    ...soldiers.map(s => withType(clean(s), "Soldier")),
  ];
};
  
  if (firstLoad) {
    decodeWarband(window.location.hash?.replace('#', ''), _setWarband);
    setFirstLoad(false);
  }

  return (
    <div className="container">
      <h1 className="title">Trench Crusade</h1>

      <button onClick={() => { addSoldier(warband, setWarband); }}>Add Soldier</button>
      <ExportCSVButton data={flattenWarbandForCSV(warband)} filename="names.csv" />
      <p><b>Warband Cost</b>: {warbandCost}gc</p>

      {warband.soldiers.map(soldier =>
        <Soldier
          key={soldier.uid}
          soldier={soldier}
          setSoldier={(s) => { setSoldier(warband, setWarband, s); }} />)}
    </div>
  );
}

export default App;
