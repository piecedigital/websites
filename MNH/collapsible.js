$(document).ready(function(){
	var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
	
	var checkdevice = function(){
		$("#nav").appendTo("#mo-nav .mo-nav");
		$("#nav").addClass("offset-mo-nav");
		$("#nav").css( {"float":"right","width":"100px"} );
		$("#nav li").css( {"float":"right"} );
		$("#nav li a").css( {"width":"6em","box-shadow":"0px 0px 0 2px  black,0px 0px 0px 2px black","height":"1.5em","font-size":"3em"} );
		$(".ins-1").detach().appendTo( $( "#nav li:nth-child(2)" ) );
		$("#nav li:nth-child(2) a:first").html("booking");
		};//end checkdevice function
		
	var checkwin = function(){
		if ( $(window).width() <= 900 ){
			console.log("under 670.");
			$("#nav").css( {"float":"left","width":"100px"} );
			$("#nav li a").css( {"width":"100px","box-shadow":"0px 0px 0 2px  black,0px 0px 0px 2px black"} );
			$(".ins-1").detach().appendTo( $( "#nav li:nth-child(2)" ) );
			$("#nav li:nth-child(2) a:first").html("booking");
			}
		else if ( $(window).width() > 900 ){
			console.log("over 670");
			$("#nav").css( {"float":"none","width":"440px"} );
			$("#nav li a").css( {"width":"100px","box-shadow":"2px 0px 0 0px  black,-2px 0px 0px 0px black"} );
			$(".ins-1").detach().appendTo( $( "#sub-nav1 .ins-0" ) );
			$("#nav li:nth-child(2) a:first").html("booking &raquo;");
			};
	};//end checkWin function
	
	//$(window).on("resize", checkwin);
	if (isMobile.any() ){
		$(checkdevice);
		$("#mo-nav .mo-nav").hide();
		$("#header").css( {"position":"fixed"} );
		$("#page-wrap").css( {"padding-top":"16em"} );
		$(".grp-cnt").css( {"max-width":"100%"} );
		$(".bio-img").css( {"min-width":"48%","max-width":"50%"} );
		$("#social a img").css( {"width":"4em","height":"4em"} );
		$(".full-testi").css( {"max-width":"100%"} );
		$(".disp-scroll").find(".clickable-pt").css( {"max-width":"47%"} );
		$("a#port-box").css( {"max-width":"47%"} );
		$("div#testi-box").css( {"max-width":"47%"} ).find("div.testi").css( {"max-width":"100%"} );;
		$("#page-wrap").find("p, b, .button").css({"font-size":"3em"});
		$("div#footer").css({"max-width":"100%"}).find("span").css({"font-size":"3em"});
		$("#d2 a").css({"width":"1em","height":"1em","font-size":"4em","top":"2%","right":"2%"});
		$("form").find("input, textarea").css( {"font-size":"3em","width":"100%","float":"left"} );
		$("form tr:nth-child(3)").find("input").css( {"width":"1em","height":"1em"} );
		$("form").find(".label").css( {"font-size":"2em","float":"left"} );
		$(".go-to-top").remove();
		console.log("Is mobile.");
	};
	if (!(isMobile.any()) ){
		$("#mo-nav").hide();
		console.log("Is not mobile.");
	};
	$("#nav li a").on("hover", function(){
		$(this).css( { "background-color":"#c69c6d" } );
	});
	$("#mo-nav").on("click",function(){
		$(this).find(".mo-nav").toggle();
		});
});//end doc.ready

