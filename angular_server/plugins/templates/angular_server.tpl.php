<div ng-app="angularServerApp" ng-controller="angularServerController">
<div style="border: 1px solid black; padding: 5px">
  <h3>Filters</h3>
  <span>By type <select  ng-model="type" ng-options="type for type in types"><option value="">All types</option></select></span> |
  <span>By author <select  ng-model="author" ng-options="author as author.username for author in authors"><option value="">All authors</option></select></span> |
  <span>By term</span> |
  <span>Start date</span> |
  <span>End date</span>
</div>
  <div ng-repeat="node in results | filterByType:type | filterByAuthor:author track by $index">
    <div class="title" style="font-weight:bold"><a href="{{node.ss_url}}"><span ng-bind="node.tm_title[0]"></span></a></div>
  </div>
</div>
