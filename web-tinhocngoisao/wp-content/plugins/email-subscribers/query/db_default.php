<?php

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class es_cls_default {
	public static function es_pluginconfig_default() {

		global $wpdb;

		//Needs work-temp fixed in v3.3.3
		$result = es_cls_dbquery::es_view_subscriber_count(0);
		if ($result == 0) {

			$admin_email = get_option('admin_email');
			$blogname = get_option('blogname');

			if($admin_email == "") {
				$admin_email = "admin@gmail.com";
			}

			$home_url = home_url('/');
			$optinlink = $home_url . "?es=optin&db={{DBID}}&email={{EMAIL}}&guid={{GUID}}";
			$unsublink = $home_url . "?es=unsubscribe&db={{DBID}}&email={{EMAIL}}&guid={{GUID}}";

			$default = array();
			$default['ig_es_fromname'] = $blogname;
			$default['ig_es_fromemail'] = $admin_email;
			$default['ig_es_emailtype'] = "WP HTML MAIL";
			$default['ig_es_notifyadmin'] = "YES";
			$default['ig_es_adminemail'] = $admin_email;
			$default['ig_es_admin_new_sub_subject'] = $blogname . " - New email subscription";
			$default['ig_es_admin_new_sub_content'] = "Hi Admin,\r\n\r\nCongratulations! You have a new subscriber.\r\n\r\nName : {{NAME}}\r\nEmail: {{EMAIL}}\r\nGroup: {{GROUP}}\r\n\r\nHave a nice day :)\r\n".$blogname;
			$default['ig_es_welcomeemail'] = "YES";
			$default['ig_es_welcomesubject'] = $blogname . " - Welcome!";
			$default['ig_es_welcomecontent'] = "Hi {{NAME}},\r\n\r\nThank you for subscribing to ".$blogname.".\r\n\r\nWe are glad to have you onboard.\r\n\r\nBest,\r\n".$blogname."\r\n\r\nGot subscribed to ".$blogname." by mistake? Click <a href='{{LINK}}'>here</a> to unsubscribe.";
			$default['ig_es_optintype'] = "Double Opt In";
			$default['ig_es_confirmsubject'] = $blogname . " - Please confirm your subscription";
			$default['ig_es_confirmcontent'] = "Hi {{NAME}},\r\n\r\nWe have received a subscription request from this email address. Please confirm it by <a href='{{LINK}}'>clicking here</a>.\r\n\r\nIf you still cannot subscribe, please copy this link and paste it in your browser :\r\n{{LINK}} \r\n\r\nThank You\r\n".$blogname;
			$default['ig_es_optinlink'] = $optinlink;
			$default['ig_es_unsublink'] = $unsublink;
			$default['ig_es_unsubcontent'] = "No longer interested in emails from ".$blogname."? Please <a href='{{LINK}}'>click here</a> to unsubscribe.";
			$default['ig_es_unsubtext'] = "Thank You, You have been successfully unsubscribed. You will no longer hear from us.";
			$default['ig_es_successmsg'] = "You have been successfully subscribed.";
			$default['ig_es_suberror'] = "Oops.. Your request couldn't be completed. This email address seems to be already subscribed / blocked.";
			$default['ig_es_unsuberror'] = "Oops.. There was some technical error. Please try again later or contact us.";

			foreach ( $default as $option_name => $option_value ) {
				update_option( $option_name, $option_value );
			}

		}

		return true;
	}

	public static function es_default_widget( $sidebars_widgets ){
		$set_widget = get_option( 'ig_es_set_widget', 'no' );
		$ig_es_sample_data_imported = get_option( 'ig_es_sample_data_imported', 'no' );
		if ( 'yes' === $set_widget  || 'yes' === $ig_es_sample_data_imported ) return;
		$sidebars_widgets = get_option( 'sidebars_widgets' );
		$widget_email_subscribers_1 = get_option( 'widget_email-subscribers' );
		if ( empty( $widget_email_subscribers_1 ) || ! is_array( $widget_email_subscribers_1 ) ) {
			$widget_email_subscribers_1 = array(
														'_multiwidget' => 1
													);
		}

		$instance = array();
		$instance['es_pre'] = 'widget';
		$instance['es_group'] = 'Public';
		$instance['es_desc'] = '';
		$instance['es_name'] = 'YES';
		if ( count( $widget_email_subscribers_1 ) < 2 ) {
			$widget_email_subscribers_1[] = $instance;
		}

		end( $widget_email_subscribers_1 );
		$last_id = key( $widget_email_subscribers_1 );

		update_option( 'widget_email-subscribers', $widget_email_subscribers_1 );

		if ( ! empty( $sidebars_widgets ) ) {
			foreach ( $sidebars_widgets as $key => $sidebars_widget ) {
				if ( strpos( $key, 'sidebar' ) !== false && ! in_array( 'email-subscribers-' . $last_id, $sidebars_widgets[ $key ] ) ) {
					if ( empty( $sidebars_widgets[ $key ] ) || ! is_array( $sidebars_widgets[ $key ] ) ) {
						$sidebars_widgets[ $key ] = array();
					}
					if ( count( $sidebars_widgets[ $key ] ) > 1 ) {
						array_splice( $sidebars_widgets[ $key ], 1, 0, 'email-subscribers-' . $last_id );
					} else {
						$sidebars_widgets[ $key ][] = 'email-subscribers-' . $last_id;
					}
					break;
				}
			}
		} else {
			$sidebars_widgets = array(
									'sidebar-0' => array( 'email-subscribers-' . $last_id )
								);
		}

		update_option( 'sidebars_widgets', $sidebars_widgets );

		update_option( 'ig_es_set_widget', 'yes' );

	}

	public static function es_template_default() {
		// Temp workaround - in future use option=ig_es_sample_data_imported to check against
		// $result = es_cls_dbquery::es_view_subscriber_count(0);
		// if ($result == 0) {
		$ig_es_sample_data_imported = get_option( 'ig_es_sample_data_imported', 'no' );
		if ( 'yes' === $ig_es_sample_data_imported ) return;
		//Adding a sample Post Notification Template
		$es_b = "Xin chào {{NAME}},\r\n\r\n";
		$es_b .= "Chúng tôi có một bài viết mới trên website của chúng tôi : {{POSTTITLE}}\r\n";
		$es_b .= "{{POSTIMAGE}}\r\n\r\n";
		$es_b .= "Bạn có thể xem bài viết tại đường dẫn  : ";
		$es_b .= "{{POSTLINK}}\r\n\r\n";
		$es_b .= "Cảm ơn nhiều,\r\n";
		$es_b .= "Tin Học Ngôi Sao\r\n\r\n";
		$es_b .= "Bạn đã nhận được email này bởi vì trước đây bạn đã cung cấp cho chúng tôi địa chỉ email của bạn: {{EMAIL}} để nhận thông báo khi các cập nhật mới được đăng.";

		// Create Post Notification object
		$es_post = array(
		  'post_title'    => 'Bài viết mới - {{POSTTITLE}}',
		  'post_content'  => $es_b,
		  'post_status'   => 'publish',
		  'post_type'     => 'es_template',
		  'meta_input'    => array( 'es_template_type' => 'Post Notification'
									)
		);
		// Insert the post into the database
		$last_inserted_id = wp_insert_post( $es_post );
		
		// Adding a Post Notification for above created template
		$form["es_note_group"] = "Test";
		$form["es_note_status"] = "Enable";
		$form["es_note_templ"] = $last_inserted_id;

		$listcategory = "";
		$args = array( 'hide_empty' => 0, 'orderby' => 'name', 'order' => 'ASC' );
		$categories = get_categories($args);
		$total = count($categories);
		$i = 1;
		foreach($categories as $category) {
			$listcategory = $listcategory . " ##" . $category->cat_name . "## ";
			if($i < $total) {
				$listcategory = $listcategory .  "--";
			}
			$i = $i + 1;
		}
		$form["es_note_cat"] = $listcategory;
		es_cls_notification::es_notification_ins($form, "insert");
		$latest_post = get_posts("post_type=post&numberposts=1");
		if($latest_post[0]->ID > 0 ){ // check if exists
			es_cls_sendmail::es_prepare_notification( 'publish', 'draft', $latest_post[0]->ID );
		}
		// Adding a sample Newsletter Template
		$Sample = '<strong style="color: #990000">What can you achieve using Email Subscribers?</strong><p>Add subscription forms on website, send HTML newsletters & automatically notify subscribers about new blog posts once it is published.';
		$Sample .= ' You can also Import or Export subscribers from any list to Email Subscribers.</p>';
		$Sample .= ' <strong style="color: #990000">Plugin Features</strong><ol>';
		$Sample .= ' <li>Send notification emails to subscribers when new blog posts are published.</li>';
		$Sample .= ' <li>Subscribe form available with 3 options to setup.</li>';
		$Sample .= ' <li>Double Opt-In and Single Opt-In support.</li>';
		$Sample .= ' <li>Email notification to admin when a new user signs up (Optional).</li>';
		$Sample .= ' <li>Automatic welcome email to subscriber.</li>';
		$Sample .= ' <li>Auto add unsubscribe link in the email.</li>';
		$Sample .= ' <li>Import/Export subscriber emails to migrate to any lists.</li>';
		$Sample .= ' <li>Default WordPress editor to create emails.</li>';
		$Sample .= ' </ol>';
		$Sample .= ' <strong>Thanks & Regards,</strong><br>Admin';
		$es_post = array(
		  'post_title'    => 'Welcome To Email Subscribers',
		  'post_content'  => $Sample,
		  'post_status'   => 'publish',
		  'post_type'     => 'es_template',
		  'meta_input'    => array( 'es_template_type' => 'Newsletter'
									)
		);
		// Insert the post into the database
		$last_inserted_id = wp_insert_post( $es_post );
		//sending first newsletter to test group
		es_cls_sendmail::es_prepare_newsletter_manual( $last_inserted_id, "Immediately", "Test" );
			

		return true;
	}

	public static function es_subscriber_default() {

		$result = es_cls_dbquery::es_view_subscriber_count(0);
		if ($result == 0) {
			$form['es_nonce'] = wp_create_nonce( 'es-subscribe' );
			$form["es_email_mail"] = get_option('admin_email');
			$form["es_email_name"] = "Admin";
			$form["es_email_group"] = "Test";
			$form["es_email_status"] = "Confirmed";
			es_cls_dbquery::es_view_subscriber_ins($form, "insert");
		}

		return true;

	}

}