/**
* open-municipality
*
* @author Andrea SonnY <andreasonny83@gmail.com>
* @copyright 2016 Andrea SonnY <andreasonny83@gmail.com>
*
* This code may only be used under the MIT style license.
*
* @license MIT  https://andreasonny.mit-license.org/@2016/
*/
'use strict';

describe('login controller', function() {
  beforeEach(module('app'));

  var $controller;
  var controller;

  beforeEach(inject(function(_$rootScope_, _$controller_) {
    $controller = _$controller_;
    controller = $controller('LoginController', {});
  }));

  it('LoginController should be defined', function() {
    expect(controller).toBeDefined();
    expect(controller.pageReady).toBe(true);
  });
});
