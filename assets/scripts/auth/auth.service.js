angular
  .module('AuthService', [])
  .service('AuthService', AuthService)

  AuthService.$inject = ['$firebaseAuth']

  function AuthService($firebaseAuth) {
    vm = this

    vm.firebaseAuth = $firebaseAuth()

    vm.isAuthenticated = isAuthenticated
    vm.retrieveUser = retrieveUser

    function isAuthenticated() {
      return vm.firebaseAuth.$requireSignIn()
    }

    /**
     * Recupera informações do usuário no provider.
     */
    function retrieveUser() {
      return new Promise(resolve => {
        vm.firebaseAuth
          .$onAuthStateChanged(user => resolve(user))
      })
    }
  }
