angular
  .module('MenuController', [])
  .controller('MenuController', MenuController)

  MenuController.$inject = ['$firebaseAuth', '$state']

  function MenuController($firebaseAuth, $state) {
    var vm = this

    vm.firebaseAuth = $firebaseAuth()

    vm.openMenu = openMenu
    vm.closeMenu = closeMenu
    vm.logout = logout

    vm.menu = document.querySelector('.menu')
    vm.header = document.querySelector('.header')
    vm.main = document.querySelector('.main')

    retrieveUser()
      .then(user => {
        vm.user = vm.firebaseAuth.$getAuth()
      })

    /**
     * Recupera informações do usuário no provider.
     */
    function retrieveUser() {
      return new Promise(resolve => {
        vm.firebaseAuth
          .$onAuthStateChanged(user => resolve(user))
      })
    }

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
      vm.overlay.classList.add('hidden')
    }
  }
