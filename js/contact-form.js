/**
 * Handles contact form submission for general messages.
 *
 * Function: Simulates email sending by displaying a success message and logging form data.
 * Usage: Included in contact.html for contact form handling.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        return; // Exit if the form is not on this page
    }

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const statusDiv = document.getElementById('contactStatus');

        // Simulate email sending (in a real application, this would send to a server)
        const emailData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            messageType: formData.get('messageType'),
            message: formData.get('message')
        };

        // Log the email data (for demonstration purposes)
        console.log('Contact Form Submission:', emailData);

        // Simulate sending email
        setTimeout(() => {
            statusDiv.innerHTML = '<p>Thank you for your message! We have received your enquiry and will respond within 24 hours.</p>';
            statusDiv.className = 'form-status success';
            contactForm.reset();
        }, 1000); // Simulate network delay
    });
});

/*
 * References:
 * - FormData: MDN. (n.d.) *FormData*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/FormData (Accessed: 2023).
 * - setTimeout: MDN. (n.d.) *setTimeout()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout (Accessed: 2023).
 * - console.log: MDN. (n.d.) *console.log()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/console/log_static (Accessed: 2023).
 */
