import React, { useState } from 'react';

import './App.css';
import logo from './assets/Trench-Crusade-Logo.png';
import grailLogo from './assets/Black_Grail_Logo.png';
import pilgrimLogo from './assets/Trench_Pilgrims_Logo.png';
import courtLogo from './assets/Court_Logo.png';
import sultanLogo from './assets/Iron_Sultante_Logo.png';
import antiochLogo from './assets/New_Antioch_Logo.png';
import legionLogo from './assets/Heretic_Legion_Logo.png';
import { styleReset, Button, Select, Window, WindowHeader, Toolbar } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Soldier from './components/Soldier';
import { addSoldier, setSoldier } from './state/Warband';
import ExportCSVButton from './components/ExportCSVButton';
import ImportCSVButton from './components/ImportCSVButton';
import { undo } from './state/Warband';

/* Pick a theme of your choice */
import vistaesqueMidnight from 'react95/dist/themes/vistaesqueMidnight';
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
    font-size: 1em
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
    font-size: 1em
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

const factionLogos = {
  'The Principality of New Antioch': antiochLogo,
  'The Court of the Seven Headed Serpent': courtLogo,
  'The Iron Sultanate': sultanLogo,
  'The Cult of the Black Grail': grailLogo,
  'Trench Pilgrims': pilgrimLogo,
  'The Heretic Legion': legionLogo
}

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

const options = [
  { value: "", label: "Select Faction" },
  { value: "The Principality of New Antioch", label: "The Principality of New Antioch" },
  { value: "The Court of the Seven Headed Serpent", label: "The Court of the Seven Headed Serpent" },
  { value: "Trench Pilgrims", label: "Trench Pilgrims" },
  { value: "The Cult of the Black Grail", label: "The Cult of the Black Grail" },
  { value: "The Heretic Legion", label: "The Heretic Legion" }
]

function App() {

  const [firstLoad, setFirstLoad] = useState(true);

  const [warband, _setWarband] = useState({
    factionType: 'The Principality of New Antioch',
    soldiers: []
  });

  const [history, setHistory]=useState([]);

  const warbandCost = warband.soldiers.reduce((sum, soldier) => sum + soldier.cost, 0);

  const setWarband = (value) => {
    setHistory(prev => [...prev, warband]);
    encodeWarband(value);
    _setWarband(value);
  };

  const flattenWarbandForCSV = (warband) => {
    const { soldiers } = warband;

    // Export all stats attached to each soldier, including their keys/values
    return soldiers.map(({faction, Faction, ...rest}) => ({
      ...rest
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
    const hash = window.location.hash?.replace('#', '');
    if (hash) {
      decodeWarband(hash, _setWarband);
    }
    setFirstLoad(false);
  }

  return (
    <div className="container">
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Window resizable className='responsive-window'>
        <WindowHeader className='window-title'>
          <span>warband.exe</span>
          <Button> 
          <span className='close-icon'>x</span>
          </Button>
        </WindowHeader>
      <Toolbar><Button  variant='menu' onClick={() => { addSoldier(warband, setWarband); }}>Add Unit</Button>
      <Button variant='menu' onClick={() => undo(warband, setWarband)}>Undo</Button>
      <ImportCSVButton
          onImport={(importedRows) => {
            const importedFaction = importedRows[0]?.factionType || "";
            setWarband({
              ...warband,
              factionType: importedFaction,
              soldiers: importedRows.map(s => ({
                ...s,
                equipment: typeof s.equipment === "string" && s.equipment.trim() !== ""
                  ? s.equipment.split(",").map(e => e.trim())
                  : [],
                cost: Number(s.cost) || 0,
              })),
            });
          }} />
        <ExportCSVButton data={flattenWarbandForCSV(warband)} filename={warband.factionType + ".csv"} />
        </Toolbar>
      {/* <p><b>Warband Cost</b>: {warbandCost}gc</p> */}
      <img src={logo} className="logo" />
      <span className='faction-select'>
        <Select className='faction-input'
          options={options}
          value={warband.factionType}
          onChange={(factionType) => setWarbandFaction(factionType.value)}
          defaultValue={0}
        >
        </Select>
        {warband.factionType && factionLogos[warband.factionType] ? (
          <img src={factionLogos[warband.factionType]} alt={warband.factionType} className="faction-logo" />
        ) : null}
      </span>
      {warband.soldiers.map(soldier =>
        <Soldier
          key={soldier.uid}
          soldier={soldier}
          setSoldier={(s) => { setSoldier(warband, setWarband, s); }} />)}
          </Window>
      </ThemeProvider>
    </div>
  );
}

export default App;