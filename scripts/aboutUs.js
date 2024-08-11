document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.about-section');
    const backgrounds = [
        'url("https://i.pinimg.com/originals/7a/9a/f5/7a9af5f6d0997cc632dc23fccd4f2f30.jpg")',
        'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLPjCEDC14-iK1XLKX_JMO8F_IEnRxa9g54w&s")',
        'url("https://img.freepik.com/premium-photo/forest-gradient-background_1016686-104275.jpg")',
        'url("https://image-1.uhdpaper.com/wallpaper/japanese-castle-cherry-blossom-mountain-digital-art-scenery-hd-wallpaper-uhdpaper.com-702@1@k.jpg")'
    ];

    let lastBackgroundIndex = -1;

    function updateBackground() {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                if (index !== lastBackgroundIndex) {
                    fadeInBackground(backgrounds[index]);
                    lastBackgroundIndex = index;
                }
            }
        });
    }

    function fadeInBackground(newBackground) {
        const fadeElement = document.createElement('div');
        fadeElement.style.position = 'fixed';
        fadeElement.style.top = '0';
        fadeElement.style.left = '0';
        fadeElement.style.width = '100%';
        fadeElement.style.height = '100%';
        fadeElement.style.zIndex = '-1';
        fadeElement.style.backgroundImage = newBackground;
        fadeElement.style.backgroundSize = 'cover';
        fadeElement.style.backgroundPosition = 'center';
        fadeElement.style.opacity = '0';
        fadeElement.style.transition = 'opacity 1s ease-in-out';

        document.body.appendChild(fadeElement);

        setTimeout(() => {
            fadeElement.style.opacity = '1';
        }, 10);

        setTimeout(() => {
            document.body.style.backgroundImage = newBackground;
            fadeElement.remove();
        }, 1000);
    }

    window.addEventListener('scroll', updateBackground);
    updateBackground(); // Initial call to set the background image on page load
});
