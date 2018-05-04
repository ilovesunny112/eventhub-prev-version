   function siteSearch() {
	  var searchForm = $("#search-form"),
	  input = $("#search-input"),
	  submitSite = $("#search-btn"),
	  results = $("#results"),
	  resultsLi = $("#results li a"),
	  searchSite = null,
	  str = encodeURI($.trim(input.attr('value'))),
	  searchUrl = function(str) {
		  if(searchSite == 'internet'){
			return 'http://www.bing.com/search?form=MSHPLS&q=' + str + '&mkt=zh-cn';
		  }
		  else{
			return 'http://search.microsoft.com/zh-cn/results.aspx?q=' + str + '&x=0&y=0';
		  }
		  
	  };
	  input.on('focus',function (){
		 results.slideDown("normal");
	  });

	 $(document).click(function (event){
	   var target = $(event.target);
	   if(target.attr('id') == 'search-input' || target.attr('role') == 'search'){
		  return;
	   }
	   else{
		  results.slideUp("normal");
	   }
	 });
	 
	 resultsLi.on('click',function (){
		resultsLi.removeClass('checked');
		$(this).addClass('checked');
		searchSite = $(this).attr('search');
	 });

	  input.on('keyup',
	  function() {
		  str = encodeURI($.trim($(this).attr('value')));
	  });

	  searchForm.on('submit',
	  function() {
		   location.href = searchUrl(str);
		   return false;
	  });

	  submitSite.on('click',
	  function() {
		  location.href = searchUrl(str);
		  return false;
	  });
  }

$(function() {
	siteSearch();
}) 

