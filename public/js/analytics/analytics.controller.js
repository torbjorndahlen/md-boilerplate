(function() {
'use strict';

  angular
  .module('analytics')
  .controller('analyticsController', ['$mdToast', '$mdBottomSheet', '$mdSidenav', '$window', '$document', '$timeout', '$mdDialog','$rootScope', '$scope', '$state', '$sessionStorage', 'analyticsService',
  function ($mdToast, $mdBottomSheet, $mdSidenav, $window, $document, $timeout, $mdDialog, $rootScope, $scope, $state, $sessionStorage, analyticsService){


    $scope.items = [
      { name: 'item1', icon: 'img/ic_chat_24px.svg', what: 'what1', notes: 'notes1', action1: 'action1', action2: 'action2' },
      { name: 'item2', icon: 'img/ic_chat_24px.svg', what: 'what2', notes: 'notes2', action1: 'action1', action2: 'action2' },
      { name: 'item3', icon: 'img/ic_chat_24px.svg', what: 'what3', notes: 'notes3', action1: 'action1', action2: 'action2' }
    ];

    /*
    var e = document.querySelector("#canvasArea");
    var c = e.childNodes;
    console.log("canvasArea child nodes: " + c.length);
    for(var i = 0; i < c.length; i++) {
      console.log("canvasArea child node[" + i + "].nodeName: " + c[i].nodeName);
      console.log("canvasArea child node[" + i + "].nodeType: " + c[i].nodeType);
      console.log("canvasArea child node[" + i + "].nodeValue: " + c[i].nodeValue);
      console.log("canvasArea child node[" + i + "].string: " + c[i].toString());
      console.log("canvasArea child node[" + i + "].id: " + c[i].id);
    }
    */

    var myCanvas = document.getElementById("myCanvas"); //$window.document.createElement("canvas");
    //c[0].appendChild(myCanvas);

    //var myCanvas = c[0];
    myCanvas.width = 100;
    myCanvas.height = 100;
    var ctx = myCanvas.getContext("2d");


    $scope.dashData = {
        "Critical": 10,
        "Major": 14,
        "Normal": 2,
        "Low": 12
    };


    $scope.myPiechart = new Piechart(
    {
        "canvas":myCanvas,
        "data":$scope.dashData,
        "colors":["#fde23e","#f16e23", "#57d9ff","#937e88"],
        "doughnutHoleSize":0.5
    }
  );

  $scope.myPiechart.draw();


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
