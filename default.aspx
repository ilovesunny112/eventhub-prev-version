<%@ Page Title="" Language="C#" MasterPageFile="_Master/Core.Master" %>


<asp:Content ID="MetaEA1" ContentPlaceHolderID="MetaEA" Runat="Server">
	<meta name="WT.z_ea_name" content="mscn_events_default_20170428_cn" />
</asp:Content>


<asp:Content ID="header1" ContentPlaceHolderID="head" Runat="Server">

	<meta property="og:title" id="doc_title" content="微软中国 活动" />
    <meta property="og:type" content="website"/>
    <meta property="og:description" content="获取为企业专业人员、开发人员、IT专业人员、合作伙伴等等而设的科技及交流活动的最新消息。" id="doc_desc" />
    <meta property="og:url" content="http://www.microsoft.com/china/events/default.aspx?1" />
    <meta property="og:image" content="http://www.microsoft.com/china/events/images/sharing.png" id="share_tb" />
    <meta property="og:site_name" content="微软中国 活动"/>
    <!--techsummitapp-->
    <meta name="apple-itunes-app" content="app-id=1201130798">
</asp:Content>


<asp:Content ID="PageTitle1" ContentPlaceHolderID="PageTitle" Runat="Server">
微软中国 活动
</asp:Content>


