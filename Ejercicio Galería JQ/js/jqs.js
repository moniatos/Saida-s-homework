// JavaScript Document
$(document).ready(function(){
	$("article img").hide();
	$("article h3").click(function(){
		$(this).toggleClass("activo").next().slideToggle();
	});
});