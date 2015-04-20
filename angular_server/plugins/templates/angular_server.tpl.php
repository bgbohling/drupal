<div ng-app="angularServerApp" ng-controller="angularServerController">
  Woo-hoo, stuff from Solr!<br>
  <div ng-repeat="node in content track by $index">
    <div class="title" style="font-weight:bold">{{node.title}}</div>
    <div class="body">{{node.body}}</div>
  </div>
</div>
