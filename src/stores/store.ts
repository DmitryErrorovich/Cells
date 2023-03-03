import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { cellsReducer } from "./cells/reducer";

const rootReducer = combineReducers({
  cells: cellsReducer.reducer
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
