( function(){
  'use strict';

  angular.module('api.pokemon', [])
  .factory('PokemonFactory', function($http, $q){
    var API = 'http://pokeapi.co/api/v2/pokemon/';
    var Pokemon = {};

    Pokemon.findByName = (name) =>{
      let deferred = $q.defer();

      function success(res){
        deferred.resolve(res.data);
      }
      function failure(res){
        deferred.reject(res.data);
      }

      $http.get(API + name).then(success, failure);

      return deferred.promise;

      // return $http.get(API + name)
      // .then((res) => {
      //   return res.data;
      // })
      // .catch((res) => {
      //   return res.data;
      // });
    }
    return Pokemon;
  });
} )();