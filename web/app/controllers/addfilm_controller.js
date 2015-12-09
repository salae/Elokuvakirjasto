FilmApp.controller('AddFilmController', function($scope, FirebaseService, $location){
  
  $scope.movies = FirebaseService.getMovies();
   
  $scope.addMovie = function(){

        if($scope.name !== '' && $scope.name != null){
          FirebaseService.addMovie({
            name: $scope.name,
            director: $scope.director,
            release: $scope.release,
            description: $scope.description
          });
        }

//      $scope.name = '';
//      $scope.director = '';
//      $scope.release = '';
//      $scope.description = '';
        $location.path('/movies');
              
  }
//     $scope.$watch('$scope.name', function(newVal, oldVal){
////       if(newVal == undefined || newVal == '' || newVal == null){
////         $scope.error = true;
////       }
////        $scope.todosDone = newTodos.filter(function(todo){ return todo.done }).length;
//    }, true);
//    $scope.$watch('$scope.director',function(){},true);

});
