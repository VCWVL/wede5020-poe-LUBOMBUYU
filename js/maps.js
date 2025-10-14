/**
 * Dynamically embeds Google Maps iframes for location display.
 *
 * Function: Replaces map section content with embedded Google Maps showing company locations.
 * Usage: Included in contact.html for displaying office locations.
 *
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelector: MDN. (n.d.) *Document.querySelector()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector (Accessed: 2023).
 * - innerHTML: MDN. (n.d.) *Element.innerHTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML (Accessed: 2023).
 * - Google Maps Embed API: Google. (n.d.) *Google Maps Embed API*. Available at: https://developers.google.com/maps/documentation/embed (Accessed: 2023).
 * - Template literals: MDN. (n.d.) *Template literals (Template strings)*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals (Accessed: 2023).
 */

// Note: This file contains duplicate event listeners for different map sections.
// In a production environment, this should be refactored to handle multiple maps dynamically.

document.addEventListener('DOMContentLoaded', function () {
    const mapSection = document.querySelector('.map');
    if (mapSection) {
        mapSection.innerHTML = `
            <h2>Find Us Here</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1253505835507!2d30.895508876222554!3d-30.033261474929237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7ad54608d6929%3A0x1cb46da3c87914b9!2sGalleria%20Mall!5e0!3m2!1sen!2sza!4v1754991007177!5m2!1sen!2sza"
                class="contact-iframe"
                title="Our location on Google Maps"
                allowfullscreen
                loading="lazy">
            </iframe>
        `;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const mapSection = document.querySelector('.map');
    if (mapSection) {
        mapSection.innerHTML = `
            <h2>Find Us Here As Well</h2>
            <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57290.326566559546!2d28.026119213783364!3d-26.17567524355181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20Zuid-Afrika!5e0!3m2!1snl!2snl!4v1755696518441!5m2!1snl!2snl"
                class="contact-iframe"
                title="Our location on Google Maps"
                allowfullscreen
                loading="lazy">
            </iframe>
        `;
    }
});
