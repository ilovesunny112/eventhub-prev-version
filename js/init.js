

$(document).ready(function() {
	getAllContent();
});


//加载所有活动内容
function getAllContent() {
	for (var a = 0; a < searchCondition.dataArr.length; a++) {
		var htmlStr = '';
		//获取json数据对象
		var arr=searchCondition.dataArr;
		//获取数据最大条数rbound和数据最小条数lbound
		var lbound = (searchCondition.pageIndex - 1) * searchCondition.pageSize;
		var rbound = searchCondition.pageIndex * searchCondition.pageSize;
		if (lbound < 0) lbound = 0;
		if (rbound > arr.length) rbound = arr.length;
		//添加HTML
		for ( var i = lbound; i < rbound; i++ ) {
			htmlStr += '<div class="listRowContainer">';
			htmlStr += ' <div class="pic"><a href="' + arr[i].link + '" target="_blank"><img src="' + arr[i].icon + '" width="160" height="100" /></a></div>';
			htmlStr += ' <div class="comments">';
			htmlStr += '   <h1 class="greenTitle">' + arr[i].title + '</h1>';
			htmlStr += '   <p> ' + arr[i].description + '<br/>时间：' + arr[i].time + ' <br/>地点：' + arr[i].city;
			htmlStr += '   </p>';
			htmlStr += ' </div>';
			var d=new Date();
			var year=parseInt(d.getFullYear());
			var mouth=parseInt(d.getMonth()+1);
			var day=parseInt(d.getDate());
			var atime=arr[i].time.substring(0,10).split("/");
			var year1=parseInt(atime[0]);
			var mouth1=parseInt(atime[1]);
			var day1=parseInt(atime[2]);
			if(year  <  year1|| (year==year1 && mouth <mouth1)|| (year==year1 && mouth ==mouth1 && day<day1)){
				htmlStr += ' <div class="linkBtn"><img src="images/joinBtn1_2.jpg" width="115" height="34" class="linkBtn2"/><a href="' + arr[i].link + '" target="_blank"><img src="images/joinBtn1_1.jpg" width="115" height="34" class="linkBtn1"/><p>立即参加</p></a></div>';
			} else {
				htmlStr += ' <div class="linkBtn"><img src="images/joinBtn1_2.jpg" width="115" height="34" class="linkBtn2"/><a href="' + arr[i].link + '" target="_blank"><img src="images/joinBtn1_1.jpg" width="115" height="34"  class="linkBtn1"/><p>查看详情</p></a></div>';
			}
			htmlStr += '  <div class="divC"></div>';
			htmlStr += ' </div>';
		}
		
	htmlStr += ' <div class="divC"></div>';
	$(".allListContainer").html(htmlStr);
	}
	//传递到分页
	GetPageHtml(arr);

	$(".linkBtn").hover(

	function() {
		var ooThis = $(this).find('.linkBtn1');
		
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
		var ooThis = $(this).find('.linkBtn1');
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

	$(".pageBar > .prevBtn").click(function(e) {

		var id = searchCondition.pageIndex - 5;

		if (id >= 1) {
			searchCondition.pageIndex = id;

		}
		else {
			searchCondition.pageIndex = 1;
		}
		LoadAllPageHtml(searchCondition.tempDataArr);
	});

	$(".pageBar > .nextBtn").click(function(e) {
		var id = searchCondition.pageIndex + 5;

		if (id <= searchCondition.totalPageNum) {
			searchCondition.pageIndex = id;

		}
		else {
			searchCondition.pageIndex = searchCondition.totalPageNum;
		}
		getAllContent(searchCondition.tempDataArr);
		//$(e.target).hide();
	});
	
}


function ShowNextLastBtn() {

	var id = searchCondition.pageIndex;

	var numPageIndex = Math.ceil(1.0 * id / 5) - 1;
	//5进制
	var lbound = numPageIndex * 5 + 1;
	var rbound = numPageIndex * 5 + 5;
	if (rbound > searchCondition.totalPageNum) rbound = searchCondition.totalPageNum;

	if (rbound < searchCondition.totalPageNum) $(".pageBar > .nextBtn").show();

	if (lbound > 1) $(".pageBar > .prevBtn").show();

	if (rbound >= searchCondition.totalPageNum) {
		$(".pageBar > .nextBtn").hide();
	}
	if (lbound <= 1) {
		$(".pageBar > .prevBtn").hide();
	} //$(e.target).hide();

}


function GetPageHtml(arr) {
	//获取条数num
	var num = arr.length;
	//searchCondition.totalPageNum总共的页数=2
	//searchCondition.tempDataArr 临时数据对象
	searchCondition.totalPageNum = Math.ceil(1.0 * num / searchCondition.pageSize);
	searchCondition.tempDataArr = arr;
	//numPageIndex？
	var numPageIndex = Math.ceil(1.0 * searchCondition.pageIndex / 5) - 1;
	//5进制
	var lbound = numPageIndex * 5 + 1;
	var rbound = numPageIndex * 5 + 5;
	if (rbound > searchCondition.totalPageNum) rbound = searchCondition.totalPageNum;
	//获取总数
	var htmlStr = "";
	for (var i = lbound; i <= rbound; i++) {
		if (searchCondition.pageIndex == i) htmlStr += ' <li class="over">' + i + '</li>';
		else htmlStr += ' <li>' + i + '</li>';
	}

	$("div > .pageNumUl").html(htmlStr);

	ShowNextLastBtn(); //显示隐藏下一页

	$("div > .pageNumUl > li").click(function(e) {

		var id = $(e.target).html();
		if ((id != searchCondition.pageIndex) && (id != null)) {
			searchCondition.pageIndex = parseInt(id);
			LoadAllPageHtml(searchCondition.tempDataArr);
		}
	});
}




function IndexData() //时间倒序
{

	searchCondition.dataArr.sort(function compare(a, b) {
		return a.time < b.time;
	});

}



function LoadAllPageHtml(arr) {
	var htmlStr = '';
	var lbound = (searchCondition.pageIndex - 1) * searchCondition.pageSize;
	var rbound = searchCondition.pageIndex * searchCondition.pageSize;
	if (lbound < 0) lbound = 0;
	if (rbound > arr.length) rbound = arr.length;
	//添加HTML
	for ( var i = lbound; i < rbound; i++ ) {
		htmlStr += '<div class="listRowContainer">';
		htmlStr += ' <div class="pic"><a href="' + arr[i].link + '" target="_blank"><img src="' + arr[i].icon + '" width="160" height="100" /></a></div>';
		htmlStr += ' <div class="comments">';
		htmlStr += '   <h1 class="greenTitle">' + arr[i].title + '</h1>';
		htmlStr += '   <p> ' + arr[i].description + '<br/>时间：' + arr[i].time + ' <br/>地点：' + arr[i].city;
		htmlStr += '   </p>';
		htmlStr += ' </div>';
		var d=new Date();
		var year=parseInt(d.getFullYear());
		var mouth=parseInt(d.getMonth()+1);
		var day=parseInt(d.getDate());
		var atime=arr[i].time.substring(0,10).split("/");
		var year1=parseInt(atime[0]);
		var mouth1=parseInt(atime[1]);
		var day1=parseInt(atime[2]);
		if(year  <  year1|| (year==year1 && mouth <mouth1)|| (year==year1 && mouth ==mouth1 && day<day1)){
			htmlStr += ' <div class="linkBtn"><img src="images/joinBtn1_2.jpg" width="115" height="34" class="linkBtn2"/><a href="' + arr[i].link + '" target="_blank"><img src="images/joinBtn1_1.jpg" width="115" height="34" class="linkBtn1"/><p>立即参加</p></a></div>';
		} else {
			htmlStr += ' <div class="linkBtn"><img src="images/joinBtn1_2.jpg" width="115" height="34" class="linkBtn2"/><a href="' + arr[i].link + '" target="_blank"><img src="images/joinBtn1_1.jpg" width="115" height="34"  class="linkBtn1"/><p>查看详情</p></a></div>';
		}
		htmlStr += '  <div class="divC"></div>';
		htmlStr += ' </div>';
	}
	if ( !htmlStr ) {
		htmlStr += '  <p id="empty_return">没有找到符合条件的活动</p>';
	}
	htmlStr += ' <div class="divC"></div>';
	$(".allListContainer").html(htmlStr);

	GetPageHtml(arr);

	$(".linkBtn").hover(

	function() {
		var ooThis = $(this).find('.linkBtn1');
		
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
		var ooThis = $(this).find('.linkBtn1');
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

