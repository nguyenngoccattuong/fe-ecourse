


// testimonial slider
function testimonialSlider() {
    const carouselOne = document.getElementById('carouselOne');
    if (carouselOne) { // if the element exists
        carouselOne.addEventListener('slid.bs.carousel', function (event) {
            const activeItem = event.target.querySelector(".active");
            document.querySelector(".js-testimonial-img").src = 
            activeItem.getAttribute("data-js-testimonial-img");
        });
    }
}
testimonialSlider();
