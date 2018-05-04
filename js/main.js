/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@edit: Do do@logicdesign.cn Logicdesign
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$( document ).ready( function () {
	$( ".menu > li" ).click( function( e ) {
		switch( e.target.id ) {
			case "hot_menu":
			case "hot_text":
			case "hot_icon":
				//change status & style menu
				$("#hot_menu").addClass("active");
				$("#onsite_menu").removeClass("active");
				$("#virtual_menu").removeClass("active");
				$("#all_menu").removeClass("active");
				//display selected division, hide others
				$("div.hot").fadeIn();
				$("div.onsite").css("display", "none");
				$("div.virtual").css("display", "none");
				$("div.all").css("display", "none");
			break;
			case "onsite_menu":
			case "onsite_text":
			case "onsite_icon":
				//change status & style menu
				$("#hot_menu").removeClass("active");
				$("#onsite_menu").addClass("active");
				$("#virtual_menu").removeClass("active");
				$("#all_menu").removeClass("active");
				//display selected division, hide others
				$("div.hot").css("display", "none");
				$("div.onsite").fadeIn();
				$("div.virtual").css("display", "none");
				$("div.all").css("display", "none");
			break;
			case "virtual_menu":
			case "virtual_text":
			case "virtual_icon":
				//change status & style menu
				$("#hot_menu").removeClass("active");
				$("#onsite_menu").removeClass("active");
				$("#virtual_menu").addClass("active");
				$("#all_menu").removeClass("active");
				//display selected division, hide others
				$("div.hot").css("display", "none");
				$("div.onsite").css("display", "none");
				$("div.virtual").fadeIn();
				$("div.all").css("display", "none");
			break;
			case "all_menu":
			case "all_text":
			case "all_icon":
				//change status & style menu
				$("#hot_menu").removeClass("active");
				$("#onsite_menu").removeClass("active");
				$("#virtual_menu").removeClass("active");
				$("#all_menu").addClass("active");
				//display selected division, hide others
				$("div.hot").css("display", "none");
				$("div.onsite").css("display", "none");
				$("div.virtual").css("display", "none");
				$("div.all").fadeIn();
			break;
		}
		//alert( e.target.id );
		return false;
	});

	$( ".box" ).hover( function() {
		$( ".mask" ).show();
		$( ".mask", this ).hide();
		$( ".desc",this ).animate( { top: "0px" }, 1200 );
	}, function() {
		$( ".mask" ).hide();
		$( ".desc",this ).animate( { top: "184px" }, 1200 );
	});

	$( ".train" ).hover( function() {
		$( ".train" ).css( "background", "#5CCBF6" );
		$( this ).css( "background", "#00ADEF" );
		$( ".arrow_small" ).fadeOut();
		$( ".arrow_small", this ).fadeIn();
	}, function() {
		$( this ).css( "background", "#5CCBF6" );
		$( ".arrow_small", this ).fadeOut();
	});
});
