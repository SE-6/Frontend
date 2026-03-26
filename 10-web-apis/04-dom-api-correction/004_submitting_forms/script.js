// *   Add an event listener to handle form submission.
const contactForm = document.querySelector('#contact-form');
const output = document.querySelector('#output');

contactForm.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('Form submitted');
	const nameInput = contactForm.querySelector('#name');
	const emailInput = contactForm.querySelector('#email');
	const messageTextArea = contactForm.querySelector('#message');
	// *   Validate that all fields are not empty.

	try {
		if (
			!nameInput.value.trim()
			/*nameInput.value === '' */
		) {
			throw new Error('Name is required');
		}
		if (!emailInput.value.trim()) {
			throw new Error('Email is required');
		}
		if (!messageTextArea.value.trim()) {
			throw new Error('Message is required');
		}
		//     *   If validation passes, output the form data to the
		// console and display it in the `p` element as a list (`ul`)
		console.log(nameInput.value, emailInput.value, messageTextArea.value);
		output.innerHTML = `
    <ul>
      <li>Name: ${nameInput.value}</li>
      <li>Email: ${emailInput.value}</li>
      <li>Message: ${messageTextArea.value}</li>
    </ul>`;
		output.classList.add('bg-green-500');
		output.classList.remove('bg-red-500');

		//     *   Clear the form fields
		e.target.reset();
	} catch (error) {
		//     *   If not output an error message in the `p` element,
		// style it as an error. Maybe something red and flashy?
		//     *   [Make sure to toggle the error and success styles](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)!
		console.error(error.message);
		output.textContent = error.message;
		output.classList.add('bg-red-500');
		output.classList.remove('bg-green-500');
	}
});

//  In a real-life scenario, we would use the yet another Web API to send the data from the form over the network to store the data, sign up an user, create an order, process a payment and a very long et cetera, that other Web API is called **Fetch API**. We will talk about it very soon!
