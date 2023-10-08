let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


 window.onscroll = () => {
 	sections.forEach(sec =>) {
 		let top = window.scrollY;
 		let offset = sec.offsetTOP - 150;
 		let height = sec.offsetHeight;
 		let id = sec.getAttribute('id');

 		if(top >== offset && < offset + height) {
 			navlinks.forEach(links =>) {
 				links.classList.remove('active');
 				document.querySelector('header nav a [href*=' = id +']').classList.add('active');

 			});
 		};
 	});
 };

ScrollReveal({
	reset:true,
	distance:'80px',
	duration:2000,
	delay:200

	)};

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
