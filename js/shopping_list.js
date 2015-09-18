var sli = new ShoppingListItem();
//class shoppingList

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
  if ( items !== null) {
    // build the string
    return '<ul>' + sli.render() + '</ul>';
  }
};