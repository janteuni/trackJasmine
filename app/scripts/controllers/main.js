'use strict';

/**
 * @ngdoc function
 * @name yamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yamApp
 */
angular.module('yamApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
