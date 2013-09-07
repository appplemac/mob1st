$(document).ready(function(){
	$("#menu nav").clone().appendTo('#menu-holder');

	$("body").addClass("js-active");
	
	$(".menu-trigger").click(
		function(){
			$("#menu-holder").toggleClass("active");
			return false;
		}
	);	
 });