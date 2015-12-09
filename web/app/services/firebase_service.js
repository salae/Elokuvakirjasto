FilmApp.service('FirebaseService', function($firebaseArray){
    
    var moviesFirebaseRef = new Firebase('https://crackling-torch-5847.firebaseio.com/movies');
    var movies = $firebaseArray(moviesFirebaseRef); 
    
    this.addMovie = function(movie){
      movies.$add(movie);
    }

    this.getMovies = function(){
      return movies;
    } 
    
    this.removeMovie = function(movie){
      movies.$remove(movie);
    } 
    
    this.editMovie = function(movie){
      movies.$save(movie);
    } 

});

