import React, { Component } from "react";

export class Solider extends Component {
  constructor(characteristics) {
    super();
    this.name = characteristics.name;
    this.hitPoints = characteristics.hitPoints;
    this.movement = characteristics.movement;
    this.ballisticSkill = characteristics.ballisticSkill;
    this.weaponSkill = characteristics.weaponSkill;
    this.armour = characteristics.armour;
    this.attacks = characteristics.attacks;
    this.specialAttack = characteristics.specialAttack;
  }
}
let grunt = new Solider({
  name: "Grunt",
  hitPoints: 2,
  movement: 6,
  ballisticSkill: 5,
  weaponSkill: 4,
  armour: 3,
  attacks: 2,
});
