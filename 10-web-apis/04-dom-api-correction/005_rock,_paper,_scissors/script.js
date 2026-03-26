// 1.  **HTML with Tailwind CSS:**

//     *   A card at the top to display the score (User vs. Computer).
//     *   A card with three buttons for selecting Rock, Paper, or Scissors.
const choiceBtns = document.querySelectorAll('#selection button');
console.log(choiceBtns);
//     *   An empty card to display the result of each round.
const resultCard = document.querySelector('#result');
//     *   A button to play the round.
const playBtn = document.querySelector('#play-button');
// 2.  **JavaScript:**
let playerChoice = '';

//     *   Listen for a click on the play button.
playBtn.addEventListener('click', () => {
	//     *   Check if the user selected something; if not, alert the user.
	if (!playerChoice) return alert('Make a selection!');
	resultCard.textContent = `Player chose: ${playerChoice}`;
});

choiceBtns.forEach((btn) => {
	//     *   Mark the user selected button in some way.
	btn.addEventListener('click', (e) => {
		console.log(e.target.id);
		playerChoice = e.target.id;
		e.target.classList.add('border-black', 'border-2');

		for (const otherBtn of choiceBtns) {
			if (otherBtn.id !== e.target.id) {
				otherBtn.classList.remove('border-black', 'border-2');
			}
		}
	});
});

// TODO after CLI game is done
//     *   Randomly select Rock, Paper, or Scissors for the computer.
//     *   Compare the user's selection with the computer's selection.
//     *   Display the result in the output area.
//     *   Update the score and the DOM accordingly.
