<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Acme Themes
 * @subpackage Online Shop
 */
?>
<div id="secondary-right" class="widget-area sidebar secondary-sidebar float-right" role="complementary">
	<div id="sidebar-section-top" class="widget-area sidebar clearfix">
		<?php dynamic_sidebar( 'sidebar-in-pdp' ); ?>
	</div>
</div>