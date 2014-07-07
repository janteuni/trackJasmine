'use strict';

describe('Controller: AvatarCtrl', function () {

  // load the controller's module
  beforeEach(module('yamApp'));

  var AvatarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvatarCtrl = $controller('AvatarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
