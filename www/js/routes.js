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
        controller: 'LoginController'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'js/home/home.html',
            controller: 'HomeController'
          }
        }
      })

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login')
  }
