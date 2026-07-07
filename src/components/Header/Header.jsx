import "./Header.css";
import { FaBell, FaUserCircle } from "react-icons/fa";
import {
  MdApps,
  MdAssessment,
  MdAdminPanelSettings,
  MdBuild,
} from "react-icons/md";

function Header({ activeMenu, setActiveMenu }) {
  return (
    <header className="header">

  <nav className="header-nav">
    <a
      href="#"
      className={activeMenu === "APPS" ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        setActiveMenu("APPS");
      }}
    >
      <MdApps className="nav-icon" />
      <span>APPS</span>
    </a>

    <a
      href="#"
      className={activeMenu === "REPORTS" ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        setActiveMenu("REPORTS");
      }}
    >
      <MdAssessment className="nav-icon" />
      <span>REPORTS</span>
    </a>

    <a
      href="#"
      className={activeMenu === "ADMIN" ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        setActiveMenu("ADMIN");
      }}
    >
      <MdAdminPanelSettings className="nav-icon" />
      <span>ADMIN</span>
    </a>

    <a
      href="#"
      className={activeMenu === "TOOLS" ? "active" : ""}
      onClick={(e) => {
        e.preventDefault();
        setActiveMenu("TOOLS");
      }}
    >
      <MdBuild className="nav-icon" />
      <span>TOOLS</span>
    </a>
  </nav>

  <div className="header-right">
    <FaBell className="icon" />
    <FaUserCircle className="icon" />
  </div>

</header>
  );
}

export default Header;