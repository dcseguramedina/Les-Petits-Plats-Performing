import { allRecipes, allIngredients, allAppliances, allUstensils } from '../utils/lists.utils.js'
import displaySelectOptions from './selects.js'
import displayRecipeCards from './cards.js'

// DISPLAY HOME PAGE //
function displayHomePage() {
  //Display select options
  displaySelectOptions(allIngredients, 'ingredients')
  displaySelectOptions(allAppliances, 'appliance')
  displaySelectOptions(allUstensils, 'ustensils')

  // Display recipe cards
  displayRecipeCards(allRecipes)
}

displayHomePage()
