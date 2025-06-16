# Trench Crusade Warband Builder

A web-based builder for creating and managing warbands for the Trench Crusade setting. Easily assemble, customize, and export your warband rosters.

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

## Usage

- Click **Add Soldier** to add a new unit to your warband.
- Use the dropdowns to select faction and unit type.
- Edit soldier names directly in the input field.
- Hover over keywords and abilities for detailed tooltips.
- Use **Import CSV** and **Export to CSV** to manage your warband data.
- The warband state is encoded in the URL hash for easy sharing/bookmarking.

## Dependencies

- React 17 (React95 requires ReactDOM)
- PropTypes
- [PapaParse](https://www.papaparse.com/) (CSV import/export)
- [file-saver](https://github.com/eligrey/FileSaver.js/) (file downloads)
- [react-tooltip](https://react-tooltip.com/) (tooltips)
- [uuid](https://www.npmjs.com/package/uuid) (unique IDs)
- [React95](https://github.com/react95-io/React95)


## Notes
Initially was a fork of https://github.com/morcmarc/frostgrave-warband. 

## License

This project is licensed under the [MIT License](LICENSE).

---

*Trench Crusade and related content are the property of their respective creators. This tool is a fan project and not affiliated with the official creators.*
