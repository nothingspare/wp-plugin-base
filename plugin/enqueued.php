<?php
// Footer: scripts.js
add_action( 'wp_enqueue_scripts', 'oakridge_footer_scripts');
function oakridge_footer_scripts() {
    $enqueued_name = 'plugin_name_script';
    wp_register_script($enqueued_name, plugins_url('js/scripts.js', __FILE__), array('jquery'),'1.1', true);
    wp_enqueue_script($enqueued_name);
}

add_action( 'wp_enqueue_scripts', 'oakridge_footer_styles');
function oakridge_footer_styles() {
    $enqueued_name = 'plugin_name_style';
    wp_register_style($enqueued_name, plugins_url('css/styles.css', __FILE__));
    wp_enqueue_style($enqueued_name);
}