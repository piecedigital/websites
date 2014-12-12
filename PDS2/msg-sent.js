$(document).ready(function(){
  if (window.location.search == "?s=success"){
    $("#contactbox h1").addClass("success");
    console.log("message sent");
  }
  else if (window.location.search == "?s=failed"){
    $("#contactbox h1").addClass("fail");
    console.log("message send failed");
  }
});
