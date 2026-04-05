// EmailJS Configuration
// Values are loaded from environment variables.
// Copy .env.example to .env.local and fill in your credentials.

if (
    !import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
    !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
    !import.meta.env.VITE_EMAILJS_TEMPLATE_ID
) {
    console.warn(
        '[EmailJS] Missing environment variables. Copy .env.example to .env.local and fill in your credentials.'
    );
}

export const EMAILJS_CONFIG = {
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
};

// Template variables that will be available in your EmailJS template
export const EMAIL_TEMPLATE_VARIABLES = {
    from_name: "{{from_name}}",
    from_email: "{{from_email}}",
    subject: "{{subject}}",
    message: "{{message}}",
    to_name: "{{to_name}}"
}; 