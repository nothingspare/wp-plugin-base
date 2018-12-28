<?php

add_shortcode('plugin_shortcode', 'plugin_name_shortcode');

function plugin_name_shortcode($atts) {
  $attributes = shortcode_atts([
    'default' => 'default'
  ], $atts);
  return 'SHORTCODE OUTPUT ' . $attributes['default'];
}
