/**
 * Search functionality for services page.
 *
 * Function: Filters service items based on user input in the search field.
 * Usage: Included in services.html for dynamic service filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('serviceSearch');
    const clearButton = document.getElementById('clearSearch');
    const serviceItems = document.querySelectorAll('.service-item');

    if (!searchInput || !clearButton) return;

    // Function to filter services
    function filterServices(query) {
        const searchTerm = query.toLowerCase().trim();

        serviceItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const features = Array.from(item.querySelectorAll('ul li')).map(li => li.textContent.toLowerCase()).join(' ');

            const isVisible = title.includes(searchTerm) ||
                            description.includes(searchTerm) ||
                            features.includes(searchTerm);

            item.style.display = isVisible ? 'block' : 'none';
        });
    }

    // Search input event listener
    searchInput.addEventListener('input', (e) => {
        filterServices(e.target.value);
    });

    // Clear search button
    clearButton.addEventListener('click', () => {
        searchInput.value = '';
        filterServices('');
        searchInput.focus();
    });

    // Optional: Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            filterServices(searchInput.value);
        }
    });
});

/*
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelectorAll: MDN. (n.d.) *Document.querySelectorAll()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll (Accessed: 2023).
 * - addEventListener: MDN. (n.d.) *EventTarget.addEventListener()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 2023).
 * - Array.from: MDN. (n.d.) *Array.from()*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from (Accessed: 2023).
 * - String.prototype.toLowerCase: MDN. (n.d.) *String.prototype.toLowerCase()*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase (Accessed: 2023).
 * - String.prototype.includes: MDN. (n.d.) *String.prototype.includes()*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes (Accessed: 2023).
 */
