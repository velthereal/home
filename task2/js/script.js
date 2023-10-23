$('#menu_btn').on('click', function(){
	$('.nav a').each(function(){
		$(this).toggleClass('none');
	})
})