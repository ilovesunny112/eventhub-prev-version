$(document).ready(function() {
   if (window.location.href.search('chinese') != -1) {
		en = false;
  }		
  
  $('.watermark').each(function(index, element) {
    $(this).watermark($(this).attr('data-rel'));
  });
  
  genbanner();
  
  $('.nav-wrapper input[type="checkbox"]').change(function() { 
	  if($(this).closest('li').find('input[type="checkbox"]:checked').length == 0) {
	 	 $(this).closest('li').removeClass('single');
		 $(this).closest('li').removeClass('multiple');
	  }
	  if($(this).closest('li').find('input[type="checkbox"]:checked').length == 1) {
	 	 $(this).closest('li').addClass('single');
		 $(this).closest('li').removeClass('multiple');
	  }
	  if($(this).closest('li').find('input[type="checkbox"]:checked').length >= 2) {
		 $(this).closest('li').addClass('multiple');
		 $(this).closest('li').removeClass('single');
	  } 
	  
	 
	 var tagval = $(this).val();
	 var tagname = $(this).closest('label').text();
	 var tagframe = '<span data-rel="'+tagval+'" onclick="removetag(this)" class="result-tag">'+tagname+'</span>';
	 var tagclear = '<span onclick="cleartag()" class="clear-tag">CLEAR ALL</span>';
	
	 if(this.checked) {
	   if ($('.result-wrapper .result-tag[data-rel="'+tagval+'"]').length == 0){
	     $('.result-wrapper .tag-wrapper').prepend(tagframe);
	   }
	 } else {
		 $('.result-wrapper .tag-wrapper .result-tag[data-rel="'+tagval+'"]').remove();
	 }
	 
	 if($('.result-wrapper .tag-wrapper .result-tag').length > 0 && $('.result-wrapper .tag-wrapper .clear-tag').length == 0){ 
		 $('.result-wrapper .tag-wrapper').append(tagclear);
	 } 
	 if($('.result-wrapper .tag-wrapper .result-tag').length == 0){
		 $('.result-wrapper .tag-wrapper .clear-tag').remove();
	 } 
	 
  });
  
  $('.nav-wrapper .listslider > li.hashtag input[type="checkbox"]').change(function() {
	  var hashname = $(this).parent('label').text().replace(/\ /g, '');
	  window.location.hash ='#'+hashname+'';
	  console.log(hashname)
  }); 
  
  sortlist();
  
  
	
	$('.nav-wrapper input[type="radio"]').change(function() {
	  var listoption = $(this).val(); 
	  if(listoption == 'upcoming'){
		 sortlist('upcoming');
	  } 
	  if(listoption == 'past'){
		 sortlist('past');
	  }
	  
  });
   
   
   $('.switch-panel #nav-1 input').click(function(){
	   if($(this).attr('checked') == 'checked'){
		   $('.switch-panel #nav-1 input').not(this).removeAttr('checked');
		   
	   }
   });
   
   $('.listslider > li a').click(function(){
	   $(this).parent().toggleClass('expand');
	   $(this).next('.extented-wrapper').slideToggle();
   });
   
    $('.mobilenav').click(function(){
		$(this).toggleClass('active');
		$(this).next('.extented-wrapper-m').slideToggle();
	});
	
	$('.search-title > h2, .nav-title > h2').click(function(){
		if ($(window).width() <= 767){
		 $(this).parent().parent().find('.mobilenav').toggleClass('active');
		 $(this).parent().parent().find('.extented-wrapper-m').slideToggle();
		}
	});
	
	$('.center-col').lightGallery({
       selector: '.gallery-photo'
    });
	
	$("#ms-search > input").keypress(function(e){
	  code = (e.keyCode ? e.keyCode : e.which);
	  if (code == 13)
	  {
		  ms_search('microsoft');
	  }
	});
	
	
	if(location.hash != null){
		 requestHash = location.hash;
   }
	
	
});

