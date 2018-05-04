function openitem(obj) {
    if ($(obj).parent('.items').hasClass('active')) {
        closeitem($(obj));
    } else {
        $('.item-list .items').removeClass('active');
        $(obj).closest('.item-list').find('.items').css('padding-bottom', '22px');
        $(obj).closest('li').addClass('active');
        var adjustheight = $(obj).closest('li.active').find('.result-more').outerHeight() + 10;
        $(obj).closest('li.active').css('padding-bottom', adjustheight + 'px');
    }
    // console.log(obj)
	//closepopup();
}
function closeitem(index) {
    $(index).closest('.item-list').find('.items').removeClass('active');
    $(index).closest('.item-list').find('.items').css('padding-bottom', '22px');
}

function removetag(val) {
    var tagval = $(val).attr('data-rel').replace(/\ /g, '');;
	var tagsection = $(val).attr('data-section');
    $('.nav-wrapper li[data-section="'+tagsection+'"] input[data-rel="'+tagval+'"]').click();
}
function cleartag() {
	$('input:checked').click();
}
function closepopup(){
	$('.item-list .item-qr').hide();
}

$(document).ready(function(){

	function catViewModel(){
		var list = ["eventfor", "eventtype", "category", "eventtime", "eventseries", "product", "language"];
		//var showlist1 = ["微软面向未来的创新学校网络在线研讨会", "Office 365云应用创新教学网络在线研讨会", "【微软数字化教育创新体验营】广阔天地，无限探索 - Minecraft 以游戏方式创新教学", "2016微软技术大会"];
		var self =  this;
		self.categories = db_filter;
		self.events = db_product;
		self.eventSeriesBanner = ko.observable();
		self.criteria = ko.observableArray([]);
		self.availableEvents = ko.observableArray(sorting(db_product));
		self.isRegLinkVisible = function(date, data){
		    return ( data.alwayson == "true" || !isEventExpired(date));
		};
		self.isShowBanner = ko.observable(false);
		
		self.criteria.subscribe(function(event) {
			$('.item-list').find('.items').removeClass('active');
			$('.item-list').find('.items').css({"padding-bottom":'22px'});
			if(self.criteria().length == 0){
				self.availableEvents(sorting(db_product));}
			else {
				var criteriaList = [];
				$.each(list, function(i, val){
					var a = $.grep(self.criteria(), function(n) {
							return (n.type == val);
						});
					if(a.length > 0){
						criteriaList.push(a);
					}
				});

				var result = [];
				$.each(criteriaList, function(i, val){
					result = filterEvent(val, i == 0 ? db_product : result);
				});
				self.availableEvents(sorting(result));
				$('.result-wrapper').show();
				$(".item-list > li").show();
			}
			resetbox();
		});
		self.genItemClass = function (index, date){
			var itemClass = 'items';
			var dateClass = '';
			if(isEventExpired(date)){
				dateClass = " Past-Events"
			}
			else if(isEventToday(date)){
				dateClass = ' Today-Events'
			}
			else if(isEventFuture(date)){
                dateClass = ' Upcoming-Events'
			}

			itemClass += dateClass

			return itemClass;
		};
		self.searchEvent = function(data, event){
			if (event.keyCode == 13) {
				self.getSearchResult();
			}
			return true;
		};
		self.showBanner = function(data){
			if(data.type == "eventseries"){
				var name = data.name.replace(/\ /g, '');
				var isChecked = $('.nav-wrapper li[data-section="'+data.type+'"] input[data-rel="'+name+'"]').is(':checked')
				var isBannerHidden = self.eventSeriesBanner() == undefined || self.eventSeriesBanner() == "" || self.eventSeriesBanner()[0]["filter"] != data.name;
				if(isBannerHidden == isChecked){
				/*
				var promotion = $.grep(db_promotion, function(n){
					return (n["filter"] == data.name);
				});
				self.isShowBanner(isChecked);
					self.eventSeriesBanner(isChecked? promotion : "");
				*/
				}
			}
		}
		self.getSearchResult = function(){
			cleartag();
			$('.result-wrapper').hide();
			var nextDays = parseInt($('#txt-days').val());
			self.availableEvents(sorting(filterEventByDate(nextDays)));
			var list = $(".item-list > li").show();
			var searchText = $('#txt-search').val();
			list.filter(function() {
				var str = $(this).text();
				var re = new RegExp(searchText, "i");
				var result = re.test(str);
				if (!result) {
					return $(this);
            }
			}).hide();
			
			$('.result-wrapper').show();
			resetbox();
			
			if ($('#txt-search').val() != '') {
				if ($('.item-list > li:visible').length == 0) {
					var notfound = '<div class="not-found"><img src="images/icon-robot.png" /><div class="error-msg">抱歉，没有找到相关活动。<br />请<a href="javascript:void(0)" class="noEventsError" onClick="noEventsClearAll()">按此</a>清除搜索条件。</div><div class="clear"></div></div>';
					$('.nav-wrapper, .result-wrapper').hide();
					$('.not-found').remove();
					$('.content').prepend(notfound);
				} else {
					$('.not-found').remove();
					$('.nav-wrapper, .result-wrapper').show();
				}
			} else {
				$('.not-found').remove();
				$('.nav-wrapper, .result-wrapper').show();
			}
			
		}
		
		self.shareToWeixin =  function(title, regurl) {
			setShare(title, regurl);
			jiathis_sendto('weixin');
			return false;
        }

		function filterEvent(criteria, result){
			if(criteria.length > 0){
				var a = $.grep(result, function(n) {
					for(var i in criteria){
						if(filterByEventTime(criteria[i], n)){
							return true;
						}
						else if($.inArray( criteria[i].name, n[criteria[i].type]) >-1 ||
						(criteria[i].type == "product" && n["product"] == "All") ){
							return true;
						}
					 }
					 return false;
				});
				return a;
			}
			
			
		}
		
		function filterEventByDate(nextDays){
			
			var now = new Date();
			var nextDate = new Date();
			var nextDate = new Date(nextDate.setDate(nextDate.getDate() + nextDays));
			if(nextDays == 0){
				return db_product;
			}
			var b = $.grep(db_product, function(n) {
				var eventDate = new Date(n["expirydate"]);
				if(eventDate < now){
					return true;
				}
			});
			if(nextDays == -1){
				return b;
			}
			var a = $.grep(db_product, function(n) {
				var eventDate = new Date(n["expirydate"]);
				if(eventDate > now && eventDate < nextDate){
					return true;
				}
			});
			return a;
		}
		
		function filterByEventTime(criteria, array){
			if(criteria.type != "eventtime"){
				return false;
			}

			var expd = array["expirydate"];
			var isExpired = isEventExpired(expd);
			var isToday = isEventToday(expd);
			var isFuture = isEventFuture(expd);
			var cName = criteria.name;
			switch(cName){
				case "以往活动":

					return isExpired;
					break;
				case "今日活动":

					return isToday;
					break;
				case "即将发生":

					return isFuture;
					break;
				default:
					return false
			}


			// return (criteria.name == "以往活动") == isExpired;
		}
		
		function isEventExpired(dtStr){
			var expireDtInHKT = new Date(dtStr);
			var now = new Date();
			// now = new Date(now.getTime())
			return now >= expireDtInHKT;
		}

		function isEventToday(dtStr){
			var todayDtInHKT = new Date(dtStr);
			var now = new Date();

			var td = todayDtInHKT.getDate(), tm = todayDtInHKT.getMonth(), ty = todayDtInHKT.getFullYear();
			var d = now.getDate(),m=now.getMonth(),y=now.getFullYear();

			return td==d&&tm==m&&ty==y;
		}

		function isEventFuture(dtStr){
			var now = new Date();
			var nTime = now.getTime();
			var tmr = new Date(nTime+86400000);

			tmr = new Date(tmr.getFullYear(),tmr.getMonth(),tmr.getDate());
			var futureDt = new Date(dtStr);

			return futureDt >= tmr;

		}


		//处理顺序的核心代码
		function sorting(array){
			var pastEvents = $.grep(array, function(n){
				return (isEventExpired(n["expirydate"]));
			});
			var upComingEvents = $.grep(array, function(n){
				return (!isEventExpired(n["expirydate"]));
			});
			return ascSort(upComingEvents).concat(descSort(pastEvents));
		}
		
		function ascSort(array){
			var aOrder = array.sort(function(a, b) {
				var dateA = a["expirydate"];
				var dateB = b["expirydate"];
				return new Date( dateA ) - new Date( dateB );
			});
			return aOrder;
		}
		
		function descSort(array){
			var a = ascSort(array);
			return a.reverse();
		}
		
		
	 };
	
	var cvm = new catViewModel();
	// console.log(cvm)
	ko.applyBindings(new catViewModel());

	
	$('.result-wrapper').show();
	resetbox();
	
	$('.listslider > li a').click(function(){
	   $(this).parent().toggleClass('expand');
	   $(this).next('.extented-wrapper').slideToggle();
    });
	
	$('.center-col').lightGallery({
       selector: '.gallery-photo'
    });
	
	$('.nav-wrapper .listslider > li.hashtag input[type="checkbox"]').change(function() {
        var hashname = $(this).parent('label').text().replace(/\ /g, '');
        window.location.hash = '#' + hashname + '';
    });

 

    var imgArr = [];
    $.each(db_banner,function(i,item){
    	imgArr.push("images/banner/"+item.desktopbanner)
    	imgArr.push("images/banner/"+item.mobilebanner)
    })

    function openByHash(hash) {
      if (hash) {

          var name = hash.replace("#", "");
          // var targetEle = $(`[data-hash=${name}]`);
          var targetEle = $("[data-hash=" + name + "]")
          var targetTop = 0;
          var eleIndex = targetEle.index();
          var firstTop = $(".item-list >li").eq(0).offset().top;

          if ($(window).width() > 1160) {
          		
              targetTop = (Math.floor(eleIndex / 4)+1) * 358 + firstTop;
          } else if ($(window).width() > 767) {
              targetTop = (Math.floor(eleIndex / 2)+1) * 393 + firstTop - 38;
          } else {
              targetTop = (eleIndex + 1) * 394 + firstTop - 38;
          }

          var eleTop = targetEle.offset().top
          // console.log(eleTop);
          // console.log(targetTop);
          // targetTop = targetTop > eleTop ? targetTop : eleTop;

          if (targetEle.length) {
          	targetEle.children().first().trigger("click");
              $("body").stop().animate({
                  scrollTop: targetTop
              }, 'slow', function() {
                  // targetEle.children().first().trigger("click");
              })
          }
      }
  	}
	var requestHash = window.location.hash; 
    myLab.loadImgArr(imgArr,
    function() {
        // console.log("loading imgs")
    },

    function() {
         
        openByHash(requestHash);
    });

   	
	$(window).on("hashchange",function(){
		var requestHash = window.location.hash; 
		 
		if(requestHash){
			 openByHash(requestHash);
		}
	})

	// $("body").append('<div style="position:fixed;top:20px;"><a href="#3r13d76">ccccccc1</a><a href="#9c4a4ri">cccccccc2</a><a href="#gm7eq4k">cccccccc2</a><a href="#l58ky2v">cccccc3</a><a href="#z68ju18">cccccc4</a></div>')
	
	$(".event-share .weibo-icon, #shareFN .weibo-icon").click(function() { 
                  var shareurl = $(this).attr('href');
                  if (shareurl != '#'){
                   window.open(shareurl,"_blank","toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=640, height=480");
                  }
                  return false;
                });

   $('.btn-wechat').click(function(){
				var urlpath = $(this).attr('href');
				$(this).parent().find('.item-qr').show();
				$(this).parent().find('.img-qr').empty();
			    $(this).parent().find('.img-qr').qrcode({width: 200,height: 200,text: urlpath});
	});
	
	$(document).on('mouseup touchstart', function (e){
    	var $container = $(".item-qr");

		if (!$container.is(e.target) && $container.has(e.target).length === 0) {
			$container.hide();
		}
	});
	
	
	$('.btn-wechat-close').click(function(){
		        $(this).parent('.item-qr').hide();
	});



});