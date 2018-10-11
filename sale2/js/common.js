// JavaScript Document

var loaded=false;

$(function(){
	
	initAnimation();
	
	adjustElementsSize();
	
	
	
	

	var initPos=location.hash.replace("#", "");
	
	if(!initPos)
		{
			initPos="home";
		}
	
	animateScroll(initPos,"init_pos");	
	updateSideMenu(initPos,"init_pos");
	
	
	$('.map-blk .num-txt').click(function(e){
		e.preventDefault();
		
		var click_route_btn=$(this).parent('.num-sign').index()-1;
		$(this).closest('.route-panel').find('.controller li').eq(click_route_btn).find('a').click();
		
	})
	
	$('.lightbox,.controller,.txt-blk').click(function(e){
		
		e.preventDefault();
		$('.lightbox').fadeOut(200);
		
	})
	
	$('.map-blk .thumbnail-pt').click(function(e){
		e.preventDefault();
		
		var idx =$(this).closest('.route-panel').index();

		
		var lightboxObj=$('.route-panel-'+idx).find('.lightbox');
		
		
		
		
		
		var txtBlkObj=$('.route-panel-'+idx).find('.txt-blk');
		var thumbnailUrl=$(this).find('img').attr('src');
		
				var photoObj=$('.route-panel-'+idx).find('.photo');
				var enlargeImgUrl=thumbnailUrl.replace("/t/","/e/");
				lightboxObj.css({'z-index':'200'});
				lightboxObj.fadeOut(0);
				lightboxObj.fadeIn(200);
				
				var enlargePhotoObj=$('.route-panel-'+idx).find('.lightbox .photo');
		
				$('.route-panel-'+idx).find('.lightbox .photo').attr("src",enlargeImgUrl);
				
				 enlargePhotoObj.one("load", function() {
		
			 		var offset= (lightboxObj.height()-photoObj.height()+txtBlkObj.height())/2;
				//	console.log(lightboxObj.height()+" "+photoObj.height()+" "+txtBlkObj.height())
		
				
					 enlargePhotoObj.css({'opacity':'0'});
					 enlargePhotoObj.animate({'opacity':'1'},200);
					 $('.route-panel-'+idx).find('.lightbox .photo').css({'margin-top':offset+'px'});

				 }).attr("src", enlargeImgUrl);

		
		
	})
	
	$(window).load(function(){
			adjustElementsSize();
			loaded=true;
	})

	$(window).resize(function(){
		adjustElementsSize();
	})
	
	
	$('.promotion-blk-1').click(function(e){
			e.preventDefault();
			$('.top-menu-ul a[rel=course]').click();
	})
	
	$('.promotion-blk-2').click(function(e){
			e.preventDefault();
			$('.top-menu-ul a[rel=contact]').click();
	})
	
	
	$('.promotion-blk-3').click(function(e){})
	
	
		
	
	$('.route-panel li a').click(function(e){
		
		
		var map_idx = $(this).closest('.route-panel').index();
		
	
		//.map-img-blk
		
		$('.controller a').removeClass('active');
		
		$(this).addClass('active');
		
		var controll_idx=$(this).parent('li').index();
		
		var map_offset=controll_idx*($('.img-map').width());
		$('.map-img-blk').css({'background-position':'-'+map_offset+'px 0px'});
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').removeClass('active');
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').find('.thumbnail-pt').fadeOut(0);
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').eq(controll_idx).addClass('active');
		
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').eq(controll_idx).find('.thumbnail-pt').fadeOut(0);
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').eq(controll_idx).find('.thumbnail-pt').fadeIn(0);
		
		
		var ratio = $('.map-img-blk.active').width()/767;

		
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').eq(controll_idx).find('.thumbnail-pt').css({'top':50*ratio+'px'});
		
		$('.map-img-blk').eq(map_idx-1).find('.num-sign').eq(controll_idx).find('.thumbnail-pt').animate({'top':40*ratio+'px'},{duration:200, easing:"easeInOutCubic"});

		
		
		$('.map-blk').eq(map_idx-1).find('tr').removeClass('active');
		$('.map-blk').eq(map_idx-1).find('tr').eq(controll_idx).addClass('active');
		
	
			
	})
	
	$('.top-menu-btn').click(function(e){
		
		if(!$(this).hasClass('active'))
		{
			e.preventDefault();
			$(this).addClass('active');
	
			$('.mobile-overlay-menu li a').css({'left':'-100px','opacity':'0'});
	
			
			$('.mobile-overlay-menu').slideDown(200,function(){
				
				
				$('.mobile-overlay-menu li a').css({'line-height':$('.mobile-overlay-menu li').height()+'px'});
				
			});
				
				setTimeout(function(){
					
					for(i=0;i<$('.mobile-overlay-menu li a').size();i++)
					{
						$('.mobile-overlay-menu li a').delay(50).eq(i).animate({'opacity':'1','left':''},{duration:500, easing:"easeInOutQuart"});
					}
					
				},100);
					
		}
		else
		{
			$(this).removeClass('active');
			$('.mobile-overlay-menu').fadeOut(200);

			
		}
	
		
	});
	
	$('.mobile-overlay-menu li a').click(function(){
		
			$('.top-menu-btn').removeClass('active');
			$('.mobile-overlay-menu').fadeOut(200);
//			alert($(this).attr('rel'));
			animateScroll($(this).attr('rel'),'overlay_menu');
			updateSideMenu($(this).attr('rel'));

		
	})

	$('.top-menu-ul a').click(function(e){
		$('.top-menu-ul a').removeClass('active');
		$(this).addClass('active');
		animateScroll($(this).attr('rel'),'top_menu');
	})
	
	$('.reg-btn-2').click(function(e){
		e.preventDefault();
		animateScroll('method','top_menu');

		
	})
	
	$('.type-button').click(function(e){
		e.preventDefault();
		$('.type-button').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.route-btn').click(function(e){
		e.preventDefault();
		$('.route-btn').removeClass('active');
		$(this).addClass('active');
		var idx=$(this).index('.route-btn')+1;
		
		$('.route-panel').animate({'left':-$(window).width()+'px'},{queue:false,duration:500, easing:"easeInOutQuart",complete:function(){
	
			
			
		$('.route-panel').fadeOut(0);
		$('.route-panel-'+idx).fadeIn(0);
		$('.route-panel-'+idx).find('.thumbnail-pt').fadeOut(0);
		$('.route-panel-'+idx).find('.thumbnail-pt').eq(0).fadeIn(0);
		
		
		$('.controller').eq(idx-1).find('a').removeClass('active');
		$('.controller').eq(idx-1).find('a').eq(0).addClass('active');
		
		
		$('.route-panel-'+idx).find('.num-sign').eq(0).addClass('active');

		$('.map-blk').find('tr').removeClass('active');
		$('.route-panel-'+idx).find('.map-blk').find('tr').eq(0).addClass('active');
		
		$('.route-panel-'+idx).find('.map-blk').find('.num-sign').removeClass('active');
		$('.route-panel-'+idx).find('.map-blk').find('.num-sign').eq(0).addClass('active');
		
		
		$('.map-img-blk').removeClass('active');
		$('.map-img-blk').eq(idx-1).addClass('active');
		
	
			
			
			$('.route-panel').css({'left':$(window).width()+'px'});
			
			$('.route-panel').animate({'left':''},{queue:false,duration:500, easing:"easeInOutQuart"});
			
		}});
		
		
		
	})
	
	$('.dot a').click(function(){
		if(!$(this).hasClass('active'))
		{
				$('.dot a.active').siblings('.label').animate({'opacity':'0'},200);
				$('.dot a').removeClass('active');
				$(this).addClass('active');
				animateScroll($(this).attr('rel'),"side_menu");	
		}
	})
	
	$('.dot a').mouseenter(function(){
		
				if(!$(this).hasClass('active'))
				{
					var oriLeft=$(this).siblings('.label').css('left');
					$(this).siblings('.label').css({'left':'+=10px'});
					$(this).siblings('.label').animate({'left':oriLeft,'opacity':'1'},200);
				}
	})
	
	$('.dot a').mouseleave(function(){
		
		if(!$(this).hasClass('active'))
		{
				$(this).siblings('.label').animate({'opacity':'0'},200);
				
		}
	})
	
	$('.footer-menu-blk a').click(function(){
				animateScroll($(this).attr('rel'),"footer_menu");	
	})
	
	
	$('.back-to-top-btn , .sq-logo a, .footer-menu-blk .logo,.top-bar .logo,.logo-2').click(function(){
			
				animateScroll('home',"side_menu");	
				updateSideMenu('home');
		
	})
	
animatingScroll=false;

$(window).scroll(function(){
	//alert(isMobile);
	var nowPos=$(document).scrollTop();
	
	var st=$('.side-menu-blk').css('top');
	var sideMenuTop=Number(st.replace("px", ""));
	
	
	 if(nowPos>sideMenuTop+$('.reg-btn-2').height())
	  {
			  $('.reg-btn-2').css({'background':'url(img/reg-btn-2.png?a=1) 0 100% no-repeat #fff'});	  
	  }
	  else
	  {
		  $('.reg-btn-2').css({'background':'url(img/reg-btn-2.png?a=1) 0 0 no-repeat transparent'});
	  }

	
	if(!animatingScroll)
	{
		 
		
		  if(nowPos<$('.section-course').offset().top-240)
		   {
			 if(location.hash!="#home")
			   {
			 		updateSideMenu("home");
			   }
			   
			 
		   }

		   if(nowPos>$('.section-course').offset().top-240 && nowPos<$('.section-route').offset().top-240)
		   {
			   if(location.hash!="#course")
			   {
				   updateSideMenu("course");
			   }
		   }
		/*
		   if(nowPos>$('.section-tutor').offset().top-240 && nowPos<$('.section-route').offset().top-240)
		   {
			   if(location.hash!="#tutor")
			   {
			  	 updateSideMenu("tutor");
			   }
			   
		   }*/
		
		   if(nowPos>$('.section-route').offset().top-240 && nowPos<$('.section-about').offset().top-240)
		   {
			  	   if(location.hash!="#route")
			   {
				   updateSideMenu("route");
				   
				   if(!$('.route-menu-blk ul').hasClass('animated'))
				   {
					  				AnimateRouteMenu();
				   }
			   }
			   
		  }

		
		
				   if(nowPos>$('.section-about').offset().top-240 && nowPos<$('.section-contact').offset().top-240)
		   {
			  	   if(location.hash!="#about")
			   {
				   updateSideMenu("about");
				   
				   if(!$('.route-menu-blk ul').hasClass('animated'))
				   {
					  				AnimateRouteMenu();
				   }
			   }
			   
		  }

		
		
		   if(nowPos>$('.section-contact').offset().top-240)
		   {
			 	   if(location.hash!="#contact")
			   {
				   updateSideMenu("contact")
			   }
			   
		   }
	}
		
//	}

});
	
})


