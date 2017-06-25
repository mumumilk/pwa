angular
  .module('SpotsService', [])
  .service('SpotsService', SpotsService)

  SpotsService.$inject = ['$firebaseArray']

  function SpotsService($firebaseArray) {
    var vm = this

    vm.ref = firebase.database().ref().child('spots')
    vm.spots = $firebaseArray(vm.ref)

    vm.add = add
    vm.retrieveAll = retrieveAll
    vm.retrieveByUser = retrieveByUser

    /**
     * Adiciona um pico no database do firebase.
     * @param {*} spot
     */
    function add(spot) {
      return vm.spots.$add(spot)
    }

    /**
     * Obtem todos os picos.
     */
    function retrieveAll() {
      return vm.spots.$loaded()
    }

    /**
     * Obtem apenas os picos do usuário.
     * @param {*} user
     */
    function retrieveByUser(user) {
      console.log(user)
    }
  }
