import React, { Component } from "react";
import EveryDetails from "./components/EveryDetails";
import PersonDetail from "./components/PersonDetail";

export const DetailsContext = React.createContext()


class App extends Component {
  state = {
    details: [
      {
        fname: "vignesh",
        lname: "guru",
        dob: "10-06-2002",
        bloodgroup: "O+ve",
      },
      {
        fname: "Iniyan",
        lname: "E",
        dob: "10-06-2002",
        bloodgroup: "O+ve",
      },
      {
        fname: "Karthi",
        lname: "D",
        dob: "10-06-2002",
        bloodgroup: "O+ve",
      },
      {
        fname: "Ajith",
        lname: "Kumar",
        dob: "10-06-2002",
        bloodgroup: "O+ve",
      },
    ],
  };
  render() {
    const details = this.state.details
    return (
      <DetailsContext.Provider value={details}>
      <EveryDetails />
      <PersonDetail />
      </DetailsContext.Provider>
    )
  }
}

export default App;
