document.addEventListener('DOMContentLoaded', () => {
	const burgerNavEl = document.querySelector('.burgerNav')
	const navEl = document.querySelector('.nav ul')

	burgerNavEl.addEventListener('click', () => {
		burgerNavEl.classList.toggle('open')
		navEl.classList.toggle('visible')
	})
})
