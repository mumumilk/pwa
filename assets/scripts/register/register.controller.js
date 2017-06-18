angular
  .module('RegisterController', [])
  .controller('RegisterController', RegisterController)

  RegisterController.$inject = ['NgMap']

  function RegisterController(NgMap) {
    var vm = this

    vm.position = []
    vm.register = register
    vm.nextStep = nextStep

    function nextStep() {
      let modal = document.querySelector('.register-modal')
      modal.classList.remove('hidden')
    }

    function register() {


      NgMap
        .getMap()
        .then(map => {
          vm.position = {
            lat: map.getCenter().lat(),
            lng: map.getCenter().lng()
          }
        })
    }
  }
