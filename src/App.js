import React, { useState } from 'react';

import Wizard from './components/Wizard';
import { SIGILIST } from './data/WizardTypes';

import './App.css';
import Soldier from './components/Soldier';
import { generateWizardName } from './data/Names';
import { addSoldier, setSoldier, setWizard, undo, useWarband, VERSIONS } from './state/Warband';
import { ABILITIES, ARMOUR, BASE, EQUIPMENT, FACTION, KEYWORDS, MELEE, MOVEMENT, RANGED, ATTRIBUTES } from './data/Misc';
import ExportCSVButton from './components/ExportCSVButton';
import ImportCSVButton from './components/ImportCSVButton';


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

  // Export all stats attached to each soldier, including their keys/values
  return soldiers.map(soldier => ({
    type: "Soldier",
    ...soldier
  }));
};
  
  if (firstLoad) {
    decodeWarband(window.location.hash?.replace('#', ''), _setWarband);
    setFirstLoad(false);
  }

  return (
    <div className="container">
      <h1 className="title">Trench Crusade</h1>

      <button onClick={() => { addSoldier(warband, setWarband); }}>Add Soldier</button>
      <ExportCSVButton data={flattenWarbandForCSV(warband)} filename="warband.csv" />
      <ImportCSVButton
            onImport={(importedRows) => {
              // Transform importedRows to your warband structure as needed
              // Example: setWarband({ soldiers: importedRows.filter(r => r.type === "Soldier") })
              // You may need to map/parse fields to match your app's data model
              setWarband({
                ...warband,
                soldiers: importedRows.filter(r => r.type === "Soldier").map(s => ({
                  ...s,
                  cost: Number(s.cost) || 0, // Example: parse numbers if needed
                  // ...add/convert other fields as required
                })),
                // Add wizard/apprentice if present in import
              });
            }}/>
      
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
