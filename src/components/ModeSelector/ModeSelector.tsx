import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
// import { fetchSquaresData, setPickData } from "../../BLL/Squares/squares.slice";
// import "antd/dist/antd.css";
import "./styles.scss";

type Mode = {
  name: string;
  field: number;
}

interface IModeSelector {
  modes: Mode[];
  loading: "idle" | "pending" | "succeeded" | "failed";
  fetchCellsInfo: () => void;
  setMode: any;
  selectedMode: Mode;
}

export const ModeSelector = ({loading, fetchCellsInfo, setMode, selectedMode, modes}: IModeSelector) => {
  const [selected, setSelected] = useState()

  useEffect(() => {
    fetchCellsInfo()
  }, [fetchCellsInfo]);

  const handleSetMode = () => setMode(selected)

    const handleChange = (e: any) => setSelected(e.target.value)

  return (
    <div className="modeSelector">
      <select
        style={{ width: 120 }}
        onChange={handleChange}
      >
        {!!modes && modes.map((item) => (
          <option key={`Option-${item.name}-value-${item.field}`} value={item.name}>{item.name}</option>
        ))}
      </select>
      <button
        className="modeSelector_button"
        onClick={() => handleSetMode()}
      >
        Start
      </button>
    </div>
  );
}
