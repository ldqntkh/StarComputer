<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Acme Themes
 * @subpackage Online Shop
 */
    get_header(); 
    $page_class = "";
    if (is_cart()) $page_class = "single-cart-page";
    if (is_checkout()) $page_class = "single-checkout-page";
?>

	<div id="primary" class="content-area <?php echo $page_class; ?>">
		<main id="main" class="site-main">
			<?php
            while ( have_posts() ) : the_post();

			    get_template_part( 'template-parts/content', 'page' );

                // If comments are open or we have at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) :
                    comments_template();
                endif;
            endwhile; // End of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary -->
<?php
if ( !empty( is_cart() ) || !empty( is_checkout() ) ) {
    if (!is_checkout())
        get_sidebar( 'cart-right' );
} else {
    get_sidebar( 'left' );
    get_sidebar();
}
get_footer();