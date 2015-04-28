(function ($) {

    Drupal.behaviors.angular_server = {
        attach: function(context, settings){

            var angularServerApp = angular.module('angularServerApp', ['solstice']),
                solrServer = 'http://localhost:8983/solr';
            angularServerApp.config(function(SolsticeProvider) {
                SolsticeProvider.setEndpoint('http://localhost:8983/solr');
            });

            angularServerApp.controller('angularServerController', function($scope, Solstice) {
                Solstice.search({
                    q: '*',
                    fl: 'tm_title, tm_body$value, ss_url, ss_type, ds_changed',   // fields that will be returned
                    //sort: 'ss_type desc',
                    rows: 82
                })
                    .then(function (data){
                        console.log(data.data.response.docs);
                        $scope.results = data.data.response.docs;
                    });
            });
        }
    }
})();
