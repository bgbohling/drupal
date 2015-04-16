(function ($) {

    Drupal.behaviors.weather_angular = {
        attach: function(context, settings) {

            // define an angular app
            var weatherApp = angular.module('weatherApp', []),
                wcUrl,
                celsius,
                icon;

            // Implement a controller for the app
            weatherApp.controller('weatherController', function($scope, $http) {
                $scope.city = 'Atlanta';

                $scope.loadWidget = function() {
                    wcUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + $scope.city;
                    $http.get(wcUrl).success(function(response) {
                        console.log(response);
                        celsius = Math.round(response['main']['temp'] - 273.15);  // Kelvin -> Celsius
                        $scope.temp = convert2F(celsius) + 'F';
                        $scope.humidity = response['main']['humidity'];
                        $scope.skies = response['weather'][0]['main'];
                        icon = response['weather'][0]['icon'];

                        $scope.icon = 'http://openweathermap.org/img/w/' + icon + '.png';
                    });
                };

                $scope.loadWidget();

                // reload widget when user changes location
                $scope.reload = function() {
                    $scope.city = $scope.userLocation;
                    $scope.userLocation = '';
                    $scope.loadWidget();
                };

                // convert celsius to fahrenheit
                var convert2F = function(celsius) {
                    return Math.round((celsius * 9 / 5) + 32);
                };

            });
        }
    }

})();




