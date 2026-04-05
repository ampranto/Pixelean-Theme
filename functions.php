<?php
function pixelean_scripts()
{
    // Compiled Tailwind CSS load kora hocche
    wp_enqueue_style('pixelean-tailwind', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');

    // Custom JS
    wp_enqueue_script('pixelean-js', get_template_directory_uri() . '/assets/js/scripts.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'pixelean_scripts');
