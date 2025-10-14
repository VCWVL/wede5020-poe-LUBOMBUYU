/**
 * Handles navigation functionality, including highlighting the active page link.
 *
 * Function: Adds an 'active' class to the navigation link corresponding to the current page for better UX.
 * Usage: Included in pages with navigation menus (index.html, about.html, services.html, contact.html, enquiry.html, portfolio.html).
 *
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelector and querySelectorAll: MDN. (n.d.) *Document.querySelector()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector (Accessed: 2023).
 * - classList: MDN. (n.d.) *Element.classList*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList (Accessed: 2023).
 * - window.location: MDN. (n.d.) *Window.location*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/location (Accessed: 2023).
 */

document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.querySelector('.main-nav');

    // Highlight the active navigation link
    if (mainNav) {
        const navLinks = mainNav.querySelectorAll('a');
        const currentPage = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            // Handle index.html being the root
            if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
});
