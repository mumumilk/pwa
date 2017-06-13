angular
  .module('Routes', ['ui.router'])
  .config(Routes)

  function Routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'assets/scripts/menu/menu.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'assets/scripts/login/login.html',
        controller: 'LoginController as vm'
      })

      .state('app.find', {
        url: '/find',
        views: {
          'menuContent': {
            templateUrl: 'assets/scripts/find/find.html',
            controller: 'FindController'
          }
        }
      })

      .state('app.register', {
        url: '/register',
        views: {
          'menuContent': {
            templateUrl: 'assets/scripts/register/register.html',
            controller: 'RegisterController'
          }
        }
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'assets/scripts/settings/settings.html',
            controller: 'SettingsController'
          }
        }
      })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login')
  }
