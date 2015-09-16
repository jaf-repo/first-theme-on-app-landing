'use strict';

/**
 * @ngdoc function
 * @name firstThemeOnAppLandingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstThemeOnAppLandingApp
 */
angular.module('firstThemeOnAppLandingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
