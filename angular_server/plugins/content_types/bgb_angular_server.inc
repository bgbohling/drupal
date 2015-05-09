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
  // Add JS and CSS required for our server
  $types = node_type_get_names();
  $authors = _bgb_angular_server_get_authors();

  drupal_add_js(array('bgb_angular_server' => array('contentTypes' => $types, 'authors' => $authors)), 'setting');
  //drupal_add_js(array('bgb_angular_server' => array('authors' => $authors)), 'setting');

  $path = drupal_get_path('module', 'bgb_angular_server');
  $solstice = 'http://localhost/drupal-7.21/sites/all/lib/solstice/solstice.js';

  drupal_add_js('http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js');
  drupal_add_js($solstice);
  drupal_add_js($path . '/js/bgb_angular_server.js');
  drupal_add_css($path . '/css/bgb_angular_server.css');

  // since it's Angular, all the interesting stuff will be happening in the block tpl.php file and Javascript
  // but we've got to pass something along to the tpl.php
  $block = new stdClass();
  $block->content = array();
  $block->title = '';
  $block->id = 'bgb_angular_server_block';

  return $block;
}

function _bgb_angular_server_get_authors() {
  $authors = array();
  $result = db_query('SELECT DISTINCT uid FROM {node}');
  $users = $result->fetchAll();
  unset($users[0]);  // exclude anonymous
  foreach ($users as $author) {
    $user = user_load($author->uid);
    $authors[] = array(
      'uid' => $user->uid,
      'username' =>$user->name,
    );
  }
  return $authors;
}