function adjustElementsSize()
{
	
	if($(window).width()<1024 && !$('body').hasClass('mobile'))
	{
		$('body').addClass('mobile');
		$('.top-menu-btn').removeClass('active');
	}
	
	if(($(window).width()>=1024))
	  {
	//	  $('.route-menu-blk ul').css({'left':-2*$(window).width()+'px'});
		$('body').removeClass('mobile');	
	   
	  }
	
	$('.mobile-overlay-menu').fadeOut(0);
	var videoBannerHeight=$(window).height()-$('.header').height()-2;
	var videoBannerContentHeight=$('.video-banner-blk .content-blk .middle').height();
	$('.video-banner-blk').css({'width':'100%'});
	$('.video-banner-blk').css({'height':videoBannerHeight+'px'});
	$('.video-banner-blk .content-blk .middle').css({'margin-top':(videoBannerHeight-videoBannerContentHeight)/2+'px'});
	$('.side-menu-blk').css({'top':($(window).height()-$('.side-menu-blk').height())/2+'px'});

//	$('#route-btn-1').click();
		$('.video-banner-blk').delay(1000).animate({'opacity':'1'},{duration:1000, easing:"easeInOutQuart",complete:function(){
			
			
			if(!$('.side-menu-blk').hasClass('animated'))
			{
					$('.dot').css({'opacity':'0'});
					$('.side-menu-blk').animate({'opacity':'1','right':'20px'},{duration:200, easing:"easeInOutQuart",complete:function(){
				
					for(i=$('.dot').size()-1;i>=0;i--)
						{
							$('.dot').delay(50).eq(i).animate({'opacity':'1'},{duration:100, easing:"easeInOutQuart"});
						}

					$('.side-menu-blk').addClass('animated');	

				}});		
			}
			
		}});
		

	$('.mobile-overlay-menu').css({'top':$('.header').height()+'px','height':$(window).height()-$('.header').height()-2+'px'});
	
	
	
	//var res = str.replace("Microsoft", "W3Schools");

	
	//console.log(point_top+" "+point_left);
	
	repositionMapPt();
	
}

