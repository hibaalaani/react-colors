import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";
class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  onCopiedHandler = () => {
    this.setState(
      {
        copied: true,
      },
      () => {
        setTimeout(() => this.setState({ copied: false }), 1500);
      }
    );
  };
  render() {
    const { copied } = this.state;
    const { color, name } = this.props;
    return (
      <CopyToClipboard text={color} onCopy={this.onCopiedHandler}>
        <div style={{ backgroundColor: color }} className="ColorBox">
          <div
            style={{ backgroundColor: color }}
            className={`Copied ${copied && "Show"}`}
          />
          <div className={`Copied-msg ${copied && "Show"}`}>
            <h1>copied!</h1>
            <p>{name}</p>
          </div>
          <div className="copy-container">
            <div className="box-cotent">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="More">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
export default ColorBox;
