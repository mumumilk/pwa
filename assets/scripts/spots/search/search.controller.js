angular
  .module('SearchController', [])
  .controller('SearchController', SearchController)

  SearchController.$inject = ['SpotsService']

  function SearchController(SpotsService) {
    var vm = this

    vm.open = open

    SpotsService
      .retrieveAll()
      .then(spots => vm.spots = spots)

    function open(event, spot) {

    }
  }
