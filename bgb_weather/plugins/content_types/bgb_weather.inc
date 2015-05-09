<?php
// this adds the plugin to content types in panels
$plugin = array(
  'title' => t('Weather Channel feed'),
  'description' => t('Live weather data from WC'),
  'category' => 'Widgets',
  'icon' => '',
  'render callback' => 'bgb_weather_block',
  'defaults' => array(),
);


// render callback
function bgb_weather_block() {
  $path = drupal_get_path('module', 'bgb_weather');
  drupal_add_js('http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js');
  drupal_add_js($path . '/js/bgb_weather_angular.js');
  drupal_add_css($path . '/css/bgb_weather.css');
  $content = array(
    '#theme' => 'weather_widget',
  );

  $block = new stdClass();
  $block->content = $content;
  $block->title = '';
  $block->id = 'bgb_weather_block';

  return $block;
}