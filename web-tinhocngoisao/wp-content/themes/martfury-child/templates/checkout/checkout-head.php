
<?php 
    function renderMetaViewport() {
?>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php    }
    add_action('wp_head', 'renderMetaViewport');
    wp_head();
?>