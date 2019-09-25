( function(){
  'use strict';

  // Define the component and controller we loaded in our test
  angular.module('components.profile', [])
  .controller('ProfileCmpController', function(resolvedUser, PokemonFactory) {
    var vm = this;
    vm.user =  resolvedUser;

    // Call our Pokemon service using our resolved user's Pokemon
    PokemonFactory.findByName(vm.user.pokemon.name)
    .then(function(result) {
      vm.user.pokemon.id = result.id;
      vm.user.pokemon.image = result.sprites.front_default;
      vm.user.pokemon.type = result.types[0].type.name;
    });
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/user/:id',
        templateUrl: 'components/profileCmp/profileCmp.html',
        controller: 'ProfileCmpController as pc',
        resolve: {
          // Add resolvedUser with a call to Users using $stateParams
          resolvedUser: function(Users, $stateParams) {
            return Users.findById($stateParams.id);
          }
        }
      });
  });
} )()