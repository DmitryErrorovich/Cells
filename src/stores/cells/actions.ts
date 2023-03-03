import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./cellsApi";

export const fetchCellsInfoAction = createAsyncThunk(
  "FETCH_CELLS_INFO",
  async () => {
    const response = await api.get("");
    return response.data;
  }
);
