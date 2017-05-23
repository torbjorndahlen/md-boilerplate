(function(){
  'use strict';
var cmsapp = angular.module('md-boilerplate', [
  'ui.router',
  'util',
  'view'
]);

cmsapp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('md-boilerplate-theme')
    .primaryPalette('red')
    .accentPalette('indigo')
    .warnPalette('deep-purple')
    .backgroundPalette('grey');

  //$mdThemingProvider.theme('dark-red').dark();

  //$mdThemingProvider.setDefaultTheme('md-boilerplate-theme');

  $mdThemingProvider.disableTheming();
});

cmsapp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/view");

   $stateProvider
     .state('view', {
       url: "/view",
       views: {
         '': {
           templateUrl: "js/view/view.html",
           controller: "viewController"
         },
         'sidenav@view': {
           templateUrl: "js/util/sidenav.html",
           controller: "sidenavController"
         }
       }

     });

   });

})();
