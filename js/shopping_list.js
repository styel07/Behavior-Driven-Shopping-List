function ShoppingList() {
  this.items = [];
}

ShoppingList.prototype.addItem = function(itemToList) {
  //var title = document.querySelector('#title').value;
  this.items.push(itemToList);
  //throw new Error('Not an item!');
};

ShoppingList.prototype.removeItem = function(itemToList) {
  var index = items.indexOf(itemToList);

  if (index > -1) {
    items.splice(index, 1);
  }
  throw new Error('item is not in list');
};

ShoppingList.prototype.render = function() {
  var str = '';
  for (var i = 0; i < this.items.length; i++){
    str += this.items[i].render();
  }
  // build the string
  return '<ul>' + str + '</ul>';
};