(function ($) {

    Drupal.behaviors.angular_server = {
        attach: function(context, settings){
            var angularServerApp = angular.module('angularServerApp', ['solstice']),
                solrServer = 'http://localhost:8983/solr',
                $nodes = [];
            angularServerApp.config(function(SolsticeProvider) {
                SolsticeProvider.setEndpoint('http://localhost:8983/solr');
            });

            angularServerApp.scope = {
                solrUrl: solrServer,
                displayField: '=',
                query: '&',
                results: '&'
            }

            angularServerApp.controller('angularServerController', function($scope, Solstice) {


                Solstice.search({
                    q: 'tm_body$value:"nostrud premo"',
                    //fl: 'tm_title, tm_body$value',   // fields that will be returned
                    //sort: 'title desc',
                    rows: 20
                })
                    .then(function (data){
                        // now that we've got data, we could, like, apply some Angular filters to it
                        console.log(data.data.response.docs);
                        $scope.results = data.data.response.docs;
                        //console.log(data.data.response.docs);
                    });
            });
        }
    }
})();
