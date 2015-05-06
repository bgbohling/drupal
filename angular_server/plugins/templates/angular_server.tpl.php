<div ng-app="angularServerApp" ng-controller="angularServerController">
<div>
<p>What type of content do you want to see?  <select  ng-model="type" ng-options="type for type in types"><option value="">All types</option></select></p>
  <p>Who by?  <select  ng-model="author" ng-options="author as author.username for author in authors"><option value="">All authors</option></select></p>
</div>
  <div ng-repeat="node in results | filterByType:type | filterByAuthor:author track by $index">
    <div class="title" style="font-weight:bold"><a href="{{node.ss_url}}">{{node.tm_title[0]}}</a></div>
  </div>
</div>
