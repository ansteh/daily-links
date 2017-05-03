angular.module('app').component('domains', {
  templateUrl: '/client/app/domains/domains.template.html',
  controller: function ($scope, Domains) {
    var ctrl = this;

    // ctrl.filter = function() {
    //   return Salons.filter();
    // }

    Domains.getAll()
    .then(function(domains) {
      console.log(domains);
      $scope.domains = domains;
    }, function (err) {
      console.log(err);
      return err;
    });

  }
});
