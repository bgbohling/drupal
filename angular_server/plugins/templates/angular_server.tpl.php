<div ng-app="angularServerApp" ng-controller="angularServerController">
  Woo-hoo, stuff from Solr!<br>
<div>refine:  <p><input type="text" ng-model="test"></p></div>
  <div ng-repeat="node in results | filter: test track by $index">
    <div class="title" style="font-weight:bold"><a href="{{node.ss_url}}">{{node.tm_title[0]}}</a></div>
    <!--
    <div class="body">{{node.tm_body$value[0]}}</div>
     -->
  </div>
</div>
