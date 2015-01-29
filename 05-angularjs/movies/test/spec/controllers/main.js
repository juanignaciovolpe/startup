'use strict';

describe('Controller: MovieListCtrl', function () {

  // load the controller's module
  beforeEach(module('moviesApp'));

  var MovieListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieListCtrl = $controller('MovieListCtrl', {
      $scope: scope
    });
  }));

  it('should have no items to start', function () {
  expect(scope.movies.length).toBe(0);
  });

  it('should add items to the list', function () {

    scope.movie = {"name":"Seven Samurai","year":"1954","director":"Akira Kurosawa","cover":"http://ia.media-imdb.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SY317_CR6,0,214,317_AL_.jpg"};
    scope.addMovie();
    expect(scope.movies.length).toBe(1);
  });


});
