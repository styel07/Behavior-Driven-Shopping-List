// how to test in Node
//var mocha = require('mocha');
//var chai = require('chai');
var should = chai.should();
var expect = chai.expect;

// write test specs

describe('ShoppingListItem', function() {

  var newList;

  beforeEach(function() {
    newList = new ShoppingListItem('Food', 'Grapes', false);
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have a item name', function() {
    expect(newList).to.have.property('name');
  });

  it('should have a description', function() {
    expect(newList).to.have.property('description');
  });

  it('should have "is_done" property', function() {
    expect(newList).to.have.property('is_done');
  });

  describe('.check', function() {
    it('should have a function "check"', function() {
      ShoppingListItem.prototype.check = function(is_done) {
        this.is_done = true;
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

  it('should have a function "render"', function() {
    ShoppingListItem.prototype.check = function(is_done) {
      expect(newList).to.be('<li class="completed_[is_done]"><span>[name]</span> <span>[description]</span></li>');
    };
  });

}); // End ShoppngListItem specs
