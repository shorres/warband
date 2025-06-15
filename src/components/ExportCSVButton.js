import React from "react";
import Papa from "papaparse";
import { saveAs } from "file-saver";
import { Button } from "react95";

const ExportCSVButton = ({ data, filename = "export.csv" }) => {
  const handleExport = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, filename);
  };

  return (
    <Button variant="menu" onClick={handleExport}>
      Export
    </Button>
  );
};

export default ExportCSVButton;