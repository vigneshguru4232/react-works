import React, { Component } from "react";
import {DetailsContext } from "../App"

class PersonDetail extends Component {
  render() {
    return (
      <div>
        <DetailsContext.Consumer>
          {(details) => {
            console.log("From PersonDetails",details);
          }}
        </DetailsContext.Consumer>
      </div>
    );
  }
}

export default PersonDetail;
