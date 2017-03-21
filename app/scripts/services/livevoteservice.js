'use strict';

/**
 * @ngdoc service
 * @name bbcFrontEndApp.liveVoteService
 * @description
 * # liveVoteService
 * Service to call api from liveVote service
 */
angular.module('bbcFrontEndApp')
.service('liveVoteService', ['$rootScope', '$http', function($rootScope, $http){


  // post votes
  this.postVote = function(userName, candidate){
    console.log(userName);
    console.log(candidate)
    var data = {'client': userName, 'candidate': candidate}

    var req = {
     method: 'POST',
     url: 'http://localhost:8000/vote',
     headers: {
       'Content-Type': undefined
     },
     params: {client: userName, candidate: candidate}
    }

    $http(req).then(function successCallback(response) {
      console.log(response)
      alert(response.data)
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
      console.log(response)
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

  }

  // call the stream to get live update on votes
  // Stream sends data every second
  this.liveUpdate = function () {
    var evtSource = new EventSource('http://localhost:8000/live');
    evtSource.onmessage = function(e) {
      $rootScope.$broadcast('liveVoteService.data', JSON.parse(e.data));
    };
    return{
      cleint: 'client',
      candidate: 'candidate'
    };
  };







}]);
  // .service('liveVoteService', function () {
  //   // AngularJS will instantiate a singleton by calling "new" on this function
  //
  //   this.myFunc = function () {
  //
  //     var evtSource = new EventSource('http://localhost:8000/count');
  //
  //     evtSource.onmessage = function(e) {
  //       console.log(e.data);
  //     };
  //
  //     console.log("SERVICE");
  //       return  {
  //         cleint: 'client',
  //         candidate: 'candidate'
  //       };
  //   };
  //
  //
  // });
