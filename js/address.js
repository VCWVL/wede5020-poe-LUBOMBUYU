/**
 * Dynamically generates the contact information block in the header.
 *
 * Function: Inserts phone and email links into the address element for consistent contact info across pages.
 * Usage: Included in all pages with header navigation (index.html, about.html, services.html, contact.html, enquiry.html, portfolio.html).
 *
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelector: MDN. (n.d.) *Document.querySelector()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector (Accessed: 2023).
 * - innerHTML: MDN. (n.d.) *Element.innerHTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML (Accessed: 2023).
 * - Template literals: MDN. (n.d.) *Template literals (Template strings)*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals (Accessed: 2023).
 */

document.addEventListener('DOMContentLoaded', function () {
    const addressHTML = `
        <p><a href="tel:+27123456799">📞 +27 12 345 6799</a></p>
        <p><a href="mailto:info@techflow.co.za">✉️ info@techflow.co.za</a></p>
    `;
    const address = document.querySelector('address.contact-info');
    if (address) {
        address.innerHTML = addressHTML;
    }
});
