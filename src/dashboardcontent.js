import React from "react";
import { Switch, Route } from "react-router-dom";
import { AddData } from "./adddata";
import { ListData } from "./listdata";
import { GetData } from "./getdata";

const DashboardContentStyles = {
  dashboardContent: {
    overflow: "hidden",
    backgroundColor: "crimson"
  }
};

export class DashboardContent extends React.Component {
  render() {
    return (
      <div style={DashboardContentStyles.dashboardContent}>
        <Switch>
          <Route path="/dashboard/add-data" component={AddData} />
          <Route path="/dashboard/list-data" component={ListData} />
          <Route path="/dashboard/get-data" component={GetData} />
        </Switch>
      </div>
    );
  }
}
