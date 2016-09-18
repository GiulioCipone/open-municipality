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
    .module('pageService', [])
    .factory('pageService', PageService);

  function PageService() {
    var vm = this;
    vm.page = '';

    function _getPage() {
      return vm.page;
    }

    function _setPage(val) {
      vm.page = val;
    }

    return {
      getPage: _getPage,
      setPage: _setPage
    };
  }
})();
