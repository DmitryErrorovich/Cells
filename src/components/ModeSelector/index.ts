import { connect } from "react-redux";
import { fetchCellsInfoAction, selectedMode, modes } from "../../stores/cells";
import { createStructuredSelector } from "reselect";
import { ModeSelector } from "./ModeSelector";
import { setMode } from "../../stores/cells/reducer";

const mapState = createStructuredSelector({
  selectedMode,
  modes
});

const mapDispatch = {
  fetchCellsInfo: fetchCellsInfoAction,
  setMode: setMode,
};

export default connect(
  mapState,
  mapDispatch
)(ModeSelector);
