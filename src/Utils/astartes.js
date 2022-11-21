import { Solider } from "./soliderConstructor";
import { knowNoFear } from "./knowNoFear";
export let Astartes = new Solider({
  name: "Astartes",
  hitPoints: 5,
  movement: 3,
  ballisticSkill: 2,
  weaponSkill: 2,
  armour: 5,
  attacks: 1,
  specialAbilites: knowNoFear(),
});