$(window).scroll(function () {
   var backtotop =  $('#main-container #nav').offset().top;
   var y = $(this).scrollTop();
   if (y >= backtotop) {
		$('#btn-top').fadeIn();
		} else {
		$('#btn-top').fadeOut();
	}

});

$(window).resize(function(){
		resetbox();	
});

// Basic Features
function lang_zh(){
	window.location = window.location.href.replace('/hk/events/','/hk/events/chinese/');
}

function lang_en(){
	window.location = window.location.href.replace('/hk/events/chinese/','/hk/events/');
}

function socialNetworkShare(type, url, msg){
	var url = encodeURIComponent(url||(location.href).split("?")[0]);
	var msg = encodeURIComponent(document.getElementById("doc_title").content);
	var desc = encodeURIComponent(document.getElementById("doc_desc").content);
	var img = encodeURIComponent(document.getElementById("share_tb").content);
	var pathPrefix, pathShare;
	
	switch(type){
		case "email":
			pathShare = 
			"mailto:?subject=" + msg + "&body=" + desc + "%0A%0A" + url;
			window.location = pathShare;
			return;
		case "copy_url":
			if (window.clipboardData){
				var allowed = window.clipboardData.setData("Text", decodeURIComponent(url));
				if (allowed) alert("URL has been copied to your clipboard.");
			}
			else {
				if (en) {
					alert("Your browser does not support this function.");
				}
				else {
					alert("對不起！您的瀏覽器不支援此功能。");
				}
			}
			return;
		case "messenger":
			pathPrefix = "http://profile.live.com/badge/?";
			pathShare = pathPrefix + "url=" + url + "&title=" + msg + "&description=" + desc + "&screenshot=" + img;
			break;
		case "facebook":
			pathPrefix = "http://www.facebook.com/sharer.php?";
			pathShare = pathPrefix + "u=" + url + "&t=" + msg + "&d=" + desc;
			break;
		case "linkedin":
			pathPrefix = "https://www.linkedin.com/shareArticle?mini=true&url=";
			pathShare = pathPrefix + url;
			break;
		case "subscribe":
			pathPrefix = "https://aka.ms/eventsubscribe-cn";
			pathShare = pathPrefix;
			break;
		case "twitter":
			pathPrefix = "http://twitter.com/share?";
			pathShare = pathPrefix + "url=" + url + "&text=" + msg;
			break;
		case "weibo":
			pathPrefix = "http://v.t.sina.com.cn/share/share.php?";
			pathShare = pathPrefix + "url=" + url + "&title=" + msg + "&pic=" + img;
			break;
	}
	
	window.open(pathShare,"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=640, height=480");
}


function initializePinnedSite() {
    try {
        if (window.external.msIsSiteMode()) {
            // Continue initialization.
        }
        else {
            // Display drag-to-pin image.
		if (en) {
			$('#wrapper').before('<div id="pin-bar"><a href="javascript:void(0)" title="Close" id="btn-close"><img src="../images/common/pinBar_btn_close.jpg" alt="X" /></a><span>Drag <img src="../images/common/icon-pin.jpg" alt="Pin" width="22" height="22" class="msPinSite" /> and see how Eliza enchants her acting career and family life with Office 365.</span></div>');
		}
		else {
			$('#wrapper').before('<div id="pin-bar"><a href="javascript:void(0)" title="Close" id="btn-close"><img src="images/common/pinBar_btn_close.jpg" alt="X" /></a><span>將 <img src="images/common/icon-pin.jpg" alt="Pin" width="22" height="22" class="msPinSite" /> 拉到下面工作列果到，咁就可以隨時睇到香香點樣用Office 365輕鬆兼顧工作同生活啦！</span></div>');
		}
		$('#pin-bar').animate({height: 30}, 500);
			
		$('#btn-close').bind('click', function() {
			$('#pin-bar').animate({height: 0}, {duration: 500, complete: function() {
				$('#pin-bar').remove();
			}});
		});
        }
    }
    catch (e) {
        // Fail silently. Pinned Site API not supported.
    }
}

