import { connect } from "react-redux";
import { cells } from "../../stores/cells";
import { createStructuredSelector } from "reselect";
import { Info } from "./Info";

const mapState = createStructuredSelector({
  cells
});

export default connect(mapState)(Info);
