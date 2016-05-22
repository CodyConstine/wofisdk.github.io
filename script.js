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
	$('.bubble').hover ( //Hover function for bubble buttons
		function(){
			$(this).css('height', '67%');
			$(this).css('width','52%');
			$(this).css('background-color', '#00ccff');
		},
		function(){
			$(this).css('height', '65%');
			$(this).css('width','50%');
			$(this).css('background-color', '#003380');
		}
	);
});