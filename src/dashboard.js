import React from "react";
import { Sidebar } from "./sidebar";
import { DashboardContent } from "./dashboardcontent";

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <DashboardContent />
      </div>
    );
  }
}
