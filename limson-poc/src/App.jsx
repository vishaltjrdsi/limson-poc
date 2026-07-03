import { useState } from "react";
import "./App.css";

import ReusableGrid from "./components/ReusableGrid";
import sampleData from "./data/sampleData";
import { tabs } from "./config/tabsConfig";
import { columns } from "./config/commonColumns";

function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const columnDefs = selectedTab.columnKeys.map(
    (key) => columns[key]
  );

  return (
    <div className="app">
      <h1 className="title">Limson POC</h1>

      <div className="tab-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${
              selectedTab.id === tab.id ? "active" : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="grid-card">
        <ReusableGrid
          rowData={sampleData}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
}

export default App;