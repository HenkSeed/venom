const buttons = document.getElementsByClassName('button');
// console.log(trailerButton);
for (const button of buttons) {
	if (button.classList.contains('hero-battons_active')) {
		button.classList.toggle('hero-battons_active');
		console.log('Toggled');
	} else {
		button.classList.toggle('hero-battons_active');
		console.log('Not toggled');
	}
}
