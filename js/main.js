$(document).ready(function(){

	$('ul.nav li').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});

});