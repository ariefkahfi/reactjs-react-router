import React from "react";
import { Switch, Route } from "react-router-dom";

import { AboutUs } from "./aboutus";
import { ContactUs } from "./contactus";
import { Dashboard } from "./dashboard";
import { Home } from "./home";

const ContentStyles = {
  content: {
    marginTop: "10px"
  }
};

export class Content extends React.Component {
  render() {
    return (
      <div style={ContentStyles.content}>
        <Switch>
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
