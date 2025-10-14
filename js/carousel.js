/**
 * ServiceCarousel class implements an interactive carousel for displaying service items.
 *
 * Function: Creates a responsive carousel with navigation, indicators, keyboard/touch support, and smooth animations.
 * Usage: Initializes on the homepage (index.html) for the services section carousel.
 *
 * References:
 * - Class syntax: Mozilla Developer Network (MDN). (n.d.) *Classes*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes (Accessed: 2023).
 * - DOMContentLoaded event: MDN. (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - Touch events: MDN. (n.d.) *Touch events*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events (Accessed: 2023).
 * - CSS transforms: MDN. (n.d.) *transform*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/transform (Accessed: 2023).
 * - Keyboard events: MDN. (n.d.) *KeyboardEvent*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent (Accessed: 2023).
 * - Carousel implementation inspired by: W3Schools. (n.d.) *How TO - Slideshow*. Available at: https://www.w3schools.com/howto/howto_js_slideshow.asp (Accessed: 2023).
 */

class ServiceCarousel {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.slides = this.container.querySelectorAll('.service-item');
        this.slideCount = this.slides.length;
        this.currentSlide = 0;
        this.slidesPerView = this.calculateSlidesPerView();
        this.isAnimating = false;

        this.init();
        this.setupEventListeners();
    }

    calculateSlidesPerView() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 1024) return 2;
        return 3;
    }

    init() {
        // Create carousel wrapper
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';

        // Create slides container
        const slidesContainer = document.createElement('div');
        slidesContainer.className = 'carousel-slides';

        // Move service items into slides container
        this.slides.forEach(slide => {
            const slideWrapper = document.createElement('div');
            slideWrapper.className = 'carousel-slide';
            slideWrapper.appendChild(slide.cloneNode(true));
            slidesContainer.appendChild(slideWrapper);
        });

        // Remove original service items
        while (this.container.firstChild) {
            this.container.removeChild(this.container.firstChild);
        }

        // Create navigation
        const navigation = this.createNavigation();

        // Assemble carousel
        wrapper.appendChild(slidesContainer);
        wrapper.appendChild(navigation);
        this.container.appendChild(wrapper);

        // Update slides
        this.slides = slidesContainer.querySelectorAll('.carousel-slide');
        this.updateCarousel();
    }

    createNavigation() {
        const nav = document.createElement('div');
        nav.className = 'carousel-navigation';

        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn carousel-prev';
        prevBtn.innerHTML = '&#8249;';
        prevBtn.setAttribute('aria-label', 'Previous slide');

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn carousel-next';
        nextBtn.innerHTML = '&#8250;';
        nextBtn.setAttribute('aria-label', 'Next slide');

        // Indicators
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';

        for (let i = 0; i < Math.ceil(this.slideCount / this.slidesPerView); i++) {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('data-slide', i);
            indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
            indicators.appendChild(indicator);
        }

        nav.appendChild(prevBtn);
        nav.appendChild(indicators);
        nav.appendChild(nextBtn);

        return nav;
    }

    setupEventListeners() {
        // Navigation buttons
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('carousel-prev')) {
                this.prev();
            } else if (e.target.classList.contains('carousel-next')) {
                this.next();
            } else if (e.target.classList.contains('carousel-indicator')) {
                const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                this.goToSlide(slideIndex);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });

        // Touch/swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        // Responsive behavior
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }

    handleResize() {
        const newSlidesPerView = this.calculateSlidesPerView();
        if (newSlidesPerView !== this.slidesPerView) {
            this.slidesPerView = newSlidesPerView;
            this.updateIndicators();
            this.goToSlide(0);
        }
    }

    prev() {
        if (this.isAnimating) return;

        this.currentSlide = Math.max(0, this.currentSlide - 1);
        this.updateCarousel();
    }

    next() {
        if (this.isAnimating) return;

        const maxSlide = Math.ceil(this.slideCount / this.slidesPerView) - 1;
        this.currentSlide = Math.min(maxSlide, this.currentSlide + 1);
        this.updateCarousel();
    }

    goToSlide(slideIndex) {
        if (this.isAnimating) return;

        const maxSlide = Math.ceil(this.slideCount / this.slidesPerView) - 1;
        this.currentSlide = Math.max(0, Math.min(maxSlide, slideIndex));
        this.updateCarousel();
    }

    updateCarousel() {
        this.isAnimating = true;

        const slidesContainer = this.container.querySelector('.carousel-slides');
        const translateX = -this.currentSlide * (100 / this.slidesPerView);
        slidesContainer.style.transform = `translateX(${translateX}%)`;

        this.updateIndicators();
        this.updateButtonStates();

        // Reset animation flag after transition
        setTimeout(() => {
            this.isAnimating = false;
        }, 300);
    }

    updateIndicators() {
        const indicators = this.container.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    updateButtonStates() {
        const prevBtn = this.container.querySelector('.carousel-prev');
        const nextBtn = this.container.querySelector('.carousel-next');

        prevBtn.disabled = this.currentSlide === 0;
        nextBtn.disabled = this.currentSlide === Math.ceil(this.slideCount / this.slidesPerView) - 1;
    }
}

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ServiceCarousel('services-carousel');
});
