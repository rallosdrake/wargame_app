import "./App.css";
import React, { useState } from "react";
import { Chessboard } from "react-chessboard";
import { grunt } from "./Utils/solider";
import { Astartes } from "./Utils/astartes";
import { shoot } from "./Utils/shoot";
import GruntDataSlate from "./components/GruntDataSlate";

function App() {
  const [showBoard, setShowBoard] = useState(false);

  const handleClick = () => {
    setShowBoard(!showBoard);
  };

  console.log(grunt);
  console.log(Astartes);
  shoot();
  return (
    <div className="App">
      Hello World
      <div>
        <GruntDataSlate />
        <div>
          <button onClick={handleClick}> Show Board</button>
          {showBoard ? <Chessboard /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
