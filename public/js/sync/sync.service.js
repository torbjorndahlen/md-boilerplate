(function(){
'use strict';

angular
    .module('sync', ['ui.router', 'ngStorage', 'ngFeedHenry', 'ngMaterial'])
    .service('syncService', ['FHCloud',
    function(FHCloud) {

    var service = {};

    return service;
}]);
})();
