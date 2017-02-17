(function() {
    'use strict';

    angular
        .module('MovieNerd')
        .factory('MovieFactory', MovieFactory);

    MovieFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function MovieFactory($http, $q) {
        var service = {
            getMovie: getMovie,
            getMovieInfo: getMovieInfo
        };

        return service;

        function getMovie(city) {
          var defer = $q.defer();

          $http({
            method: 'GET',
            url: ('http://www.omdbapi.com/?s=' + city)
          }).then(function(response) {
            if (typeof response.data === 'object') {
              defer.resolve(response);
            } else {
              defer.reject('no data found :(');
            }
          }, function(error) {
            //catch statement
            console.log(error);
            defer.reject(error);
          });

          return defer.promise;
        }

        function getMovieInfo(movieId) {
          var defer = $q.defer();

          $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?i=' + movieId + '&plot=short&r=json'
          }).then(function(response) {
            if (typeof response.data === 'object') {
              defer.resolve(response);
            } else {
              defer.reject('no data found :(');
            }
          }, function(error) {
            //catch statement
            console.log(error);
            defer.reject(error);
          });

          return defer.promise;
        }
    }
})();
