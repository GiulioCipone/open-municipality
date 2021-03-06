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
   * pageFooter
   *
   * @return {Object} Angular directive
   */
  function pageFooter() {
    return {
      restrict: 'E',
      templateUrl: 'app/page-footer/page-footer.html'
    };
  }

  angular
    .module('app')
    .directive('pageFooter', pageFooter);
})();
