# Trench Crusade Warband Builder

A web-based builder for creating and managing warbands for the Trench Crusade setting. Easily assemble, customize, and export your warband rosters.

## Features

- **Add, edit, and remove soldiers** from your warband
- **Faction and unit selection** with automatic filtering
- **Stat and ability display** with tooltips for keywords and abilities
- **Import/export warbands** as CSV files for easy sharing and backup
- **Persistent warband state** via URL hash encoding
- **Responsive design** for desktop and mobile

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/yourusername/warband.git
cd warband
yarn install
# or
npm install
```

### Running the App

Start the development server:

```sh
yarn start
# or
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```sh
yarn build
# or
npm run build
```

The optimized build will be in the `build/` directory.

## Usage

- Click **Add Soldier** to add a new unit to your warband.
- Use the dropdowns to select faction and unit type.
- Edit soldier names directly in the input field.
- Hover over keywords and abilities for detailed tooltips.
- Use **Import CSV** and **Export to CSV** to manage your warband data.
- The warband state is encoded in the URL hash for easy sharing/bookmarking.

## Project Structure

- `src/components/` – React components (UI, logic)
- `src/data/` – Game data (units, abilities, factions, keywords)
- `src/state/` – State management utilities
- `src/shapes/` – PropTypes definitions
- `public/` – Static assets and HTML

## Technologies

- React 19
- PropTypes
- [PapaParse](https://www.papaparse.com/) (CSV import/export)
- [file-saver](https://github.com/eligrey/FileSaver.js/) (file downloads)
- [react-tooltip](https://react-tooltip.com/) (tooltips)
- [uuid](https://www.npmjs.com/package/uuid) (unique IDs)

## License

This project is licensed under the [Apache 2.0 License](public/LICENSE.txt).

---

*Trench Crusade and related content are the property of their respective creators. This tool is a fan project and not affiliated with the official creators.*