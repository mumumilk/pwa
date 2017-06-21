angular
  .module('ModalDirective', [])
  .directive('modal', ModalDirective)

  function ModalDirective() {
    return {
      templateUrl: 'modal.html',
      scope: {
        type: '=',
        title: '=',
        description: '='
      },
      controller: () => {
        var vm = this
      }
    }
  }
