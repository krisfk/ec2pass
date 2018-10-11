<?php

$request_client = 'HKSM-EXTRA-LESSON';
$request_date = date( 'Y-m-d h:i:s', time() );

if ( empty( $_SERVER[ 'HTTP_X_FORWARDED_FOR' ] ) ) {
	$IP = $_SERVER[ 'REMOTE_ADDR' ];
} else {
	$IP = explode( ',', $_SERVER[ 'HTTP_X_FORWARDED_FOR' ] );
	$IP = $IP[ 0 ];
}

$code = 'TokenHKSM201808Alpha';
$request_ip = $IP;

$token = sha1( $request_ip . $request_date . $code );

$request_client = 'A1 Android App';

$url ="https://api.meghk.com/hksm_web_sales/api/get_package_list";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array("token"=>$token,
																								"request_ip"=>$request_ip,
																								"request_client"=>$request_client,
																								"request_date"=>$request_date,
																					))); 
$output = curl_exec($ch); 
curl_close($ch);




?>