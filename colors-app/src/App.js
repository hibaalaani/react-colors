import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorsHelper";

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[0])} />
      </div>
    );
  }
}

export default App;
