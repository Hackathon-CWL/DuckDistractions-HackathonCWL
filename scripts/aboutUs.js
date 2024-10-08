document.addEventListener("DOMContentLoaded", function () {
    function preloadImages(imageArray) {
        imageArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages([
        'assets/imgs/aboutUs/aboutUs_img1.jpg',
        'assets/imgs/aboutUs/aboutUs_img2.jpg',
        'assets/imgs/aboutUs/aboutUs_img3.jpg',
        'assets/imgs/aboutUs/aboutUs_img4.jpg'
    ]);

    const sections = document.querySelectorAll(".about-section");
    const body = document.body;
    const backgrounds = [
        'url("assets/imgs/aboutUs/aboutUs_img1.jpg")',
        'url("assets/imgs/aboutUs/aboutUs_img2.jpg")',
        'url("assets/imgs/aboutUs/aboutUs_img3.jpg")',
        'url("assets/imgs/aboutUs/aboutUs_img4.jpg")'
    ];
    let currentIndex = -1;

    function fadeInBackground(newBackground) {
        const fadeElement = document.createElement('div');
        Object.assign(fadeElement.style, {
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-1',
            backgroundImage: newBackground, backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: '0', transition: 'opacity 1s ease-in-out'
        });
        document.body.appendChild(fadeElement);
        setTimeout(() => fadeElement.style.opacity = '1', 10);
        setTimeout(() => { body.style.backgroundImage = newBackground; fadeElement.remove(); }, 1000);
    }

    function changeBackground(index) {
        if (index !== currentIndex) {
            fadeInBackground(backgrounds[index]);
            currentIndex = index;
        }
    }

    function resetBackground() {
        body.style.backgroundImage = 'url("assets/imgs/background.jpg")';
        currentIndex = -1;
    }

    function updateBackground() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        sections.forEach((section, index) => {
            const { offsetTop: top, offsetHeight: height } = section;
            if (scrollPosition >= top && scrollPosition < top + height) changeBackground(index);
        });
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", () => {
            if (link.href.includes("#about-us")) {
                fadeInBackground(backgrounds[0]);
                currentIndex = 0;
                updateBackground();
            } else {
                resetBackground();
            }
        });
    });

    window.addEventListener('scroll', updateBackground);
    updateBackground();
});
