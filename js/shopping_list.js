//var sli = new ShoppingListItem();

function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(itemToList) {
  if (itemToList instanceof ShoppingListItem) {
    items.push(itemToList);
  }
  throw new Error('Not an item!');
};

ShoppingList.prototype.removeItem = function(itemToList) {
  var index = items.indexOf(itemToList);

  if (index > -1) {
    items.splice(index, 1);
  }
  throw new Error('item is not in list');
};

ShoppingList.prototype.render = function() {
  var fullList = [];

  for (var i = 0; i < fullList.length; i++){
    fullList.push(item[i]);
  }

  // build the string
  return '<ul>' + fullList + '</ul>';
};