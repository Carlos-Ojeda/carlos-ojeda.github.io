// EmailJS Configuration
// Get these values from your EmailJS account: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
    PUBLIC_KEY: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
    SERVICE_ID: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
    TEMPLATE_ID: "YOUR_TEMPLATE_ID" // Replace with your EmailJS template ID
};

// Template variables that will be available in your EmailJS template
export const EMAIL_TEMPLATE_VARIABLES = {
    from_name: "{{from_name}}",
    from_email: "{{from_email}}",
    subject: "{{subject}}",
    message: "{{message}}",
    to_name: "{{to_name}}"
}; 