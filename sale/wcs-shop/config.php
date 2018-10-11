<?php
header('Access-Control-Allow-Origin: *');
define("ERROR_TIMEOUT", "997");
define("ERROR_TOKEN", "998");
define("ERROR_MAIN", "999");
define("WCS_MAIN_PAGE", "https://wcs.hksm.com.hk/wcs.html");
define("COOKIE_FILE", "cookie.txt");
//define("API_BASE_URL", "https://testapi.meghk.com/hksm_web_sales/api/");
define("API_BASE_URL", "https://api.meghk.com/hksm_web_sales/api/");

define("SHOP_INDEX", "./index.php");
define("SESSION_TIMEOUT",6000);




error_reporting( error_reporting() & ~E_NOTICE );

?>