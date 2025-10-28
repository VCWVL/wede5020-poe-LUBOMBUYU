/**
 * Accordion functionality for service details on services.html.
 *
 * Function: Toggles expansion of service items to show/hide features and pricing.
 * Usage: Included in services.html for interactive service details.
 */

document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle expanded class
            item.classList.toggle('expanded');

            // Optional: Close other expanded items
            serviceItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('expanded');
                }
            });
        });
    });
});

/*
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelectorAll: MDN. (n.d.) *Document.querySelectorAll()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll (Accessed: 2023).
 * - addEventListener: MDN. (n.d.) *EventTarget.addEventListener()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 2023).
 * - classList: MDN. (n.d.) *Element.classList*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList (Accessed: 2023).
 */
