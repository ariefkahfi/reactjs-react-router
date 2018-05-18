import React from "react";

export class Home extends React.Component {
  render() {
    console.log(this.props.location);
    return (
      <React.Fragment>
        <h1>Home page</h1>
        <div>Welcome to our home page</div>
      </React.Fragment>
    );
  }
}
