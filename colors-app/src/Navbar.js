import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";
export default class Navbar extends Component {
  state = {
    format: "hex",
    open: false,
  };
  clickSelectHandler = (e) => {
    this.setState(
      {
        format: e.target.value,
        open: true,
      },
      () => this.props.selectHandler(this.state.format) //to wait for the new format or value
    );
  };
  onCloseSnack = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { level, sliderChangeHandler } = this.props;
    const { format, open } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <Link to="#">colorpicker</Link>{" "}
        </div>
        <div className="slider-container">
          <span className="slider-levels"> levels:{level}</span>
          <div className="slider">
            <Slider
              onAfterChange={sliderChangeHandler}
              defaultValue={level}
              min={100}
              max={900}
              step={100}
            />
          </div>
        </div>
        <div className="select-format">
          <Select value={format} onChange={this.clickSelectHandler}>
            <MenuItem value="hex">Hex - #fffff</MenuItem>
            <MenuItem value="rgb">Rgb - rgb(225, 225, 225)</MenuItem>
            <MenuItem value="rgba">Rgba - rgba(225, 225, 225, 1)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={2000}
          onClose={this.onCloseSnack}
          message={`Format Changed to ${format.toUpperCase()} `}
          aria-label="close"
          action={
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={this.onCloseSnack}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          }
        />
      </nav>
    );
  }
}
