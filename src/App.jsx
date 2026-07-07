import { useState } from "react";
import DashboardLayout from "./components/Layout/DashboardLayout/DashboardLayout";

function App() {

  const [activeMenu, setActiveMenu] = useState("APPS");

  return (
    <DashboardLayout
      activeMenu={activeMenu}
      setActiveMenu={setActiveMenu}
    />
  );
}

export default App;