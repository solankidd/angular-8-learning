/**
 * DATA
 */
var userList_DATA = [
  {
    id: '1',
    name: 'Jane',
    role: 'Designer',
    location: 'New York',
    twitter: 'gijane',
    pokemon: { name: 'blastoise' }
  },
  {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob',
    pokemon: { name: 'growlithe' }
  },
  {
    id: '3',
    name: 'Jim',
    role: 'Developer',
    location: 'Chicago',
    twitter: 'jimbo',
    pokemon: { name: 'hitmonchan' }
  },
  {
    id: '4',
    name: 'Bill',
    role: 'Designer',
    location: 'LA',
    twitter: 'dabill',
    pokemon: { name: 'barney' }
  }
];


(function() {
  'use strict';
  // Creating the module and factory we referenced in the beforeEach blocks in our test file
  angular.module('api.users', [])
  .factory('Users', function() {
    var Users = {};
    var userList = userList_DATA;

    Users.all = () => {
      return userList;
    }

    // return single user
    Users.findById = (id) => {
      return userList.find( function(user){
        return user.id == id;
      } )
    }
    return Users;
  });
})();