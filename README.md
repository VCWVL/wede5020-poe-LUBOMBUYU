[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/KA81iLh2)
<div align="center">

# 🌐 TechFlow Solutions Website

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Responsive](https://img.shields.io/badge/Responsive-4CAF50?style=for-the-badge&logo=materialdesign&logoColor=white)]()

> A modern, responsive website for TechFlow Solutions - showcasing professional IT services with mobile-first design

</div>

---
<div align="center">

## 👤 Student Information

| **Name** | **Student ID** | **Course** | **Institution** |
|----------|----------------|------------|----------------|
| Lubo Mbuyu | ST10467547 | WED5020 | Varcity College Westville |

</div>

## 📖 Project Overview

**TechFlow Solutions** is a fictional IT services company specializing in:

- 💻 **Custom Software Development**
- 📱 **Mobile Applications**
- 🛠️ **IT Consulting**
- 🌐 **Web Development**
- ☁️ **Cloud Solutions**
- 🔒 **Cybersecurity**

This project demonstrates front-end development skills, showcasing a **responsive**, **professional**, and **accessible** website with an emphasis on **mobile-first design**.

## 🎯 Website Goals & Objectives

### Goals
- Design and develop a fully functional, responsive, and user-friendly website
- Showcase services and portfolio items effectively
- Encourage user engagement and enquiries

### Objectives
- ✅ Develop a clean, modern, intuitive interface
- ✅ Ensure responsiveness across desktop, tablet, and mobile
- ✅ Present services, portfolio, and background information clearly
- ✅ Implement interactive enquiry and contact forms for lead generation
- ✅ Apply semantic HTML, modular CSS, and vanilla JavaScript using best practices

## ✨ Key Features & Functionality

### 📄 Pages
- **🏠 Homepage**: Hero banner, services overview with carousel, CTAs
- **🛠️ Services**: Detailed descriptions + pricing
- **💼 Portfolio**: Case studies and project showcases
- **ℹ️ About**: Company profile + team info
- **📞 Contact**: Form, location map, and business details
- **❓ Enquiry**: Dedicated enquiry form with validation

### 🔧 Technical Features
- 📱 **Mobile-first responsive design**
- 🍔 **Dynamic navigation** (hamburger menu on mobile)
- 🎠 **Homepage service carousel**
- 🗺️ **Google Maps integration** (Contact page)
- ✅ **Client-side form validation**
- 🖼️ **Lazy loading for images**
- 🔍 **SEO-friendly structure**
- ♿ **WCAG-compliant accessibility** (ARIA labels, keyboard navigation)

## 📸 Website Screenshots

For detailed screenshots of the website showcasing its design and responsiveness, please refer to the [website-screenshots.md](website-screenshots.md) file.

## 🗓️ Timeline & Milestones

| Milestone | Status | Description |
|-----------|--------|-------------|
| **Part 1** | ✅ **Complete** | Structure & Foundation<br>Wireframes, sitemap, semantic HTML, modular CSS, initial JS |
| **Part 2** | ✅ **Complete** | Visual Design & Responsiveness<br>CSS variables, mobile-first layouts, navigation, animations, accessibility |
| **Part 3** | ✅ **Complete** | Functionality & SEO<br>JavaScript enhancements, form validation, SEO optimization, interactive elements |

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Styling** | CSS Grid, Flexbox, CSS Variables |
| **Design** | Responsive & Mobile-First |
| **Performance** | Lazy loading, Optimized assets |
| **Accessibility** | Semantic HTML, ARIA, Keyboard navigation |

## ⚡ JavaScript Files & Functionality

This project uses vanilla JavaScript for dynamic functionality. Below is a detailed breakdown of each JS file, its purpose, and usage:

### Core JavaScript Files

| File | Purpose | Usage |
|------|---------|-------|
| **`js/head.js`** | Dynamically generates essential `<head>` elements (charset, viewport, title, description, stylesheet) for DRY principles | Included in all HTML files as the first script |
| **`js/navigation.js`** | Highlights active navigation link based on current page URL | Included in all pages with navigation (index.html, about.html, services.html, contact.html, enquiry.html, portfolio.html) |
| **`js/address.js`** | Dynamically inserts contact information (phone/email) into header address element | Included in all pages with header navigation |
| **`js/footer.js`** | Generates consistent footer content with social media links and company info | Included in all pages |
| **`js/top.js`** | Creates and manages a fixed-position "scroll to top" button with smooth scrolling | Included in pages with scrollable content |
| **`js/carousel.js`** | Implements responsive service carousel with navigation, indicators, keyboard/touch support | Initializes on homepage (index.html) for services section |
| **`js/google-form.js`** | Handles enquiry form submission to Google Forms API with validation and feedback | Included in enquiry.html |
| **`js/maps.js`** | Embeds Google Maps iframes for displaying office locations | Included in contact.html |
| **`js/service-enquiry.js`** | Enables service item clicks to navigate to enquiry form with pre-selected service | Included in services.html and enquiry.html |

### Notes on JavaScript Implementation

- All scripts use modern ES6+ features with DOMContentLoaded for safe initialization
- Error handling and accessibility features (ARIA labels) are implemented where applicable
- Google Forms integration uses 'no-cors' mode for cross-origin requests
- Touch and keyboard navigation support for better accessibility
- Responsive behavior with window resize listeners
## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2980b9`
- **Accent Orange**: `#e67e22`
- **Neutral Greys**: Various shades for text and backgrounds

### Typography
- **Headings**: Montserrat
- **Body Text**: Roboto

### Layout Principles
- **Grid + Flexbox** for responsive layouts
- **Component-based** design system
- **Consistent spacing** using CSS variables

## 📁 Project Structure

```
wede5020-part-2-LUBOMBUYU/
├── 📄 HTML Files
│   ├── index.html          # Homepage
│   ├── about.html          # About page
│   ├── services.html       # Services page
│   ├── portfolio.html      # Portfolio page
│   ├── contact.html        # Contact page
│   ├── enquiry.html        # Enquiry form
│   └── sitemap.xml         # XML sitemap for SEO
│
├── 🎨 CSS
│   ├── styles.css          # Global styles and CSS variables
│   ├── header.css          # Header and navigation styles
│   ├── footer.css          # Footer styles
│   ├── utilities.css       # Utility classes
│   ├── responsive.css      # Responsive design styles
│   ├── special.css         # Special effects and animations
│   ├── index.css           # Homepage specific styles
│   ├── about.css           # About page styles
│   ├── services.css        # Services page styles
│   ├── portfolio.css       # Portfolio page styles
│   ├── contact.css         # Contact page styles
│   ├── enquiry.css         # Enquiry form styles
│   ├── carousel.css        # Carousel component styles
│   ├── hamburger-menu.css  # Mobile navigation styles
│   ├── middle-nav.css      # Middle navigation styles
│   ├── responsive-nav.css  # Responsive navigation styles
│   └── media-queries.css   # Media query overrides
│
├── ⚡ JavaScript
│   ├── head.js             # Dynamic head generation
│   ├── navigation.js       # Navigation highlighting
│   ├── address.js          # Contact info insertion
│   ├── footer.js           # Footer generation
│   ├── top.js              # Scroll-to-top button
│   ├── carousel.js         # Service carousel
│   ├── google-form.js      # Google Forms integration
│   ├── maps.js             # Google Maps embedding
│   ├── service-enquiry.js  # Service selection handling
│   └── middle-nav.js       # Middle navigation functionality
│
├── 🖼️ Images
│   ├── logo.jpeg
│   ├── responsive/         # Responsive design screenshots
│   │   ├── Desktop about.jpeg
│   │   ├── Desktop contact.jpeg
│   │   ├── Desktop enquiry.jpeg
│   │   ├── Desktop homepage.jpeg
│   │   ├── Desktop portfolio.jpeg
│   │   ├── Desktop services.jpeg
│   │   ├── Mobile about.jpeg
│   │   ├── Mobile contact.jpeg
│   │   ├── Mobile enquirys.jpeg
│   │   ├── Mobile homepage.jpeg
│   │   ├── Mobile portfolio.jpeg
│   │   ├── Mobile services.jpeg
│   │   ├── Tablet about.jpeg
│   │   ├── Tablet contact.jpeg
│   │   ├── Tablet enquiry.jpeg
│   │   ├── Tablet homepage.jpeg
│   │   ├── Tablet portfolio.jpeg
│   │   └── Tablet services.jpeg
│   ├── Sitemaps.html
│   ├── Sitemaps_files/
│   └── WIreframes/
│
└── 📄 Documentation
    ├── README.md           # Project documentation
    └── docs/               # Documentation folder
        ├── TODO.md         # Development tasks
        ├── CHANGELOG.md    # Version history
        ├── website-screenshots.md # Screenshot documentation
        ├── website-structure-diagram.md # Structure diagrams
        ├── file-organization-plan.html # File organization plan
        ├── .gitignore      # Git ignore rules
        ├── robots.txt      # SEO robots file
        └── sitemap.xml     # XML sitemap for SEO
```

🗺️ Sitemap
flowchart TD
    A[TechFlow Solutions Website] --> B[index.html]
    A --> C[about.html]
    A --> D[services.html]
    A --> E[portfolio.html]
    A --> F[contact.html]
    A --> G[enquiry.html]

## 🔄 Changelog

### v3.0.0 – Part 3: Functionality & SEO Implementation (2025-11-03) ✅
- 🔍 **Comprehensive SEO Implementation**: Title tags, meta descriptions, meta keywords for all pages
- 🤖 **Robots.txt & Sitemap**: Search engine crawling instructions and XML sitemap with production URLs
- ⚡ **Enhanced JavaScript Functionality**: Interactive carousel, navigation highlighting, Google Forms integration
- 🗺️ **Google Maps Integration**: Embedded maps for office locations
- 📝 **Form Validation**: Client-side validation with real-time feedback and AJAX submission
- 🎯 **Service Selection**: Pre-populated enquiry forms from service pages
- 📱 **Touch & Keyboard Navigation**: Full accessibility support for interactive elements
- 🚀 **Performance Optimization**: Optimized script loading and error handling

### v2.0.0 – Part 2: Designing the Visuals (2025-09-29) ✅
- 🎨 CSS variables system (colors, typography, spacing, shadows)
- 📱 Advanced mobile-first responsive layouts
- 🍔 Mobile sidebar navigation (hamburger + overlay)
- ✨ Visual enhancements: hover, focus, animations, transitions
- ♿ Accessibility improvements (ARIA, WCAG AA)
- 🚀 Performance optimizations (lazy loading, responsive images)
- 🌐 Cross-browser compatibility testing
- 📚 Documentation updates

### v1.0.0 – Part 1: Website Structure and Foundation (2025-08-27) ✅
- 🏗️ Initial project setup & file structure
- 📄 Semantic HTML pages created
- 🎨 Modular CSS for layouts and page-specific styling
- ⚡ Basic JS for navigation, carousel, back-to-top button
- 🖼️ Assets (logo, service icons, wireframes, sitemap) added
- 📚 Documentation (README.md, TODO.md)

## 📚 References & Resources

### JavaScript References
- Mozilla Developer Network (MDN). (n.d.) *Document Object Model (DOM)*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 2023).
- Mozilla Developer Network (MDN). (n.d.) *Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API (Accessed: 2023).
- Mozilla Developer Network (MDN). (n.d.) *FormData*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/FormData (Accessed: 2023).
- Mozilla Developer Network (MDN). (n.d.) *URLSearchParams*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams (Accessed: 2023).
- Google. (n.d.) *Google Forms API*. Available at: https://developers.google.com/forms/api (Accessed: 2023).
- Google. (n.d.) *Google Maps Embed API*. Available at: https://developers.google.com/maps/documentation/embed (Accessed: 2023).
- Font Awesome. (n.d.) *Font Awesome Icons*. Available at: https://fontawesome.com/icons (Accessed: 2023).
- W3Schools. (n.d.) *JavaScript Slideshow*. Available at: https://www.w3schools.com/howto/howto_js_slideshow.asp (Accessed: 2023).

### General References
- Google Fonts. (n.d.) *Google Fonts*. Available at: https://fonts.google.com/ (Accessed: 2023).
- Unsplash. (n.d.) *Unsplash: Beautiful Free Images & Pictures*. Available at: https://unsplash.com/ (Accessed: 2023).
- W3Schools. (n.d.) *CSS Flexbox*. Available at: https://www.w3schools.com/css/css3_flexbox.asp (Accessed: 2023).
- Freepik. (n.d.) *Freepik - Free Vectors, Stock Photos & PSD Downloads*. Available at: https://freepik.com/ (Accessed: 2023).

### Content Sourcing
- **Public Domain / Creative Commons**: Images, icons, and fonts.
- **Original Content**: Company overview, services, and portfolio text.

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Local web server (optional, for full functionality)

### Running the Website
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For full functionality (forms, maps), serve via local server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx http-server
   ```

---

## 📝 License

This project is created for educational purposes as part of the WED5020 course at Varcity College Westville.

---

<div align="center">

**Made with ❤️ by Lubo Mbuyu**

*Student ID: ST10467547 | Course: WED5020*

</div>
