function createRestaurant(name) {
var restaurant = {
  name: name,
  menus: {
    breakfast: [],
    lunch: [],
    dinner: []
  } 
}
return restaurant
}
//[ 'breakfast', 'lunch', 'dinner' ]
// function addMenuItem(restaurant, item) {
//   let arr = Object.keys(restaurant.menus)  
//   for (var i = 0; i < arr.length; i++) {
//     if(item.type === arr[i] && restaurant.menus) {
// restaurant.menus.breakfast.push(item);
//       restaurant.menus.lunch.push(item)
//   }  
//   }
//  }

function addMenuItem(restaurant, item) {
  if(item.type === "breakfast" && restaurant.menus.breakfast.includes(item) === false) {
    restaurant.menus.breakfast.push(item);
} else if (item.type === "lunch" && restaurant.menus.lunch.includes(item) === false) {
  restaurant.menus.lunch.push(item);  
} else if (item.type === "dinner" && restaurant.menus.dinner.includes(item) === false) 
  restaurant.menus.dinner.push(item)
}


function removeMenuItem(restaurant, item, type) {
  var result = `No one is eating our ${item} - it has been removed from the ${type} menu!`;
  var error1 = `Sorry, we don't sell ${item}, try adding a new recipe!`;
  for (i = 0; i < restaurant.menus[type].length; i++) {
  if (restaurant.menus[type][i].name === item) {
    restaurant.menus[type].splice([i], 1);
  return result;
}  
} return error1;
  
}





module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}