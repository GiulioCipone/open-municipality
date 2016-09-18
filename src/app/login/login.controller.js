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
   */
  function LoginController($state, $firebaseAuth, $mdToast) {
    var vm = this;

    vm.authObj = $firebaseAuth();

    vm.login = function(formValid, email, password) {
      if (!formValid) {
        return false;
      }

      vm
        .authObj
        .$signInWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          $state.go('main.home');
          $mdToast.show(
            $mdToast.simple().textContent('Welcome back ' + firebaseUser.email));
        })
        .catch(function(error) {
          $mdToast.show(
            $mdToast.simple().textContent('Authentication failed: ' + error));
        });
    };

    vm.register = function(formValid, email, password, passwordConfirm) {
      if (!formValid) {
        return false;
      }

      if (password !== passwordConfirm) {
        $mdToast.show(
          $mdToast.simple().textContent('Registration failed: The 2 passwords should match'));
        return false;
      }

      vm.authObj.$createUserWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
          $state.go('main.home');
          $mdToast.show(
            $mdToast.simple().textContent('The new user has been successfully created'));
        }).catch(function(error) {
          $mdToast.show(
            $mdToast.simple().textContent('Error: ' + error));
        });
    };

    vm._init = function() {
      this.pageReady = true;
    };

    vm._init();
  }

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state', '$firebaseAuth', '$mdToast'];
})();
