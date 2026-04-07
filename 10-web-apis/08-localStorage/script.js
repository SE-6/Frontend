// localStorage.setItem("playerName", "Conan");

// const name = localStorage.getItem("playerName");
// console.log(name);

// localStorage.setItem("theme", "dark");
// localStorage.setItem("theme2", "dark");
// localStorage.setItem("theme3", "dark");
// const savedTheme = localStorage.getItem("theme");

// // localStorage.removeItem("theme");
// localStorage.clear();

// if (savedTheme) {
//   console.log(`Welcome back! Loading your ${savedTheme} theme.`);
// } else {
//   console.log("No saved preferences, using default values.");
// }

// console.log(localStorage.length);

// localStorage.setItem("lives", 3);

// const lives = localStorage.getItem("lives");

// console.log(lives - 1); // coercion
// console.log(Number(lives) + 1); // concatenation

// localStorage.setItem("isAlive", true);
// console.log(localStorage.getItem("isAlive"));
// console.log(localStorage.getItem("isAlive") === true);

// const saved = { name: "Conan", level: 10, class: "Warrior" };
// // localStorage.setItem("player", player);
// localStorage.setItem("player", JSON.stringify(saved));

// const player = localStorage.getItem("player");
// const playerObject = JSON.parse(player);
// playerObject.level = 100;
// console.log(playerObject.level);
// localStorage.setItem("player", JSON.stringify(playerObject));

// const inventory = ["sword", "potion"];
// localStorage.setItem("inventory", JSON.stringify(inventory));
// // localStorage.setItem("inventory", inventory);

// // defensive loading
// function loadPlayer() {
//   const saved = localStorage.getItem("player");
//   if (saved) {
//     return JSON.parse(saved);
//   }
//   return { name: "New player", level: 1, class: "None" };
// }
// localStorage.clear();
// console.log(loadPlayer());

const countDisplay = document.getElementById("count");
const hitBtn = document.getElementById("hit-btn");
const resetBtn = document.getElementById("reset-btn");

let count = Number(localStorage.getItem("hitCount")) || 0;
countDisplay.textContent = count;

hitBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
  localStorage.setItem("hitCount", count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
  localStorage.removeItem("hitCount");
});

sessionStorage.setItem("temporaryNote", "Don't forget to save the game!");

// ES5
function logIt(something) {
  console.log(something);
}

// ES6
// let;
// const
const logIt2 = (something) => {
  console.log(something);
};
