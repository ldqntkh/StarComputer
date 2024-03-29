<?php
/**
 * Rating Filter Widget and related functions.
 *
 * @package WooCommerce/Widgets
 * @version 2.6.0
 */

defined( 'ABSPATH' ) || exit;

/**
 * Widget rating filter class.
 */
class Rating_Filter extends WC_Widget {

	/**
	 * Constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Count products after other filters have occurred by adjusting the main query.
	 *
	 * @param  int $rating Rating.
	 * @return int
	 */
	protected function get_filtered_product_count( $rating ) {
		global $wpdb;

		$tax_query  = WC_Query::get_main_tax_query();
		$meta_query = WC_Query::get_main_meta_query();

		// Unset current rating filter.
		foreach ( $tax_query as $key => $query ) {
			if ( ! empty( $query['rating_filter'] ) ) {
				unset( $tax_query[ $key ] );
				break;
			}
		}

		// Set new rating filter.
		$product_visibility_terms = wc_get_product_visibility_term_ids();
		$tax_query[]              = array(
			'taxonomy'      => 'product_visibility',
			'field'         => 'term_taxonomy_id',
			'terms'         => $product_visibility_terms[ 'rated-' . $rating ],
			'operator'      => 'IN',
			'rating_filter' => true,
		);

		$meta_query     = new WP_Meta_Query( $meta_query );
		$tax_query      = new WP_Tax_Query( $tax_query );
		$meta_query_sql = $meta_query->get_sql( 'post', $wpdb->posts, 'ID' );
		$tax_query_sql  = $tax_query->get_sql( $wpdb->posts, 'ID' );

		$sql  = "SELECT COUNT( DISTINCT {$wpdb->posts}.ID ) FROM {$wpdb->posts} ";
		$sql .= $tax_query_sql['join'] . $meta_query_sql['join'];
		$sql .= " WHERE {$wpdb->posts}.post_type = 'product' AND {$wpdb->posts}.post_status = 'publish' ";
		$sql .= $tax_query_sql['where'] . $meta_query_sql['where'];

		$search = WC_Query::get_main_search_query_sql();
		if ( $search ) {
			$sql .= ' AND ' . $search;
		}

		return absint( $wpdb->get_var( $sql ) ); // WPCS: unprepared SQL ok.
	}

	/**
	 * Widget function.
	 *
	 * @see WP_Widget
	 * @param array $args     Arguments.
	 * @param array $instance Widget instance.
	 */
	public function renderRattingFilter( ) {
		if ( ! is_shop() && ! is_product_taxonomy() ) {
			return;
		}

		if ( ! wc()->query->get_main_query()->post_count ) {
			return;
		}

		ob_start();

		$found         = false;
		$rating_filter = isset( $_GET['rating_filter'] ) ? array_filter( array_map( 'absint', explode( ',', wp_unslash( $_GET['rating_filter'] ) ) ) ) : array(); // WPCS: input var ok, CSRF ok, sanitization ok.

		echo '<div class="product-filter-attri">';
        echo '<h5 class="filter-title" data_attri_id="ratting">'. 'Ratting' .'</h5>';
        echo '<div class="filter-attris" id="ratting">';
        echo '<div class="wrapper clearfix">';
        echo '<ul class="filter-ratting">';

		for ( $rating = 5; $rating >= 1; $rating-- ) {
			$count = $this->get_filtered_product_count( $rating );
			if ( empty( $count ) ) {
				continue;
			}
			$found = true;
			$link  = $this->get_current_page_url();

			if ( in_array( $rating, $rating_filter, true ) ) {
				$link_ratings = implode( ',', array_diff( $rating_filter, array( $rating ) ) );
			} else {
				$link_ratings = implode( ',', array_merge( $rating_filter, array( $rating ) ) );
			}

			$class       = in_array( $rating, $rating_filter, true ) ? 'wc-layered-nav-rating chosen' : 'wc-layered-nav-rating';
			$link        = apply_filters( 'woocommerce_rating_filter_link', $link_ratings ? add_query_arg( 'rating_filter', $link_ratings ) : remove_query_arg( 'rating_filter' ) );
			$rating_html = wc_get_star_rating_html( $rating );
			$count_html  = esc_html( apply_filters( 'woocommerce_rating_filter_count', "({$count})", $count, $rating ) );

			printf( '<li class="%s"><a href="%s"><span class="star-rating">%s</span> <span class="count-rating">%s</span></a></li>', esc_attr( $class ), esc_url( $link ), $rating_html, $count_html ); // WPCS: XSS ok.
		}

		echo '</ul>';
        echo '</div>';
        echo '</div>';
		echo '</div>';

		if ( ! $found ) {
			ob_end_clean();
		} else {
			echo ob_get_clean(); // WPCS: XSS ok.
		}
	}

	/**
	 * Widget function.
	 *
	 * @see WP_Widget
	 * @param array $args     Arguments.
	 * @param array $instance Widget instance.
	 */
	public function renderRattingFilterMobile( ) {
		if ( ! is_shop() && ! is_product_taxonomy() ) {
			return;
		}

		if ( ! wc()->query->get_main_query()->post_count ) {
			return;
		}

		ob_start();

		$found         = false;
		$rating_filter = isset( $_GET['rating_filter'] ) ? array_filter( array_map( 'absint', explode( ',', wp_unslash( $_GET['rating_filter'] ) ) ) ) : array(); // WPCS: input var ok, CSRF ok, sanitization ok.

		echo '<div class="product-filter-attri">';
		echo '<h5 class="filter-title" data_attri_id="ratting">'. 'Ratting' .'</h5>';
		echo '<i class="fa fa-angle-down"></i>';
        echo '<div class="filter-attris" id="ratting">';
        echo '<div class="wrapper clearfix">';
        echo '<ul class="filter-ratting">';

		for ( $rating = 5; $rating >= 1; $rating-- ) {
			$count = $this->get_filtered_product_count( $rating );
			if ( empty( $count ) ) {
				continue;
			}
			$found = true;
			$link  = $this->get_current_page_url();

			if ( in_array( $rating, $rating_filter, true ) ) {
				$link_ratings = implode( ',', array_diff( $rating_filter, array( $rating ) ) );
			} else {
				$link_ratings = implode( ',', array_merge( $rating_filter, array( $rating ) ) );
			}

			$class       = in_array( $rating, $rating_filter, true ) ? 'wc-layered-nav-rating chosen' : 'wc-layered-nav-rating';
			$link        = apply_filters( 'woocommerce_rating_filter_link', $link_ratings ? add_query_arg( 'rating_filter', $link_ratings ) : remove_query_arg( 'rating_filter' ) );
			$rating_html = wc_get_star_rating_html( $rating );
			$count_html  = esc_html( apply_filters( 'woocommerce_rating_filter_count', "({$count})", $count, $rating ) );

			printf( '<li class="%s"><a href="%s"><span class="star-rating">%s</span> <span class="count-rating">%s</span></a></li>', esc_attr( $class ), esc_url( $link ), $rating_html, $count_html ); // WPCS: XSS ok.
		}

		echo '</ul>';
        echo '</div>';
        echo '</div>';
		echo '</div>';

		if ( ! $found ) {
			ob_end_clean();
		} else {
			echo ob_get_clean(); // WPCS: XSS ok.
		}
	}
}
