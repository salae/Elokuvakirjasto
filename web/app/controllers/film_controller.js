FilmApp.controller('FilmController', function($scope, FirebaseService){

  $scope.movies = FirebaseService.getMovies();
  
  $scope.removeMovie = function(index){
    FirebaseService.removeMovie(index)
  };

});




