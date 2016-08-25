$(document).ready(function(){
	$('.button').hover( //Hover function for header buttons
		function(){
			$(this).css('background-color', '#00a3cc');
			$(this).css('color', '#f7f7f7');			
		},
		function(){
			$(this).css('background-color', '#00ccff');
			$(this).css('color', '#000000');
		}
	);
});