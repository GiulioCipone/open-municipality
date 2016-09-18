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
(function() {
  'use strict';

  /**
   * LoginController
   *
   * @param {Object} $rootScope  Angular rootScope service
   */
  function MainController($rootScope) {
    var vm = this;

    vm.page = {};
    vm.page.name = $rootScope.page ? $rootScope.page.name : 'no';
  }

  angular
    .module('app')
    .controller('MainController', MainController);

  MainController.$inject = ['$rootScope'];
})();
