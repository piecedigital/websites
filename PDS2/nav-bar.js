$.browserDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

$(document).ready(function(){
var windowWidth = $( window ).width();
var docWidth = $(document).width();
var squished = false;
wwidth = 691;
if (windowWidth < wwidth || windowWidth < 705){
  squished = true;
  console.log(squished + " " + docWidth + " " + wwidth);
}
else{
  squished = false;
  console.log(squished + " " + docWidth + " " + wwidth);
};

//resize check
  $(window).on("resize", function(){
    windowWidth = $( window ).width();
    console.log(windowWidth);
   if (windowWidth < wwidth){
      squished = true;
      console.log(squished);
    }
    else{
      squished = false;
      console.log(squished);
    };

    console.log(squished);
    console.log(windowWidth);
    
    if (squished) {
      $("#mo-nav").css({"visibility":"visible"});
      $("#nav:visible").hide();
      $("#sub-nav:visible").hide();
      console.log("This window is squished")
    }
    else{
      $("#mo-nav").css({"visibility":"hidden"});
      $("#nav:hidden").show();
      $("#sub-nav:hidden").show();

      console.log("This window is not squished")
    };
  });

//check mobile or squished  
  if ($.browserDevice || squished){
    $("#mo-nav").css({"visibility":"visible"});
    $("#nav").hide();
    $("#sub-nav").hide();
    if($.browserDevice){
      console.log("This is a mobile device");
    }
    else{
      console.log("This is a desktop")
    }
  }
  else{
    $("#mo-nav").css({"visibility":"hidden"});
  };
  
//toggle nav
    toggleNav = function(){
        $("#nav").slideToggle();
        $("#sub-nav:visible").slideToggle();
        console.log("Mo-nav clicked");
    };
  $("#mo-nav").on("click", toggleNav);

  $("li#portfolio").on("click", function(event){
    if(squished){
      $("ul#sub-nav").slideToggle();
      console.log("visible");
    }
    else{
      console.log("invisible");
    }
  });

});
