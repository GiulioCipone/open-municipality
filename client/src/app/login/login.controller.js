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
   * @param {Object} $http      Angular http service
   * @param {Object} $location  Angular $location service
   */
  function LoginController($http, $location) {
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
      }).then(function successCallback(response) {
        console.log('done');
        console.log(response);
        $location.path('/home');
      }, function errorCallback(response) {
        console.log('Error');
        console.log(response);
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
      }).then(function successCallback(response) {
        console.log('done');
        console.log(response);
        $location.path('/home');
      }, function errorCallback(response) {
        console.log('Error');
        console.log(response);
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

  LoginController.$inject = ['$http', '$location'];
})();
