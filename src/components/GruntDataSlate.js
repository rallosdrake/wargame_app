import { grunt } from "../Utils/solider";
import React from "react";

export default function GruntDataSlate() {
  return (
    <div>
      <form>
        <th>{grunt.name}</th>,<th>{grunt.armour}</th>,<th>{grunt.attacks}</th>
      </form>
    </div>
  );
}
