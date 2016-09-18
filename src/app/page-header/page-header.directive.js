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

  var pageHeader = {
    templateUrl: 'app/page-header/page-header.html',
    bindings: {
      page: '='
    },
    controller: function(pageService) {
      console.log('Allo header');
    }
  }

  angular
    .module('app')
    .component('pageHeader', pageHeader);
})();
