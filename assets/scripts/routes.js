angular
  .module('Routes', ['ui.router'])
  .config(Routes)

  function Routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        controller: 'MenuController as vm',
        templateUrl: 'assets/scripts/menu/menu.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'assets/scripts/login/login.html',
        controller: 'LoginController as vm'
      })

      .state('menu.find', {
        url: '/find',
        templateUrl: 'assets/scripts/find/find.html',
        controller: 'FindController'
      })

      .state('menu.register', {
        url: '/register',
        templateUrl: 'assets/scripts/register/register.html',
        controller: 'RegisterController'
      })

      .state('menu.settings', {
        url: '/settings',
        templateUrl: 'assets/scripts/settings/settings.html',
        controller: 'SettingsController'
      })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login')
  }
