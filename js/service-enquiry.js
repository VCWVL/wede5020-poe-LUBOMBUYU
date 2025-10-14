/**
 * Handles service enquiry functionality for both service listing and enquiry form pages.
 *
 * Function: Enables clicking on service items to navigate to enquiry form with pre-selected service, and handles form submission.
 * Usage: Included in services.html and enquiry.html for service selection and form handling.
 *
 * References:
 * - DOMContentLoaded event: Mozilla Developer Network (MDN). (n.d.) *Document: DOMContentLoaded event*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event (Accessed: 2023).
 * - querySelectorAll: MDN. (n.d.) *Document.querySelectorAll()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll (Accessed: 2023).
 * - addEventListener: MDN. (n.d.) *EventTarget.addEventListener()*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener (Accessed: 2023).
 * - URLSearchParams: MDN. (n.d.) *URLSearchParams*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams (Accessed: 2023).
 * - FormData: MDN. (n.d.) *FormData*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/FormData (Accessed: 2023).
 * - Fetch API: MDN. (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2023).
 * - Google Forms integration: Google. (n.d.) *Google Forms API*. Available at: https://developers.google.com/forms/api (Accessed: 2023).
 * - encodeURIComponent: MDN. (n.d.) *encodeURIComponent()*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent (Accessed: 2023).
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Logic for service listing pages (e.g., services.html) ---
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent redirecting if a link inside the item was clicked
            if (e.target.tagName === 'A') {
                return;
            }
            const serviceName = item.getAttribute('data-service');
            if (serviceName) {
                window.location.href = `enquiry.html?service=${encodeURIComponent(serviceName)}`;
            }
        });
    });

    // --- Logic for the enquiry form page (enquiry.html) ---
    const enquiryForm = document.querySelector('#enquiry-form'); // Assumes your form has id="enquiry-form"

    if (enquiryForm) {
        const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfWDSC1eAFVgA2Q0W9iUX2MD7jeJ2dvrUvvTdvjV8znqIaYig/formResponse";

        // Part 1: Populate the service name from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const serviceNameFromUrl = urlParams.get('service');
        if (serviceNameFromUrl) {
            // Assumes you have an input like: <input type="text" name="service">
            const serviceInput = enquiryForm.querySelector('input[name="service"]');
            if (serviceInput) {
                serviceInput.value = decodeURIComponent(serviceNameFromUrl);
            }
        }

        // Part 2: Handle the form submission
        enquiryForm.addEventListener('submit', e => {
            e.preventDefault();

            const formData = new FormData(enquiryForm);
            const googleFormData = new FormData();

            // --- IMPORTANT ---
            // You must map your form's input `name` attributes to your Google Form's `entry.XXXX` names.
            // To find these IDs:
            // 1. Open your live Google Form.
            // 2. Right-click on an input field and choose "Inspect".
            // 3. Find the `name` attribute of the <input> tag (e.g., name="entry.123456789").
            // 4. Replace the placeholder IDs below with your actual IDs.

            // Example mapping (replace with your actual entry IDs and input names from your HTML form)
            googleFormData.append('entry.2005620554', formData.get('name'));     // Replace with ID for: Name
            googleFormData.append('entry.1045781291', formData.get('email'));    // Replace with ID for: Email
            googleFormData.append('entry.1065046570', formData.get('service'));  // Replace with ID for: Service
            googleFormData.append('entry.839337160', formData.get('message'));   // Replace with ID for: Message

            fetch(GOOGLE_FORM_URL, {
                method: 'POST',
                body: googleFormData,
                mode: 'no-cors' // This is required for Google Forms submissions
            })
            .then(() => {
                // Optional: Redirect to a thank-you page or show a success message
                window.location.href = 'thank-you.html';
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('An error occurred while submitting your enquiry. Please try again.');
            });
        });
    }
});
