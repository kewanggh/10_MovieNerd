(function() {
    'use strict';

    angular
        .module('MovieNerd')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['MovieFactory', '$stateParams', 'toastr'];

    /* @ngInject */
    function MovieDetailController(MovieFactory, $stateParams, toastr) {
        var vm = this;
        getDetails($stateParams.ID);



        function getDetails(movieId) {
          console.log(movieId);

          MovieFactory.getMovieInfo(movieId).then(
            function(response){
              vm.movieInfo = response.data;
              toastr.success('We have found movie with ID: ' + movieId);
              console.log(vm.movieInfo);
              $stateParams.ID = "";
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
})();
