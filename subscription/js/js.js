// JavaScript Document
	function v(srcStr,uriStr){
        var myPlayer = amp('vid1', { /* Options */
                "nativeControlsForTouch": false,
                autoplay: false,
                controls: true,
                width: "640",
                height: "400",
                poster: ""
            }, function(){
                console.log('Good to go!');
                // add an event listener
                this.addEventListener('ended', function(){
                    console.log('Finished!');
                })
            }
        );
        /*myPlayer.src([{
            src:srcStr,
            type: "application/vnd.ms-sstr+xml"
        }]);
        myPlayer.downloadableMedia([{type:"video",uri:uriStr,size:"720p",lang:"zh-hans"}]);*/
		myPlayer.src([
        {
            src: uriStr,
            type: "video/mp4"
        },
        {
            src: srcStr,
            type: "application/dash+xml"
        }
    ]);

	}
	
	function toUtf8(str) {    
    var out, i, len, c;    
    out = "";    
    len = str.length;    
    for(i = 0; i < len; i++) {    
        c = str.charCodeAt(i);    
        if ((c >= 0x0001) && (c <= 0x007F)) {    
            out += str.charAt(i);    
        } else if (c > 0x07FF) {    
            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));    
            out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));    
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
        } else {    
            out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));    
            out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));    
        }    
    }    
    return out;    
	}
	
	var ua = navigator.userAgent.toLowerCase();
	function share(){
		
		$(document).on("click",(".wechat:not(.imgQR)"),function(event){
			if($(window).width()<=1024){
			if(ua.match(/MicroMessenger/i) == "micromessenger"){
				var e="<div class='bg'><img src='images/img5.png' width='107' height='94'></div>";
				$("body").append(e);
				$(".bg").click(function(){$(".bg").remove()})
			}else{
			var e="<div class='tip'><p>点击菜单栏'<img src='images/i24.png' height='16'>'或'<img src='images/i25.png' height='16'>'，选择分享。<br>可以把页面分享出去！</p></div>";
			$("body").append(e);
			setTimeout(function(){$(".tip").remove()},3000);
			}
		}else{
			
			var src=$(this).children("a").attr("data-src");
			$(".qrCode").not($(this).children(".qrCode")).hide();
			$(this).children(".qrCode").fadeToggle()
			$(this).children(".qrCode").find(".codeArea").empty();
			if(src==""||src===undefined||src==null){
				src=window.location.href;
				var s=toUtf8(src);
				$(this).children(".qrCode").find(".codeArea").qrcode({
					width: 140,
					height:140,
					text: s,
					typeNumber: -1,
				});
			}else{
				var s=toUtf8(src);
				$(this).children(".qrCode").find(".codeArea").qrcode({
					width: 100,
					height:100,
					text: s,
					typeNumber: -1,
				});
			};
			event.stopPropagation()
		}
		})
		/*$(".wechat:not(.imgQR)").click(function(event){
			
			if($(window).width()<=1024){
			if(ua.match(/MicroMessenger/i) == "micromessenger"){
				var e="<div class='bg'><img src='images/img5.png' width='107' height='94'></div>";
				$("body").append(e);
				$(".bg").click(function(){$(".bg").remove()})
			}else{
			var e="<div class='tip'><p>点击菜单栏'<img src='images/i24.png' height='16'>'或'<img src='images/i25.png' height='16'>'，选择分享。<br>可以把页面分享出去！</p></div>";
			$("body").append(e);
			setTimeout(function(){$(".tip").remove()},3000);
			}
		}else{
			
			var src=$(this).children("a").attr("data-src");
			$(".qrCode").not($(this).children(".qrCode")).hide();
			$(this).children(".qrCode").fadeToggle()
			$(this).children(".qrCode").find(".codeArea").empty();
			if(src==""||src===undefined||src==null){
				src=window.location.href;
				var s=toUtf8(src);
				$(this).children(".qrCode").find(".codeArea").qrcode({
					width: 140,
					height:140,
					text: s,
					typeNumber: -1,
				});
			}else{
				var s=toUtf8(src);
				$(this).children(".qrCode").find(".codeArea").qrcode({
					width: 100,
					height:100,
					text: s,
					typeNumber: -1,
				});
			};
			event.stopPropagation()
		}
		})*/
		$(".imgQR").click(function(event){
			if($(window).width()<=1024){
			if(ua.match(/MicroMessenger/i) == "micromessenger"){
				var e="<div class='bg'><img src='images/img5.png' width='107' height='94'></div>";
				$("body").append(e);
				$(".bg").click(function(){$(".bg").remove()})
			}else{
			var e="<div class='tip'><p>点击菜单栏'<img src='images/i24.png' height='16'>'或'<img src='images/i25.png' height='16'>'，选择分享。<br>可以把页面分享出去！</p></div>";
			$("body").append(e);
			setTimeout(function(){$(".tip").remove()},3000);
			}
		}else{
			
			$(this).children(".qrCode").fadeToggle();event.stopPropagation();
		}
		})
		

		
		$(".qrCode i").click(function(event){
			$(this).parent(".qrCode").fadeOut();
			event.stopPropagation();
		})
		$(".qrCode").click(function(event){
			event.stopPropagation();
		})
		$(document).click(function(){
			$(".qrCode").fadeOut();
			//$(".qrCode").children(".codeArea").empty();
		})
		$(document).on("click",(".sinaWeibo"),function(event){
		
			var src=$(this).children("a").attr("data-src");
			var title=$(this).children("a").attr("data-title");
			if(src==""||src===undefined||src==null){
				src=window.location.href;
			}else{
				
			}
			if(title==""||title===undefined||title==null){
				title=document.title;
			}else{
				
			}
			var url="http://service.weibo.com/share/share.php?url="+src+"&title="+title;
			window.open(url,"_blank")
			event.stopPropagation();
		})
		
		$(".linkin").click(function(event){
			var src=$(this).children("a").attr("data-src");
			var title=$(this).children("a").attr("data-title");
			if(src==""||src===undefined||src==null){
				src=window.location.href;
			}else{
				
			}
			if(title==""||title===undefined||title==null){
				title=document.title;
			}else{
				
			}
			var url="https://www.linkedin.com/cws/share?url="+src;
			window.open(url,"_blank")
			event.stopPropagation();
		})
		
		$(".email").click(function(event){
			var str=$(this).children("a").attr("data-src");
			var url=window.location.href;
			var win = window.open(str+url,'_blank');
			event.stopPropagation();
		})
		
		/*var clipboard = new Clipboard('.copyLink a');

    	clipboard.on('success', function(e) {
        console.log(e);
		s();
		event.stopPropagation();
   	 	});

    	clipboard.on('error', function(e) {
        console.log(e);
		alert("复制失败！");
		event.stopPropagation();
    	});*/
		
		function s(){
			var e="<div class='tip'><p>复制成功，请分享给好友吧。</p></div>";
			$("body").append(e);
			setTimeout(function(){$(".tip").remove()},2000);
		}
		
		$(".shareMob").click(function(event){
			$(".share").toggle();
			$("#uhf-c-nav").hide();
			$(".c-uhfh>div:first-child").removeClass("f-opened").addClass("f-closed");
			$("body").css("overflow-y","auto");
			event.stopPropagation();
		})
		
		//var ww=$(window).width();
		//if(ww<540){
		$(document).click(function(){
			$(".share").hide();
		})//}
		
	}
	
