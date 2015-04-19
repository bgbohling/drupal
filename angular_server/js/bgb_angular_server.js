(function ($) {

    Drupal.behaviors.angular_server = {
        attach: function(context, settings){
            var angularServerApp = angular.module('angularServerApp', []);

            angularServerApp.controller('angularServerController', function($scope, $http) {
                var path = 'http://localhost/drupal-7.21/home_page';
                $http.get(path).success(function(response) {
                   $scope.content = response['content'];
                });
            });
        }
    }
})();
