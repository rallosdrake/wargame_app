import { Astartes } from "../Utils/astartes";
import { grunt } from "../Utils/solider";
import { rollDice6 } from "./diceRoll";
import { knowNoFear } from "./knowNoFear";
export function shoot() {
  let astartesRoll = rollDice6();
  let gruntRoll = rollDice6();
  if ((astartesRoll = 1)) {
    knowNoFear();
  }
  if (astartesRoll > Astartes.ballisticSkill) {
    console.log("Astartes hits");
  }
}
