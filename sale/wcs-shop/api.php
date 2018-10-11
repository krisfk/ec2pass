<?php
include 'config.php';

$token = $_POST[ 'token' ];
$request_client = $_POST[ 'request_client' ];
$request_date = $_POST[ 'request_date' ];
$request_ip = $_POST[ 'request_ip' ];
$mbr_code = $_POST[ 'mbr_code' ];
$api = $_POST[ 'api' ];



$url = "https://api.meghk.com/hksm_web_sales/api/" . $api;
$ch = curl_init();
curl_setopt( $ch, CURLOPT_URL, $url );
curl_setopt( $ch, CURLOPT_POST, true );

switch ( $api ) {
	case 'start_purchase':

		curl_setopt( $ch, CURLOPT_POSTFIELDS, http_build_query( array( "mbr_code" => $mbr_code,
			"token" => $token,
			"request_ip" => $request_ip,
			"request_client" => $request_client,
			"request_date" => $request_date,
		) ) );

		break;

	case 'get_package_list':
	case 'sim_maintenance':
	case 'sim_invalid_token':
	case 'sim_session_timeout':

		curl_setopt( $ch, CURLOPT_POSTFIELDS, http_build_query( array( "token" => $token,
			"request_ip" => $request_ip,
			"request_client" => $request_client,
			"request_date" => $request_date,
		) ) );

		break;

	case 'create_trx_stripe':

		$stripe_payment_token = $_POST[ 'stripe_payment_token' ];
		$mbr_veh_type = $_POST[ 'mbr_veh_type' ];
		$package_code_list = $_POST[ 'package_code_list' ];
		$package_num = $_POST[ 'package_num' ];
		$total_amount = $_POST[ 'total_amount' ];

		curl_setopt( $ch, CURLOPT_POSTFIELDS, http_build_query( array( "token" => $token,
			"request_ip" => $request_ip,
			"request_client" => $request_client,
			"request_date" => $request_date,
			"stripe_payment_token" => $stripe_payment_token,
			"mbr_veh_type" => $mbr_veh_type,
			"package_code_list" => $package_code_list,
			"package_num" => $package_num,
			"total_amount" => $total_amount
		) ) );



		break;


}

curl_setopt( $ch, CURLOPT_COOKIEJAR, COOKIE_FILE );
curl_setopt( $ch, CURLOPT_COOKIEFILE, COOKIE_FILE );

$output = curl_exec( $ch );
curl_close( $ch );

?>