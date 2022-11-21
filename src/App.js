import "./App.css";
import { grunt } from "./Utils/solider";
import { Astartes } from "./Utils/astartes";
import { shoot } from "./Utils/shoot";
import GruntDataSlate from "./components/GruntDataSlate";
function App() {
  console.log(grunt);
  console.log(Astartes);
  shoot();
  return (
    <div className="App">
      Hello World
      <div>
        <GruntDataSlate />
      </div>
    </div>
  );
}

export default App;
