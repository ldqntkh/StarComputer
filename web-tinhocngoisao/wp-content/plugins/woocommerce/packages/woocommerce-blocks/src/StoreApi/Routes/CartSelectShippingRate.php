<?php
/**
 * Cart select shipping rate route.
 *
 * @package WooCommerce/Blocks
 */

namespace Automattic\WooCommerce\Blocks\StoreApi\Routes;

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Blocks\StoreApi\Utilities\CartController;

/**
 * CartSelectShippingRate class.
 */
class CartSelectShippingRate extends AbstractCartRoute {
	/**
	 * Get the path of this REST route.
	 *
	 * @return string
	 */
	public function get_path() {
		return '/cart/select-shipping-rate/(?P<package_id>[\d]+)';
	}

	/**
	 * Get method arguments for this REST route.
	 *
	 * @return array An array of endpoints.
	 */
	public function get_args() {
		return [
			[
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => [ $this, 'get_response' ],
				'permission_callback' => '__return_true',
				'args'                => [
					'package_id' => array(
						'description' => __( 'The ID of the package being shipped.', 'woocommerce' ),
						'type'        => 'integer',
						'required'    => true,
					),
					'rate_id'    => [
						'description' => __( 'The chosen rate ID for the package.', 'woocommerce' ),
						'type'        => 'string',
						'required'    => true,
					],
				],
			],
			'schema' => [ $this->schema, 'get_public_item_schema' ],
		];
	}

	/**
	 * Handle the request and return a valid response for this endpoint.
	 *
	 * @throws RouteException On error.
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	protected function get_route_post_response( \WP_REST_Request $request ) {
		if ( ! wc_shipping_enabled() ) {
			throw new RouteException( 'woocommerce_rest_shipping_disabled', __( 'Shipping is disabled.', 'woocommerce' ), 404 );
		}

		if ( ! isset( $request['package_id'] ) || ! is_numeric( $request['package_id'] ) ) {
			throw new RouteException( 'woocommerce_rest_cart_missing_package_id', __( 'Invalid Package ID.', 'woocommerce' ), 400 );
		}

		$controller = new CartController();
		$cart       = $controller->get_cart_instance();

		if ( $cart->needs_shipping() ) {
			$package_id = absint( $request['package_id'] );
			$rate_id    = wc_clean( wp_unslash( $request['rate_id'] ) );

			try {
				$controller->select_shipping_rate( $package_id, $rate_id );
			} catch ( \WC_Rest_Exception $e ) {
				throw new RouteException( $e->getErrorCode(), $e->getMessage(), $e->getCode() );
			}
		}
		$cart->calculate_shipping();
		$cart->calculate_totals();

		return rest_ensure_response( $this->schema->get_item_response( $cart ) );
	}
}
