/**
 * Dynamically generates the footer content with social media links and company information.
 *
 * Function: Inserts consistent footer HTML into the footer element across all pages.
 * Usage: Included in all pages (index.html, about.html, services.html, contact.html, enquiry.html, portfolio.html).
 *
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelector: MDN. (n.d.) *Document.querySelector()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector (Accessed: 2023).
 * - innerHTML: MDN. (n.d.) *Element.innerHTML*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML (Accessed: 2023).
 * - Template literals: MDN. (n.d.) *Template literals (Template strings)*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals (Accessed: 2023).
 * - Font Awesome icons: Font Awesome. (n.d.) *Font Awesome Icons*. Available at: https://fontawesome.com/icons (Accessed: 2023).
 */

document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
    <div class="footer-content">
    <div class="social-media">
        <a href="https://www.facebook.com/TechFlowSolutions" target="_blank" rel="noopener" aria-label="Follow us on Facebook">
            <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com/TechFlowSol" target="_blank" rel="noopener" aria-label="Follow us on Twitter">
            <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/techflow-solutions" target="_blank" rel="noopener" aria-label="Connect with us on LinkedIn">
            <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/techflow_solutions" target="_blank" rel="noopener" aria-label="Follow us on Instagram">
            <i class="fab fa-instagram"></i>
        </a>
    </div>
        <div class="footer-info">
            <p>&copy; 2025 <strong>TechFlow Solutions</strong>. All rights reserved.</p>
            <p>Empowering Your Digital Future | Custom Software • Mobile Apps • IT Consulting</p>
        </div>
    </div>
    `;
    const footer = document.querySelector('footer.footer');
    if (footer) {
        footer.innerHTML = footerHTML;
        console.log('Footer loaded successfully');
    } else {
        console.log('Footer element not found');
    }
});
