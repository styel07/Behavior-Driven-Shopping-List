function ShoppingListItem(name, description) {
  this.name = name;
  this.description = description;
  this.is_done = false;

  var toHtml = '<ul> \
  <li class="completed_false"> \
    <span>Avocado</span> \
    <span>Must be eaten immediately.</span> \
  </li> \
<ul>';
}

ShoppingListItem.prototype.check = function() {
  return this.is_done = true;
};

ShoppingListItem.prototype.uncheck = function() {
  return this.is_done = false;
};

ShoppingListItem.prototype.render = function() {
  return toHtml;
};

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

};