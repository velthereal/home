$('button').each(function(){
	$(this).on('click', function(){
		if($(this).hasClass('red')){
			$(this).toggleClass('shadow');
			$('.fruits ul li').each(function(){
				if($(this).hasClass('red')){
					$(this).toggleClass('shadow');
				}
			})
		}
		else if($(this).hasClass('green')){
			$(this).toggleClass('shadow');
			$('.fruits ul li').each(function(){
				if($(this).hasClass('green')){
					$(this).toggleClass('shadow');
				}
			})
		}
		else if($(this).hasClass('orange')){
			$(this).toggleClass('shadow');
			$('.fruits ul li').each(function(){
				if($(this).hasClass('orange')){
					$(this).toggleClass('shadow');
				}
			})
		}
		else if($(this).hasClass('yellow')){
			$(this).toggleClass('shadow');
			$('.fruits ul li').each(function(){
				if($(this).hasClass('yellow')){
					$(this).toggleClass('shadow');
				}
			})
		}
	})
})