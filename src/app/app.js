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
      // Services
      'ui.router',
      'ngAnimate',
      'ngMaterial',
      'firebase',
      'pageService'
      // Modules
      // coming soon...
    ])
    .config(config)
    .run(run);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$compileProvider', '$stateProvider', '$locationProvider'];
  run.$inject = ['$rootScope', 'pageService'];

  /**
   * @param  {Object} $compileProvider  Angular compileProvider service
   * @param  {Object} $stateProvider    Angular stateProvider service
   */
  function config($compileProvider, $stateProvider, $locationProvider) {
    // disable debug info
    $compileProvider.debugInfoEnabled(false);

    // routes
    // MAIN ABSTRACT STATE, ALWAYS ON
    $stateProvider
      .state('main', {
        abstract: true,
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainCtrl'
      })
      .state('main.home', {
        url: '/',
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
  function run($rootScope, pageService) {
    console.log('App ready!');

    $rootScope.$on('$stateChangeStart', function(e, toState) {
      var pageName = $rootScope.page && $rootScope.page.name ?
                     $rootScope.page.name : null;

      pageService.setPage(toState.name);

      if (!$rootScope.page) {
        $rootScope.page = {};
      }

      $rootScope.page.name = toState.name;
      // $rootScope.$apply();

      console.log(pageName);
      // console.log(pageService.getPage());
    });
  }
})();
