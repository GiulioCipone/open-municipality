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
    .controller('LoginController', LoginController);

  /**
   * LoginController
   *
   * @param {Object} $http   Angular http service
   */
  function LoginController($http) {
    var vm = this;

    vm.login = function(formValid, email, password) {
      if (!formValid) {
        return false;
      }

      $http({
        method: 'POST',
        url: '/api/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: email,
          password: password
        }
      });
    };

    vm.register = function(formValid, email, password, passwordConfirm) {
      if (!formValid) {
        return false;
      }

      $http({
        method: 'POST',
        url: '/api/register',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: email,
          password: password,
          passwordConfirm: passwordConfirm
        }
      });
    };

    vm._init();
  }

  /**
   * initialize the controller
   */
  LoginController.prototype._init = function() {
    this.pageReady = true;
  };

  LoginController.$inject = ['$http'];
})();
