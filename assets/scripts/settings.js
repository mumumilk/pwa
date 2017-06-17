angular
  .module('Settings', [])
  .run(settings)

  settings.$inject = ['$transitions', '$state']

  function settings($transitions, $state) {
    $transitions.onError({}, transition => {
      if (transition.error().detail === 'AUTH_REQUIRED') {
        $state.go('login')
      }
    })
  }
