angular.module('app').factory('Domains', function($http) {
  var domains;

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/domains'
    })
    .then(function (response) {
      domains = response.data;
      return domains;
    });
  };

  return {
    getAll: getAll
  };
});
