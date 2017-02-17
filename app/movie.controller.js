(function() {
    'use strict';

    angular
        .module('MovieNerd')
        .controller('MovieController', MovieController);

    MovieController.$inject = ['toastr', 'MovieFactory'];

    /* @ngInject */
    function MovieController(toastr, MovieFactory) {
        var vm = this;

        vm.search = search;

        
        function search(movie) {
          if(movie === "") {
            toastr.error("You must enter a city name!");
          }
          else {
          MovieFactory.getMovie(movie).then(
            function(response){
              vm.moviesObject = response.data;
              vm.movies = vm.moviesObject.Search;
              toastr.success('We have found movies with the name: ' + movie);
              console.log(vm.movies);

              vm.movie = "";
            })
            .catch(function(error){
              if(error.data) {
                toastr.error('There was a big problem: ' + error.data.message);
              } else {
                toastr.info('no data in my data!');
              }
              console.log(error);
            });
          }
        }
    }
})();
