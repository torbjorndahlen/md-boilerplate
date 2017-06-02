(function() {
'use strict';

  angular
  .module('sync')
  .controller('syncController', ['$scope', '$state', '$sessionStorage', 'syncService',
  function ($scope, $state, $sessionStorage, syncService){

    console.log("Module sync loaded");

    var datasetId = "SyncData";
    $scope.syncData = [];

    $fh.sync.init({
      "do_console_log" : true,
      "storage_strategy" : "dom"
    });

    $fh.sync.manage(datasetId);

    $fh.sync.notify(function(notification) {
      console.log("Sync Notification: " + notification.code);

      if( 'sync_complete' == notification.code ) {
        console.log("Sync Complete");
        $fh.sync.doList(datasetId,
          function(res){

            $scope.syncData = []; // Clear sync data to avoid duplicates
            //res is a JSON object
            for(var key in res){
              if(res.hasOwnProperty(key)){
                // Unique Id of the record, used for read, update & delete operations (string).
                var uid = key;
                // Record data, opaque to sync service.
                var data = res[key].data;
                data.uid = uid;
                $scope.syncData.push(data);
                // Unique hash value for this record
                var hash = res[key].hash;
              }
            }
            //$scope.$apply();
            $sessionStorage.syncData = $scope.syncData; // Make sync data available to other modules
          },
          function(code, msg){
            console.log("error: " + code + ' : ' + msg);
          }
        );
      } else if( 'local_update_applied' === notification.code ) {

      } else if( 'remote_update_failed' === notification.code ) {
        console.log("Sync Error: " + notification.message);
      }
    });



  }]);
})();
