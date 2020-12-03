{
	let fromSearch = document.querySelector('.form-search');
	if(fromSearch) {
		let input = fromSearch.querySelector('.form-search__input');
		input.addEventListener('focus', () => {
			fromSearch.classList.add('_focus');
		})
		input.addEventListener('blur', () => {
			fromSearch.classList.remove('_focus');
		})
	}
}