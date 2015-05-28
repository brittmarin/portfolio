var main = function () {
  "use strict";
  
  	$(".homebutton").on("click", function( e ) {
    e.preventDefault();
	$("body, html").animate({ 
        scrollTop: $( $(this).attr('#home') ).offset().top 
    }, 600);


    $(".myworkbutton").on("click", function( e ) {
    e.preventDefault();
	$("body, html").animate({ 
        scrollTop: $( $(this).attr('#mywork') ).offset().top 
    }, 600);


    $(".contactbutton").on("click", function( e ) {
    e.preventDefault();
	$("body, html").animate({ 
        scrollTop: $( $(this).attr('#contact') ).offset().top 
    }, 600);
    
});

$("document").ready(main);