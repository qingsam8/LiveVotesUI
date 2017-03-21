'use strict';

describe('Directive: liveResults', function () {

  // load the directive's module
  beforeEach(module('bbcFrontEndApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<live-results></live-results>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the liveResults directive');
  }));
});
