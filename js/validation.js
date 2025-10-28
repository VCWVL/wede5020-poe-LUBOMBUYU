/**
 * Client-side form validation functions for enquiry and contact forms.
 *
 * Function: Validates form inputs, displays error messages, and prevents submission if invalid.
 * Usage: Included in enquiry.html and contact.html for form validation.
 */

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // South African phone number validation (basic)
    const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
    return phoneRegex.test(phone) || phone === '';
}

function validateRequired(value) {
    return value.trim() !== '';
}

function showError(input, message) {
    const formGroup = input.closest('.form-group');
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.style.color = 'red';
        errorElement.style.fontSize = '0.9em';
        errorElement.style.marginTop = '5px';
        formGroup.appendChild(errorElement);
    }
    errorElement.textContent = message;
    input.style.borderColor = 'red';
}

function clearError(input) {
    const formGroup = input.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.remove();
    }
    input.style.borderColor = '';
}

function validateForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    const emailFields = form.querySelectorAll('input[type="email"]');
    const phoneFields = form.querySelectorAll('input[type="tel"]');

    // Validate required fields
    requiredFields.forEach(field => {
        if (!validateRequired(field.value)) {
            showError(field, `${field.previousElementSibling.textContent.replace('*', '').trim()} is required.`);
            isValid = false;
        } else {
            clearError(field);
        }
    });

    // Validate email fields
    emailFields.forEach(field => {
        if (field.value && !validateEmail(field.value)) {
            showError(field, 'Please enter a valid email address.');
            isValid = false;
        } else if (field.value) {
            clearError(field);
        }
    });

    // Validate phone fields
    phoneFields.forEach(field => {
        if (field.value && !validatePhone(field.value)) {
            showError(field, 'Please enter a valid South African phone number (e.g., +27123456789 or 0712345678).');
            isValid = false;
        } else if (field.value) {
            clearError(field);
        }
    });

    return isValid;
}

document.addEventListener('DOMContentLoaded', () => {
    // Validate enquiry form
    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            if (!validateForm(enquiryForm)) {
                e.preventDefault();
                const statusDiv = document.getElementById('formStatus');
                statusDiv.innerHTML = '<p>Please correct the errors above before submitting.</p>';
                statusDiv.className = 'form-status error';
            }
        });

        // Clear errors on input
        enquiryForm.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
                clearError(e.target);
            }
        });
    }

    // Validate contact form (to be added to contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            if (!validateForm(contactForm)) {
                e.preventDefault();
                const statusDiv = document.getElementById('contactStatus');
                if (statusDiv) {
                    statusDiv.innerHTML = '<p>Please correct the errors above before submitting.</p>';
                    statusDiv.className = 'form-status error';
                }
            }
        });

        // Clear errors on input
        contactForm.addEventListener('input', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
                clearError(e.target);
            }
        });
    }
});

/*
 * References:
 * - Regular expressions for validation: MDN. (n.d.) *Regular expressions*. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions (Accessed: 2023).
 * - DOM manipulation: MDN. (n.d.) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 2023).
 * - Form validation patterns: W3Schools. (n.d.) *JavaScript Form Validation*. Available at: https://www.w3schools.com/js/js_validation.asp (Accessed: 2023).
 * - South African phone number format: Wikipedia. (n.d.) *Telephone numbers in South Africa*. Available at: https://en.wikipedia.org/wiki/Telephone_numbers_in_South_Africa (Accessed: 2023).
 */
