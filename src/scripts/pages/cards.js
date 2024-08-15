import Recipe from '../models/Recipe.js'

export default function displayRecipeCards(recipes) {
  recipes.forEach((item) => {
    const recipe = new Recipe(
      item.id,
      item.image,
      item.name,
      item.servings,
      item.ingredients,
      item.time,
      item.description,
      item.appliance,
      item.ustensils
    )
    recipe.displayCard()
  })
}
