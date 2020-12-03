{
	let header = document.querySelector('.header');
	let wrapper = document.querySelector('.wrapper');
	if(wrapper) {
		let menu = header.querySelector('.header__menu');

		window.addEventListener('scroll', () => {
			if(window.pageYOffset > 10) {
				header.classList.add('background');
			} else if(window.pageYOffset <= 10) {
				if(!menu.classList.contains('open')) {
					header.classList.remove('background');
				}
			}
		})
	}


}