function repositionMapPt()
{
		for(i=0;i<$('.num-sign').size();i++)
	{
		
			var ratio = $('.map-img-blk.active').width()/767;
	//	console.log(ratio);
			var point_ori_w=28;
			var point_ori_fontsize=16;

			var point_ori_top=Number($('.num-sign').eq(i).attr('data-ori-top'));

			var point_ori_left=Number($('.num-sign').eq(i).attr('data-ori-left'));
			var point_top=point_ori_top*ratio;
			var point_left=point_ori_left*ratio;

//		console(Math.min(point_ori_w*ratio,20));
		
						$('.num-sign').eq(i).css({'width':point_ori_w*ratio+'px',
						  'height':point_ori_w*ratio+'px',
						  'font-size':point_ori_fontsize*ratio+'px',
//						  'line-height':Math.max(point_ori_w*ratio,20)+'px',
						  'line-height':point_ori_w*ratio+'px',
						  'top':point_top+'px',
						  'left':point_left+'px'
						 });
		
	}
	
	
	var thumbnail_ori_w=68;
	var thumbnail_ori_h=45;
	
	var thumbnail_w=thumbnail_ori_w*ratio;
	var thumbnail_h=thumbnail_ori_h*ratio;
	
	
	$('.thumbnail-pt').css({'width':thumbnail_w+'px'});
	$('.thumbnail-pt').css({'height':thumbnail_h+'px'});
	
	var ori_border = 8;
	var border = ori_border*ratio;
	
	var thumbnail_ori_top=40;
	var thumbnail_ori_left=-27;
	
	var thumbnail_left=thumbnail_ori_left*ratio;
	var thumbnail_top=thumbnail_ori_top*ratio;
	$('.thumbnail-pt').css({'border':border+'px solid #000','top':thumbnail_top+'px','left':thumbnail_left+'px'});

	
	var ori_pointer_height1 = 10;
	var ori_pointer_height2 = 25;
	var ori_margin=-25;
	 ori_pointer_height1 = ori_pointer_height1*ratio;
	 ori_pointer_height2 = ori_pointer_height2*ratio;
	ori_margin=ori_margin*ratio;
	$('.thumbnail-pt .pointer').css({'margin-top':ori_margin+'px','border-width':'0 '+ori_pointer_height1+'px '+ori_pointer_height2+'px '+ori_pointer_height1+'px'})

		
		
	/*
	var thumbnail_ori_w=68;
	var thumbnail_ori_h=45;
	
	
	var thumbnail_ori_top=25;
	var thumbnail_ori_left=-33;


	var thumbnail_left=thumbnail_ori_left*ratio;
	var thumbnail_top=thumbnail_ori_top*ratio;

	var ori_border = 8;
	
	var ori_pointer_height1 = 10;
	var ori_pointer_height2 = 15;
	 ori_pointer_height1 = ori_pointer_height1*ratio;
	 ori_pointer_height2 = ori_pointer_height2*ratio;
	var border = ori_border*ratio;

	var thumbnail_w=thumbnail_ori_w*ratio+border*2;
	var thumbnail_h=thumbnail_ori_h*ratio+border*2;
	
	$('.thumbnail-pt').css({'width':thumbnail_w+'px','left':thumbnail_left+'px'});
	$('.thumbnail-pt').css({'height':thumbnail_h+'px','top':thumbnail_top+'px'});

	$('.thumbnail-pt .pointer').css({'border-width':'0 '+ori_pointer_height1+'px '+ori_pointer_height2+'px '+ori_pointer_height1+'px'})
	
	*/
}
	
