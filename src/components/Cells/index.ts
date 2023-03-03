
import { connect } from "react-redux";
import {  selectedMode, cells } from "../../stores/cells";
import { createStructuredSelector } from "reselect";
import { setHovered } from "../../stores/cells/reducer";
import { Cells } from "./Cells";

const mapState = createStructuredSelector({
  selectedMode,
  cells
});

const mapDispatch = {
  setHovered,
};

export default connect(
  mapState,
  mapDispatch
)(Cells);
