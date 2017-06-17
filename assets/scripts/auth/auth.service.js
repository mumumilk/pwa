angular
  .module('AuthService', [])
  .service('AuthService', AuthService)

  AuthService.$inject = ['$firebaseAuth']

  function AuthService($firebaseAuth) {
    vm = this

    vm.firebaseAuth = $firebaseAuth()
    vm.isAuthenticated = isAuthenticated

    function isAuthenticated() {
      return vm.firebaseAuth.$requireSignIn()
    }
  }
