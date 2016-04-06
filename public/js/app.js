require(__dirname + '/../../bower_components/angular/angular.js')

var app = angular.module('app', []);
app.controller('ProductController', function() {
  this.name;
})
app.controller('TabController', function() {
  this.tab = 'home';
  this.name = 'santa claus';
  this.isActive = function(someTab) {
    return this.tab == someTab;
  }
  this.setTab = function(newTab) {
    this.tab = newTab
  }
  this.clearName = function () {
    this.name = null;
  }
})
