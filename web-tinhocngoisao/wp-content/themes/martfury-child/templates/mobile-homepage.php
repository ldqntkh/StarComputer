<?php
/**
 * Template Name: Mobile HomePage
 *
 * The template file for displaying home page.
 *
 * @package Martfury
 */

if( !wp_is_mobile() ) {
    wp_redirect(home_url(), 301);
    die;
}

get_header(); ?>

<?php
if ( have_posts() ) :
	while ( have_posts() ) : the_post();
		the_content();
	endwhile;

endif;
?>
<?php get_footer(); ?>
