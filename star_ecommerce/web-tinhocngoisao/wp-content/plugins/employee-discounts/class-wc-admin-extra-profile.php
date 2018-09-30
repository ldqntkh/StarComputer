<?php

/**
 * Plugin Name: WC_Admin_Extra_Profile
 * Plugin URI: https://web-tinhocngoisao.com/
 * Description: Add extra profile fields for users in admin
 * Version: 1.0
 * Author: Khai Truong
 * Author URI: https://web-tinhocngoisao.com/
 * License: GPL
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

if ( ! class_exists( 'WC_Admin_Extra_Profile', false ) ) :

    /**
     * WC_Admin_Extra_Profile Class.
     */
    class WC_Admin_Extra_Profile {

        /**
         * Hook in tabs.
         */
        public function on_loaded() {
            add_action( 'show_user_profile', array( $this, 'add_customer_meta_fields' ) );
            add_action( 'edit_user_profile', array( $this, 'add_customer_meta_fields' ) );

            add_action( 'personal_options_update', array( $this, 'save_customer_meta_fields' ) );
            add_action( 'edit_user_created_user', array( $this, 'save_customer_meta_fields' ) );
            add_action( 'edit_user_profile_update', array( $this, 'save_customer_meta_fields' ) );

            add_action( 'user_new_form', array( $this,'add_extra_profile_fields_to_registration_form' ) );
        }

        /**
         * Get Extra profile information for the edit user pages.
         *
         * @return array Fields to display which are filtered through woocommerce_customer_meta_fields before being returned
         */
        public function get_customer_meta_fields() {
            $show_fields = apply_filters(
                'woocommerce_customer_meta_fields', array(
                    'extra_profile_fields' => array(
                        'title'  => __( 'Extra profile information', 'employee-discounts' ),
                        'fields' => array(
                            'is_staff'        => array(
                                'label'       => __( 'Is staff', 'employee-discounts' ),
                                'description' => '',
                                'class'       => 'is-staff-checkbox',
                                'type'        => 'checkbox',
                                'text'        => __( 'Is staff', 'employee-discounts' ),
                            )
                        ),
                    ),
                )
            );
            return $show_fields;
        }

        /**
         * Show Address Fields on edit user pages.
         *
         * @param WP_User $user
         */
        public function add_customer_meta_fields( $user ) {
            if ( ! current_user_can( 'manage_woocommerce' ) ) {
                return;
            }

            // Load up the passed data, else set to a default.
            $creating = isset( $_POST['createuser'] );
            $user_id = isset( $user ) && isset( $user->ID ) ? (int) $user->ID : 0;
            $show_fields = $this->get_customer_meta_fields();

            foreach ( $show_fields as $fieldset_key => $fieldset ) :
                ?>
                <h2><?php echo $fieldset['title']; ?></h2>
                <table class="form-table" id="<?php echo esc_attr( 'fieldset-' . $fieldset_key ); ?>">
                    <?php foreach ( $fieldset['fields'] as $key => $field ) : ?>
                        <?php
                            $value = get_user_meta( $user_id, $key, true );
                            if ($creating) {
                                $value = $creating && isset( $_POST[$key] ) ? wp_unslash( $_POST[$key] ) : '';
                            }
                        ?>
                        <tr>
                            <th>
                                <label for="<?php echo esc_attr( $key ); ?>"><?php echo esc_html( $field['label'] ); ?></label>
                            </th>
                            <td>
                                <?php if ( ! empty( $field['type'] ) && 'select' === $field['type'] ) : ?>
                                    <select name="<?php echo esc_attr( $key ); ?>" id="<?php echo esc_attr( $key ); ?>" class="<?php echo esc_attr( $field['class'] ); ?>" style="width: 25em;">
                                        <?php
                                            $selected = esc_attr( $value );
                                        foreach ( $field['options'] as $option_key => $option_value ) :
                                            ?>
                                            <option value="<?php echo esc_attr( $option_key ); ?>" <?php selected( $selected, $option_key, true ); ?>><?php echo esc_attr( $option_value ); ?></option>
                                        <?php endforeach; ?>
                                    </select>
                                <?php elseif ( ! empty( $field['type'] ) && 'checkbox' === $field['type'] ) : ?>
                                    <input type="checkbox" name="<?php echo esc_attr( $key ); ?>" id="<?php echo esc_attr( $key ); ?>" value="1" class="<?php echo esc_attr( $field['class'] ); ?>" <?php checked( (int) $value, 1, true ); ?> />
                                <?php elseif ( ! empty( $field['type'] ) && 'button' === $field['type'] ) : ?>
                                    <button type="button" id="<?php echo esc_attr( $key ); ?>" class="button <?php echo esc_attr( $field['class'] ); ?>"><?php echo esc_html( $field['text'] ); ?></button>
                                <?php else : ?>
                                    <input type="text" name="<?php echo esc_attr( $key ); ?>" id="<?php echo esc_attr( $key ); ?>" value="<?php echo esc_attr( $value ); ?>" class="<?php echo ( ! empty( $field['class'] ) ? esc_attr( $field['class'] ) : 'regular-text' ); ?>" />
                                <?php endif; ?>
                                <br/>
                                <span class="description"><?php echo wp_kses_post( $field['description'] ); ?></span>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </table>
                <?php
            endforeach;
        }

        /**
         * Save Address Fields on edit user pages.
         *
         * @param int $user_id User ID of the user being saved
         */
        public function save_customer_meta_fields( $user_id ) {
            $save_fields = $this->get_customer_meta_fields();

            foreach ( $save_fields as $fieldset ) {

                foreach ( $fieldset['fields'] as $key => $field ) {

                    if ( isset( $field['type'] ) && 'checkbox' === $field['type'] ) {
                        update_user_meta( $user_id, $key, isset( $_POST[ $key ] ) );
                    } elseif ( isset( $_POST[ $key ] ) ) {
                        update_user_meta( $user_id, $key, wc_clean( $_POST[ $key ] ) );
                    }
                }
            }
        }

        /**
         * Add Extra profile information for the new user pages.
         *
         * @param Contexts $operation are 'add-existing-user' (Multisite) and 'add-new-user' (single site and network admin)
         */
        public function add_extra_profile_fields_to_registration_form($operation) {

            // $operation may also be 'add-existing-user'
            if ( 'add-new-user' !== $operation ) {
                return;
            }
            $this->add_customer_meta_fields(null);
        }

        public static function is_staff() {
            $user_id = get_current_user_id();
            return get_user_meta( $user_id, 'is_staff', true );
        }

    }

endif;

$wc_admin_extra_profile = new WC_Admin_Extra_Profile();
add_action('wp_loaded', array($wc_admin_extra_profile, 'on_loaded'));
