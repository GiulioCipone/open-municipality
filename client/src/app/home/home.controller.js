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

  angular
    .module('app')
    .controller('HomeController', HomeController);

  /**
   * HomeController
   */
  function HomeController() {
    var vm = this;

    vm.login = function() {

    };

    vm._init();
  }

  /**
   * initialize the controller
   */
  HomeController.prototype._init = function() {
    this.pageReady = true;
  };

  // HomeController.$inject = [];
})();