<asp:Content ID="content1" ContentPlaceHolderID="content" Runat="Server">

	<div id="main-visual" class="cycle-slideshow" data-cycle-fx="scrollHorz" data-cycle-timeout="7000" data-cycle-slides=" > a" data-cycle-log="false">
        <div class="cycle-pager"></div>
    </div>
    
    <div id="nav">
     <div>
       <div class="search-title"><h3>活动搜索</h3></div>
       <a href="javascript:void(0)" class="mobilenav"></a>
       <div class="extented-wrapper-m">
           <input type="text" class="watermark" id="txt-search" data-rel="请输入活动名称、产品名称、活动类别" data-bind="event:{keypress: searchEvent}" /><h3>时间范围</h3>
           <select id="txt-days" data-bind="event: {change: getSearchResult}">
            <option value="0" selected="selected">所有活动</option>
            <option value="-1">以往活动</option>
            <option value="7">将来7天内</option>
            <option value="30">将来30天内</option>
            <option value="90">将来90天内</option>
           </select>
           <a href="javascript:void(0)" id="btn-search" data-bind="click: getSearchResult" data-bi-name="btn-search" data-bi-type="button" data-bi-slot="1" data-bi-scn="trial_flow">搜索</a>
       </div>
     </div>
    </div>
    
    <div>
     <div class="content">
       <div class="left">
      <div class="nav-wrapper">
       <div class="nav-title">
        <h2>活动筛选</h2>
        <p><a href="javascript:void(0)" onclick="collapseAll()">全部收起</a><span>|</span><a href="javascript:void(0)" onclick="expandAll()">全部展开</a></p>
       </div>
       <a href="javascript:void(0)" class="mobilenav"></a>
       <div class="extented-wrapper-m">
        <ul class="listslider" data-bind="foreach: categories">
		  <li data-bind="css:{'hashtag' : section == 'Event Series' },attr:{'data-section':type}"><a href="javascript:void(0)" data-bind="text:section"></a>
			<div class="extented-wrapper" data-bind="foreach: filter">
				<label data-bind="attr: {title: $data.name}"><input type="checkbox" data-bind="checked: $root.criteria, checkedValue: $data, attr:{'data-rel': $data.name.replace(/\ /g, '')}, click: $root.showBanner($data)"></input><!-- ko text: $data.name --><!-- /ko --></label>
			</div>
		  </li>
		</ul>
       </div>
      </div>
      
      <div class="moreLinks">
        <ul>
          <li><a href="https://www.microsoft.com/china/casestudies/index.aspx?wt.mc_id=eventshub" target="_blank"><img src="images/icon1.png" width="22" height="22" /> 了解更多微软案例</a></li>
        </ul>
      </div>
      </div>
      
      <div class="result-wrapper" style="display: none;">
      <!--iframe height="498" width="100%" src='http://player.youku.com/embed/XMjY1NTU3ODMwMA==' frameborder=0 'allowfullscreen'></iframe>
      <iframe src="http://www.tudou.com/programs/view/html5embed.action?type=1&code=3sFhVw8KGkA&lcode=cMl-3PSv6qc&resourceId=0_06_05_99" allowtransparency="true" allowfullscreen="true" allowfullscreenInteractive="true" scrolling="no" border="0" frameborder="0" style="width:100%;height:400px;"></iframe-->
      
	  <div class="promotion" data-bind="visible: isShowBanner ">
		<div data-bind="foreach: eventSeriesBanner">
		<!-- ko if: contenttype == "article" -->
		<img data-bind="attr:{src:'images/events-img/'+ banner}">
		<!-- /ko -->
		<!-- ko if: contenttype == "video" -->
		<div><iframe width="560" height="315" frameborder="0" allowfullscreen data-bind="attr: {src:'https://www.youtube.com/embed/'+youtubeurl}"></iframe></div>
		<!-- /ko -->
		</div>
	  </div>
       <div class="tag-wrapper" data-bind="visible: criteria().length > 0">
	   <!-- ko foreach: criteria -->
			<span onclick="removetag(this)" class="result-tag" data-bind="text: name, attr:{'data-rel': name, 'data-section':type}"></span>
		<!-- /ko -->
		<span onclick="cleartag()" class="clear-tag" >清除全部</span>
	   </div>
       <ul class="item-list" data-bind="foreach: availableEvents">
		<li data-bind="attr:{class: $root.genItemClass($index(), expirydate ),'data-hash':hash}">
		<div class="result-item" onclick="openitem(this)" data-bi-type="thumbnailClick">
			<a href="javascript:void(0)" style="width:100%;height:100%;position:absolute;opacity:0;left:0;top:0" data-bind="attr:{'data-bi-type':'tn_'+ hash}" ></a>
			<img data-bind="attr: {src: 'images/events-img/'+ logo}"/>
			<p class="intro" data-bind="text: name"></p>
			<p class="eventDate" data-bind="attr: {'data-rel': expirydate}"><span><font class="eventdate" ><span data-bind="html: eventdate"></span></font><br><!-- ko text: eventtime --><!-- /ko --></span></span></p>
			<a href="javascript:void(0)" class="btn-more-detail" title="For more details"></a>
		</div>
		<div class="arrow-bg"></div>
		<div class="result-more">
			<div class="right-col video-theme">
				<!-- ko if: contenttype === 'article' -->
				<p align="center"><img data-bind="attr: {'src':'images/events-img/'+ banner}"></p>
				<!-- /ko -->
				<!-- ko if: contenttype === 'video' -->
				<div><iframe width="320" height="180" frameborder="0" allowfullscreen="" data-bind="attr:{src:'https://www.youtube.com/embed/' + youtubeurl}"></iframe></div>
				<!-- /ko -->
				
				<h4 data-bind="html: name"></h4><span data-bind="html: description"></span>
				<!-- ko if: gallery != '' -->
				<div class="center-col"><h4>Event Photos</h4>
				<!-- ko foreach: gallery -->
				<a data-bind="attr:{href:'images/events-img/gallery/' + l}" class="gallery-photo"><img data-bind="attr:{src:'images/events-img/gallery/' + s}"></a>
				<!-- /ko -->
 				</div>
				<!-- /ko -->
                
                <!-- ko if: regurl != '' -->
				<p>
				<!-- ko foreach: regurl -->
                <a data-bi-type="regBtn" data-bind="attr: {href: reglink, style: $root.isRegLinkVisible($parent.expirydate,$parent) ? 'display:inline-block' : 'display:none'}, html: regname" class="btn-reg" target="_blank"></a>
				<!-- /ko -->
 				</p>
				<!-- /ko -->
                
				<div class="clear"></div>
				
			</div>
			<div class="left-col">
				<a href="javascript:void(0)" title="X" class="btn-item-close" onclick="closeitem(this)">X</a>
				<h4>活动安排</h4>
				<p><strong>活动日期和时间</strong><br><span data-bind="html: eventdate + ' ' + eventtime"></span></p>
				<p><strong>活动地点</strong><br><!-- ko text: location == '' ? 'N/A' :  location --><!-- /ko --></p>
				<p><strong>活动受众人群</strong><br><!-- ko text: eventfor == '' ? 'N/A' : eventfor.toString().split(',').join(', ') --><!-- /ko --></p>
				<p><strong>活动分类</strong><br><!-- ko text: eventtype == '' ? 'N/A' : eventtype.toString().split(',').join(', ') --><!-- /ko --></p>
				<p><strong>活动形式</strong><br><!-- ko text: category == '' ? 'N/A' : category.toString().split(',').join(', ') --><!-- /ko --></p>
				<p><strong>产品分类</strong><br><!-- ko text: product == '' ? 'N/A' : product.toString().split(',').join(', ') --><!-- /ko --></p>
			</div>
            <!-- ko if: regurl != '' && regurl != '#' -->
             <!-- ko foreach: regurl -->
               <!-- ko if: $index() === 0 -->
                <div class="event-share" data-bind="attr: {style: $root.isRegLinkVisible($parent.expirydate,$parent) ? 'display:inline-block' : 'display:none'}">
                    <a href="javascript:void(0);" data-bind="attr:{href:reglink}" onclick="return false;" class="btn-wechat wechat-icon">微信</a>
                    <a data-bind="attr:{href:'http://service.weibo.com/share/share.php?url='+ reglink +'&title=' + name}" class="weibo-icon">分享</a>
                    
                    <div class="item-qr"><a href="javascript:void(0)" class="btn-wechat-close"></a><h2>分享到微信朋友圈</h2><div class="img-qr"></div><p>打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享到我的朋友圈。</p></div>
                </div>
               <!-- /ko -->
             <!-- /ko -->
            <!-- /ko -->
			<div class="clear"></div>
		</div>
		</li>
	   </ul>
      </div>
      
      
      
      <div class="clear"></div>
     </div>
     
     </div>
    </div>
    
    <div id="overlay">
     
    </div>

    <a href="#" id="btn-top" onclick="BTTop();return false;"><span>回顶部</span></a>
    

</asp:Content>