$(document).ready(function(){

	$('ul.nav li').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});

	$('ul.nav li:first-child').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: $('#chicken').offset().top-20},800);
	});

	$('ul.nav li:nth-child(2)').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: $('#beef').offset().top-20},800);
	});

	$('ul.nav li:last-child').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: $('#sushi').offset().top-20},800);
	});

	$('section span a').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: $('#top').offset().top},800);
	});

});