(function() {
'use strict';

  angular
  .module('form')
  .controller('formController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'formService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, formService){


    $scope.items = [
      { name: 'item1', icon: 'img/ic_chat_24px.svg', what: 'what1', notes: 'notes1', action1: 'action1', action2: 'action2' },
      { name: 'item2', icon: 'img/ic_chat_24px.svg', what: 'what2', notes: 'notes2', action1: 'action1', action2: 'action2' },
      { name: 'item3', icon: 'img/ic_chat_24px.svg', what: 'what3', notes: 'notes3', action1: 'action1', action2: 'action2' }
    ];



  $scope.doPrimaryAction = function(event, caller) {
    console.log(JSON.stringify(caller));

          $mdDialog.show(
            $mdDialog.alert()
            .title('Not implemented yet!')
            .textContent('Try chat or contacts')
            .ariaLabel('Work in progress')
            .ok('Awesome!')
            .targetEvent(event)
          );
        }



  }]);
})();
