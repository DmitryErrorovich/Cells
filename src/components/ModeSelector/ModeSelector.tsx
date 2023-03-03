import { useEffect, useState } from "react";

import "./styles.scss";

type Mode = {
  name: string;
  field: number;
}

interface IModeSelector {
  modes: Mode[];
  fetchCellsInfo: () => void;
  setMode: (args: string) => void;
}

export const ModeSelector = ({ fetchCellsInfo, setMode, modes}: IModeSelector) => {
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
