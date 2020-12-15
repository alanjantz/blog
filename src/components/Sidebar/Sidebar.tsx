import React from "react";
import "./Sidebar.css";

interface SidebarModel {
  title: string;
  description: string;
}

const Sidebar: React.FC<SidebarModel> = ({ title, description }) => (
  <div className="sidebar">
    <h3 className="sidebar-title">{title}</h3>
    <p className="sidebar-description">{description}</p>
  </div>
);

export default Sidebar;
