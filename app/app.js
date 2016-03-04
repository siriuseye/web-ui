'use strict';

// Declare app level module which depends on views, and components
angular.module('SiriusEye', [
  'ngRoute',
  'SiriusEye.blog',
  'SiriusEye.view2',
  'SiriusEye.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
