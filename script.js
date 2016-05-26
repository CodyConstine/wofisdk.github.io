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
			var id = $(this).attr('id');
			if(id === 'about_bub') //decide which bubble is being hovered over
			{
				$('#about_bub div').css('background-color', '#00a3cc');
				$('#about_bub div').css('color', '#f7f7f7');
			}
			else
			{
				$('#contact_bub div').css('background-color', '#00a3cc');
				$('#contact_bub div').css('color', '#f7f7f7');				
			}
			$(this).css('background-color', '#00ccff');
		},
		function(){
			var id = $(this).attr('id');
			if(id === 'about_bub') //decide which bubble is being hovered over
			{
				$('#about_bub div').css('background-color', '#00ccff');
				$('#about_bub div').css('color', '#000000');
			}
			else
			{
				$('#contact_bub div').css('background-color', '#00ccff');
				$('#contact_bub div').css('color', '#000000');				
			}
			$(this).css('background-color', '#003380');
		}
	);
});