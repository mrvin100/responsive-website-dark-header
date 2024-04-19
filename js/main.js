/*custom main js file*/

let search = document.querySelector('.search-box');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header');
let contactBtn = document.querySelector('.contact_btn');

document.querySelector('#search-icon').onclick = () => {
	search.classList.toggle('active');
	navbar.classList.remove('active');
	contactBtn.classList.toggle('active');
}

document.querySelector('#menu-icon').onclick = () => {
	navbar.classList.toggle('active');
	search.classList.remove('active');
	contactBtn.classList.remove('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
	search.classList.remove('active');
}

window.addEventListener('scroll', () => {
	header.classList.toggle('shadow', window.scrollY > 0);
});