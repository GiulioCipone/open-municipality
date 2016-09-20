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
      'firebase',
      'ngAnimate',
      // Services
      'authService'
      // Modules
      // coming soon...
    ])
    .config(config)
    .run(run);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = [
    '$compileProvider',
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider'
  ];

  run.$inject = ['$rootScope'];

  /**
   * @param  {Object} $compileProvider  Angular compileProvider service
   * @param  {Object} $stateProvider    Angular stateProvider service
   */
  function config($compileProvider, $stateProvider, $locationProvider, $urlRouterProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);

    // routes
    // MAIN ABSTRACT STATE, ALWAYS ON
    $stateProvider
      .state('app', {
        abstract: true,
        template: '<div ui-view class="page" />'
      })
      .state('app.home', {
        url: '/home',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .state('app.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      })
      .state('app.console', {
        url: '/console',
        template: '<div ui-view />',
        abstract: true,
        resolve: {
          authorize: function() {
            return false;
          }
        }
      })
      .state('app.console.dashboard', {
        url: '/dashboard',
        template: '<span>dashboard</span>'
      });

    $urlRouterProvider.otherwise('/home');

    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
  }

  /**
   * Run once the App is ready
   */
  function run($rootScope) {
    console.log('App ready!');

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      console.log('page:', toState.name);
    });
  }
})();
