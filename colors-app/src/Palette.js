import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => (
      <ColorBox color={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        <nav>nav</nav>
        <div className="Palette-color">{colorBoxes}</div>
        <footer>footer</footer>
      </div>
    );
  }
}
export default Palette;
