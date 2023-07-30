const API_KEY ="95a741b5da4741709e23a13fffa0413f";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        
        



        recipeItemEl.appendChild(recipeImageEl);
        
        recipeListEl.appendChild(recipeItemEl);
    });
}

async function getRecipes() {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();
    return data.recipes;
};


async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
};

init();