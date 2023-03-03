import { connect } from "react-redux";
import { fetchCellsInfoAction, loading, modes, selectedMode } from "../../stores/cells";
import { createStructuredSelector } from "reselect";
import { ModeSelector } from "./ModeSelector";
import { setMode } from "../../stores/cells/reducer";

const mapState = createStructuredSelector({
  loading,
  modes,
  selectedMode
});

const mapDispatch = {
  fetchCellsInfo: fetchCellsInfoAction,
  setMode: setMode,
};

export default connect(
  mapState,
  mapDispatch
)(ModeSelector);
