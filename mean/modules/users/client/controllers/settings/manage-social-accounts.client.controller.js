'use strict';

angular.module('articles').controller('SocialAccountsController',   
  ['$scope', '$stateParams', '$location', 'Authentication', 'Users', "Articles",
  function ($scope, $stateParams, $location, Authentication, Users, Articles) {
    $scope.user = Authentication.user;
    $scope.find = function () {
      $scope.articles = Articles.query();
    };
    $scope.apply = function (isValid) {
      $scope.error = null;
      var obj = {
        apartmentNumber: this.title, details: this.content
      }

      $scope.user.application = obj;
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var user = new Users($scope.user);

      // Create new Article object

      // Redirect after save
      user.$update(function (response) {
        // $location.path('articles/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }  
]);


