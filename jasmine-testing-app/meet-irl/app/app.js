(function() {
  'use strict';

  angular.module('meetIrl', [
    'ui.router',
    'api.users',
    'api.pokemon',
    'components.users',
    'components.profile',
    'components.missingno'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
  });
})();