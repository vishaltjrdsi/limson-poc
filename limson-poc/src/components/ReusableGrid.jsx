import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";

export default function ReusableGrid({ rowData, columnDefs }) {
  return (
    <div
      style={{
        width: "100%",
        height: "500px",
      }}
    >
      <AgGridReact
        theme={themeQuartz}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination
        defaultColDef={{
          flex: 1,
          sortable: true,
          filter: true,      // Enable filtering
          floatingFilter: true, // Show filter row
          resizable: true,
        }}
      />
    </div>
  );
}