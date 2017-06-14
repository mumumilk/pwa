angular
  .module('MenuController', [])
  .controller('MenuController', MenuController)

  function MenuController() {
    var vm = this

    vm.openMenu = openMenu
    vm.closeMenu = closeMenu

    vm.menu = document.querySelector('.menu')
    vm.overlay = document.querySelector('.menu-overlay')

    function openMenu() {
      vm.menu.classList.remove('hidden')
      vm.overlay.classList.remove('hidden')
    }

    function closeMenu() {
      vm.menu.classList.add('hidden')
      vm.overlay.classList.add('hidden')
    }
  }
