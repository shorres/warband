import React, { useState } from 'react';

import './App.css';
import logo from './assets/Trench-Crusade-Logo.png';
import Soldier from './components/Soldier';
import { addSoldier, setSoldier } from './state/Warband';
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

function App() {

  const [firstLoad, setFirstLoad] = useState(true);

  const [warband, _setWarband] = useState({
    factionType: '',
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
      ...soldier
    }));
  };

  const setWarbandFaction = (newFaction) => {
    setWarband({
      ...warband,
      factionType: newFaction,
      soldiers: warband.soldiers.map(soldier => ({
        ...soldier,
        factionType: newFaction
      }))
    });
  };

  if (firstLoad) {
    decodeWarband(window.location.hash?.replace('#', ''), _setWarband);
    setFirstLoad(false);
  }

  return (
    <div className="container">
      <img src={logo} className="logo" />
      <span className='button'><button onClick={() => { addSoldier(warband, setWarband); }}>Add Soldier</button>
        <ImportCSVButton
          onImport={(importedRows) => {
            setWarband({
              ...warband,
              soldiers: importedRows.map(s => ({
                ...s,
                cost: Number(s.cost) || 0,
              })),
            });
          }} />
        <ExportCSVButton data={flattenWarbandForCSV(warband)} filename="warband.csv" />
      </span>

      {/* <p><b>Warband Cost</b>: {warbandCost}gc</p> */}
      <span>
        <select
          value={warband.factionType}
          onChange={e => setWarbandFaction(e.target.value)}
        >
          <option value="">Select Faction</option>
          <option value="The Principality of New Antioch">The Principality of New Antioch</option>
          <option value="The Court of the Seven Headed Serpent">The Court of the Seven Headed Serpent</option>
          <option value="Trench Pilgrims">Trench Pilgrims</option>
          <option value="The Cult of the Black Grail">The Cult of the Black Grail</option>
          <option value="The Heretic Legion">The Heretic Legion</option>
          <option value="The Iron Sultanate">The Iron Sultanate</option>
        </select>
      </span>
      {warband.soldiers.map(soldier =>
        <Soldier
          key={soldier.uid}
          soldier={soldier}
          setSoldier={(s) => { setSoldier(warband, setWarband, s); }} />)}
    </div>
  );
}

export default App;