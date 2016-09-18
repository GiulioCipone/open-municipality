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
   * HomeController
   */
  function HomeController() {
    var vm = this;

    vm._init = function() {
      this.pageReady = true;

      console.log('HomeController Ready!');
    }

    vm._init();
  }

  angular
    .module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
})();
