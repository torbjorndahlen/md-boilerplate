(function(){
  'use strict';
var cmsapp = angular.module('md-boilerplate', [
  'ui.router',
  'util',
  'list',
  'card',
  'analytics',
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
         },
         'list@view': {
           templateUrl: "js/list/list.html",
           controller: "listController"
         },
         'card@view': {
           templateUrl: "js/card/card.html",
           controller: "cardController"
         },
         'analytics@view': {
           templateUrl: "js/analytics/analytics.html",
           controller: "analyticsController"
         }
       }

     });

   });

})();
