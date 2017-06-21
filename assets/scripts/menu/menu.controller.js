angular
  .module('MenuController', [])
  .controller('MenuController', MenuController)

  MenuController.$inject = ['$firebaseAuth', '$state', 'AuthService']

  function MenuController($firebaseAuth, $state, AuthService) {
    var vm = this

    vm.firebaseAuth = $firebaseAuth()

    vm.openMenu = openMenu
    vm.closeMenu = closeMenu
    vm.logout = logout

    vm.menu = document.querySelector('.menu')
    vm.header = document.querySelector('.header')
    vm.main = document.querySelector('.main')

    AuthService
      .retrieveUser()
      .then(user => vm.user = user)

    /**
     * Realiza logout do provider.
     */
    function logout() {
      vm.firebaseAuth.$signOut()
      $state.go('login')
    }

    function openMenu() {
      vm.menu.classList.toggle('hidden')
      vm.header.classList.toggle('header-menu-open')
      vm.main.classList.toggle('main-menu-open')
    }

    function closeMenu() {
      vm.menu.classList.add('hidden')
      vm.header.classList.remove('header-menu-open')
      vm.main.classList.remove('main-menu-open')
    }
  }
