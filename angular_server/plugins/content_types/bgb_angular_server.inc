<?php
// this adds the plugin to content types in panels
$plugin = array(
  'title' => t('Angular server'),
  'description' => t('Angular server block'),
  'category' => 'Widgets',
  'icon' => '',
  'render callback' => 'bgb_angular_server_block',
  'defaults' => array(),
);


// render callback
function bgb_angular_server_block() {
  $path = drupal_get_path('module', 'bgb_angular_server');
  drupal_add_js('http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js');
  drupal_add_js($path . '/js/bgb_angular_server.js');
  drupal_add_css($path . '/css/bgb_angular_server.css');
  $content = array(
    '#theme' => 'angular_server',
  );

  $block = new stdClass();
  $block->content = $content;
  $block->title = '';
  $block->id = 'bgb_angular_server_block';

  return $block;
}

