'use strict';

/**
 * @ngdoc directive
 * @name bbcFrontEndApp.directive:votePercentage
 * @description
 * # votePercentage
 */
angular.module('bbcFrontEndApp')
  .controller('votePercentageDirController', ['$scope', 'liveVoteService', function($scope, liveVoteService) {

    $scope.votePercentageData = {};

    // Method calc total of votes
    function total(data){
      var total = 0
      data.resultRecord.forEach(x => {
        total += x.total
        total += x.duplicate
      });
      return total
    }

    // Method calc vote percentage and returns json
    function calcVotePercentage(data, total){

      var votePer = data
      votePer.resultRecord.forEach(record => {
        var percentage = ((record.total + record.duplicate)/total) * 100
        record.percentage = percentage.toFixed(2);
      });
      return votePer
    }

    // listen to the liveVoteService.data broadcast from root scope
    $scope.$on('liveVoteService.data', function(event, data){
      $scope.votePercentageData  = calcVotePercentage(data, total(data))
      $scope.$apply(); // apply changes to the scope (part of cycle)
    });


  }])
  .directive('votePercentage', function () {
    return {
      templateUrl: 'scripts/directives/votepercentageTemplate.html',
      controller: 'votePercentageDirController',
      restrict: 'E'
    };
  });
