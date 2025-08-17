// EmailJS Configuration
// Get these values from your EmailJS account: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
    PUBLIC_KEY: "4j7aF6Ovownassmv2",
    SERVICE_ID: "jSP5bFg00I6S68K70zL1h",
    TEMPLATE_ID: "template_diuc2at"
};

// Template variables that will be available in your EmailJS template
export const EMAIL_TEMPLATE_VARIABLES = {
    from_name: "{{from_name}}",
    from_email: "{{from_email}}",
    subject: "{{subject}}",
    message: "{{message}}",
    to_name: "{{to_name}}"
}; 