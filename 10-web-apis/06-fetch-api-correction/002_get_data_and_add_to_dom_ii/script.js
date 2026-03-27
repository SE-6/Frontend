// *   **Fetch Data:** Write JavaScript to fetch data for the first 150 Pokémon from the Pokémon API. [More info can be found here](https://pokeapi.co)
// *   **Display Data**: Populate the DOM with the fetched Pokémon data as styled cards. Show us the name, image and type. The grid is already set up in the HTML file.

// **Pokémon API:** A free API that provides information about Pokémon.
const pokemonContainer = document.querySelector('#pokemon-container');

const getPokemon = async (id) => {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	// console.log(res);
	if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
	const data = await res.json();

	console.log(data);
	return data;
};

const renderPokemonCard = (pokemon, container) => {
	const pokemonCard = document.createElement('div');
	pokemonCard.className =
		'bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center';

	const pokemonImage = document.createElement('img');
	pokemonImage.src = pokemon.sprites.front_default;
	pokemonImage.alt = pokemon.name;
	pokemonImage.className = 'mb-4';

	const pokemonName = document.createElement('h2');
	pokemonName.textContent =
		pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
	pokemonName.className = 'text-xl font-bold mb-2';

	const pokemonInfo = document.createElement('p');
	pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}`;
	pokemonInfo.className = 'text-gray-600';

	pokemonCard.appendChild(pokemonImage);
	pokemonCard.appendChild(pokemonName);
	pokemonCard.appendChild(pokemonInfo);

	container.appendChild(pokemonCard);
};

const fetchAndRenderPokemon = async () => {
	try {
		for (let i = 1; i <= 151; i++) {
			const currPokemon = await getPokemon(i);

			console.log(currPokemon);
			renderPokemonCard(currPokemon, pokemonContainer);
		}
	} catch (error) {
		console.error(error);
	}
};

fetchAndRenderPokemon();
