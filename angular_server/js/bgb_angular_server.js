(function ($) {

    Drupal.behaviors.angular_server = {
        attach: function(context, settings){
            var contentTypes = settings.bgb_angular_server.contentTypes,
                typeArray = Object.keys(contentTypes).map(function(key) { return key }),
                authors = settings.bgb_angular_server.authors;


            var angularServerApp = angular.module('angularServerApp', ['solstice']),
                solrServer = 'http://localhost:8983/solr';
            angularServerApp.config(function(SolsticeProvider) {
                SolsticeProvider.setEndpoint('http://localhost:8983/solr');
            });

            // use Solr to load up a list of possible nodes
            angularServerApp.controller('angularServerController', function($scope, Solstice) {
                $scope.types = typeArray;
                $scope.authors = authors;
                Solstice.search({
                    q: '*',
                    fl: 'tm_title, tm_body$value, ss_url, ss_type, ds_changed, is_author',   // fields that will be returned
                    //sort: 'ss_type desc',
                    rows: 1000
                })
                    .then(function (data){
                        $scope.results = data.data.response.docs;
                    });
            });

            // we've got a big list of nodes, now provide some ways of filtering them
            // note that the list of nodes in each chained filter is what's returned from the previous filter
            angularServerApp.filter('filterByType', function() {
              return function(nodes, type) {
                  var filtered = [];
                  if(type) {
                      nodes.forEach(function(node) {
                          if (node.ss_type === type) {
                              filtered.push(node);
                          }
                      });
                      return filtered;
                  }
                  else {
                      return nodes;
                  }
              }
            });
            angularServerApp.filter('filterByAuthor', function() {
                return function(nodes, author) {
                    var filtered = [];
                    if(author) {
                        nodes.forEach(function(node) {
                            if (node.is_author == author.uid) {
                                filtered.push(node);
                            }
                        });
                        return filtered;
                    }
                    else {
                        return nodes;
                    }
                }
            });
        }
    }
})();
