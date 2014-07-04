'use strict';

/**
 * @ngdoc function
 * @name yamApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yamApp
 */
angular.module('yamApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
