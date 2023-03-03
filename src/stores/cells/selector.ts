import { createSelector } from "reselect";

const baseState = (state: any) => state.cells || {};

export const loading = createSelector(
  baseState,
  state => state.loading
);

export const modes = createSelector(
  baseState,
  state => state.modes
);

export const selectedMode = createSelector(
  baseState,
  state => state.selectedMode
);

export const cells = createSelector(
  baseState,
  state => state.cells
);

