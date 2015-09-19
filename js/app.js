var list = new ShoppingList();


var btn = document.querySelector('#add_shopping_list_item_button');

function add_to_shopping_list() {
  var title = document.querySelector('#title').value;
  var description = document.querySelector('#description').value;

  var item = new ShoppingListItem(title, description);
  list.addItem(item);

  document.getElementById('content').innerHTML = list.render();
}

btn.addEventListener('click', add_to_shopping_list);



// //Bind event handler to all links on click
// var submitLinkCollection = document.querySelectorAll('.submit');

// [].forEach.call(submitLinkCollection, function(item) {
//   item.addEventListener('click', submitHandler);
// });

// function submitHandler(evt) {
//   //get id of element that event originated from
//   var id = evt.target.id.replace('submit_', '');
//   console.log(id);

//   //get element of user input
//   var ageInput = document.querySelector('#age');
//   console.log(ageInput.value);

// }

// //Bind event handler to multiple element on hover
// var submit = document.querySelectorAll('.submit');
// console.log(submit);
// for (var i = 0; i < submit.length; i++) {
//   var childElement = submit[i];
//   childElement.addEventListener('click', addHover, false);
// }
// function addHover() {
//   this.addEventListener('mouseover', function(evt) {
//     var value = evt.target.name;
//     console.log(evt);
//   });

//   this.addEventListener('mouseout', function(evt) {
//      var value = evt.target.value;
//     console.log('mouse out');
//   });
// }

var stuff = document.querySelector('#stuff');
stuff.addEventListener('click', function(evt) {
  stuff.className += ' classStuff';
});

