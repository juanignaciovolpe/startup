'use strict';

/**
 * @ngdoc overview
 * @name moviesApp
 * @description
 * # moviesApp
 *
 * Main module of the application.
 */
angular
  .module('moviesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movies', {
        templateUrl: 'views/movie-list.html',
        controller: 'MovieListCtrl'
      })
      .when('/movies/:movieId', {
        templateUrl: 'views/movie-detail.html',
        controller: 'MovieDetailCtrl'
      })
      .when('/movies/:movieId/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl'
      })
      .otherwise({
        redirectTo: '/movies'
      });
  });


