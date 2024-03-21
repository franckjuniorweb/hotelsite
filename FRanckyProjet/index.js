document.querySelectorAll('.my-lightbox-toggle').forEach(el => el.addEventListener('click', Lightbox.initialize));

const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));
    


  const btn2 = document.querySelector('.btn2');
  btn2.addEventListener('click',()=>{
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"
	})
  })