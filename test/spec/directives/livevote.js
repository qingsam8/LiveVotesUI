'use strict';

describe('Directive: liveVote', function () {

  // load the directive's module
  beforeEach(module('bbcFrontEndApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<live-vote></live-vote>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the liveVote directive');
  }));
});
