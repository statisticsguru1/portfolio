// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio page loaded!");

    // Initialize Swiper
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Show 3 slides at a time
        spaceBetween: 20, // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            // Adjust for smaller screens
            768: {
                slidesPerView: 1, // Show 1 slide on small screens
            },
            1024: {
                slidesPerView: 3, // Show 2 slides on medium screens
            },
        },
    });
});
