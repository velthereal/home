$('i').each(function(){
	$(this).on('click', function(){
		$(this).css('color', '#ff9600')
		$(this).prevAll().css('color', '#ff9600');
	})
})