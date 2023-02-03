function nameMenuItem(food) {
var menuItemName = `Delicious ${food}`
  return menuItemName
}

function createMenuItem(menuItemName, num, mealType) {
  menuItem = {
    name: menuItemName,
    price: num,
    type: mealType
  }
  return menuItem
}

function addIngredients(addFood, ingredients) {
if (!ingredients.includes(addFood)) {
  ingredients.push(addFood)
}
}

function formatPrice(initialPrice) {
var formattedPrice = (`$${initialPrice}`);
return formattedPrice;
 }

function decreasePrice() {
var decreasedPrice = (menuItem.price * 0.90)
return decreasedPrice
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


