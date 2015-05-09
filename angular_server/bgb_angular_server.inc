<?php

/**
 * Callback for '/angular_server' path
 * @return array
 */

function bgb_angular_server_page() {
  // We're using a CTools plugin for this
  ctools_include('content');
  $type = 'bgb_angular_server';
  $subtype = '';
  $conf = NULL;
  $keywords = $contexts = $args = array();

  // get our data from the plugin (bgb_angular_server.inc)
  $data = ctools_content_render($type, $subtype, $conf, $keywords, $args, $contexts);
  // pass the plugin data to our .tpl.php file via hook_theme()
  $content = theme('bgb_angular_server_block', $data->content);

  $page['title'] = '';
  $page['content'] = array(
    '#markup' => $content,
  );
  return $page;
}