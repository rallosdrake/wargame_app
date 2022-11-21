function rollDice(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

const rollDice4 = () => rollDice(1, 4);
const rollDice6 = () => rollDice(1, 6);
const rollDice8 = () => rollDice(1, 8);
const rollDice12 = () => rollDice(1, 12);
const rollDice20 = () => rollDice(1, 20);
const rollSomeUltimateDice = () => rollDice(42, 42);

export {
  rollDice4,
  rollDice6,
  rollDice8,
  rollDice12,
  rollDice20,
  rollSomeUltimateDice,
};
