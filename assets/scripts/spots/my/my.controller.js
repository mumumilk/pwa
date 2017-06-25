angular
  .module('MyController', [])
  .controller('MyController', MyController)

  MyController.$inject = ['SpotsService', 'AuthService']

  function MyController(SpotsService, AuthService) {
    var vm = this

    vm.spots = []
    vm.user = AuthService.retrieveUserOfSession()

    SpotsService
      .retrieveByUser(vm.user)
      .then(spots => vm.spots = spots)
  }
