// how to test in Node
//var mocha = require('mocha');
//var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

// write test specs

describe('ShoppingListItem', function() {

  var newListItem;

  beforeEach(function() {
    newListItem = new ShoppingListItem('Food', 'Grapes');
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a item name', function() {
    expect(newListItem).to.have.property('name');
  });

  it('should have a description', function() {
    expect(newListItem).to.have.property('description');
  });

  it('should have "is_done" property', function() {
    expect(newListItem).to.have.property('is_done');
  });

  describe('.check', function() {
   var donut = new ShoppingList();
    it('should have a function "check"', function() {
      ShoppingListItem.prototype.check = function(is_done) {
        expect(donut).addItem().to.be.true;
      };
    });
  });

  describe('.uncheck', function() {
    it('should have a function "uncheck"', function() {
      ShoppingListItem.prototype.check = function(is_done) {
        this.is_done = false;
      };
    });
  });

  describe('.render', function() {
    it('should have a function "render"', function() {
      ShoppingListItem.prototype.check = function(is_done) {
        expect(newListItem).to.be('<li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>');
      };
    });
  });

}); // End ShoppngListItem specs

describe('ShoppingList', function() {

  var newList;

  beforeEach(function() {
    newList = new ShoppingList([1,2,3]);
  });

  // it('should have function', function() {
  //   expect(ShoppingList).to.be.a('function');
  // });

  it('should have function', function() {
    expect(ShoppingList).to.be.a('function');
  });

  it('should have a property name items', function() {
    newList.should.have.property('items');
  });

  it('should have a constructor that initializes items as empty []', function() {
    expect(newList).to.be.deep.equal([]);
  });

  describe('.addItem', function() {

    var newList;

    it('should be a prototype', function() {
      expect(newList).should.be.a.instanceof(ShoppingList);
    });
  }); // end of .addItem

  describe('removeItem', function() {

    var newList;
  });

  describe('render', function() {

    var newList;
  });

});

