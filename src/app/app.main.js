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
    .module('app.main', [])
    .constant('appConst', {
      apiURL: ''
    });

  angular
    .module('app')
    .controller('MainController', function() {
      var vm = this;

      vm.page = null;

      vm.page = 'login';
      console.log('MainController Ready!');
    });
})();
