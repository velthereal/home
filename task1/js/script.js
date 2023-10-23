let animal = $('#animal');
let maxX, maxY;

function updateMaxValues(){
	maxX = $(window).width() - animal.width();
	maxY = $(window).height() - animal.height();
}

function moveAnimal(event){
	let x = event.clientX - animal.width() / 2;
	let y = event.clientY - animal.height() / 2;

	x = Math.max(0, Math.min(x, maxX));
	y = Math.max(0, Math.min(y, maxY));

	animal.css({left: x, top: y });
}

$(window).on('resize', updateMaxValues);
$('.container').on('mousemove', moveAnimal);

updateMaxValues();