export function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

export function log(message) {
  console.log(`[GAME] ${message}`);
}
