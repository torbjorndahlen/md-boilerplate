(function() {
'use strict';

  angular
  .module('view')
  .controller('viewController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'viewService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, viewService){


    $scope.toolbarButton = function(event) {

      console.log("toolbarButton(" + event + ")");

      $mdDialog.show(
        $mdDialog.alert()
        .title('Toolbar button')
        .textContent('Toolbar button was clicked')
        .ariaLabel('Work in progress')
        .ok('Awesome!')
        .targetEvent(event)
      );

    }





  }]);
})();
