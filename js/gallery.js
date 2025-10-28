/**
 * Gallery lightbox functionality for portfolio images.
 *
 * Function: Opens images in a modal lightbox when clicked, with navigation and close options.
 * Usage: Included in portfolio.html for image gallery interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox-close');

    let currentIndex = 0;
    const images = Array.from(galleryItems);

    // Open lightbox
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            openLightbox(img);
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                navigateGallery(-1);
                break;
            case 'ArrowRight':
                navigateGallery(1);
                break;
        }
    });

    function openLightbox(img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = img.nextElementSibling ? img.nextElementSibling.querySelector('h3').textContent : '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }

    function navigateGallery(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        const nextImg = images[currentIndex];
        lightboxImg.src = nextImg.src;
        lightboxImg.alt = nextImg.alt;
        lightboxCaption.textContent = nextImg.nextElementSibling ? nextImg.nextElementSibling.querySelector('h3').textContent : '';
    }
});

/*
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelectorAll: MDN. (n.d.) *Document.querySelectorAll()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll (Accessed: 2023).
 * - addEventListener: MDN. (n.d.) *EventTarget.addEventListener()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 2023).
 * - classList: MDN. (n.d.) *Element.classList*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList (Accessed: 2023).
 * - KeyboardEvent: MDN. (n.d.) *KeyboardEvent*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent (Accessed: 2023).
 */
