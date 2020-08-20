import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "./Palette.css";
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 400, format: "hex" };
    this.sliderChangeHandler = this.sliderChangeHandler.bind(this);
  }
  sliderChangeHandler(level) {
    this.setState({
      level,
    });
  }
  selectHandler = (val) => {
    this.setState({
      format: val,
    });
  };

  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox color={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          sliderChangeHandler={this.sliderChangeHandler}
          selectHandler={this.selectHandler}
        />

        <div className="Palette-color">{colorBoxes}</div>
        <footer className="palette-name">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
export default Palette;
