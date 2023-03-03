import React from "react";
import { Cell } from "../../stores/cells/reducer";

import "./styles.scss";

interface ICells {
  selectedMode: { name: string; field: number };
  setHovered: (arg: number) => void;
  cells: Cell[];
}

export const Cells = ({ selectedMode, setHovered, cells }: ICells) => {
  const handleHovered = (index: number) => () => {
    setHovered(index);
  };

  if (!selectedMode) return null;
  return (
    <div className="cells">
      {cells.map((item) => {
        return (
          <div
            onMouseEnter={handleHovered(item.id)}
            key={`Cell-${item.id}`}
            className={`cells_single${item.hovered ? "___hovered" : ""}`}
          ></div>
        );
      })}
    </div>
  );
};
