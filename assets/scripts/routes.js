angular
  .module('Routes', ['ui.router'])
  .config(routes)

  routes.$inject = ['$stateProvider', '$urlRouterProvider']

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/menu',
        templateUrl: 'assets/scripts/menu/menu.html',
        controller: 'MenuController as vm'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'assets/scripts/login/login.html',
        controller: 'LoginController as vm'
      })

      .state('menu.find', {
        url: '/find',
        templateUrl: 'assets/scripts/find/find.html',
        controller: 'FindController as vm',
        resolve: {
          isAuthenticated: AuthService => AuthService.isAuthenticated()
        }
      })

      .state('menu.register', {
        url: '/register',
        templateUrl: 'assets/scripts/register/register.html',
        controller: 'RegisterController as vm',
        resolve: {
          isAuthenticated: AuthService => AuthService.isAuthenticated()
        }
      })

      .state('menu.settings', {
        url: '/settings',
        templateUrl: 'assets/scripts/settings/settings.html',
        controller: 'SettingsController as vm',
        resolve: {
          isAuthenticated: AuthService => AuthService.isAuthenticated()
        }
      })

    $urlRouterProvider.otherwise('/login')
  }
