<?php

/**
 * Callback for '/home_page' path
 * @return array
 */
function bgb_angular_server_home() {
  //$content = 'This here is coming from a Drupal menu callback.  Next up, get Solr going, and replace this lame shit with the results of a Solr search';

  $server = search_api_server_load('solr'); // CHANGE THIS
  $index = search_api_index_load('index_1'); // CHANGE THIS
  $query = new SearchApiQuery($index);

 // $filter = $query->createFilter('OR');
 // $filter->condition('type', 'article', '=');
 // $filter->condition('type', 'blog_post', '=');
 // $query->filter($filter);

  // Conditions.
  $query->condition('type', 'article', '=');
  //$query->condition('language', $language->language, '=');
  //$query->sort('timestamp_field');

  // Fetch results.
  $results = $query->execute()['results'];
  foreach ($results as $result){
    $node = node_load($result['id']);
    $return[$result['id']] = array(
      'title' => $node->title,
      'body' => $node->body['und'][0]['value'],
    );
  }
  $content = $return;


  return array('content'=>$content);
}
