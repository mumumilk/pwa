angular
  .module('FindController', [])
  .controller('FindController', FindController)

  FindController.$inject = ['SpotsService']

  function FindController(SpotsService) {
    var vm = this

    vm.open = open

    SpotsService
      .retrieveAll()
      .then(spots => vm.spots = spots)

    function open(event, spot) {

    }
  }
