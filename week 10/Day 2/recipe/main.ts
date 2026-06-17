import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./templates/RecipeTemplate";

const form = document.getElementById("recipeEntryForm") as HTMLFormElement;
const titleInput = document.getElementById("recipeTitle") as HTMLInputElement;
const ingredientsInput = document.getElementById("ingredients") as HTMLTextAreaElement;
const instructionsInput = document.getElementById("instructions") as HTMLTextAreaElement;
const recipeContainer = document.getElementById("recipeContainer") as HTMLElement;
const clearButton = document.getElementById("clearRecipesButton") as HTMLButtonElement;

const collection = new RecipeCollection();
const template = new RecipeTemplate(recipeContainer, collection);

function initializeApp(): void {
  template.renderRecipes();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const ingredients = ingredientsInput.value
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
  const instructions = instructionsInput.value.trim();

  if (!title || ingredients.length === 0 || !instructions) return;

  collection.addRecipe(title, ingredients, instructions);
  form.reset();
  template.renderRecipes();
});

clearButton.addEventListener("click", () => {
  collection.clearRecipes();
  template.renderRecipes();
});

initializeApp();