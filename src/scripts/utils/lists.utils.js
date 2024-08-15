import recipes from '../../data/recipes.js'

const allRecipes = recipes.recipes;

// Create sets for quick lookup
const allNames = new Set(allRecipes.map((recipe) => recipe.name.toLowerCase()));
const allDescriptions = new Set(allRecipes.map((recipe) => recipe.description.toLowerCase()));
const allIngredients = new Set(allRecipes.flatMap((recipe) => recipe.ingredients.map((i) => i.ingredient.toLowerCase())));
const allAppliances = new Set(allRecipes.map((recipe) => recipe.appliance.toLowerCase()));
const allUstensils = new Set(allRecipes.flatMap((recipe) => recipe.ustensils.map((u) => u.toLowerCase())));

export {
    allRecipes,
    allNames,
    allDescriptions,
    allIngredients,
    allAppliances,
    allUstensils
};
