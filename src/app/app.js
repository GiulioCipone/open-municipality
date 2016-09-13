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
    .module('app', [
      'ui.router',
      'ngAnimate',
      'ngMaterial',
      'app.main'
    ])
    .config(config)
    .run(run);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$compileProvider', '$stateProvider'];

  /**
   * @param  {Object} $compileProvider  Angular compileProvider service
   * @param  {Object} $stateProvider    Angular stateProvider service
   */
  function config($compileProvider, $stateProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);

    // routes
    // MAIN ABSTRACT STATE, ALWAYS ON
    $stateProvider
      .state('main', {
        abstract: true,
        url: '',
        templateUrl: 'app/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .state('main.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .state('main.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      });

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
  }

  /**
   * Run once the App is ready
   */
  function run() {
    console.log('App ready!');
  }
})();
