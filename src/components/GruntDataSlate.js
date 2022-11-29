import { grunt } from "../Utils/solider";
import React, { useState } from "react";

export default function GruntDataSlate() {
  const [gruntDataState, setGruntDataState] = useState({
    name: "Steve",
    movement: 5,
    hitpoints: 1,
  });

  const handleClick = () => {
    setGruntDataState((prevValues) => ({
      ...prevValues,
      hitpoints: prevValues.hitpoints + 1,
    }));
  };
  return (
    <div>
      <form>
        <h3>{gruntDataState.name}</h3>
        <th>
          "Movement"
          <td>{gruntDataState.movement}</td>
        </th>
        <th>
          Hitpoints <td>{gruntDataState.hitpoints}</td>
        </th>
      </form>
      <span>
        <button onClick={handleClick}>Add Hitpoint!</button>
      </span>
    </div>
  );
}
