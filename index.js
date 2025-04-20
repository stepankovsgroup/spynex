document.addEventListener("DOMContentLoaded", function() {
    const burgerMenu = document.getElementById('burger-menu');
    const navLinks = document.getElementById('nav-links');

    burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    const carouselImages = document.querySelector('.carousel-images');
    const leftArrow = document.querySelector('.left');
    const rightArrow = document.querySelector('.right');
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = 1;

    function updateCarousel() {
        const offset = -currentIndex * 320; 
        carouselImages.style.transition = 'transform 0.5s ease-in-out';
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex--;  
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        updateCarousel();
    });


    rightArrow.addEventListener('click', () => {
        currentIndex++; 
        if (currentIndex >= images.length) {
            currentIndex = 0; 
        }
        updateCarousel();
    });


    images.forEach(image => {
        image.addEventListener('click', () => {
            const fullScreenImage = document.createElement('div');
            fullScreenImage.classList.add('full-screen-image');
            fullScreenImage.style.position = 'fixed';
            fullScreenImage.style.top = '0';
            fullScreenImage.style.left = '0';
            fullScreenImage.style.width = '100vw';
            fullScreenImage.style.height = '100vh';
            fullScreenImage.style.background = 'rgba(0, 0, 0, 0.8)';
            fullScreenImage.style.display = 'flex';
            fullScreenImage.style.justifyContent = 'center';
            fullScreenImage.style.alignItems = 'center';
            fullScreenImage.style.zIndex = '100';
            fullScreenImage.style.cursor = 'zoom-out';

            const imgClone = image.cloneNode();
            imgClone.style.transition = 'transform 0.3s ease'; 
            imgClone.style.maxWidth = '90%';
            imgClone.style.maxHeight = '90%';
            imgClone.style.transform = 'scale(1)';

            fullScreenImage.appendChild(imgClone);
            document.body.appendChild(fullScreenImage);

            setTimeout(() => {
                imgClone.style.transform = 'scale(1.2)'; 
            }, 10);

            fullScreenImage.addEventListener('click', () => {
                fullScreenImage.remove();
            });
        });
    });
});
