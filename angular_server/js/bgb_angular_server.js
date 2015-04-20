(function ($) {

    Drupal.behaviors.angular_server = {
        attach: function(context, settings){
            var angularServerApp = angular.module('angularServerApp', []);

            angularServerApp.controller('angularServerController', function($scope, $http) {
                var path = 'http://localhost/drupal-7.21/home_page';
                var $nodes = [];
                $http.get(path).success(function(response) {
                    content = (response['content']);
                    for (var $key in content) {
                        $nodes[$key] = {};
                        $nodes[$key]['title'] = content[$key]['title'];
                        $nodes[$key]['body'] = content[$key]['body'];
                    }
                   $scope.content = $nodes;
                });
            });
        }
    }
})();
