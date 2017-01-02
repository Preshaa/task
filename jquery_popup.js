$(document).ready(function(){
       $(".Popup").append("<button class='close' style='position:absolute; top:0px;right:0px;cursor:pointer;'>&times;</button>");
       $(".Popup").hide();
       $(".close").click(function(){
           	  $(".Popup").Close();
           });
   });
jQuery.fn.popup= function() {
    this.show();
};
jQuery.fn.Close=function(){
  this.hide();
};

