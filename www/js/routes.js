angular
  .module('Routes', [])
  .config(Routes)

  function Routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/menu/menu.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'js/login/login.html',
        controller: 'LoginController as vm'
      })

      .state('app.find', {
        url: '/find',
        views: {
          'menuContent': {
            templateUrl: 'js/find/find.html',
            controller: 'FindController'
          }
        }
      })

      .state('app.register', {
        url: '/register',
        views: {
          'menuContent': {
            templateUrl: 'js/register/register.html',
            controller: 'RegisterController'
          }
        }
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'js/settings/settings.html',
            controller: 'SettingsController'
          }
        }
      })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login')
  }
