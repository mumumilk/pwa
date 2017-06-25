angular
  .module('RegisterController', [])
  .controller('RegisterController', RegisterController)

  RegisterController.$inject = ['NgMap', 'SpotsService', 'AuthService']

  function RegisterController(NgMap, SpotsService, AuthService) {
    var vm = this

    vm.position = []
    vm.register = register
    vm.nextStep = nextStep
    vm.success = success
    vm.error = error

    AuthService
      .retrieveUser()
      .then(user => vm.user = user)

    function nextStep() {
      let modal = document.querySelector('.register-modal')
      modal.classList.remove('hidden')

      NgMap
        .getMap()
        .then(map => {
          vm.position = {
            lat: map.getCenter().lat(),
            lng: map.getCenter().lng()
          }
        })
    }

    function register() {
      SpotsService.add({
        uid: vm.user.uid,
        position: vm.position,
        name: vm.name,
        modalities: vm.modalities,
        access: vm.access
      })
      .then(result => vm.success())
      .catch(result => vm.error(result))
    }

    function success() {
      vm.name = null
    }

    function error(messages) {
      console.error(messages)
    }
  }
