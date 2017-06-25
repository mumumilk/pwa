angular
  .module('AuthService', [])
  .service('AuthService', AuthService)

  AuthService.$inject = ['$firebaseAuth']

  function AuthService($firebaseAuth) {
    vm = this

    vm.firebaseAuth = $firebaseAuth()

    vm.isAuthenticated = isAuthenticated
    vm.retrieveUser = retrieveUser
    vm.retrieveUserOfSession = retrieveUserOfSession

    /**
     * Verifica se o usuário está autenticado na view atual.
     */
    function isAuthenticated() {
      return vm.firebaseAuth.$requireSignIn()
    }

    /**
     * Recupera informações do usuário no firebase.
     */
    function retrieveUser() {
      return new Promise(resolve => {
        vm.firebaseAuth
          .$onAuthStateChanged(user => resolve(user))
      })
    }

    function retrieveUserOfSession() {
      let user = localStorage.getItem('firebase:authUser:AIzaSyAaSHbdruM1DnyZ1k4QLAlOs_Ho-rAVxUc:[DEFAULT]')
      return JSON.parse(user)
    }
  }
