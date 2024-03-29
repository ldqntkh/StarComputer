<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class es_cls_registerhook {
	public static function es_activation() {
		global $wpdb;

		add_option( 'email-subscribers', "2.9" );

		// Creating default tables
		global $wpdb;

		$charset_collate = '';
		$charset_collate = $wpdb->get_charset_collate();

		$es_default_tables = "CREATE TABLE {$wpdb->prefix}es_emaillist (
									es_email_id INT unsigned NOT NULL AUTO_INCREMENT,
									es_email_name VARCHAR(255) NOT NULL,
									es_email_mail VARCHAR(255) NOT NULL,
									es_email_status VARCHAR(25) NOT NULL default 'Unconfirmed',
									es_email_created datetime NOT NULL default '0000-00-00 00:00:00',
									es_email_viewcount VARCHAR(100) NOT NULL,
									es_email_group VARCHAR(255) NOT NULL default 'Public',
									es_email_guid VARCHAR(255) NOT NULL,
									PRIMARY KEY  (es_email_id)
									) $charset_collate;
								CREATE TABLE {$wpdb->prefix}es_notification (
									es_note_id INT unsigned NOT NULL AUTO_INCREMENT,
									es_note_cat TEXT NULL,
									es_note_group VARCHAR(255) NOT NULL,
									es_note_templ INT unsigned NOT NULL,
									es_note_status VARCHAR(10) NOT NULL default 'Enable',
									PRIMARY KEY  (es_note_id)
								) $charset_collate;
								CREATE TABLE {$wpdb->prefix}es_sentdetails (
									es_sent_id INT unsigned NOT NULL AUTO_INCREMENT,
									es_sent_guid VARCHAR(255) NOT NULL,
									es_sent_qstring VARCHAR(255) NOT NULL,
									es_sent_source VARCHAR(255) NOT NULL,
									es_sent_starttime datetime NOT NULL default '0000-00-00 00:00:00',
									es_sent_endtime datetime NOT NULL default '0000-00-00 00:00:00',
									es_sent_count INT unsigned NOT NULL,
									es_sent_preview TEXT NULL,
									es_sent_status VARCHAR(25) NOT NULL default 'Sent',
									es_sent_type VARCHAR(25) NOT NULL default 'Immediately',
									es_sent_subject VARCHAR(255) NOT NULL,
									PRIMARY KEY  (es_sent_id)
								) $charset_collate;
								CREATE TABLE {$wpdb->prefix}es_deliverreport (
									es_deliver_id INT unsigned NOT NULL AUTO_INCREMENT,
									es_deliver_sentguid VARCHAR(255) NOT NULL,
									es_deliver_emailid INT unsigned NOT NULL,
									es_deliver_emailmail VARCHAR(255) NOT NULL,
									es_deliver_sentdate datetime NOT NULL default '0000-00-00 00:00:00',
									es_deliver_status VARCHAR(25) NOT NULL,
									es_deliver_viewdate datetime NOT NULL default '0000-00-00 00:00:00',
									es_deliver_sentstatus VARCHAR(25) NOT NULL default 'Sent',
									es_deliver_senttype VARCHAR(25) NOT NULL default 'Immediately',
									PRIMARY KEY  (es_deliver_id)
								) $charset_collate;
							";

		require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
		dbDelta( $es_default_tables );

		$es_default_table_names = array( 'es_emaillist', 'es_notification', 'es_sentdetails', 'es_deliverreport' );

		$es_has_errors     = false;
		$es_missing_tables = array();
		foreach ( $es_default_table_names as $table_name ) {
			if ( strtoupper( $wpdb->get_var( "SHOW TABLES like  '" . $wpdb->prefix . $table_name . "'" ) ) != strtoupper( $wpdb->prefix . $table_name ) ) {
				$es_missing_tables[] = $wpdb->prefix . $table_name;
			}
		}

		if ( $es_missing_tables ) {
			$errors[]      = __( 'These tables could not be created on installation ' . implode( ', ', $es_missing_tables ), ES_TDOMAIN );
			$es_has_errors = true;
		}

		// if error call wp_die()
		if ( $es_has_errors ) {
			wp_die( __( $errors[0], ES_TDOMAIN ) );

			return false;
		} else {
			// Inserting dummy data on first activation
			es_cls_default::es_pluginconfig_default();
			es_cls_default::es_subscriber_default();
			es_cls_default::es_template_default();
			update_option( 'ig_es_sample_data_imported', 'yes' );
			
			//current version and date on activation
			$es_plugin_meta_data = get_plugin_data( WP_PLUGIN_DIR . '/email-subscribers/email-subscribers.php' );
			$es_current_version  = $es_plugin_meta_data['Version'];

			$timezone_format = _x( 'Y-m-d H:i:s', 'timezone date format' );
			$es_current_date = date_i18n( $timezone_format );

			$es_current_version_date_details = array(
				'es_current_version' => '',
				'es_current_date'    => ''
			);

			$es_current_version_date_details['es_current_version'] = $es_current_version;
			$es_current_version_date_details['es_current_date']    = $es_current_date;

			update_option( 'ig_es_current_version_date_details', $es_current_version_date_details, 'no' );

		}

		if ( ! is_network_admin() && ! isset( $_GET['activate-multi'] ) ) {
			set_transient( '_es_activation_redirect', 1, 30 );
		}

		return true;
	}

	/**
	 * Sends user to the help & info page on activation.
	 */
	public static function es_welcome() {

		if ( ! get_transient( '_es_activation_redirect' ) ) {
			return;
		}

		// Delete the redirect transient
		delete_transient( '_es_activation_redirect' );

		wp_redirect( admin_url( 'admin.php?page=es-general-information' ) );
		exit;
	}

	public static function es_synctables() {
		$es_c_email_subscribers_ver = get_option( "email-subscribers" );

		if ( $es_c_email_subscribers_ver != "2.9" ) {

			$guid     = es_cls_common::es_generate_guid( 60 );
			$home_url = home_url( '/' );
			$blogname = get_option( 'blogname' );
			$cronurl  = $home_url . "?es=cron&guid=" . $guid;

			add_option( "ig_es_cronurl", $cronurl );
			add_option( "ig_es_cron_mailcount", "50" );
			add_option( "ig_es_cron_adminmail", "Hi Admin,\r\n\r\nCron URL has been triggered successfully on {{DATE}} for the email '{{SUBJECT}}'. And it sent email to {{COUNT}} recipient(s).\r\n\r\nBest,\r\n" . $blogname . "" );

			update_option( "email-subscribers", "2.9" );
		}
	}

	public static function es_deactivation() {
		// do not generate any output here
	}

	public static function es_admin_option() {
		// do not generate any output here
	}

	public static function es_adminmenu() {
		$post                      = get_post_types();
		$es_c_rolesandcapabilities = get_option( 'ig_es_rolesandcapabilities', 'norecord' );
		if ( $es_c_rolesandcapabilities == 'norecord' || $es_c_rolesandcapabilities == "" ) {
			$es_roles_subscriber   = "manage_options";
			$es_roles_mail         = "manage_options";
			$es_roles_notification = "manage_options";
			$es_roles_sendmail     = "manage_options";
			$es_roles_sentmail     = "manage_options";
		} else {
			$es_roles_subscriber   = $es_c_rolesandcapabilities['es_roles_subscriber'];
			$es_roles_mail         = $es_c_rolesandcapabilities['es_roles_mail'];
			$es_roles_notification = $es_c_rolesandcapabilities['es_roles_notification'];
			$es_roles_sendmail     = $es_c_rolesandcapabilities['es_roles_sendmail'];
			$es_roles_sentmail     = $es_c_rolesandcapabilities['es_roles_sentmail'];
		}
		$active_plugins = (array) get_option( 'active_plugins', array() );
		if ( is_multisite() ) {
			$active_plugins = array_merge( $active_plugins, get_site_option( 'active_sitewide_plugins', array() ) );
		}

		add_menu_page( __( 'Email Subscribers', ES_TDOMAIN ),
			__( 'Email Subscribers', ES_TDOMAIN ), 'edit_posts', 'es-view-subscribers', array( 'es_cls_intermediate', 'es_subscribers' ), 'dashicons-email', 51 );

		add_submenu_page( 'es-view-subscribers', __( 'Subscribers', ES_TDOMAIN ),
			__( 'Subscribers', ES_TDOMAIN ), $es_roles_subscriber, 'es-view-subscribers', array( 'es_cls_intermediate', 'es_subscribers' ) );

		add_submenu_page( 'es-view-subscribers', __( 'Templates', ES_TDOMAIN ),
			__( 'Templates', ES_TDOMAIN ), $es_roles_mail, 'edit.php?post_type=es_template', null );

		add_submenu_page( 'es-view-subscribers', __( 'Post Notifications', ES_TDOMAIN ),
			__( 'Post Notifications', ES_TDOMAIN ), $es_roles_notification, 'es-notification', array( 'es_cls_intermediate', 'es_notification' ) );

		add_submenu_page( 'es-view-subscribers', __( 'Newsletters', ES_TDOMAIN ),
			__( 'Newsletters', ES_TDOMAIN ), $es_roles_sendmail, 'es-sendemail', array( 'es_cls_intermediate', 'es_sendemail' ) );

		add_submenu_page( 'es-view-subscribers', __( 'Settings', ES_TDOMAIN ),
			__( 'Settings', ES_TDOMAIN ), 'manage_options', 'es-settings', array( 'es_cls_intermediate', 'es_settings' ) );

		add_submenu_page( 'es-view-subscribers', __( 'Reports', ES_TDOMAIN ),
			__( 'Reports', ES_TDOMAIN ), $es_roles_sentmail, 'es-sentmail', array( 'es_cls_intermediate', 'es_sentmail' ) );

		add_submenu_page( 'es-view-subscribers', __( 'Help & Info', ES_TDOMAIN ),
			__( '<span style="color:#f18500;font-weight:bolder;">Help & Info</span>', ES_TDOMAIN ), 'edit_posts', 'es-general-information', array( 'es_cls_intermediate', 'es_information' ) );

		if ( ! ( in_array( 'email-subscribers-premium/email-subscribers-premium.php', $active_plugins ) || array_key_exists( 'email-subscribers-premium/email-subscribers-premium.php', $active_plugins ) ) ) {
			add_submenu_page( 'es-view-subscribers', __( 'Go Pro', ES_TDOMAIN ),
				__( '<span style="color:#03a025;font-weight:bolder;">Go Pro</span>', ES_TDOMAIN ), 'edit_posts', 'es-pricing', array( 'es_cls_intermediate', 'es_pricing' ) );
		}
	}

	public static function es_load_scripts() {

		if ( ! empty( $_GET['page'] ) ) {
			switch ( $_GET['page'] ) {
				case 'es-view-subscribers':
					wp_register_script( 'es-view-subscribers', ES_URL . 'subscribers/view-subscriber.js', '', '', true );
					wp_enqueue_script( 'es-view-subscribers' );
					$es_select_params = array(
						'es_subscriber_email'          => _x( 'Please enter subscriber email address.', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_email_status'   => _x( 'Please select subscriber email status.', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_group'          => _x( 'Please select or create group for this subscriber.', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_delete_record'  => _x( 'Do you want to delete this record?', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_bulk_action'    => _x( 'Please select the bulk action.', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_confirm_delete' => _x( 'Are you sure you want to delete selected records?', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_resend_email'   => _x( 'Do you want to resend confirmation email? Also please note, this will update subscriber current status to \'Unconfirmed\'.', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_new_group'      => _x( 'Please select new subscriber group.', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_new_status'     => _x( 'Please select new status for subscribers', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_group_update'   => _x( 'Do you want to update subscribers group?', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_status_update'  => _x( 'Do you want to update subscribers status?', 'view-subscriber-enhanced-select', ES_TDOMAIN ),
						'es_subscriber_csv_file'       => _x( 'Please select only csv file. Please check official website for csv structure..', 'view-subscriber-enhanced-select', ES_TDOMAIN )
					);
					wp_localize_script( 'es-view-subscribers', 'es_view_subscriber_notices', $es_select_params );
					break;
				case 'es-notification':
					wp_register_script( 'es-notification', ES_URL . 'notification/notification.js', '', '', true );
					wp_enqueue_script( 'es-notification' );
					$es_select_params = array(
						'es_notification_select_group'  => _x( 'Please select subscribers group.', 'notification-enhanced-select', ES_TDOMAIN ),
						'es_notification_mail_subject'  => _x( 'Please select notification mail subject. Use templates menu to create new.', 'notification-enhanced-select', ES_TDOMAIN ),
						'es_notification_status'        => _x( 'Please select notification status.', 'notification-enhanced-select', ES_TDOMAIN ),
						'es_notification_delete_record' => _x( 'Do you want to delete this record?', 'notification-enhanced-select', ES_TDOMAIN )
					);
					wp_localize_script( 'es-notification', 'es_notification_notices', $es_select_params );
					break;
				case 'es-sendemail':
					wp_register_script( 'sendmail', ES_URL . 'sendmail/sendmail.js', '', '', true );
					wp_enqueue_script( 'sendmail' );
					$es_select_params = array(
						'es_sendmail_subject' => _x( 'Please select your mail subject.', 'sendmail-enhanced-select', ES_TDOMAIN ),
						'es_sendmail_status'  => _x( 'Please select your mail type.', 'sendmail-enhanced-select', ES_TDOMAIN ),
						'es_sendmail_confirm' => _x( 'Have you double checked your selected group? If so, let\'s go ahead and send this.', 'sendmail-enhanced-select', ES_TDOMAIN )
					);
					wp_localize_script( 'sendmail', 'es_sendmail_notices', $es_select_params );
					break;
				case 'es-sentmail':
					wp_register_script( 'es-sentmail', ES_URL . 'sentmail/sentmail.js', '', '', true );
					wp_enqueue_script( 'es-sentmail' );
					$es_select_params = array(
						'es_sentmail_delete'     => _x( 'Do you want to delete this record?', 'sentmail-enhanced-select', ES_TDOMAIN ),
						'es_sentmail_delete_all' => _x( 'Do you want to delete all records except latest 10?', 'sentmail-enhanced-select', ES_TDOMAIN )
					);
					wp_localize_script( 'es-sentmail', 'es_sentmail_notices', $es_select_params );
					break;
				case 'es-settings':
					wp_register_script( 'es-settings', ES_URL . 'settings/es-settings.js', '', '', true );
					wp_enqueue_script( 'es-settings' );
					$es_select_params = array(
						'es_cron_number'     => _x( 'Please select enter number of mails you want to send per hour/trigger.', 'cron-enhanced-select', ES_TDOMAIN ),
						'es_cron_input_type' => _x( 'Please enter the mail count, only number.', 'cron-enhanced-select', ES_TDOMAIN )
					);
					wp_localize_script( 'es-settings', 'es_cron_notices', $es_select_params );
					break;
			}
		}
	}

	public static function es_load_widget_scripts_styles() {

		wp_register_script( 'es-widget-page', ES_URL . 'widget/es-widget-page.js', array( 'jquery' ), '', true );
		wp_enqueue_script( 'es-widget-page' );
		$es_select_params = array(
			'es_email_notice'    => _x( 'Xin vui lòng nhập địa chỉ email', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_success_message' => _x( 'Đăng ký thành công.', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_success_notice'  => _x( 'Bạn đã đăng ký thành công! Vui lòng kiểm tra email và xác nhận. Nếu bạn không thấy mail trong vòng vài phút, vui lòng kiểm tra trong hộp thư spam hoặc rác', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_email_exists'    => _x( 'Email Address already exists!', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_error'           => _x( 'Xin lỗi! Có 1 lỗi bất ngờ không may xảy ra.', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_invalid_email'   => _x( 'Địa chỉ email không hợp lệ', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_try_later'       => _x( 'Xin vui lòng thử lại', 'widget-page-enhanced-select', ES_TDOMAIN ),
			'es_ajax_url'        => admin_url( 'admin-ajax.php' ),
		);
		wp_localize_script( 'es-widget-page', 'es_widget_page_notices', $es_select_params );

		wp_register_style( 'es-widget-css', ES_URL . 'widget/es-widget.css' );
		wp_enqueue_style( 'es-widget-css' );

	}

	public static function es_widget_loading() {
		register_widget( 'es_widget_register' );
	}

	// Function for Klawoo's Subscribe form on Help & Info page
	public static function klawoo_subscribe() {
		$url = 'http://app.klawoo.com/subscribe';

		if ( ! empty( $_POST ) ) {
			$params = $_POST;
		} else {
			exit();
		}
		$method = 'POST';
		$qs     = http_build_query( $params );

		$options = array(
			'timeout' => 15,
			'method'  => $method
		);

		if ( $method == 'POST' ) {
			$options['body'] = $qs;
		} else {
			if ( strpos( $url, '?' ) !== false ) {
				$url .= '&' . $qs;
			} else {
				$url .= '?' . $qs;
			}
		}

		$response = wp_remote_request( $url, $options );

		if ( wp_remote_retrieve_response_code( $response ) == 200 ) {
			$data = $response['body'];
			if ( $data != 'error' ) {

				$message_start = substr( $data, strpos( $data, '<body>' ) + 6 );
				$remove        = substr( $message_start, strpos( $message_start, '</body>' ) );
				$message       = trim( str_replace( $remove, '', $message_start ) );
				echo( $message );
				exit();
			}
		}
		exit();
	}

	/**
	 * Update current_sa_email_subscribers_db_version
	 */
	public static function sa_email_subscribers_db_update() {

		if ( get_option( 'current_sa_email_subscribers_db_version' ) === false ) {
			es_cls_registerhook::es_upgrade_database_for_3_2();
		}

		if ( get_option( 'current_sa_email_subscribers_db_version' ) === '3.2' ) {
			es_cls_registerhook::es_upgrade_database_for_3_2_7();
		}

		if ( get_option( 'current_sa_email_subscribers_db_version' ) === '3.2.7' ) {
			es_cls_registerhook::es_upgrade_database_for_3_3();
		}

		if ( get_option( 'current_sa_email_subscribers_db_version' ) === '3.3' ) {
			es_cls_registerhook::es_upgrade_database_for_3_3_6();
		}

		if ( get_option( 'current_sa_email_subscribers_db_version' ) === '3.3.6' ) {
			es_cls_registerhook::es_upgrade_database_for_3_4_0();
		}
	}

	/**
	 * To update sync email option to remove Commented user & it's group - ig_es_sync_wp_users
	 * ES version 3.2 onwards
	 */
	public static function es_upgrade_database_for_3_2() {

		$sync_subscribers = get_option( 'ig_es_sync_wp_users' );

		$es_unserialized_data = maybe_unserialize( $sync_subscribers );
		unset( $es_unserialized_data['es_commented'] );
		unset( $es_unserialized_data['es_commented_group'] );

		$es_serialized_data = serialize( $es_unserialized_data );
		update_option( 'ig_es_sync_wp_users', $es_serialized_data );

		update_option( 'current_sa_email_subscribers_db_version', '3.2' );
	}

	/**
	 * To rename a few terms in compose & reports menu
	 * ES version 3.2.7 onwards
	 */
	public static function es_upgrade_database_for_3_2_7() {

		global $wpdb;

		// Compose table
		$template_table_exists = $wpdb->query( "SHOW TABLES LIKE '{$wpdb->prefix}es_templatetable'" );
		if ( $template_table_exists > 0 ) {
			$wpdb->query( "UPDATE {$wpdb->prefix}es_templatetable
						   SET es_email_type =
						   ( CASE
								WHEN es_email_type = 'Static Template' THEN 'Newsletter'
								WHEN es_email_type = 'Dynamic Template' THEN 'Post Notification'
								ELSE es_email_type
							 END ) " );
		}

		// Sent Details table
		$wpdb->query( "UPDATE {$wpdb->prefix}es_sentdetails
					   SET es_sent_type =
					   ( CASE
							WHEN es_sent_type = 'Instant Mail' THEN 'Immediately'
							WHEN es_sent_type = 'Cron Mail' THEN 'Cron'
							ELSE es_sent_type
						 END ),
						   es_sent_source =
					   ( CASE
							WHEN es_sent_source = 'manual' THEN 'Newsletter'
							WHEN es_sent_source = 'notification' THEN 'Post Notification'
							ELSE es_sent_source
					   END ) " );

		// Delivery Reports table
		$wpdb->query( "UPDATE {$wpdb->prefix}es_deliverreport
					   SET es_deliver_senttype =
					   ( CASE
							WHEN es_deliver_senttype = 'Instant Mail' THEN 'Immediately'
							WHEN es_deliver_senttype = 'Cron Mail' THEN 'Cron'
							ELSE es_deliver_senttype
						 END ) " );

		update_option( 'current_sa_email_subscribers_db_version', '3.2.7' );
	}

	/**
	 * To migrate Email Settings data from custom pluginconfig table to wordpress options table and to update user roles
	 * ES version 3.3 onwards
	 */
	public static function es_upgrade_database_for_3_3() {
		global $wpdb;

		$settings_to_rename = array(
			'es_c_fromname'         => 'ig_es_fromname',
			'es_c_fromemail'        => 'ig_es_fromemail',
			'es_c_mailtype'         => 'ig_es_emailtype',
			'es_c_adminmailoption'  => 'ig_es_notifyadmin',
			'es_c_adminemail'       => 'ig_es_adminemail',
			'es_c_adminmailsubject' => 'ig_es_admin_new_sub_subject',
			'es_c_adminmailcontant' => 'ig_es_admin_new_sub_content',
			'es_c_usermailoption'   => 'ig_es_welcomeemail',
			'es_c_usermailsubject'  => 'ig_es_welcomesubject',
			'es_c_usermailcontant'  => 'ig_es_welcomecontent',
			'es_c_optinoption'      => 'ig_es_optintype',
			'es_c_optinsubject'     => 'ig_es_confirmsubject',
			'es_c_optincontent'     => 'ig_es_confirmcontent',
			'es_c_optinlink'        => 'ig_es_optinlink',
			'es_c_unsublink'        => 'ig_es_unsublink',
			'es_c_unsubtext'        => 'ig_es_unsubcontent',
			'es_c_unsubhtml'        => 'ig_es_unsubtext',
			'es_c_subhtml'          => 'ig_es_successmsg',
			'es_c_message1'         => 'ig_es_suberror',
			'es_c_message2'         => 'ig_es_unsuberror',
		);

		$options_to_rename = array(
			'es_c_post_image_size'      => 'ig_es_post_image_size',
			'es_c_sentreport'           => 'ig_es_sentreport',
			'es_c_sentreport_subject'   => 'ig_es_sentreport_subject',
			'es_c_rolesandcapabilities' => 'ig_es_rolesandcapabilities',
			'es_c_cronurl'              => 'ig_es_cronurl',
			'es_cron_mailcount'         => 'ig_es_cron_mailcount',
			'es_cron_adminmail'         => 'ig_es_cron_adminmail',
			'es_c_emailsubscribers'     => 'ig_es_sync_wp_users',
		);

		// Rename options that were previously stored
		foreach ( $options_to_rename as $old_option_name => $new_option_name ) {
			$option_value = get_option( $old_option_name );
			if ( $option_value ) {
				update_option( $new_option_name, $option_value );
				delete_option( $old_option_name );
			}
		}

		// Do not pull data for new users as there is no pluginconfig table created on activation
		$table_exists = $wpdb->query( "SHOW TABLES LIKE '{$wpdb->prefix}es_pluginconfig'" );

		if ( $table_exists > 0 ) {
			// Pull out ES settings data of existing users and move them to options table
			$settings_data = es_cls_settings::es_setting_select( 1 );
			if ( ! empty( $settings_data ) ) {
				foreach ( $settings_data as $name => $value ) {
					if ( array_key_exists( $name, $settings_to_rename ) ) {
						update_option( $settings_to_rename[ $name ], $value );
					}
				}
			}
		}

		//Update User Roles Settings
		$es_c_rolesandcapabilities = get_option( 'ig_es_rolesandcapabilities', 'norecord' );

		if ( $es_c_rolesandcapabilities != 'norecord' ) {
			$remove_roles = array( 'es_roles_setting', 'es_roles_help' );
			foreach ( $es_c_rolesandcapabilities as $role_name => $role_value ) {
				if ( in_array( $role_name, $remove_roles ) ) {
					unset( $es_c_rolesandcapabilities[ $role_name ] );
				}
			}
			update_option( 'ig_es_rolesandcapabilities', $es_c_rolesandcapabilities );
		}

		update_option( 'current_sa_email_subscribers_db_version', '3.3' );
	}

	/**
	 * To alter templatable for extra slug column - to support new template designs
	 * ES version 3.3.6 onwards
	 */
	public static function es_upgrade_database_for_3_3_6() {

		global $wpdb;

		$template_table_exists = $wpdb->query( "SHOW TABLES LIKE '{$wpdb->prefix}es_templatetable'" );
		if ( $template_table_exists > 0 ) {

			// To check if column es_templ_slug exists or not
			$es_template_col      = "SHOW COLUMNS FROM {$wpdb->prefix}es_templatetable LIKE 'es_templ_slug' ";
			$results_template_col = $wpdb->get_results( $es_template_col, 'ARRAY_A' );
			$template_num_rows    = $wpdb->num_rows;

			// If column doesn't exists, then insert it
			if ( $template_num_rows != '1' ) {
				// Template table
				$wpdb->query( "ALTER TABLE {$wpdb->prefix}es_templatetable
								ADD COLUMN es_templ_slug VARCHAR(255) NULL
								AFTER es_email_type" );
			}
		}

		update_option( 'current_sa_email_subscribers_db_version', '3.3.6' );

	}

	/**
	 * To convert Compose to Custom Post Type (to support new template designs) AND Converting keywords structure
	 * ES version 3.4.0 onwards
	 */
	public static function es_upgrade_database_for_3_4_0() {

		global $wpdb;

		// MIGRATION OF TEMPLATE TABLE TO CTP
		$es_template_table_exists = $wpdb->query( "SHOW TABLES LIKE '{$wpdb->prefix}es_templatetable'" );
		if ( $es_template_table_exists > 0 ) {

			$es_migration_success = get_option( 'es_template_migration_done', 'nodata' );
			if ( $es_migration_success == 'yes' ) {
				return;
			}

			$sSql   = "SELECT es_tt.*,
							 IFNULL(es_not.es_note_id, '') as es_note_id
					FROM {$wpdb->prefix}es_templatetable AS es_tt
					LEFT JOIN {$wpdb->prefix}es_notification AS es_not
						ON(es_not.es_note_templ = es_tt.es_templ_id)";
			$arrRes = $wpdb->get_results( $sSql, ARRAY_A );

			if ( ! empty( $arrRes ) ) {

				$es_note_ids = array();

				foreach ( $arrRes as $tmpl ) {
					// Create post object
					$es_post = array(
						'post_title'   => wp_strip_all_tags( $tmpl['es_templ_heading'] ),
						'post_content' => $tmpl['es_templ_body'],
						'post_status'  => 'publish',
						'post_type'    => 'es_template',
						'meta_input'   => array(
							'es_template_type' => $tmpl['es_email_type']
						)
					);
					// Insert the post into the database
					$last_inserted_id = wp_insert_post( $es_post );

					if ( $tmpl['es_email_type'] == 'Post Notification' && ! empty( $tmpl['es_note_id'] ) ) {
						$es_note_ids[] = 'WHEN es_note_id = ' . $tmpl['es_note_id'] . ' THEN ' . $last_inserted_id;
					}
				}

				if ( ! empty( $es_note_ids ) ) {
					// To update the 'es_note_templ' ids
					$sSql = "UPDATE {$wpdb->prefix}es_notification SET es_note_templ = (CASE " . implode( " ", $es_note_ids ) . " END)";
					$wpdb->query( $sSql );
				}

			}

			update_option( 'es_template_migration_done', 'yes' );
		}
		// END

		// Keywords in Compose table
		$keywords_to_rename_in_compose = array(
			'###NAME###'               => '{{NAME}}',
			'###EMAIL###'              => '{{EMAIL}}',
			'###DATE###'               => '{{DATE}}',
			'###POSTTITLE###'          => '{{POSTTITLE}}',
			'###POSTIMAGE###'          => '{{POSTIMAGE}}',
			'###POSTDESC###'           => '{{POSTDESC}}',
			'###POSTFULL###'           => '{{POSTFULL}}',
			'###POSTAUTHOR###'         => '{{POSTAUTHOR}}',
			'###POSTLINK###'           => '{{POSTLINK}}',
			'###POSTLINK-ONLY###'      => '{{POSTLINK-ONLY}}',
			'###POSTLINK-WITHTITLE###' => '{{POSTLINK-WITHTITLE}}',
		);

		// Keywords in Settings
		$keywords_in_settings_to_rename = array(
			'###NAME###'      => '{{NAME}}',
			'###EMAIL###'     => '{{EMAIL}}',
			'###GROUP###'     => '{{GROUP}}',
			'###COUNT###'     => '{{COUNT}}',
			'###UNIQUE###'    => '{{UNIQUE}}',
			'###STARTTIME###' => '{{STARTTIME}}',
			'###ENDTIME###'   => '{{ENDTIME}}',
			'###LINK###'      => '{{LINK}}',
			'###DATE###'      => '{{DATE}}',
			'###SUBJECT###'   => '{{SUBJECT}}',
			'###DBID###'      => '{{DBID}}',
			'###GUID###'      => '{{GUID}}',
		);

		// Updating keywords in post_title column where `post_type` = 'es_template'
		$es_post_title_query = "UPDATE {$wpdb->prefix}posts SET post_title = REPLACE(post_title,'###POSTTITLE###','{{POSTTITLE}}') WHERE post_type = 'es_template'";
		$wpdb->query( $es_post_title_query );

		// Updating keywords in post_content column where `post_type` = 'es_template'
		$compose_keywords = array();
		foreach ( $keywords_to_rename_in_compose as $key => $value ) {
			$compose_keywords[] = "post_content = REPLACE(post_content,'" . $key . "','" . $value . "')";
		}

		$es_post_content_query = "UPDATE {$wpdb->prefix}posts SET " . implode( ", ", $compose_keywords ) . " WHERE post_type = 'es_template'";
		$wpdb->query( $es_post_content_query );

		// Updating keywords in options
		$es_admin_new_sub_content = get_option( 'ig_es_admin_new_sub_content', 'nodata' );
		$es_sent_report_content   = get_option( 'ig_es_sentreport', 'nodata' );
		$es_confirm_content       = get_option( 'ig_es_confirmcontent', 'nodata' );
		$es_welcome_content       = get_option( 'ig_es_welcomecontent', 'nodata' );
		$es_unsub_content         = get_option( 'ig_es_unsubcontent', 'nodata' );
		$es_cron_admin_mail       = get_option( 'ig_es_cron_adminmail', 'nodata' );
		$es_optin_link            = get_option( 'ig_es_optinlink', 'nodata' );
		$es_unsub_link            = get_option( 'ig_es_unsublink', 'nodata' );

		foreach ( $keywords_in_settings_to_rename as $key => $value ) {
			if ( $es_admin_new_sub_content != 'nodata' ) {
				$es_admin_new_sub_content = str_replace( $key, $value, $es_admin_new_sub_content );
				update_option( 'ig_es_admin_new_sub_content', $es_admin_new_sub_content );
			}

			if ( $es_sent_report_content != 'nodata' ) {
				$es_sent_report_content = str_replace( $key, $value, $es_sent_report_content );
				update_option( 'ig_es_sentreport', $es_sent_report_content );
			}

			if ( $es_confirm_content != 'nodata' ) {
				$es_confirm_content = str_replace( $key, $value, $es_confirm_content );
				update_option( 'ig_es_confirmcontent', $es_confirm_content );
			}

			if ( $es_welcome_content != 'nodata' ) {
				$es_welcome_content = str_replace( $key, $value, $es_welcome_content );
				update_option( 'ig_es_welcomecontent', $es_welcome_content );
			}

			if ( $es_unsub_content != 'nodata' ) {
				$es_unsub_content = str_replace( $key, $value, $es_unsub_content );
				update_option( 'ig_es_unsubcontent', $es_unsub_content );
			}

			if ( $es_cron_admin_mail != 'nodata' ) {
				$es_cron_admin_mail = str_replace( $key, $value, $es_cron_admin_mail );
				update_option( 'ig_es_cron_adminmail', $es_cron_admin_mail );
			}

			if ( $es_optin_link != 'nodata' ) {
				$es_optin_link = str_replace( $key, $value, $es_optin_link );
				update_option( 'ig_es_optinlink', $es_optin_link );
			}

			if ( $es_unsub_link != 'nodata' ) {
				$es_unsub_link = str_replace( $key, $value, $es_unsub_link );
				update_option( 'ig_es_unsublink', $es_unsub_link );
			}
		}

		update_option( 'current_sa_email_subscribers_db_version', '3.4.0' );

	}

	// Function to show any notices in admin section
	public static function es_add_admin_notices() {

		$screen = get_current_screen();
		if ( ! in_array( $screen->id, array( 'toplevel_page_es-view-subscribers', 'es_template', 'edit-es_template', 'email-subscribers_page_es-notification', 'email-subscribers_page_es-notification', 'email-subscribers_page_es-sendemail', 'email-subscribers_page_es-settings', 'email-subscribers_page_es-sentmail', 'email-subscribers_page_es-general-information' ), true ) ) {
			return;
		}

		// Show if - more than 2 post notifications or Newsletters sent OR more than 10 subscribers
		$total_subscribers = es_cls_dbquery::es_view_subscriber_count( 0 );
		$total_email_sent  = es_cls_sentmail::es_sentmail_count( $id = 0 );
		$es_star_review    = get_option( 'es_star_review_email_subscribers' );
		if ( ( $total_subscribers >= 10 || $total_email_sent > 2 ) && $es_star_review != 'no' ) {
			$es_rating_text = __( 'If you like <strong>Email Subscribers</strong>, please consider leaving us a <a target="_blank" href="https://wordpress.org/support/plugin/email-subscribers/reviews/?filter=5#new-post">&#9733;&#9733;&#9733;&#9733;&#9733;</a> rating. A huge thank you from Icegram in advance!', ES_TDOMAIN );
			echo '<div class="notice notice-warning" style="background-color: #FFF;"><p style="letter-spacing: 0.6px;">' . $es_rating_text . ' <a style="float:right" class="es-admin-btn es-admin-btn-secondary" href="?dismiss_admin_notice=1&option_name=es_star_review">' . __( 'No, I don\'t like it', ES_TDOMAIN ) . '</a></p></div>';
		}

		//Survey
		$admin_email                        = get_option( 'admin_email' );
		$ig_es_current_version_date_details = get_option( 'ig_es_current_version_date_details' );
		$timezone_format                    = _x( 'Y-m-d', 'timezone date format' );
		$es_current_date                    = date_i18n( $timezone_format );
		$date_diff                          = floor( ( strtotime( $es_current_date ) - strtotime( $ig_es_current_version_date_details['es_current_date'] ) ) / ( 3600 * 24 ) );

		// Don't show survey if it's just 5 days to install/update or already did survey or cancelled it
		if ( ( ! empty( $date_diff ) && $date_diff < 5 ) || ( get_option( 'ig_es_survey_for_problems_done' ) == 1 ) || ( get_option( 'ig_es_survey_for_problems_cancelled' ) == 1 )) {
			return;
		}

		?>
        <style>
            .es_survey {
                width: 65%;
                background-color: #FFF !important;
                margin-top: 1%;
                padding: 1.5em;
                box-shadow: 0 0 7px 0 rgba(0, 0, 0, .2);
                font-size: 1.1em;
                border: 0.5em solid #fd714f;
                height: 27em;
            }

            .es_question {
                font-size: 1.5em;
                color: #011627;
                margin: 0.5em 0;
            }

            .es_survey_ans_text {
                box-sizing: border-box;
                resize: none;
                overflow: auto;
                height: auto;
                padding: 8px;
                box-shadow: 0px 4px 10px -8px black;
                margin: 0.5em 0;
            }

            .es_survey_ans_text {
                width: 90%;
            }

            .es_email_wrapper {
                margin: 1.5em 0;
            }

            .es_email_wrapper input[type="email"] {
                width: 25em;
                height: 2.5em;
            }

            .es-loader-wrapper {
                position: absolute;
                display: none;
                left: 50%;
                margin-top: 0.4em;
                margin-left: 4em;
            }

            .es-loader-wrapper img {
                width: 60%;
            }

            .es-subheadline {
                padding-bottom: 0.4em;
                font-family: Georgia, Palatino, serif;
                font-size: 1.2em;
                color: #2d3e50;
                line-height: 1.3em;
            }

            .es-main-headline {
                font-size: 1.5em;
                font-weight: bold;
                padding-bottom: 0.6em;
                color: #f2555b;
            }

            .es-survey-next, .es_button {
                color: #FFFFFF !important;
                padding: 0 3.6em;
                height: 2em;
                border-color: #03a025 !important;
                background: #03a025 !important;
                box-shadow: 0 1px 0 #03a025;
            }

            .es-container-2 .es-subheadline {
                margin-top: 1em;
            }

            .es_button {
                height: 2.7em !important;
                width: 10em;
            }

            .es-logo-wrapper {
                text-align: center;
            }

            #es-no, #es-cancel {
                # margin-left: 40%;
                cursor: pointer;
            }

            #es-no[type="submit"] {
                background: #b9b9b9 !important;
                border-color: #b9b9b9 !important;
            }

            .es-signature-wrapper {
                margin-top: 8em;
                font-size: 1.2em;
            }

            .es-avatar img {
                border-radius: 50%;
                width: 150px;
                height: 150px;
            }

            .es-avatar {
                text-align: center;
            }

            .es-left {
                float: left;
                width: 80%;
                display: inline-block;
            }

            .es-right {
                float: right;
                width: 20%;
                display: inline-block;
            }

            .es-no .es-main-headline {
                font-size: 3em;
                margin-top: 1em;
                font-style: italic;
            }

            .es-yes .es-main-headline {
                font-size: 2em;
                line-height: 1em;
                font-style: italic;
            }

            .es-container-1 #es-no {
                margin-left: 1em;
                vertical-align: -webkit-baseline-middle;
                cursor: pointer;
            }

            .es-error {
                margin-top: 0.5em;
                color: #f2555b;
            }

            .es-send-problems-btn {
                # float: left;
            }

            .es-do-not-problems-link {
                line-height: 30px;
    			margin-left: 1em;
            }


            @media screen and (min-width: 70em) {
                .es_survey {
                    width: 80%;
                }

                #es-no {
                    # margin-left: 51%;
                }
            }

        </style>
        <script type="text/javascript">
            jQuery(function () {
                jQuery('.es_survey').on('click', '.es-survey-next', function () {
                    var val1 = jQuery('.es_survey').find("textarea:first-child").val();
                    var val2 = jQuery('.es_survey').find("textarea:eq( 1 )").val();
                    if (val1 !== '' && val2 !== '') {
                        jQuery('.es-container-1').hide();
                        jQuery('.es-container-2').show();
                    } else {
                        jQuery('.es-error').show();
                    }
                });

            });
        </script>
        <div class="es_survey">
            <div class="es_survey_form">
                <form name='es-survey-form'>
                    <div class="es-container-1">
                        <div class="es-left">
                            <div class="es-main-headline"><?php _e( 'What do you hate about list building and email marketing?', ES_TDOMAIN ); ?></div>
                            <div class="es-subheadline"><?php _e( 'Hey, glad to see you!', ES_TDOMAIN ) ?></div>
                            <div class="es-subheadline"><?php _e( 'I am on a daring quest to solve your biggest problems around list building and email marketing. ', ES_TDOMAIN ) ?></div>
                            <div class="es-subheadline"><?php _e( 'So tell me, when it comes to list building and email marketing, what\'s your biggest challenge? What\'s blocking your progress? ', ES_TDOMAIN ) ?></div>
                            <div class="es-questions">
                                <div class="es-subheadline  es-problems-2">
                                    <textarea class="es_survey_ans_text" name="es_survey['es_ques_1']" placeholder=""></textarea>
                                </div>
                                <div class="es-subheadline  es-problems-2"><?php _e( 'And what\'s another big challenge?   ', ES_TDOMAIN ) ?></br>
                                    <textarea class="es_survey_ans_text" name="es_survey['es_ques_2']" placeholder=""></textarea>
                                </div>
                                <div>
                                    <span class="es-send-problems-btn"><a href="#" class="es-survey-next button primary"><?php echo __( 'Send my problems...', ES_TDOMAIN ); ?> </a></span>
                                    <span class="es-do-not-problems-link"><a id="es-cancel" data-val="cancel" class="es-cancel"><?php echo __( 'No, I don\'t have problems', ES_TDOMAIN ); ?></a></span>
                                </div>
                                <div class="es-error" style="display:none"><?php echo __( 'Fill the above field first', ES_TDOMAIN ); ?></div>
                            </div>
                        </div>
                        <div class="es-right">
                            <div class="es-avatar"><img src="<?php echo ES_URL ?>images/andrea-avatar-300x300.jpg"></div>
                        </div>
                    </div>
                    <div class="es-container-2" style="display:none;">
                        <div class="es-left">
                            <div class="es-main-headline"><?php _e( 'Gosh... I hear you mate... ', ES_TDOMAIN ) ?></div>
                            <div class="es-subheadline"><?php _e( 'You will be the first to know when we solve those problems.', ES_TDOMAIN ) ?></div>
                            <div class="es-subheadline"><?php _e( 'We will inform you on below email', ES_TDOMAIN ) ?></div>
                            <div class="es_email_wrapper">
                                <input type="email" name="es_email" value="<?php echo $admin_email ?>"/>
                                <input data-val="yes" type="submit" id="es-yes" value="Notify me" class="es_button button primary">
                                <input data-val="no" type="submit" id="es-no" value="Don't Notify me" class="es_button button primary">
                            </div>
                            <div class="es-loader-wrapper"><img src="<?php echo ES_URL ?>images/spinner-2x.gif"></div>
                        </div>
                        <div class="es-right">
                            <div class="es-avatar"><img src="<?php echo ES_URL ?>images/andrea-avatar-300x300.jpg"></div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="es-msg-wrap" style="display:none;">
                <div class="es-left">
                    <div class="es-yes">
                        <!-- <div class="es-logo-wrapper"><img src="<?php echo ES_URL ?>images/es-logo-128x128.png"></div> -->
                        <div class="es-main-headline"><?php _e( 'I got you.', ES_TDOMAIN ) ?></div>
                        <div class="es-main-headline"><?php _e( 'Will do everything I can to help you. ', ES_TDOMAIN ) ?></div>
                        <div class="es-signature-wrapper" style="font-family: Georgia, Palatino, serif;">
                            <span class="es-later"><?php echo __( 'Later. ', ES_TDOMAIN ); ?></span></br>
                            <span class="es-signature"><img src="<?php echo ES_URL ?>images/signature.png"></span></br>
                            <span class="es-name"><?php echo __( 'Andrea Juliao ', ES_TDOMAIN ); ?></span>
                        </div>
                    </div>
                    <div class="es-no">
                        <div class="es-main-headline"><?php echo __( 'No issues, have a nice day!', ES_TDOMAIN ); ?></div>
                        <div class="es-signature-wrapper" style="font-family: Georgia, Palatino, serif;">
                            <span class="es-later"><?php echo __( 'Later. ', ES_TDOMAIN ); ?></span></br>
                            <span class="es-signature"><img src="<?php echo ES_URL ?>images/signature.png"></span></br>
                            <span class="es-name"><?php echo __( 'Andrea Juliao ', ES_TDOMAIN ); ?></span>
                        </div>
                    </div>
                </div>
                <div class="es-right">
                    <div class="es-avatar"><img src="<?php echo ES_URL ?>images/andrea-avatar-300x300.jpg"></div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            jQuery(function () {
                jQuery("form[name=es-survey-form]").on('click', '.es_button, #es-no, #es-cancel', function (e) {
                    e.preventDefault();
                    jQuery("form[name=es-survey-form]").find('.es-loader-wrapper').show();
                    var params = jQuery("form[name=es-survey-form]").serializeArray();
                    var that = this;
                    params.push({name: 'btn-val', value: jQuery(this).data('val')});
                    params.push({name: 'action', value: 'es_submit_survey'});
                    jQuery.ajax({
                        method: 'POST',
                        type: 'text',
                        url: "<?php echo admin_url( 'admin-ajax.php' ); ?>",
                        data: params,
                        success: function (response) {
                            jQuery("form[name=es-survey-form]").find('.es-loader-wrapper').hide();
                            jQuery(".es-msg-wrap").show('slow');
                            if (jQuery(that).attr('id') == 'es-no') {
                                jQuery(".es-msg-wrap .es-no").hide();
                                // jQuery(".es-container-1").hide();
                            } else if (jQuery(that).attr('id') == 'es-cancel') {
                                jQuery(".es-container-1").hide();
                                jQuery(".es-msg-wrap .es-yes").hide();
                            } else {
                                jQuery(".es-msg-wrap .es-no").hide();
                            }

                            jQuery(".es-container-2").hide();
                            setTimeout(function () {
                                jQuery(".es_survey").hide('slow');
                            }, 5000);
                        }
                    });
                })
            });
        </script>
		<?php
	}

	public static function es_submit_survey() {

		$url = 'https://www.icegram.com/wp-admin/admin-ajax.php';

		if ( ! empty( $_POST ) ) {

			if ( ! empty( $_POST['btn-val'] ) ) {

				if ( 'cancel' === $_POST['btn-val'] ) {
					update_option( 'ig_es_survey_for_problems_cancelled', true );
					exit();
				} elseif ( 'no' === $_POST['btn-val'] ) {
					unset( $_POST['es_email'] );
				}
			}

			$params           = $_POST;
			$params['domain'] = home_url();

			$method = 'POST';
			$qs     = http_build_query( $params );

			$options = array(
				'timeout' => 15,
				'method'  => $method
			);

			if ( $method == 'POST' ) {
				$options['body'] = $qs;
			} else {
				if ( strpos( $url, '?' ) !== false ) {
					$url .= '&' . $qs;
				} else {
					$url .= '?' . $qs;
				}
			}

			$response = wp_remote_request( $url, $options );

			if ( wp_remote_retrieve_response_code( $response ) == 200 ) {
				$data = json_decode( $response['body'], true );

				if ( empty( $data['error'] ) ) {
					if ( ! empty( $data ) && ! empty( $data['success'] ) ) {
						update_option( 'ig_es_survey_for_problems_done', true );
					}
					echo( json_encode( $data ) );
				}
			}
		}

		exit();

	}

	// Function to dismiss any admin notice
	public static function dismiss_admin_notice() {

		if ( isset( $_GET['dismiss_admin_notice'] ) && $_GET['dismiss_admin_notice'] == '1' && isset( $_GET['option_name'] ) ) {
			$option_name = sanitize_text_field( $_GET['option_name'] );
			update_option( $option_name . '_email_subscribers', 'no' );

			$referer = wp_get_referer();
			wp_safe_redirect( $referer );
			exit();

		}

	}

	public static function es_footer_text( $es_rating_text ) {

		global $post;

		if ( ( isset( $_GET['page'] ) && ( $_GET['page'] == 'es-view-subscribers' || $_GET['page'] == 'es-notification' || $_GET['page'] == 'es-sendemail' || $_GET['page'] == 'es-settings' || $_GET['page'] == 'es-sentmail' || $_GET['page'] == 'es-general-information' || $_GET['page'] == 'es-pricing' ) ) || ( is_object( $post ) && $post->post_type == 'es_template' ) ) {
			$es_rating_text = __( 'Thank you for using Email Subscribers! A huge thank you from Icegram!', ES_TDOMAIN );
		}

		return $es_rating_text;
	}

	public static function es_update_footer_text( $es_text ) {

		global $post;

		$es_plugin_data     = get_plugin_data( WP_PLUGIN_DIR . '/email-subscribers/email-subscribers.php' );
		$es_current_version = $es_plugin_data['Version'];

		if ( ( isset( $_GET['page'] ) && ( $_GET['page'] == 'es-view-subscribers' || $_GET['page'] == 'es-notification' || $_GET['page'] == 'es-sendemail' || $_GET['page'] == 'es-settings' || $_GET['page'] == 'es-sentmail' || $_GET['page'] == 'es-general-information' || $_GET['page'] == 'es-pricing' ) ) || ( is_object( $post ) && $post->post_type == 'es_template' ) ) {
			$es_text = sprintf( __( 'Email Subscribers version: <strong>%s</strong>', ES_TDOMAIN ), $es_current_version );
		}

		return $es_text;
	}

	public static function es_register_post_type() {

		$labels = array(
			'name'               => __( 'Templates', ES_TDOMAIN ),
			'singular_name'      => __( 'Templates', ES_TDOMAIN ),
			'add_new'            => __( 'Add new Template', ES_TDOMAIN ),
			'add_new_item'       => __( 'Add new Template', ES_TDOMAIN ),
			'edit_item'          => __( 'Edit Templates', ES_TDOMAIN ),
			'new_item'           => __( 'New Templates', ES_TDOMAIN ),
			'all_items'          => __( 'Templates', ES_TDOMAIN ),
			'view_item'          => __( 'View Templates', ES_TDOMAIN ),
			'search_items'       => __( 'Search Templates', ES_TDOMAIN ),
			'not_found'          => __( 'No Templates found', ES_TDOMAIN ),
			'not_found_in_trash' => __( 'No Templates found in Trash', ES_TDOMAIN ),
			'parent_item_colon'  => __( '', ES_TDOMAIN ),
			'menu_name'          => __( 'Email Subscribers', ES_TDOMAIN ),
			'featured_image'     => __( 'Thumbnail (For Visual Representation only)', ES_TDOMAIN ),
			'set_featured_image' => __( 'Set thumbnail', ES_TDOMAIN )
		);

		$args = array(
			'labels'              => $labels,
			'public'              => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'show_ui'             => true,
			'show_in_menu'        => 'edit.php?post_type=es_template',
			'query_var'           => true,
			'rewrite'             => array( 'slug' => 'es_template' ),
			'capability_type'     => 'post',
			'has_archive'         => false,
			'hierarchical'        => false,
			'menu_position'       => null,
			'supports'            => array( 'title', 'editor', 'thumbnail' )
		);

		register_post_type( 'es_template', $args );
	}

	public static function es_highlight( $parent_file ) {
		global $submenu_file, $current_screen;

		if ( $current_screen->post_type == 'es_template' ) {
			$parent_file = 'es-view-subscribers';
		}

		return $parent_file;
	}

	public static function es_custom_template_column( $existing_columns ) {

		$date = $existing_columns['date'];
		unset( $existing_columns['date'] );

		$existing_columns['es_templ_type']      = __( 'Template Type', ES_TDOMAIN );
		$existing_columns['es_templ_thumbnail'] = __( 'Thumbnail', ES_TDOMAIN );
		$existing_columns['date']               = $date;

		return $existing_columns;
	}

	public static function es_template_edit_columns( $column ) {
		global $post;

		$es_post_thumbnail  = get_the_post_thumbnail( $post->ID );
		$es_templ_thumbnail = ( ! empty( $es_post_thumbnail ) ) ? get_the_post_thumbnail( $post->ID, array( '200', '200' ) ) : '<img src="' . ES_URL . 'images/envelope.png" />';

		switch ( $column ) {
			case 'es_templ_type':
				echo get_post_meta( $post->ID, 'es_template_type', true );
				break;
			case 'es_templ_thumbnail' :
				echo $es_templ_thumbnail;
				break;
			default:
				break;
		}

		return $column;
	}

	public static function es_add_admin_css() {

		global $current_screen;

		if ( $current_screen->post_type != 'es_template' ) {
			return;
		}

		?>
        <style type="text/css">
            .column-es_templ_thumbnail, #es_templ_thumbnail,
            .column-es_templ_type, #es_templ_type {
                text-align: center !important;
            }
        </style>
		<?php
	}

	public static function es_add_template_action( $actions, $post ) {
		if ( $post->post_type != 'es_template' ) {
			return $actions;
		}

		$es_templ_type               = get_post_meta( $post->ID, 'es_template_type', true );
		$page                        = ( ( $es_templ_type == 'Newsletter' ) ? 'es-sendemail' : 'es-notification' );
		$preview_url                 = ES_ADMINURL . "?page=" . $page . "&amp;ac=preview&did=" . $post->ID;
		$actions['preview_campaign'] = '<a class="es-preview-template" target="_blank" href="' . $preview_url . '" >' . __( 'Preview', ES_TDOMAIN ) . '</a>';

		return $actions;
	}

	public static function es_add_template_type_metaboxes() {

		global $post, $pagenow;

		if ( $post->post_type != 'es_template' ) {
			return;
		}

		$es_templ_type = '';
		if ( $pagenow != 'post-new.php' ) {
			$es_templ_type = get_post_meta( $post->ID, 'es_template_type', true );
		}

		if ( $es_templ_type == 'Post Notification' || $pagenow == 'post-new.php' ) {
			?>
            <p style="margin-top: 0em; !important;">
				<?php
				echo sprintf( __( '%s for Post Notification: {{POSTTITLE}}', ES_TDOMAIN ), '<a href="https://www.icegram.com/documentation/es-what-are-the-available-keywords-in-the-post-notifications/?utm_source=es&utm_medium=in_app&utm_campaign=view_docs_help_page" target="_blank">' . __( 'Available Keyword', ES_TDOMAIN ) . '</a>' );
				?>
            </p>
			<?php
		}
		?>
        <p>
            <label for="tag-link"><?php echo __( 'Select your Email Template Type', ES_TDOMAIN ); ?></label><br/>
            <select name="es_template_type" id="es_template_type">
                <option value='Newsletter' <?php if ( $es_templ_type == 'Newsletter' ) {
					echo 'selected="selected"';
				} ?>><?php echo __( 'Newsletter', ES_TDOMAIN ); ?></option>
                <option value='Post Notification' <?php if ( $es_templ_type == 'Post Notification' ) {
					echo 'selected="selected"';
				} ?>><?php echo __( 'Post Notification', ES_TDOMAIN ); ?></option>
            </select>
        </p>
		<?php
	}

	public static function es_save_template_type( $post_id, $post ) {
		if ( empty( $post_id ) || empty( $post ) || empty( $_POST ) ) {
			return;
		}
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		if ( is_int( wp_is_post_revision( $post ) ) ) {
			return;
		}
		if ( is_int( wp_is_post_autosave( $post ) ) ) {
			return;
		}
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}
		if ( $post->post_type != 'es_template' ) {
			return;
		}
		if ( isset( $_POST['es_template_type'] ) ) {
			update_post_meta( $post_id, 'es_template_type', $_POST['es_template_type'] );
		}
	}

	public static function es_process_template_body( $content, $tmpl_id = 0 ) {
		$content = convert_chars( convert_smilies( wptexturize( $content ) ) );
		if ( isset( $GLOBALS['wp_embed'] ) ) {
			$content = $GLOBALS['wp_embed']->autoembed( $content );
		}
		$content = wpautop( $content );
		// $content = do_shortcode( shortcode_unautop( $content ) );
		$data['content'] = $content;
		$data['tmpl_id'] = $tmpl_id;
		$data            = apply_filters( 'es_after_process_template_body', $data );
		$content         = $data['content'];

		return $content;
	}

	public static function add_preview_button() {

		global $post;
		if ( $post->post_type != 'es_template' ) {
			return;
		}

		$es_templ_type = get_post_meta( $post->ID, 'es_template_type', true );
		$page          = ( $es_templ_type == 'Newsletter' ) ? 'es-sendemail' : 'es-notification';
		$preview_url   = ES_ADMINURL . "?page=" . $page . "&amp;ac=preview&did=" . $post->ID;

		//Adding a preview button in side bar widget
		$script         = "<script>
		var prvw_button = jQuery('.es_preview_button');
		jQuery('#submitdiv .submitbox #minor-publishing-actions').after(prvw_button)
		prvw_button.fadeIn('fast');</script>";
		$preview_button = '<style>.es_preview_button{display: none;padding: 10px 10px 0;}</style><div id="" class="es_preview_button">
									<a href="' . $preview_url . '" target="_blank" class="button button-primary es_preview">' . __( 'Preview Template', ES_TDOMAIN ) . '</a>
									<div class="clear"></div></div>';
		echo $preview_button;
		echo $script;

	}

	public static function es_add_keyword() {

		global $post, $pagenow;

		if ( $post->post_type != 'es_template' ) {
			return;
		}

		if ( $pagenow == 'post-new.php' ) {
			?>
            <p>
				<?php
				echo sprintf( __( '%s for Post Notification: {{NAME}}, {{EMAIL}}, {{DATE}}, {{POSTTITLE}}, {{POSTIMAGE}}, {{POSTEXCERPT}}, {{POSTDESC}}, {{POSTAUTHOR}}, {{POSTLINK}}, {{POSTLINK-WITHTITLE}}, {{POSTLINK-ONLY}}, {{POSTFULL}}', ES_TDOMAIN ), '<a href="https://www.icegram.com/documentation/es-what-are-the-available-keywords-in-the-post-notifications/?utm_source=es&utm_medium=in_app&utm_campaign=view_docs_help_page" target="_blank">' . __( 'Available Keywords', ES_TDOMAIN ) . '</a>' );
				echo sprintf( __( '<br/><br/>%s for Newsletter: {{NAME}}, {{EMAIL}}', ES_TDOMAIN ), '<a href="https://www.icegram.com/documentation/es-what-are-the-available-keywords-in-the-newsletters/?utm_source=es&utm_medium=in_app&utm_campaign=view_docs_help_page" target="_blank">' . __( 'Available Keywords', ES_TDOMAIN ) . '</a>' );
				?>
            </p>
			<?php
		}

		$es_templ_type = '';
		if ( $pagenow != 'post-new.php' ) {
			$es_templ_type = get_post_meta( $post->ID, 'es_template_type', true );
		}

		if ( $es_templ_type == 'Post Notification' ) {
			?>
            <p>
				<?php
				echo sprintf( __( '%s for Post Notification: {{NAME}}, {{EMAIL}}, {{DATE}}, {{POSTTITLE}}, {{POSTIMAGE}}, {{POSTEXCERPT}}, {{POSTDESC}}, {{POSTAUTHOR}}, {{POSTLINK}}, {{POSTLINK-WITHTITLE}}, {{POSTLINK-ONLY}}, {{POSTFULL}}', ES_TDOMAIN ), '<a href="https://www.icegram.com/documentation/es-what-are-the-available-keywords-in-the-post-notifications/?utm_source=es&utm_medium=in_app&utm_campaign=view_docs_help_page" target="_blank">' . __( 'Available Keywords', ES_TDOMAIN ) . '</a>' );
				?>
            </p>
			<?php
		} elseif ( $es_templ_type == 'Newsletter' ) {
			?>
            <p>
				<?php
				echo sprintf( __( '%s for Newsletter: {{NAME}}, {{EMAIL}}', ES_TDOMAIN ), '<a href="https://www.icegram.com/documentation/es-what-are-the-available-keywords-in-the-newsletters/?utm_source=es&utm_medium=in_app&utm_campaign=view_docs_help_page" target="_blank">' . __( 'Available Keywords', ES_TDOMAIN ) . '</a>' );
				?>
            </p>
			<?php
		}
	}

	public static function es_get_form( $instance ) {

		global $es_includes;

		// Compatibility for GDPR
		$active_plugins = get_option( 'active_plugins', array() );
		if ( is_multisite() ) {
			$active_plugins = array_merge( $active_plugins, get_site_option( 'active_sitewide_plugins', array() ) );
		}

		if ( ! isset( $es_includes ) || $es_includes !== true ) {
			$es_includes = true;
		}
		$es_desc  = $instance['es_desc'];
		$es_name  = $instance['es_name'];
		$es_group = $instance['es_group'];
		$es_pre   = $instance['es_pre'];

		ob_start();
		?>

        <div class="es_form_container">
			<i class="icon-subscription-email"></i>
			<div class="form-subscription-email">
				<div class="description">
					<h3>
						<?php echo __( 'Đăng ký nhận khuyến mãi từ Tin Học Ngôi Sao', ES_TDOMAIN ); ?>
					</h3>
					<p>
						<?php echo __( 'Đừng bỏ lỡ hàng nghìn sản phẩm và những khuyến mại hấp dẫn từ chúng tôi', ES_TDOMAIN ); ?>
					</p>
				</div>
				<form class="es_<?php echo $es_pre ?>_form" data-es_form_id="es_<?php echo $es_pre ?>_form">
					<!-- <?php if ( $es_desc != "" ) { ?>
						<div class="es_caption"><?php echo $es_desc; ?></div>
					<?php } ?>
					<?php if ( $es_name == "YES" ) { ?>
						<div class="es_lablebox">
							<label class="es_<?php echo $es_pre ?>_form_name"><?php echo __( 'Name', ES_TDOMAIN ); ?></label>
						</div>
						<div class="es_textbox">
							<input type="text" id="es_txt_name" class="es_textbox_class" name="es_txt_name" value="" maxlength="60">
						</div>
					<?php } ?>
					<div class="es_lablebox">
						<label class="es_<?php echo $es_pre ?>_form_email"><?php echo __( 'Email *', ES_TDOMAIN ); ?></label>
					</div> -->
					<div class="es_textbox">
						<input type="email" id="es_txt_email" placeholder="Địa chỉ email của bạn" class="es_textbox_class" name="es_txt_email" value="" maxlength="60" required>
					</div>
					<?php if ( ( in_array( 'gdpr/gdpr.php', $active_plugins ) || array_key_exists( 'gdpr/gdpr.php', $active_plugins ) ) ) {
						echo GDPR::consent_checkboxes();
					} ?>
					<div class="es_button">
						<input type="submit" id="es_txt_button" class="es_textbox_button es_submit_button" name="es_txt_button" value="<?php echo __( 'Đăng ký', ES_TDOMAIN ); ?>">
					</div>
					<div class="es_msg" id="es_<?php echo $es_pre ?>_msg">
						<span id="es_msg"></span>
					</div>
					<?php if ( $es_name != "YES" ) { ?>
						<input type="hidden" id="es_txt_name" name="es_txt_name" value="">
					<?php } ?>
					<input type="hidden" id="es_txt_group" name="es_txt_group" value="<?php echo $es_group; ?>">
					<?php $nonce = wp_create_nonce( 'es-subscribe' ); ?>
					<input type="hidden" name="es-subscribe" id="es-subscribe" value="<?php echo $nonce; ?>"/>
				</form>
			</div>
			<?php do_action( 'es_after_form' ) ?>
        </div>

		<?php
		return $es_form = ob_get_clean();

	}

}

function es_sync_registereduser( $user_id ) {

	$es_c_emailsubscribers = get_option( 'ig_es_sync_wp_users', 'norecord' );

	if ( $es_c_emailsubscribers == 'norecord' || $es_c_emailsubscribers == "" ) {
		// No action is required
	} else {
		$es_sync_unserialized_data = maybe_unserialize( $es_c_emailsubscribers );
		if ( ( $es_sync_unserialized_data['es_registered'] == "YES" ) && ( $user_id != "" ) ) {
			$es_registered       = $es_sync_unserialized_data['es_registered'];
			$es_registered_group = $es_sync_unserialized_data['es_registered_group'];

			$user_info      = get_userdata( $user_id );
			$user_firstname = $user_info->user_firstname;

			if ( $user_firstname == "" ) {
				$user_firstname = $user_info->user_login;
			}
			$user_mail = $user_info->user_email;

			$form['es_email_name']   = $user_firstname;
			$form['es_email_mail']   = $user_mail;
			$form['es_email_group']  = $es_registered_group;
			$form['es_email_status'] = "Confirmed";
			$form['es_nonce']        = wp_create_nonce( 'es-subscribe' );
			$action                  = es_cls_dbquery::es_view_subscriber_ins( $form, "insert" );

			if ( $action == "sus" ) {
				//Inserted successfully. Below 3 line of code will send WELCOME email to subscribers.
				$subscribers = array();
				$subscribers = es_cls_dbquery::es_view_subscriber_one( $user_mail, $form['es_email_group'] );
				es_cls_sendmail::es_sendmail( "welcome", $template = 0, $subscribers, "welcome", 0 );
			}
		}
	}
}

class es_widget_register extends WP_Widget {
	function __construct() {
		$widget_ops = array( 'classname' => 'widget_text elp-widget', 'description' => __( ES_PLUGIN_DISPLAY, ES_TDOMAIN ), ES_PLUGIN_NAME );
		parent::__construct( ES_PLUGIN_NAME, __( ES_PLUGIN_DISPLAY, ES_TDOMAIN ), $widget_ops );
	}

	function widget( $args, $instance ) {
		extract( $args, EXTR_SKIP );

		$es_title = apply_filters( 'widget_title', empty( $instance['es_title'] ) ? '' : $instance['es_title'], $instance, $this->id_base );

		echo $args['before_widget'];
		if ( ! empty( $es_title ) ) {
			echo $args['before_title'] . $es_title . $args['after_title'];
		}

		// display widget method
		$instance['es_pre'] = 'widget';
		echo es_cls_registerhook::es_get_form( $instance );
		echo $args['after_widget'];
	}

	function update( $new_instance, $old_instance ) {
		$instance             = $old_instance;
		$instance['es_title'] = ( ! empty( $new_instance['es_title'] ) ) ? strip_tags( $new_instance['es_title'] ) : '';
		$instance['es_desc']  = ( ! empty( $new_instance['es_desc'] ) ) ? strip_tags( $new_instance['es_desc'] ) : '';
		$instance['es_name']  = ( ! empty( $new_instance['es_name'] ) ) ? strip_tags( $new_instance['es_name'] ) : '';
		$instance['es_group'] = ( ! empty( $new_instance['es_group'] ) ) ? strip_tags( $new_instance['es_group'] ) : '';

		return $instance;
	}

	function form( $instance ) {
		$defaults = array(
			'es_title' => '',
			'es_desc'  => '',
			'es_name'  => '',
			'es_group' => ''
		);
		$instance = wp_parse_args( (array) $instance, $defaults );
		$es_title = $instance['es_title'];
		$es_desc  = $instance['es_desc'];
		$es_name  = $instance['es_name'];
		$es_group = $instance['es_group'];
		?>
        <p>
            <label for="<?php echo $this->get_field_id( 'es_title' ); ?>"><?php echo __( 'Widget Title', ES_TDOMAIN ); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id( 'es_title' ); ?>" name="<?php echo $this->get_field_name( 'es_title' ); ?>" type="text" value="<?php echo $es_title; ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id( 'es_desc' ); ?>"><?php echo __( 'Short description about subscription form', ES_TDOMAIN ); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id( 'es_desc' ); ?>" name="<?php echo $this->get_field_name( 'es_desc' ); ?>" type="text" value="<?php echo $es_desc; ?>"/>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id( 'es_name' ); ?>"><?php echo __( 'Display Name Field', ES_TDOMAIN ); ?></label>
            <select class="widefat" id="<?php echo $this->get_field_id( 'es_name' ); ?>" name="<?php echo $this->get_field_name( 'es_name' ); ?>">
                <option value="YES" <?php $this->es_selected( $es_name == 'YES' ); ?>><?php echo __( 'YES', ES_TDOMAIN ); ?></option>
                <option value="NO" <?php $this->es_selected( $es_name == 'NO' ); ?>><?php echo __( 'NO', ES_TDOMAIN ); ?></option>
            </select>
        </p>
        <p>
            <label for="<?php echo $this->get_field_id( 'es_group' ); ?>"><?php echo __( 'Subscriber Group', ES_TDOMAIN ); ?></label>
            <select class="widefat" name="<?php echo $this->get_field_name( 'es_group' ); ?>" id="<?php echo $this->get_field_id( 'es_group' ); ?>">
				<?php
				$groups = array();
				$groups = es_cls_dbquery::es_view_subscriber_group();
				if ( count( $groups ) > 0 ) {
					$i = 1;
					foreach ( $groups as $group ) {
						?>
                        <option value="<?php echo esc_html( stripslashes( $group["es_email_group"] ) ); ?>" <?php if ( stripslashes( $es_group ) == $group["es_email_group"] ) {
							echo 'selected="selected"';
						} ?>>
							<?php echo stripslashes( $group["es_email_group"] ); ?>
                        </option>
						<?php
					}
				}
				?>
            </select>
        </p>
		<?php
	}

	function es_selected( $var ) {
		if ( $var == 1 || $var == true ) {
			echo 'selected="selected"';
		}
	}
}