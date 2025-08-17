# Carlos Ojeda - Portfolio

A modern, responsive portfolio website built with React, featuring internationalization support and best practices in component architecture.

## 🌟 Features

- **Multi-language Support**: Full internationalization with English and Spanish translations
- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all device sizes
- **Performance**: Optimized with React best practices and code splitting
- **Accessibility**: Built with accessibility in mind

## 🚀 Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Ant Design** - UI component library
- **SCSS** - Advanced CSS with variables and mixins
- **i18next** - Internationalization framework
- **React Icons** - Icon library
- **TSParticles** - Interactive particle animations

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── AboutMe/        # About section with employment history
│   ├── Contact/        # Contact form and information
│   ├── Footer/         # Site footer
│   ├── Header/         # Navigation header with language selector
│   ├── Landing/        # Hero section with particles
│   ├── LanguageSelector/ # Language switching component
│   ├── LoadingProvider/ # Loading state management
│   ├── Projects/       # Projects showcase
│   ├── Skills/         # Skills and technologies
│   └── shared/         # Shared components
├── config/             # Configuration files
│   ├── constants.js    # App constants and settings
│   ├── contact.js      # Contact configuration
│   ├── cssVariables.js # CSS variables
│   ├── designSystem.js # Design system constants
│   └── emailjs.js      # EmailJS configuration
├── data/               # Data files
│   ├── employmentData.js # Employment and education data
│   └── projectsData.js # Projects information
├── hooks/              # Custom React hooks
│   ├── useScrollSpy.js # Scroll spy functionality
│   ├── useSmoothScroll.js # Smooth scrolling
│   └── useTranslations.js # Translation utilities
├── i18n/               # Internationalization
│   ├── index.js        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── es.json     # Spanish translations
├── App.js              # Main App component
├── App.css             # App styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎯 Key Improvements

### 1. Internationalization (i18n)
- Complete translation system with English and Spanish support
- Centralized translation files for easy content management
- Dynamic language switching with persistent storage
- Automatic language detection based on browser settings

### 2. Component Architecture
- **Separation of Concerns**: Data, logic, and presentation separated
- **Reusable Components**: Modular components with clear responsibilities
- **Custom Hooks**: Encapsulated logic for scroll handling, translations, etc.
- **Constants Management**: Centralized configuration for easy maintenance

### 3. Performance Optimizations
- **Memoization**: Strategic use of `useMemo` and `useCallback`
- **Code Splitting**: Lazy loading of components where appropriate
- **Optimized Rendering**: Reduced unnecessary re-renders
- **Efficient Data Management**: Centralized data files with translation support

### 4. Best Practices
- **Type Safety**: Proper prop validation and error handling
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Responsive Design**: Mobile-first approach with breakpoint management
- **Clean Code**: Consistent naming conventions and code organization

## 🛠️ Development

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/carlos-ojeda/carlos-ojeda.github.io.git

# Navigate to the project directory
cd carlos-ojeda.github.io

# Install dependencies
npm install

# Start development server
npm start
```

### Building for Production
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🌐 Adding New Languages

1. Create a new translation file in `src/i18n/locales/`
2. Add the language to the `LanguageSelector` component
3. Update the i18n configuration in `src/i18n/index.js`

## 📝 Content Management

All content is managed through translation files:
- **Text Content**: Edit `src/i18n/locales/en.json` and `src/i18n/locales/es.json`
- **Project Data**: Update `src/data/projectsData.js`
- **Employment Data**: Modify `src/data/employmentData.js`
- **Configuration**: Adjust `src/config/constants.js`

## 🎨 Customization

### Styling
- Global styles: `src/index.css` and `src/App.css`
- Component-specific styles: `src/components/[ComponentName]/_component.scss`
- CSS variables: `src/config/cssVariables.js`

### Configuration
- App constants: `src/config/constants.js`
- Design system: `src/config/designSystem.js`
- Contact settings: `src/config/contact.js`
- EmailJS configuration: `src/config/emailjs.js`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Start

```bash
# Clone and setup
git clone https://github.com/carlos-ojeda/carlos-ojeda.github.io.git
cd carlos-ojeda.github.io
npm install
npm start
```

## 📞 Contact

- **Email**: carlosnoel_ojedaa@icloud.com
- **GitHub**: [@carlos-ojeda](https://github.com/carlos-ojeda)

## 📚 Resources

- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)

---

Built with ❤️ and React
