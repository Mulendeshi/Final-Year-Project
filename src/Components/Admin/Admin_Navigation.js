import React from "react";
import "./adminnav.css"; // Make sure to create a CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo and App Name */}
      <div className="logo-details">
        <img src="/Components/Images/logo.JPG" alt="Logo" className="logo" />
        <div className="logo-name">DM Detection System</div>
      </div>

      {/* General Section */}
      <div className="section">
        <div className="section-title">General</div>
        <hr />
        <ul>
          <li>Home</li>
          <li>User Management</li>
          <li>Schedules</li>
          <li>Hiring</li>
        </ul>
      </div>

      {/* Support Section */}
      <div className="section">
        <div className="section-title">Support</div>
        <hr />
        <ul>
          <li>Settings</li>
          <li>Chat</li>
          <li>Title</li>
        </ul>
      </div>

      {/* User Details */}
      <div className="user-details">
        <div className="user-name">Test Jack</div>
        <div className="user-id">User ID: 12345</div>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
