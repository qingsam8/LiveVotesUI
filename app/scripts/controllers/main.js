'use strict';

/**
 * @ngdoc function
 * @name bbcFrontEndApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bbcFrontEndApp
 */
angular.module('bbcFrontEndApp')
  .controller('MainCtrl', ['$scope', 'liveVoteService', function ($scope, liveVoteService) {

    $scope.userName = "user"
    $scope.candidate = "candidate"

    liveVoteService.liveUpdate();

    $scope.vote = function(userName, candidate) {
      console.log(userName);
      console.log(candidate);
      liveVoteService.postVote(userName, candidate)
    };


  }]);
