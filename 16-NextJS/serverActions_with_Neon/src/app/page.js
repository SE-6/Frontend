import { deleteRecipe, getRecipes } from './actions/recipe';

export default async function Home() {
  const recipes = await getRecipes();
  // console.log(recipes);

  return (
    <>
      <h2>All Recipes</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} width={100} />
          <p>{recipe.category}</p>
          <p>Time: {recipe.duration} mn</p>
          <p>{recipe.id}</p>

          <form action={deleteRecipe.bind(null, recipe.id)}>
            <button type='submit'>Delete</button>
          </form>
        </div>
      ))}
    </>
  );
}
