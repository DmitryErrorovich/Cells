import { Cell } from "../../stores/cells/reducer";
import "./styles.scss";

interface IInfo {
  cells: Cell[];
}

export const Info = ({ cells }: IInfo) => {
  return (
    <div className="info">
      {cells && (
        <div className="info_scroll">
          {cells.map(item => {
            return item.hovered ? (
              <div key={`Info-item-${item.id}`} className="info_item">{item.info}</div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};
