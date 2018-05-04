<%@ Control Language="C#" %>


<ul id="shareFN">
<li>
<a href="http://www.microsoft.com/china/events/default.aspx" onclick="return false;" class="btn-wechat" style="margin-top: 1px; display: block;" data-bi-name="btn-share-weixin" data-bi-type="button" data-bi-slot="1" data-bi-scn="trial_flow"><img src="images/wechat_btn_cn.png" style="display:inline-block;vertical-align: middle; width:62px;" /></a>
<div class="item-qr"><a href="javascript:void(0)" class="btn-wechat-close"></a><h2>分享到微信朋友圈</h2><div class="img-qr"></div><p>打开微信，点击底部的“发现”，使用 “扫一扫” 即可将网页分享到我的朋友圈。</p></div>
</li>
<li>
<a href="http://service.weibo.com/share/share.php?url=https://www.microsoft.com/china/events/default.aspx&title=%E5%BE%AE%E8%BD%AF%E6%B4%BB%E5%8A%A8%E6%A6%82%E8%A7%88" class="weibo-icon" style="display:inline-block;" data-bi-name="btn-share-weibo" data-bi-type="button" data-bi-slot="1" data-bi-scn="trial_flow"><img src="images/weibo_btn_cn.png" style="width:65px;" /></a>
</li>	
<li><a href="javascript:socialNetworkShare('email');" title="Email" data-bi-name="btn-email" data-bi-type="button" data-bi-slot="1" data-bi-scn="trial_flow"><img src="images/share_btn_cn.png" style="width:65px;"></a></li>
<!--li><a href="javascript:socialNetworkShare('subscribe');" title="Subscribe"><img src="images/subscribe_btn_cn.png" style="width:57px;"></a></li-->
</ul>
<div class="clear"></div>

<style>
#header > ul{ display:none; }
#header ul#shareFN {
	margin:13px 4px 0; padding:0;
	float:right;
	overflow:hidden;
	/*position:relative;*/
	display:block;
	margin-top:-25px;
	min-width:268px;
}
#header ul#shareFN li {
	list-style:none;
	float:left; /*display:inline-block;*/ margin:0;
}
#header ul#shareFN li a {
	/*width:26px; height:21px;*/
	text-decoration:none;
	margin-left:0;
}
#header ul#shareFN li{ margin-right:10px; }
#header ul#shareFN li a:hover, #header ul#shareFN li a:focus{ text-decoration:none!important; }
#header ul#shareFN li.icon-linkin a, #header ul#shareFN li.icon-subbtn a{ width:auto; height:auto; }
#header ul#shareFN li.icon-subbtn a{ margin-left:0; }
#header ul#shareFN li a{ background:none; display:inline-block; }
#header ul#shareFN li a.icon1 { background-position:0 0; }
#header ul#shareFN li a.icon2 { background-position:-26px 0; display:block; background:none; }
#header ul#shareFN li a.icon2 img{ height:20px; }
#header ul#shareFN li a.icon3 { background-position:-52px 0; }
#header ul#shareFN li a.icon4 { background-position:-78px 0; }
#header ul#shareFN li a.icon5 { background-position:-104px 0; width:26px; height:21px; background-image:url('images/share/icon-colour.jpg'); background-repeat:no-repeat; display:block; }
#header ul#shareFN li a.icon6 { background-position:-130px 0; }

#header ul#shareFN li a.icon2 img{ height:auto!important; }

#header ul#shareFN li{ display:list-item; }

@media only screen and (max-width: 400px){
#header ul#shareFN{ float:left; width:100%; }
#header ul#shareFN li{ margin-right:0px; margin-left:5px; }
#header ul#shareFN li:first-child{ margin-left:0; }
#header ul#shareFN{ margin-left:0; margin-right:0; }
#header ul#shareFN {
    margin-top: 15px!important;
}
}
@media only screen and (max-width: 320px){

#header ul#shareFN li{ margin-right:5px; margin-left:0px; }
#header ul#shareFN li.mbreak{ clear: both; }
}
</style>