function sortlist(){
		 $('.result-wrapper .item-list li.items.Past-Events').sort(function (a, b) {
				var date1 = $(a).find('.eventDate').attr('data-rel');
				date1 = date1.split('/');
				date1 = new Date(date1[2], date1[0] - 1, date1[1]);
				
				var date2 = $(b).find('.eventDate').attr('data-rel');
				date2 = date2.split('/');
				date2 = new Date(date2[2], date2[0] - 1, date2[1]);
				
				return date1 < date2 ? 1 : -1; 
		  }).appendTo($('.result-wrapper .item-list'));
		  $('.result-wrapper .item-list li.items.Upcoming-Events').sort(function (a, b) {
				var date1 = $(a).find('.eventDate').attr('data-rel');
				date1 = date1.split('/');
				date1 = new Date(date1[2], date1[0] - 1, date1[1]);
				
				var date2 = $(b).find('.eventDate').attr('data-rel');
				date2 = date2.split('/');
				date2 = new Date(date2[2], date2[0] - 1, date2[1]);
				
				return date1 > date2 ? 1 : -1; 
		  }).prependTo($('.result-wrapper .item-list'));
}

function openOverlay(index) {
	$('html').css('overflow','hidden');
	$('#overlay').show();
	$('#overlay, html').scrollTop('100');
	
	if(index == 'All'){
	}
}

function closeOverlay() {
	$('#overlay').hide();
	$('html').css('overflow','auto');
	$('#result-wrapper li').removeClass('active').css({'padding-bottom': '22px'});
	$('.switch-panel :checked').removeAttr('checked');
	$('#result-list li').removeClass('result').removeClass('clear')
}



function genbanner(){
	for ( var i = 0; i < db_banner.length; i++ ) {
	
	var desktopbanner = db_banner[i].desktopbanner;
	var mobilebanner = db_banner[i].mobilebanner || '';
	var url = db_banner[i].url || '';
	
	if (mobilebanner == ''){
		mobilebanner = desktopbanner;
	}
	
	if (url == ''){
		url = '#';
	}
	
	var bannerlist = '<a href="'+url+'" target="_blank" data-bi-name="'+url+'" data-bi-type="image link" data-bi-slot="1" data-bi-scn="trial_flow"><img src="images/banner/'+desktopbanner+'" border="0" class="desktop-only" /><img src="images/banner/'+mobilebanner+'" border="0" class="mobile-only" /></a>'
	 
	 $('#main-visual.cycle-slideshow').append(bannerlist);
	 
   }
}


var en = true;

function collapseAll(){
	$('.listslider > li').removeClass('expand');
	$('.listslider > li .extented-wrapper').slideUp();
	if ($(window).width() <= 767){
		$('.nav-wrapper .mobilenav').removeClass('active');
		$('.nav-wrapper .extented-wrapper-m').slideUp();
	}
}

function expandAll(){
	$('.listslider > li').addClass('expand');
	$('.listslider > li .extented-wrapper').slideDown();
	if ($(window).width() <= 767){
		$('.nav-wrapper .mobilenav').addClass('active');
		$('.nav-wrapper .extented-wrapper-m').slideDown();
	}
}

function BTTop(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
}


function resetbox(){
	$('.result-wrapper .item-list > li').removeClass('first-item');
	if ($(window).width() <= 1160){	
	   $('.result-wrapper .item-list > li:visible:even').addClass('first-item');
	} else {
		$('.result-wrapper .item-list > li:visible').each(function (i) {
			if (i % 4 == 0) $(this).addClass('first-item');
		});
	}	
	if ($(window).width() >= 767){
		$('.nav-wrapper .extented-wrapper-m').slideDown();
	}
	
	var adjustheight = $('.result-wrapper .item-list > li.active').find('.result-more').outerHeight() + 10;
	$('.result-wrapper .item-list > li.active').css('padding-bottom', adjustheight+'px');
}

function noEventsClearAll(){
	$('#txt-search').val('');
	$('#txt-days').val('0');
	$('#btn-search').click();
}