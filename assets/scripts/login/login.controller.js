angular
  .module('LoginController', [])
  .controller('LoginController', LoginController)

  LoginController.$inject = ['$state', '$firebaseAuth']

  function LoginController($state, $firebaseAuth) {
    var vm = this

    vm.provider = 'facebook'
    vm.doLogin = doLogin

    function doLogin() {
      $firebaseAuth()
        .$signInWithPopup(vm.provider)
        .then(user => {
          $state.go('menu.find')
        })
        .catch(error => console.error(error))
    }
  }