function animateScroll(toPos,ui)
{		
		animatingScroll=true;
		
		$('.top-menu-ul a[rel='+toPos+']').addClass('active');
		$('.dot a[rel='+toPos+']').addClass('active');
	
			 var offsetTop;
	

		if($('body').hasClass('mobile'))
		{
			offsetTop=100;
		}
		else{
			offsetTop=60;
		}
	
		switch(toPos){
		case "home": 
			if(ui!="side_menu"){updateSideMenu("home");}
			$('body,html').stop().animate({scrollTop: 0},{duration:1000, easing:"easeInOutQuart",complete:function(){animatingScroll=false;}} );
			$('body,html').stop().animate({scrollTop: 0},{duration:1000, easing:"easeInOutQuart",complete:function(){animatingScroll=false;}} );
			break;

		case "course": 
			if(ui!="side_menu"){updateSideMenu("course");}

			$('body,html').stop().animate({scrollTop: $('.section-course').offset().top-offsetTop},{duration:1000, easing:"easeInOutQuart",complete:function(){animatingScroll=false;}} );
			break;
				
		case "method":
				
			if(ui!="side_menu"){updateSideMenu("course");}
			$('body,html').stop().animate({scrollTop: $('.title-1-a').offset().top-offsetTop},{duration:1000, easing:"easeInOutQuart",complete:function(){animatingScroll=false;}} );
			break;
		
				
/*
		case "tutor": 
			if(ui!="side_menu"){updateSideMenu("tutor");}
			$('body,html').stop().animate({scrollTop: $('.section-tutor').offset().top-offsetTop},{duration:1000, easing:"easeInOutQuart",complete:function(){animatingScroll=false;}} );
			break;
*/
		case "route": 
			if(ui!="side_menu"){updateSideMenu("route");}
			$('body,html').stop().animate({scrollTop: $('.section-route').offset().top-offsetTop},{duration:1000, easing:"easeInOutQuart",complete:function(){
				
				if(!$('.route-menu-blk ul').hasClass('animated'))
				  {
					  				AnimateRouteMenu();
				  }
				animatingScroll=false;} });
			break;

		case "about": 
			if(ui!="side_menu"){updateSideMenu("about");}
			$('body,html').stop().animate({scrollTop: $('.section-about').offset().top-offsetTop},{duration:1000, easing:"easeInOutQuart",complete:function(){
				
				if(!$('.route-menu-blk ul').hasClass('animated'))
				  {
					  				AnimateRouteMenu();
				  }
				animatingScroll=false;} });
			break;

				
				
		case "contact": 
			if(ui!="side_menu"){updateSideMenu("contact");}
			$('body,html').stop().animate({scrollTop: $('.section-contact').offset().top-offsetTop},{duration:1000, easing:"easeInOutQuart",complete:function(){animatingScroll=false;}} );
			break;
	}
	
	 	$('.top-menu-ul a').removeClass('active');
	   	$('.top-menu-ul a[rel='+toPos+']').addClass('active');
			
}

