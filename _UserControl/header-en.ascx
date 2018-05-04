<%@ Control Language="C#" %>
	<ul>
		<li>Hong Kong SAR (English)</li>
		<li>|</li>
		<li class="change-lang"><a href="#" onclick="lang_zh(); return false;">中文</a></li>
		<li class="change-lang">|</li>
		<li><a href="http://www.microsoft.com/en/hk/" title="Microsoft Home" target="_blank">Microsoft Home</a></li>
	</ul>
	<a href="http://www.microsoft.com/en/hk/" title="Microsoft" target="_blank" id="ms-logo"><img src="/hk/images/microsoft_logo_94x20.png" alt="Microsoft" /></a>
	<span id="ms-search">
		<input type="text" onkeyup="ms_search_effect(this)" onchange="ms_search_effect(this)" />
		<a href="http://search.microsoft.com/?mkt=en-HK" onclick="ms_search('microsoft'); return false;" class="btn" title="Microsoft Search"><img src="/hk/images/search_icon.gif" alt="" /></a>
		<%--<a href="http://www.bing.com/" title="bing Search" onclick="ms_search('bing'); return false;"><img src="/hk/images/web_search.gif" alt="" /></a>--%>
	</span>

<style>
#header { font-family:Segoe UI,Tahoma,Arial,Verdana,sans-serif; color:#000; letter-spacing:normal; font-size:12px; }
#header a { text-decoration:underline; color:#000; }
#header ul {
	text-align:right;
}
#header li {
	display:inline;
	margin:0 2px;
}
#header #ms-logo {
	float:left;
	padding:2px; margin-top:11px;
}
#header #ms-search {
	height:24px;
	float:right;
	margin:10px 0 0 0;
}
#header #ms-search input {
	border:1px solid #AAA; border-right:none;
	margin:0; padding:2px 2px 2px 4px;
	height:20px; width:250px;
	float:left;
	background:url('/hk/images/bing_logo.gif') center right no-repeat #FFF;
	line-height:20px;
}
#header #ms-search input.working{
	background:none;
}
#header #ms-search a.btn img{
	float:left;
	border:1px solid #AAA;
	border-left:none;
	margin:0 2px 0 0; padding:2px 2px 2px 4px;
	background-color:#FFF;
}
</style>

<script type="text/javascript">
function ms_search(type){
	var searchURL, searchValue = escape(document.getElementById('ms-search').getElementsByTagName('input')[0].value);
	switch(type){
		case 'microsoft':
			searchURL = "http://search.microsoft.com/results.aspx?form=MSHOME&mkt=en-HK&setlang=en-HK&q=" + searchValue;
			break;
		case 'bing':
		default:
			searchURL = "http://www.bing.com/search?FORM=MSSBMN&q=" + searchValue;
	}
	window.open(searchURL, '_blank', '');
}
</script>