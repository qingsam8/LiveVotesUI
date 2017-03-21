'use strict';

describe('Service: liveVoteService', function () {

  // load the service's module
  beforeEach(module('bbcFrontEndApp'));

  // instantiate service
  var liveVoteService;
  beforeEach(inject(function (_liveVoteService_) {
    liveVoteService = _liveVoteService_;
  }));

  it('should do something', function () {
    expect(!!liveVoteService).toBe(true);
  });

});
