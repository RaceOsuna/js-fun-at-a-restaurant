function takeOrder(order, array) {
  if (array.length < 3)
  array.push(order);
}  
  
function refundOrder(num, array) {
  for(var i = 0; i < array.length; i++) {
 if (array[i].orderNumber === num) {
   return array.splice([i], 1);
      }
  }
}

function listItems(array) {
  var items = []
  for (var i = 0; i < array.length; i++) {
    items.push(array[i].item);
  }
  return items.join(', ')
  }

  function searchOrder(array, food) {
    order = false
    for (var i = 0; i < array.length; i++) {
    if (array[i].item === food) {
     order = true
      } 
    }
      return order
  }
  
  
  
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}