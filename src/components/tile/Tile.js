import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {Object.values(props.description)
        .map((tileData, index) =>
          <p key={index} className="tile">{tileData}</p>)}
    </div>
  );
};
