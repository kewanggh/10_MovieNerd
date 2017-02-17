(function() {
    'use strict';

    var app = angular.module('MovieNerd', ['ui.router', 'toastr']);

    app.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/main");

      $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "app/partials/main.html",
        controller: "MovieController",
        controllerAs:"vm"
      })
      .state('main.results', {
        url: "/results",
        templateUrl: "app/partials/results.html",
         controller: "MovieController"
      })
      .state('main.details', {
        url: "/details/:ID",
        templateUrl: "app/partials/details.html",
        controller: "MovieDetailController",
        controllerAs: "vm"
      });



    });
})();
