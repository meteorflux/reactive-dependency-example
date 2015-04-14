// Dependency Injection
var _oneStore, _twoStore, _threeStore;
Dependency.autorun(function(){
  _oneStore   = Dependency.get('OneStore');
  _twoStore   = Dependency.get('TwoStore');
  _threeStore = Dependency.get('ThreeStore');
});

// Helpers
Template.someView.helpers({
  oneStore_1: function(){
    return _oneStore.addOne(1);
  },
  oneStore_2: function(){
    return _oneStore.addTwoToThree();
  },
  twoStore_1: function(){
    return _twoStore.addOneToTwo();
  },
  threeStore_1: function(){
    return _threeStore.addThreeToFive();
  }
});

// Events
Template.someView.events({
  'click h4': function(){
    console.log("Executing _threeStore.addThreeToFive(): ", _threeStore.addThreeToFive());
  }
});
