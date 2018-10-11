<?php
//$url = "http://localhost/path.php";


$request_client = 'HKSM-EXTRA-LESSON';
$request_date = date( 'Y-m-d h:i:s', time() );

if ( empty( $_SERVER[ 'HTTP_X_FORWARDED_FOR' ] ) ) {
	$IP = $_SERVER[ 'REMOTE_ADDR' ];
} else {
	$IP = explode( ',', $_SERVER[ 'HTTP_X_FORWARDED_FOR' ] );
	$IP = $IP[ 0 ];
}
define("COOKIE_FILE", "cookie.txt");

$code = 'TokenHKSM201808Alpha';
$request_ip = $IP;

$token = sha1( $request_ip . $request_date . $code );

$request_client = 'A1 Android App';

$url ="https://api.meghk.com/hksm_web_sales/api/start_purchase";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array("mbr_code"=>"11-0021994",
														   										"token"=>$token,
																								"request_ip"=>$request_ip,
																								"request_client"=>$request_client,
																								"request_date"=>$request_date,
																					))); 
curl_setopt ($ch, CURLOPT_COOKIEJAR, COOKIE_FILE); 
curl_setopt ($ch, CURLOPT_COOKIEFILE, COOKIE_FILE); 

$output = curl_exec($ch); 
curl_close($ch);



$url ="https://api.meghk.com/hksm_web_sales/api/get_package_list";
$ch2 = curl_init();
curl_setopt($ch2, CURLOPT_URL, $url);
curl_setopt($ch2, CURLOPT_POST, true);
curl_setopt($ch2, CURLOPT_POSTFIELDS, http_build_query(array("token"=>$token,
																								"request_ip"=>$request_ip,
																								"request_client"=>$request_client,
																								"request_date"=>$request_date,
																					))); 
curl_setopt ($ch2, CURLOPT_COOKIEJAR, COOKIE_FILE); 
curl_setopt ($ch2, CURLOPT_COOKIEFILE, COOKIE_FILE); 

$output = curl_exec($ch2); 
curl_close($ch2);



$url ="https://api.meghk.com/hksm_web_sales/api/create_trx_stripe";
$ch3 = curl_init();
curl_setopt($ch3, CURLOPT_URL, $url);
curl_setopt($ch3, CURLOPT_POST, true);
curl_setopt($ch3, CURLOPT_POSTFIELDS, http_build_query(array("token"=>$token,
																								"request_ip"=>$request_ip,
																								"request_client"=>$request_client,
																								"request_date"=>$request_date,
															 									"stripe_payment_token"=>'tok_visa',
															 									"mbr_veh_type"=>'PA',
															 									"package_code_list"=>'extra_1',
															 									"package_num"=>'1',
															 									"total_amount"=>615,
																					))); 
curl_setopt ($ch3, CURLOPT_COOKIEJAR, COOKIE_FILE); 
curl_setopt ($ch3, CURLOPT_COOKIEFILE, COOKIE_FILE); 

$output = curl_exec($ch3); 
curl_close($ch3);






?>