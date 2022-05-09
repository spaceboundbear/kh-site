import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-bg">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/home">Home</Link>
        <Link to="/route">Route</Link>
        <Link to="/synthesis">Synthesis</Link>
        <Link to="/collectibles">Collectibles</Link>
        <Link to="/bosses">Bosses</Link>
        <Link to="/faq">Frequently Asked</Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
