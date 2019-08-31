<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db_tinhocngoisao');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '+j&+%.YMfu8p9Z;K*Y|+qq#0VKASFrB]%(13=*gx0[H{jXjGq/D/)AdLYB5)oIV|');
define('SECURE_AUTH_KEY',  'akkO1Yc|?UxiG`y^1hoVYq[s1=P`D5fPwxy$`DUqfD0Cn$[{aE`.)&nAP#sq+$BH');
define('LOGGED_IN_KEY',    'wS/Tf2?n3KCtak[HylPAHhC4M[S*E:=}w/?]tQl<Rc[E6#;:)o$)Vs]JQqfF~}~V');
define('NONCE_KEY',        'h)|ZSs%/$SHjK!z9/8eFQiW#uZf=@s?)/Fn!w#mG lf?mzDZN9U/Cuz5@(kUR^N;');
define('AUTH_SALT',        'Mov8|:CFusPux(q[Mo`,Ff1})i(V.}^@k&+W7w8Bg}wva?0DTxKZG}v#O,nD@VRn');
define('SECURE_AUTH_SALT', '3VOgP` z!v{&wJq$j*~0b#,#JyZ|3Ni`a ^fI|L6g!48j/l4FN@uH5Vd@)B_}%%s');
define('LOGGED_IN_SALT',   'rJj6W([y.$W3gw{pyS@2gkKtl{|f <)gkV^suewxH1lGKlCB56MhrR DC.c2@bws');
define('NONCE_SALT',       'IV5Qyd+!iy9B,pfj<|~>ZH0bs,X$e(Vt@gH@Df,L?3)_h,7YU9|}M`u_F~dB/qWd');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

define('WP_CACHE', true);
