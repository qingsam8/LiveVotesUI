'use strict';

/**
 * @ngdoc directive
 * @name bbcFrontEndApp.directive:voteCount
 * @description
 * # voteCount
 */
angular.module('bbcFrontEndApp')
  .controller('voteCountDirController', ['$scope', 'liveVoteService', function($scope, liveVoteService) {

    $scope.voteCountData = {}

    // listen to the liveVoteService.data broadcast from root scope
    $scope.$on('liveVoteService.data', function(event, data){
      $scope.voteCountData = data
      $scope.$apply();
    });


  }])
  .directive('voteCount', function () {
    return {
      templateUrl: 'scripts/directives/votecountTemplate.html',
      controller: 'voteCountDirController',
      restrict: 'E'
    };
  });
