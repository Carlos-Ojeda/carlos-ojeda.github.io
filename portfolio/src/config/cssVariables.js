import { DESIGN_SYSTEM } from './designSystem';

// Function to convert design system object to CSS custom properties
export const generateCSSVariables = () => {
  const cssVariables = {};

  // Helper function to flatten nested objects
  const flattenObject = (obj, prefix = '') => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}-${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          flattenObject(obj[key], newKey);
        } else {
          cssVariables[`--${newKey}`] = obj[key];
        }
      }
    }
  };

  // Flatten the design system object
  flattenObject(DESIGN_SYSTEM);

  return cssVariables;
};

// Function to apply CSS variables to the document
export const applyCSSVariables = () => {
  const cssVariables = generateCSSVariables();
  const root = document.documentElement;

  Object.entries(cssVariables).forEach(([property, value]) => {
    root.style.setProperty(property, value);
  });
};

// Function to get a CSS variable value
export const getCSSVariable = (variableName) => {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${variableName}`);
};

// Function to set a CSS variable value
export const setCSSVariable = (variableName, value) => {
  document.documentElement.style.setProperty(`--${variableName}`, value);
};

// Export the CSS variables object for reference
export const CSS_VARIABLES = generateCSSVariables();

export default CSS_VARIABLES;
