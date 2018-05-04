String.prototype.trim = function() {
	// 用正则表达式将前后空格  
	// 用空字符串替代。  
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

//搜索条件
var objQueueList = $(window);

function ClearBtn() {

	$( "input[name='txt2']" ).click(function() {
		$( ".sibling" ).removeClass( "over" );
	});

	$( ".sibling" ).click(function() {
		$('.dateInputBorder')[0].value = '输入你想参加活动的日期';
		searchCondition.activeTime = null;
		SetCondition(6, $('.dateInputBorder')[0].value);
	});

	$('.clearBtn').click(function() {

		$('.dateInputBorder')[0].value = '输入你想参加活动的日期';
		searchCondition.activeTime = null;
		SetCondition(6, $('.dateInputBorder')[0].value);
		$( ".sibling" ).addClass( "over" );
	});

	$('#validSource').click(function() {

		$('.dateInputBorder')[0].value = '输入你想参加活动的日期';
		searchCondition.time = null;
		SetCondition(5, '往');
		$( ".sibling" ).removeClass( "over" );
	});

}

//广告条自动显示隐藏
function AdAutoShow() {

	$(".infoPic1_1").hover(
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 0
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	},
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 1
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	});

	$(".infoPic2_1").hover(
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 0
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	},
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 1
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	});

	$(".infoPic4_1").hover(
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 0
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	},
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 1
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	});

	$(".infoPic3_1").hover(

	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 0
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	},
	function() {
		var ooThis = $(this);
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				'opacity': 1
			},
			{
				queue: false,
				duration: 300
			});
			next();
		}).dequeue("custom");
	});

}

function HandAutoClose() {
	$(".listContainer").hover(function() {

		var ooThis = $(this).find(".topBackground");

		ooThis.attr("outer", true);

		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				top: "-70px"
			},
			{
				duration: 500,
				queue: false,
				complete: function() {}
			});
			next();
		}).dequeue("custom"); //this is the key 

	},
	function() {

		var ooThis = $(this).find(".topBackground");
		objQueueList = objQueueList.queue("custom", function(next) {
			ooThis.animate({
				top: "174px"
			},
			{
				duration: 500,
				queue: false
			});
			next();
		}).dequeue("custom"); //this is the key 

	}

	);

}

$(document).ready(function() {

	HandAutoClose();
	ClearBtn();
	AdAutoShow();
	$("#Div2").hide();

	//设置序号区分搜索条件

	var id = 0;
	$(".allListShowContainer > .chooseContainer > .chooseBar").each(function() {
		$(this).attr("id", ++id);
		var showBar = $("#controlBar" + id);

		var i = 0;

		$(this).find(".listUl > li").each(function() {
			if (++i > 7) $(this).hide();
		});

		if (showBar) {
			showBar.removeClass("hideBar").addClass("showBar");

			if (i > 7) {
				showBar.show();
			}
			else {
				showBar.hide();
			}
		}

	});

	$(".chooseBar > .listUl > li").click(function(e) {

		var ulObj = e.target.parentNode;
		$(ulObj).find('li').removeClass("over");
		$(this).addClass("over");
		//设置选择条件
		var i = 0;
		var currentUL = $(this).parent();

		//设置搜索条件函数
		var id = parseInt(currentUL.parent().attr("id")); //总的序号
		SetCondition(id, $(this).html());

	});

	//显示隐藏
	$("div[id^='controlBar']").click(function() {

		//alert($(this).parent().find(".listUl > li" ).length);
		if ($(this).parent().find(".listUl > li").length > 7) {
			if ($(this).attr("clickStatus") != 0) {
				$(this).attr("clickStatus", 0);
				var i = 0;
				$(this).parent().find(".listUl > li").each(function() {
					if (++i > 7) $(this).show();
				});

				if (i > 7)

				$(this).removeClass("showBar").addClass("hideBar");

			}
			else {

				$(this).attr("clickStatus", 1);

				var i = 0;
				$(this).parent().find(".listUl > li").each(function() {
					if (++i > 7) $(this).hide();
				});

				if (i > 7)

				$(this).removeClass("hideBar").addClass("showBar");

			}

		}

	});

	$(".navUl > li").click(function(e) {
		//切换css效果 
		$("#Div1").hide();
		$("#Div2").hide();
		var nameStr = $(this).attr("name");
	

		if (nameStr == 'b') {
			searchCondition.type = null;
			
			$("#Div2").show();
		}
		else if (nameStr == 'a') {
			$("#Div1").show();
		}

		$(".navUl > li").each(function(i) {

			var oldClassName = $(this).attr("class");
			if (oldClassName == null) oldClassName = $(this).attr("className");

			oldClassName = oldClassName.replace('noMagrin', '');
			var newClassName = oldClassName.replace("_2", "_1");

			if (newClassName != oldClassName) $(this).addClass(newClassName).removeClass(oldClassName);

		});

		var oldClassName = $(this).attr("class");
		if (oldClassName == null) oldClassName = $(this).attr("className");
		oldClassName = oldClassName.replace('noMagrin', '');
		var newClassName = oldClassName.replace("_1", "_2");
		if (newClassName != oldClassName)
		//alert(oldClassName   + ' ' + newClassName );
		$(this).addClass(newClassName).removeClass(oldClassName);

	});
});

