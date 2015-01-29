'use strict';

/**
 * @ngdoc function
 * @name moviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviesApp
 */

 angular.module('moviesApp')
 .controller('MovieListCtrl', function ($scope) {
   
  if($scope.movies == "undefined"){
    $scope.movies = [];
  }

  var data = localStorage.getItem('movies');
  var movies = JSON.parse(data); 
  $scope.movies = movies;
    

  $scope.addMovie = function () {
   
      var data = localStorage.getItem('movies');
      var movies = JSON.parse(data); 

      movies.push($scope.movie); 
      localStorage.setItem('movies', JSON.stringify(movies));
      $scope.movies = movies;
      $scope.movie = '';

  };


  $scope.deleteMovie = function (index) {
   var data = localStorage.getItem('movies');
   var movies = JSON.parse(data); 
   movies.splice(index, 1);
   localStorage.setItem('movies', JSON.stringify(movies));
   $scope.movies= movies;
  };   

})


.controller('MovieDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    var data = localStorage.getItem('movies');
    var movies = JSON.parse(data);
    $scope.movie = movies[$routeParams.movieId];


  }])
.controller('MovieEditCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
   var data = localStorage.getItem('movies');
   var movies = JSON.parse(data);
   
   $scope.movie = movies[$routeParams.movieId];

   $scope.editMovie = function () {
      // $scope.movies.push($scope.movie);
      // $scope.movie = '';

      var data = localStorage.getItem('movies');
      var movies = JSON.parse(data); 

      var id = $routeParams.movieId;

      movies[id] = $scope.movie; 
      localStorage.setItem('movies', JSON.stringify(movies));
      $scope.movies = movies;
     
      $(".alert").html('');
      $(".alert").append('<div class="alert alert-info alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>Done!</strong> Movie has been edited succesfully.</div>');


// localStorage.getItem('movies');



    };


 }])

