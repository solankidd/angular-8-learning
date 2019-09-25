(function() {
  'use strict';
  angular.module('meetIrl', [
    'ui.router',
    'api.users',
    'api.pokemon',
    'components.users'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();