function updateSideMenu(toPos,ui)
{
				$('.dot a.active').siblings('.label').animate({'opacity':'0'},200);
				$('.dot a').removeClass('active');
			   	$('.top-menu-ul a').removeClass('active');
				
			   	$('.top-menu-ul a[rel='+toPos+']').addClass('active');
				$('.dot a[rel='+toPos+']').addClass('active');
			    location.hash=toPos;
				var oriLeft=$('.dot a.active').siblings('.label').css('left');
				
				if(ui!="init_pos" && ui )
				{
					$('.dot a.active').siblings('.label').css({'left':'+=10px'});
				}

				$('.dot a.active').siblings('.label').animate({'left':oriLeft,'opacity':'1'},200);
	
}

function initAnimation()
{
	$('.top-bar .logo,.contact-info-blk').css({'opacity':'0'});
	$('.green-bar').css({'width':'1px','opacity':'0'});
	$('.top-menu-blk').css({'opacity':'0'});
	$('.video-banner-blk').css({'opacity':'0'});
	$('.side-menu-blk').css({'opacity':'0','right':'-=30px'});
	$('.top-menu-btn').css({'opacity':'0'});
	
	$('.num-sign-1').addClass('active');

	$('.route-panel').fadeOut(0);
	$('.route-panel-1').fadeIn(0);
	
		$('.route-map-blk').css({'opacity':'0'});
	
	var routeMenuMargin=($(window).width()-$('.route-menu-blk ul').width())/2;
	$('.route-menu-blk ul').css({'left':'-='+($('.route-menu-blk ul').width()+routeMenuMargin)+'px'});
	
		$('.top-bar .logo, .contact-info-blk, .top-menu-btn').animate({'opacity':'1'},{duration:1000, easing:"easeInOutQuart"});
		$('.green-bar').delay(250).animate({'width':'100%','opacity':'1'},{duration:1000, easing:"easeInOutQuart"});
		$('.top-menu-blk').delay(500).animate({'opacity':'1'},{duration:1000, easing:"easeInOutQuart"});
	
	
	initMapPt();
}

function initMapPt()
{
	for(i=0;i<$('.num-sign').size();i++)
	{
		var obj =$('.num-sign').eq(i);
		
		obj.attr('data-ori-top',obj.css('top').replace("px",""));
		obj.attr('data-ori-left',obj.css('left').replace("px",""));
		
	}
	
	$('.map-img-blk').eq(0).addClass('active');

		
}

function AnimateRouteMenu()
{
	
	if($('body').hasClass('mobile'))
	{
						$('.route-menu-blk ul').animate({'left':'-6px'},{duration:500, easing:"easeInOutQuart"});

	}
	else{
						$('.route-menu-blk ul').animate({'left':'0px'},{duration:500, easing:"easeInOutQuart"});

	}
		
	
				$('.route-map-blk').delay(200).animate({'opacity':'1'},{duration:500, easing:"easeInOutQuart"});

				$('.route-menu-blk ul').addClass('animated');
				
	
}
