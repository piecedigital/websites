$(document).ready(function(){
	var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }
};
	var checkdevice = function(){
		
			{
			console.log("mobile");
			$("#nav").css( {"float":"left","width":"100px"} );
			$("#nav li a").css( {"width":"100px","box-shadow":"0px 0px 0 2px  black,0px 0px 0px 2px black"} );
			$(".ins-1").detach().appendTo( $( "#nav li:nth-child(2)" ) );
			$("#nav li:nth-child(2) a:first").html("booking");
			}
		{
			console.log("not mobile");
			$("#nav").css( {"float":"none","width":"440px"} );
			$("#nav li a").css( {"width":"100px","box-shadow":"2px 0px 0 0px  black,-2px 0px 0px 0px black"} );
			$(".ins-1").detach().appendTo( $( "#sub-nav1 .ins-0" ) );
			$("#nav li:nth-child(2) a:first").html("booking &raquo;");
			};
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
	$(checkdevice);
	
	$("#nav li a").on("hover", function(){
		$(this).css( { "background-color":"#c69c6d" } );
	});
});//end doc.ready

