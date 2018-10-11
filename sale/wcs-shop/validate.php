<?php
include 'config.php';
//echo 111;
//$err = $_POST['err'];

session_start();

function isSessionExpired() {
	$current_time = time();
	if ( isset( $_SESSION[ 'token' ] ) ) {
		if ( ( ( time() - $_SESSION[ 'in_time' ] ) > SESSION_TIMEOUT ) ) {
			return true;
		} else {
			$_SESSION[ 'in_time' ] = time();
		}
	}
	return false;
}


if ( isset( $_SESSION[ "token" ] ) ) {
	if ( !isSessionExpired() ) {

	} else {

		$err = ERROR_TIMEOUT;
//		echo '<input type="hidden" id="error" value="' . ERROR_TIMEOUT . '">';

	}
} else {
	
		$err = ERROR_TOKEN;
}


switch ( $err ) {
	case ERROR_TIMEOUT:
		echo 'sim_session_timeout';
		break;
	case ERROR_TOKEN:
		echo 'sim_invalid_token';
		break;
	case ERROR_MAIN:
		echo 'sim_maintenance';
		break;
	default:
		echo 0;
}



?>