$(document).ready(function() {
	
	$('.to-top').toTop({
		offset:800,
		right:24,
		bottom:24
	});
	
	$(".flexslider").flexslider({
		directionNav:false,
	});
	
	/*var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });*/ 
	var w=$(window).width();
	//var swiper = new Swiper('.flexslider2', {
//      slidesPerView: 5,
//      spaceBetween: 30,
//      slidesPerGroup: 5,
//      loop: true,
//      loopFillGroupWithBlank: true,
//      pagination: {
//        el: '.swiper-pagination',
//        clickable: true,
//      },
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev',
//      },
//    });
	if(w<1280){
		if(w<1024){
			
	
			if(w<768){
				if(w<540){
					if(w<375){
						var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
					}else{
						var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
					}
					
				}else{
					var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
				}
			}else{
				var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
			}
		}else{
			var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
		}
		
	}else{
		var swiper2 = new Swiper('.flexslider2', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	}

	
	/*$(".flexslider2").flexslider({
		animation: "slide",
		slideshow: false,
		prevText:"",
		nextText:"",
		itemWidth: 200,
		minItems:1,
		maxItems: 5
	});*/
	//var w=$(window).width();
	
	//if(w<1280){
//		if(w<1024){
//			if(w<768){
//				if(w<540){
//					if(w<375){
//						$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		controlNav:false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 1
//	});
//					}
//					else{
//						$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		//controlNav:false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 120,
//		minItems:1,
//		maxItems: 2
//	});
//					}
//					
//				}else{
//					$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 160,
//		minItems:1,
//		maxItems: 3
//	});
//				}
//			}else{
//				$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 3
//	});
//			}
//		}else{
//			$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 4
//	});
//		}
//		
//	}else{
//		$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 5
//	});
//	}
	
//	if(w<1280){
//	$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 4,
//		move:4
//	});
//	}else{
//		if(w<1024){
//			$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 3,
//		move:3
//	});
//		}else{
//			if(w<768){
//				$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 2,
//		move:2
//	});
//			}else{
//				if(w<540){
//					$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		itemWidth: 200,
//		minItems:1,
//		maxItems: 1,
//		move:1
//	});
//				}else{
//					$(".flexslider2").flexslider({
//		animation: "slide",
//		slideshow: false,
//		prevText:"",
//		nextText:"",
//		/*itemWidth: 200,
//		minItems:1,
//		maxItems: 5,
//		move:5*/
//	});
//				}
//			}
//		}
//	}

	var w=$(window).width();
	if(w<540){
		$(".flexslider3").flexslider({
			directionNav:false,
		});
	}
	
	/*if(w<768){
		$(".c-uhf-menu button").click(function(event){
			if($(this).attr("aria-expanded")==false){
				$(this).attr("aria-expanded",true);
				$(this).next().attr("aria-hidden",false);
				//event.stopPropagation();
			}else{
				$(this).attr("aria-expanded",false);
				$(this).next().attr("aria-hidden",true);
				//event.stopPropagation();
			}
		})
	}*/
	
	function wrapText() {
      $(".eventListItem:not(:hidden)").each(function (i) {
        var $h = $("h3 a", $(this)).eq(0);
		var $p = $("p", $(this)).eq(0);
        while ($h.outerHeight() > 50) {
          $h.text($h.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
		while ($p.outerHeight() > 58) {
          $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
      });
	  $(".banner .bannerInfo:not(:hidden)").each(function (i) {
		var $p = $("p", $(this)).eq(0);
		while ($p.outerHeight() > 52) {
          $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
      });
	  $(".eventText").each(function (i) {
		var $h = $("h1", $(this)).eq(0);
		while ($h.outerHeight() > 40) {
          $h.text($h.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
        }
      });
    }wrapText()
	
	function classSelect(){
		
		$(".classList li").click(function(){
			var t=$(this).text();
			var s="<span>"+t+"</span>";
			
			if($(this).children("input").attr("type")=="radio"){
				var os=[];
				$(this).addClass("clicked");
				$(this).siblings("li").removeClass("clicked");
				$(this).children("input").attr("checked",true);
				$(this).siblings("li").children("input").attr("checked",false);
				for(var i=0;i<$(this).siblings("li").length;i++){
					os[i]="<span>"+$(this).siblings("li").eq(i).text()+"</span>";
					$(".selectClass").html($(".selectClass").html().replace(os[i],""));
				}
				
				$(".selectClass span:last").before(s);
					

			}else{
				$(this).toggleClass("clicked");
				if($(this).hasClass("clicked")){
					$(this).children("input").attr("checked",true);
					$(".selectClass span:last").before(s);
				}else{
					$(this).children("input").attr("checked",false);
					$(".selectClass").html($(".selectClass").html().replace(s,""))
				}
			}
			//$(".selectClass span:last").before("<span>"+t+"</span>");
			var c=$(".selectClass span").length;
			if(c>1){
				$(".selectClass").show();
				$(".selectClass span:last,.noResult p span").click(function(){
					$(".selectClass").hide();
					$(".selectClass span:not(:last)").remove();
					$(".classList li").removeClass("clicked");
					$(".classList li input").attr("checked",false)
				})
				$(".selectClass span:not(:last)").click(function(){
					var ts=$(this).text();
					var tt=[];
					for(var i=0;i<$(".classList li.clicked").length;i++){
						tt[i]=$(".classList li.clicked").eq(i).text();
						if(tt[i]==ts){
							$(".classList li.clicked").eq(i).children("input").attr("checked",false);
							$(".classList li.clicked").eq(i).removeClass("clicked");
							
						}
					}
					$(this).remove();
					c--;
					if($(".selectClass span").length<2){$(".selectClass").hide();}
				})
			}else{
				$(".selectClass").hide()
			}
			
		})
		$(".classList li a").click(function(event){
			event.preventdefault();
		})
		
		$(".classList:not(.noSeclect) h3").click(function(){
			$(this).next("ul").slideToggle();
			$(this).toggleClass("clicked");
		})
		$(".classList p span:eq(0)").click(function(){
			for(var i=0;i<$(".classList h3").length;i++){
				if($(".classList h3").eq(i).hasClass("clicked")){
					//return
				}else{
					$(".classList h3").eq(i).next("ul").slideDown();
					$(".classList h3").eq(i).addClass("clicked");
				}
			}
		})
		$(".classList p span:eq(1)").click(function(){
			for(var i=0;i<$(".classList h3").length;i++){
				if($(".classList h3").eq(i).hasClass("clicked")){
					$(".classList h3").eq(i).next("ul").slideUp();
					$(".classList h3").eq(i).removeClass("clicked");
				}else{
					//return
				}
			}
		})
		
		var ww=$(window).width();
		if(ww<768){
			
			$(".noSeclect h3").click(function(){
			$(this).next("ul").slideToggle();
			$(this).toggleClass("clicked");
		})
			$(".downloadList h2").click(function(){
			$(this).next("div").slideToggle();
			$(this).toggleClass("clicked");
		})
			
			$(".searchForm span,.searchForm:before").click(function(){
				$(this).toggleClass("clicked");
				$(".searchForm input, .searchForm button, .city").toggle();
				$(".cityList").hide();
			})
			if($(".classList h2").length>0){
				//$(".classList p,.classList h3").hide();
				$(".classList h2").click(function(){
					$(this).toggleClass("clicked");
					$(this).siblings("p, h3").slideToggle();
					$(this).siblings("ul").hide();
				})
			}else{
				
			}
			
		}else{
			$(".classList p,.classList h3").show();
		}
		
	}classSelect()
	
	function citySelect(){
		$(".moreCity").click(function(event){
			$(".cityList").fadeToggle();
			$(".citylistItem:eq(0)").show();
			$(".citylistItem:eq(0)").siblings(".citylistItem").hide();
			event.stopPropagation();
		})
		$(".cityPY li").click(function(){
			$(".citylistItem").eq($(this).index()).show();
			$(".citylistItem").eq($(this).index()).siblings(".citylistItem").hide();
		})
		$(".cityList").click(function(event){
			event.stopPropagation();
		})
		$(document).click(function(){
			$(".cityList").hide();
		})
	}citySelect()
	
	$(".videoPlay").click(function(){
		var s=$(this).children("a").attr("data-src");
		var u=$(this).children("a").attr("data-uri");
		//v(s,u);
	})
	share()
	
	$(".other").click(function(){
		//$(this).attr("checked",true);
		if($(this).prop('checked')){
			$(this).parent().next(".input:hidden").fadeIn();
		}else{
			$(this).parent().next(".input:hidden").fadeOut();
		}
	})
	
	//window.onresize=classSelect;
})	