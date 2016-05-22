$(document).ready(function(){
	$('.button').hover(
		function(){
			$(this).css('background-color', '#000000');
			$(this).css('color', '#f7f7f7');			
		},
		function(){
			$(this).css('background-color', '#2226B6');
			$(this).css('color', '#000000');
		}
	);
});