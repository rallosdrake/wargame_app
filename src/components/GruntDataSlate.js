import { grunt } from "../Utils/solider";
import React, { useState } from "react";

export default function GruntDataSlate() {
  const [gruntDataState, setGruntDataState] = useState({
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
        <th>{gruntDataState.movement}</th>
        <th>{gruntDataState.hitpoints}</th>
      </form>
      <span>
        <button onClick={handleClick}>Add Hitpoint!</button>
      </span>
    </div>
  );
}
