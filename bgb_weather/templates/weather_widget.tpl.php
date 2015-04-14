<?php

?>
<div ng-app="weatherApp" ng-controller="weatherController">
  <div class="weather-headline">{{city}} Weather</div>
  <div id="weather-feed" >
    <div class="weather-widget">
      <div>Current conditions</div>
      <div class="weather-icon"><img src = {{icon}} /></div>
      <div class="weather-skies">{{ skies }}</div>
      <div class="weather-temp">Temperature: {{ temp }}</div>
      <div class="weather-humiidity">Humidity:  {{humidity}}%</div>
    </div>
    <div id="location-form">
      <div class="location_input"><input type="text" ng-model="userLocation"></div>
      <div class="wc-button"><input type="button" ng-click="reload()" value="Change location"></div>
    </div>
  </div>
</div>
