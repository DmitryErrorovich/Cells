import { createSlice } from "@reduxjs/toolkit";
import { fetchCellsInfoAction } from "./actions";

export type Cell = {
  id: number;
  info: string;
  hovered: boolean;
};

export interface IInitialState {
  modes: [];
  selectedMode: { name: string; field: number } | null;
  cells: Cell[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

export const cellsReducer = createSlice({
  name: "cells",
  initialState: {
    modes: [],
    selectedMode: null,
    cells: [],
    loading: "idle"
  } as IInitialState,
  reducers: {
    setMode: (state, action) => {
      const selectedMode =
        !!state.modes && Array.isArray(state.modes)
          ? state.modes.find(
              (item: { name: string; field: number }) =>
                item.name === action.payload
            ) || null
          : null;

      return {
        ...state,
        selectedMode,
        cells: !!selectedMode
          ? new Array(selectedMode.field).fill("").map((_, index) => {
              const infoId = index + 1;
              return {
                id: index,
                info: `rows ${Math.ceil(infoId / 5)} col ${5 -
                  (5 * Math.ceil(infoId / 5) - infoId)}`,
                hovered: false
              };
            })
          : []
      };
    },
    setHovered: (state, action) => {
      const cells = state.cells.map(cell => ({
        ...cell,
        hovered: action.payload === cell.id ? !cell.hovered : cell.hovered
      }));
      return {
        ...state,
        cells
      };
    }
  },
  extraReducers: builder => {
    builder.addCase(
      fetchCellsInfoAction.fulfilled,
      (state: any, action: any) => {
        return {
          ...state,
          modes: action.payload,
          loading: "succeeded"
        };
      }
    );
    builder.addCase(
      fetchCellsInfoAction.pending,
      (state: any, action: any) => ({
        ...state,
        loading: "pending"
      })
    );
    builder.addCase(
      fetchCellsInfoAction.rejected,
      (state: any, action: any) => ({
        ...state,
        ...action.payload,
        loading: "failed"
      })
    );
  }
});

export const { setHovered, setMode } = cellsReducer.actions;
export default cellsReducer.reducer;
