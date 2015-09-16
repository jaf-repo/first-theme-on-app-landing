'use strict';

/**
 * @ngdoc function
 * @name firstThemeOnAppLandingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firstThemeOnAppLandingApp
 */
angular.module('firstThemeOnAppLandingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
