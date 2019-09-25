(function() {
  angular.module('components.users', [])
  .controller('UsersCmpController', function(Users) {
    var vm = this;
    vm.users = Users.all();
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'components/usersCmp/usersCmp.html',
        controller: 'UsersCmpController as uc'
      });
  });
})();