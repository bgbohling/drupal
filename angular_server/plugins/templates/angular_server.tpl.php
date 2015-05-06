<div ng-app="angularServerApp" ng-controller="angularServerController">
<div>
<p>What type of content do you want to see?  <select  ng-model="type" ng-options="type for type in types"></select></p>
</div>
  <div ng-repeat="node in results | filterByType:type track by $index">
    <div class="title" style="font-weight:bold"><a href="{{node.ss_url}}">{{node.tm_title[0]}}</a></div>
  </div>
</div>
