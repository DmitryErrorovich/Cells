import "./App.scss";
import { Provider } from "react-redux";

import Cells from "./components/Cells";
import ModeSelector from "./components/ModeSelector";
import { store } from "./stores/store";
import Info from "./components/Info";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="App_game">
        <ModeSelector />
        <Cells />
      </div>
      <Info />
      </div>
    </Provider>
  );
}

export default App;
