import "./Sidebar.css";
import menuData from "../../data/menuData";
import { useState } from "react";
import logo from "../../assets/icons/atlas_logo.png";

function Sidebar({ activeMenu = "APPS" }) {
  const [selectedItem, setSelectedItem] = useState("");

  const sections = menuData[activeMenu] || [];

  return (
    <aside className="sidebar">

      {/* Brand Section */}

<div className="sidebar-brand-card">
  <img
    src={logo}
    alt="Atlas Logo"
    className="brand-logo"
  />



  <p className="brand-description">
    Your Reliable Global
    <br />
    End to End Supply
    <br />
    Chain Partner.
    <span className="copyright"> ®</span>
  </p>
</div>



      {/* Menu */}
      {sections.map((section) => (
        <div key={section.title} className="sidebar-section">

          <h5>{section.title}</h5>

          {section.items.map((item) => (
            <div
              key={item}
              className={`sidebar-item ${
                selectedItem === item ? "active" : ""
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </div>
          ))}

        </div>
      ))}

    </aside>
  );
}

export default Sidebar;