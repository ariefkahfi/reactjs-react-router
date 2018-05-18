import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Content } from "./content";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar navTitle="ReactRouter App" />
        <Content />
      </React.Fragment>
    );
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
