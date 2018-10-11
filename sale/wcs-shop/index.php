<?php
include 'header.php';
?>

<style type="text/css">
	.index .h2-title,
	.wcs-shop .h2-title,
	.container .middle .bottom-btns-ul a.cart-btn {
		display: none;
	}
	
	.container .middle .veh-type-btn-div {
		display: none;
	}
</style>

<div class="container">

	<div class="middle">
		<a href="javascript:void(0);" class="logo"><img  src="img/logo.png"></a>
		<div class="mbr-code-div">客戶編號：<span class="mbr-code"></span>
		</div>
	</div>



	<div class="step-bar">

		<ul class="step-flow">
			<li class="active">1.選購</li>
			<li>2.確認及付款</li>
			<li class="last">3.交易完成</li>

		</ul>


	</div>

	<div class="middle middle-2">


		<ul class="veh-type-btn-div">

			<li><a href="javascript:void(0);" class="veh-type-btn pc" data-veh-type="pc">私家車</a>
			</li>
			<li><a href="javascript:void(0);" class="veh-type-btn lg" data-veh-type="lg">輕型貨車</a>
			</li>
			<li class="last"><a href="javascript:void(0);" class="veh-type-btn mc" data-veh-type="mc">電單車</a>
			</li>


		</ul>

		<ul class="veh-type-btn-div empty">

			<li>暫時未有補鐘課程建議報讀</li>

		</ul>



		<h2 class="h2-title"><img src="img/clock-icon.png" class="clock-icon">選購補鐘</h2>

		<div class="course-selection-div pc">

		</div>

		<div class="course-selection-div lg">

		</div>

		<div class="course-selection-div mc">






		</div>








		<ul class="bottom-btns-ul">
			<li><a class="exit" href="javascript:void(0);">取消</a>
			</li>
			<li><a class="cart-btn" href="cart.php">下一步</a>
			</li>

		</ul>




	</div>



	
</div>

<div class="footer-remark">


		<div class="footer-remark-middle">
			備註：

			<div class="footer-remark-txt pclg">
			<ol>
				<li>每節的上課時間為45分鐘(智專學員)或55分鐘(非智專學員)。</li>
				<li>智專學員請於完成購買補課後盡快聯絡所屬導師安排課堂。原則上所屬導師將盡量作出相應安排，惟有關安排或需配合實際情況或其他不可抗力之因素而進行調整。</li>
				<li>學員必須於駕駛考試前預約及出席所有購買的課堂。駕駛考試後，所有未出席之課堂即告失效。</li>
			</ol>
			</div>
			
			
			<div class="footer-remark-txt mc">
			<ol>
				<li>每節的上課時間為45分鐘(智專學員)或55分鐘(非智專學員)。</li>
				<li>智專學員請於完成購買補課後盡快聯絡所屬導師安排課堂。原則上所屬導師將盡量作出相應安排，惟有關安排或需配合實際情況或其他不可抗力之因素而進行調整。</li>
				<li>學員必須於駕駛考試前預約及出席所有購買的課堂。駕駛考試後，所有未出席之課堂即告失效。</li>
			</ol>
			</div>
			

		</div>

	</div>



<script type="text/javascript" src="index.bundle.js?t=<?php echo time();?>">
</script>

</body>
</html>