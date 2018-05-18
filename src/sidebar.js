import React from "react";
import { Link } from "react-router-dom";
const SidebarStyles = {
  sidebar: {
    marginTop: "10px",
    borderRadius: "3px",
    width: "300px",
    margin: "0 5px",
    float: "left",
    border: "1px solid #DEDEDE"
  },
  sidebarTitle: {
    margin: "0",
    padding: "8px",
    color: "white",
    backgroundColor: "dodgerblue"
  },
  link: {
    color: "#000",
    cursor: "pointer",
    textDecoration: "none"
  },
  linkWrapper: {
    padding: "8px"
  }
};

export class Sidebar extends React.Component {
  render() {
    return (
      <div style={SidebarStyles.sidebar}>
        <h3 style={SidebarStyles.sidebarTitle}>Sidebar</h3>
        <div style={SidebarStyles.linkWrapper}>
          <Link to="/dashboard/add-data" style={SidebarStyles.link}>
            Add new data
          </Link>
        </div>
        <div style={SidebarStyles.linkWrapper}>
          <Link to="/dashboard/list-data" style={SidebarStyles.link}>
            List data
          </Link>
        </div>
        <div style={SidebarStyles.linkWrapper}>
          <Link to="/dashboard/get-data" style={SidebarStyles.link}>
            Get data
          </Link>
        </div>
      </div>
    );
  }
}
