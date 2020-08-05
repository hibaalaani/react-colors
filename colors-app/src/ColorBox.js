import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
  render() {
    const { color, name } = this.props;
    return (
      <div style={{ backgroundColor: color }} className="ColorBox">
        <div className="copy-container">
          <div className="box-cotent">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="More">More</span>
      </div>
    );
  }
}
export default ColorBox;
