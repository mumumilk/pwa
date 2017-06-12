angular
  .module('LoginController', [])
  .controller('LoginController', LoginController)

  LoginController.$inject = ['$state']

  function LoginController($state) {
    var vm = this

    vm.doLogin = doLogin

    function doLogin() {
      $state.go('app.find')
    }
  }
