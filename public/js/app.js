var app = angular.module('myApp', ["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "views/home.html"
  })
  .when("/cheats", {
    title : 'Cheats',
    templateUrl : "views/cheats.html"
  })  
  .when("/maps", {
    templateUrl : "views/maps.html"
  })
});
