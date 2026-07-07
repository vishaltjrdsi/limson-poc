import { useState } from "react";
import "./DashboardLayout.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

function DashboardLayout() {
  const [activeMenu, setActiveMenu] = useState("APPS");

  return (
    <div className="layout">
      <Sidebar activeMenu={activeMenu} />

      <div className="content">
        <Header
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;