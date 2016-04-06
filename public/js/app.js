var app = angular.module('app', []);
app.controller('ProductController', function() {
  this.name
})
app.controller('TabController', function() {
  this.tab = 'home';
  this.isActive = function(someTab) {
    return this.tab == someTab;
  }
  this.setTab = function(newTab) {
    this.tab = newTab
  }
  this.clearName = function () {
    this.name = '';
  }
})
