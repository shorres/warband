import React from "react";
import Papa from "papaparse";

const ImportCSVButton = ({ onImport }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        // results.data is an array of objects
        onImport(results.data);
      },
    });
  };

  const fileInputRef = React.useRef(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <button type="button" onClick={handleButtonClick} style={{ cursor: "pointer" }}>
        Import CSV
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default ImportCSVButton;