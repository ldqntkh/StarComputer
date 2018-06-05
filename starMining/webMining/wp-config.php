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
define('DB_NAME', 'webmining');

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
define('AUTH_KEY',         '9MJmW>g*AlqA.e-Kwjs6h^jOKx@<GI|gp=u:eTP]oVNl9H|X#BL[>H)})jD}q#qb');
define('SECURE_AUTH_KEY',  'FghhuOD{Sk|01lfz7e~ .#KxZY(^P#$1?3%3s|4OK%!??EKfu (`K+g.?i~z>x`K');
define('LOGGED_IN_KEY',    '(P$<0L8W--c@Z<]>ow:FtO0=(?lZo?Sg%LX<me&kh#p6~-i9d M@b~0Wuflfp8&?');
define('NONCE_KEY',        'zZp31,&9TMfERa;>@f`ML8.%mT!vFm8>D1tGl/i)sj@By|&]No@~&tKGjJ`*3=[s');
define('AUTH_SALT',        '_t|c5C1k |6|]+ZP.V;Ej,|:{Jv4eN9>9#gpgt}0NKE7S2Kbg}OvR8RR:t0TiNft');
define('SECURE_AUTH_SALT', '}<kdV`;~~nt-SYe}}4)olRlPfj[01+.Kp:e#pj:Vmw&r/dVfA=(mlB*Wz7sEMc0w');
define('LOGGED_IN_SALT',   'q~%qo9zqLsm>U`bLks)D^<i|3lOC;T4l/An@lDj/[7[yKWY7G6e4K$HLNl*}n-F:');
define('NONCE_SALT',       '=4AleOO,nc:tVbJR?-Wj#6nO3-3LpYE&vp(g4a7jcjAcUa3>%0ck;`WDMF~/q@CZ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'tb_';

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
