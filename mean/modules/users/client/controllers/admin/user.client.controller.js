'use strict';

angular.module('users.admin').controller('UserController', ['$scope', '$http', '$state', 'Authentication', 'userResolve', 'Users', 'Articles',
  function ($scope,  $http, $state, Authentication, userResolve, Users, Articles) {
    $scope.authentication = Authentication;
    console.log($scope.authentication)
    $scope.user = userResolve;
    $scope.remove = function (user) {
      if (confirm('Are you sure you want to delete this user?')) {
        if (user) {
          user.$remove();

          $scope.users.splice($scope.users.indexOf(user), 1);
        } else {
          $scope.user.$remove(function () {
            $state.go('admin.users');
          });
        }
      }
    };
    $scope.accept = function (user, isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }
      console.log(user)
      console.log(user._id)
      $scope.findOne = function () {
      $scope.article = Articles.get({
        articleId: user.application.apartmentNumber
      });
    };
      $scope.findOne();
      // $http.get('api/articles/'+ user.application.apartmentNumber).then(function(data, err){
      //   console.log(data.data);
      //   var tenant = data.data;
        // tenant.tenant = $scope.authentication
        console.log($scope.article)
        $scope.article.tenant = $scope.authentication
        var article = $scope.article
      //   // var article = new Articles(tenant);
      //   console.log(article)
        article.$save(function (article, response) {
          console.log(response)
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
        // article.$save();
        // console.log(article)
        // $http.put('api/articles/'+article._id).then(function(data, err){
        //   console.log(data)
        // })
        // article.$update(function (response) {
        //     // $location.path('articles/' + response._id);

        //     // Clear form fields
        //     // $scope.title = '';
        //     // $scope.content = '';
        //   }, function (errorResponse) {
        //     $scope.error = errorResponse.data.message;
        //   });
      // })
    }
  }
]);
