import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';  // Import the CSS file for styling

const Sidebar = () => {
  const [isCalculatorsOpen, setIsCalculatorsOpen] = useState(false);
  const [isReportsOpen, setIsReportsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'calculators') {
      setIsCalculatorsOpen(!isCalculatorsOpen);
    } else if (dropdown === 'reports') {
      setIsReportsOpen(!isReportsOpen);
    } else if (dropdown === 'account') {
      setIsAccountOpen(!isAccountOpen);
    }
  };

  return (
    <div className="sidebar">
      <div className="menu-item"><Link to="/dashboard">Dashboard</Link></div>
      <div className="menu-item"><Link to="/inventory">Inventory</Link></div>
      <div className="menu-item"><Link to="/order">Order</Link></div>
      <div className="menu-item"><Link to="/returns">Returns</Link></div>
      <div className="menu-item"><Link to="/customers">Customers</Link></div>
      <div className="menu-item"><Link to="/shipping">Shipping</Link></div>
      <div className="menu-item"><Link to="/channel">Channel</Link></div>
      <div className="menu-item"><Link to="/integrations">Integrations</Link></div>
      <div className="menu-item">
        <button className="dropdown-button" onClick={() => toggleDropdown('calculators')}>
          Calculators <span className={`arrow ${isCalculatorsOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className="menu-item">
        <button className="dropdown-button" onClick={() => toggleDropdown('reports')}>
          Reports <span className={`arrow ${isReportsOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className="menu-item">
        <button className="dropdown-button" onClick={() => toggleDropdown('account')}>
          Account <span className={`arrow ${isAccountOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
