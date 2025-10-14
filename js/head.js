/**
 * Dynamically generates the <head> section for all pages to ensure consistent meta tags and styles.
 *
 * Function: This script checks for essential head elements and inserts them if missing, promoting DRY (Don't Repeat Yourself) principles.
 * Usage: Include <script src="js/head.js"></script> as the first script in your HTML file.
 *
 * References:
 * - DOM manipulation: Mozilla Developer Network (MDN). (n.d.) *Document.querySelector()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector (Accessed: 2023).
 * - insertAdjacentHTML: MDN. (n.d.) *Element.insertAdjacentHTML()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML (Accessed: 2023).
 * - DOMContentLoaded event: MDN. (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 */

document.addEventListener('DOMContentLoaded', function () {
    // Only run if <head> exists and is empty or marked for dynamic use
    const head = document.querySelector('head');
    if (!head) return;

    // You can customize these per page if needed
    const metaCharset = '<meta charset="UTF-8">';
    const metaViewport = '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    const title = document.title || 'TechFlow Solutions';
    const metaDescription = document.querySelector('meta[name="description"]') ? '' : '<meta name="description" content="TechFlow Solutions empowers your business through Custom Software, Mobile Apps, and IT Consulting. Future-proof your digital presence.">';
    const stylesheet = '<link rel="stylesheet" href="css/styles.css">';

    // Insert only if not already present
    if (!head.querySelector('meta[charset]')) head.insertAdjacentHTML('beforeend', metaCharset);
    if (!head.querySelector('meta[name="viewport"]')) head.insertAdjacentHTML('beforeend', metaViewport);
    if (!head.querySelector('title')) head.insertAdjacentHTML('beforeend', `<title>${title}</title>`);
    if (metaDescription) head.insertAdjacentHTML('beforeend', metaDescription);
    if (!head.querySelector('link[rel="stylesheet"][href="css/styles.css"]')) head.insertAdjacentHTML('beforeend', stylesheet);
});
