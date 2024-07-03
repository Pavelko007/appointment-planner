import React from "react";
import { Tile } from "../tile/Tile";  

export const TileList = ({data}) => {
  return (
    <div>
      {data.map((item, index) => {
        const { name, ...rest } = item;
        return <Tile name={name} description={rest} key={index} />
      })
      }
    </div>
  );
};
