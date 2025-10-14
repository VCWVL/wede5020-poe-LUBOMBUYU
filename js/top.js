/**
 * Implements a scroll-to-top button for improved user navigation on long pages.
 *
 * Function: Creates a fixed-position button that appears when scrolling down and smoothly scrolls to the top when clicked.
 * Usage: Included in pages with scrollable content (index.html, about.html, services.html, contact.html, enquiry.html, portfolio.html).
 *
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - createElement: MDN. (n.d.) *Document.createElement()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement (Accessed: 2023).
 * - appendChild: MDN. (n.d.) *Node.appendChild()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild (Accessed: 2023).
 * - window.addEventListener: MDN. (n.d.) *EventTarget.addEventListener()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 2023).
 * - window.scrollTo: MDN. (n.d.) *Window.scrollTo()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo (Accessed: 2023).
 * - CSS fixed positioning: MDN. (n.d.) *position*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/position (Accessed: 2023).
 */

document.addEventListener('DOMContentLoaded', function () {
    // Create the button
    const btn = document.createElement('button');
    btn.innerHTML = '↑ Top';
    btn.id = 'scrollToTopBtn';
    btn.style.position = 'fixed';
    btn.style.bottom = '32px';
    btn.style.right = '32px';
    btn.style.padding = '0.75rem 1.5rem';
    btn.style.fontSize = '1.25rem';
    btn.style.background = 'var(--primary-color, #0057a3)';
    btn.style.color = 'var(--text-light, #fff)';
    btn.style.border = 'none';
    btn.style.borderRadius = '8px';
    btn.style.boxShadow = '0 2px 8px rgba(0,87,163,0.12)';
    btn.style.cursor = 'pointer';
    btn.style.display = 'none';
    btn.style.zIndex = '999';
    document.body.appendChild(btn);

    // Show/hide button on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    });

    // Scroll to top on click
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
