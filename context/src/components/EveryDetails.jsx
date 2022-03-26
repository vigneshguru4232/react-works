import React, { Component } from 'react';
import {DetailsContext } from "../App"


 class EveryDetails extends Component {
  render() {
    return (
      <DetailsContext.Consumer>
          {details=>{
              console.log("EveryDetails",details)
          }}
      </DetailsContext.Consumer>
    )
  }
}

export default EveryDetails