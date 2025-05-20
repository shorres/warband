import React from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";

const ExportCSVButton = ({ data, filename = "export.csv" }) => {
  const handleExport = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

  return (
    <button onClick={handleExport}>
      Export to CSV
    </button>
  );
};

export default ExportCSVButton;