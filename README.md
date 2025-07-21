# ☕ Coffee Hub - Modern Coffee Shop Website

A beautiful, responsive coffee shop website built with HTML, CSS, and JavaScript featuring a modern design, dark mode toggle, and interactive elements.

## 🌟 Features

### 🎨 Design & User Experience

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Mode Toggle**: Persistent dark/light mode with localStorage support
- **Modern UI**: Clean, professional design with warm coffee-themed colors
- **Glass Morphism Effects**: Modern backdrop-filter effects throughout the site
- **Smooth Animations**: CSS transitions and hover effects for enhanced user interaction

### 📱 Interactive Elements

- **Interactive Menu**: Clickable menu items that open detailed modal popups
- **Image Gallery**: Hover effects and overlay information on gallery images
- **Contact Form**: Functional contact form for customer inquiries
- **Navigation**: Smooth scrolling navigation with fixed header

### 🏪 Business Features

- **Hero Section**: Eye-catching landing area with call-to-action
- **About Us**: Company story, specialties, and value propositions
- **Services**: Comprehensive list of offerings (coffee, pastries, catering, etc.)
- **Menu**: Featured coffee items with prices and descriptions
- **Customer Reviews**: Testimonials section with star ratings
- **Gallery**: Visual showcase of the coffee shop atmosphere
- **Business Hours**: Operating hours and location information
- **Special Offers**: Promotional banner for current deals

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs as static files

### Installation & Setup

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **That's it!** The website will load and be fully functional

### File Structure

```
coffee-website/
├── img/                    # Image assets
│   ├── cappuccino.png     # Cappuccino menu item image
│   ├── espresso.png       # Espresso menu item image
│   ├── latte.png          # Latte menu item image
│   └── espresso-coffee-beans-bg.avif  # Background image
├── index.html             # Main HTML file
├── styles.css             # CSS styles and responsive design
├── script.js              # JavaScript functionality
└── README.md             # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**:
  - Flexbox and CSS Grid for layout
  - CSS Variables for theming
  - Backdrop-filter for glass effects
  - Media queries for responsive design
  - CSS animations and transitions
- **JavaScript**:
  - Dark mode functionality
  - Modal system for menu items
  - Local storage for user preferences
- **Google Fonts**: Playfair Display and Poppins for typography

## 🎨 Color Scheme

### Light Mode

- **Primary Background**: `#f5ebe0` (Warm cream)
- **Text Color**: `#4b3832` (Dark brown)
- **Accent Color**: `#da9b4a` (Golden yellow)
- **Secondary**: `#b68973` (Light brown)

### Dark Mode

- **Primary Background**: `#341504` (Dark brown)
- **Text Color**: `#e3d1c8` (Light cream)
- **Accent Color**: `#f4c095` (Light golden)
- **Secondary**: `#572a11` (Medium brown)

## 📱 Responsive Breakpoints

- **Mobile**: `< 451px`
- **Small Mobile/Tablet**: `451px - 685px`
- **Tablet**: `685px - 880px`
- **Desktop**: `> 880px`

## ⚙️ Features Deep Dive

### Dark Mode System

- Toggle button in navigation bar
- Persistent across browser sessions using localStorage
- Smooth transitions between themes
- Comprehensive dark mode styling for all components

### Interactive Menu System

- Click any menu item to view detailed information
- Modal popup with enlarged image, description, and pricing
- "Add to Cart" button (ready for e-commerce integration)
- Smooth animations and backdrop blur effects

### Contact Form

- Responsive contact form with validation
- Fields for name, email, and message
- Professional styling consistent with site design

## 🌐 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact Information

**Coffee Hub**

- 📍 Address: 123 Coffee Street, Downtown District, City, State 12345
- 📞 Phone: (555) 123-BREW
- 📧 Email: hello@coffeehub.com

## 🕒 Business Hours

- **Monday - Friday**: 6:00 AM - 8:00 PM
- **Saturday**: 7:00 AM - 9:00 PM
- **Sunday**: 8:00 AM - 7:00 PM

## 🔧 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css` to customize the color scheme:

```css
:root {
  --primary-bg: #f5ebe0;
  --text-color: #4b3832;
  --accent-color: #da9b4a;
}
```

### Adding Menu Items

1. Add new images to the `img/` folder
2. Create new menu items in the HTML structure
3. Update the modal functionality in `script.js`

### Modifying Content

- Update business information in the "About Us" section
- Change contact details in the footer and contact section
- Modify business hours in the hours section

## 🚀 Deployment
## 🎮 Live Demo

Check out the live demo of Coffee Hub: [View Demo](https://coffee-website-ivory-three.vercel.app/)

### Demo Features

- Browse our full menu with prices
- Toggle between light and dark mode
- View our image gallery
- Check business hours and location
- Test the contact form functionality
- Experience responsive design across devices

### GitHub Pages

1. Upload files to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Access your site at `https://username.github.io/repository-name`

### Other Hosting Platforms

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Traditional Web Hosting**: Upload files via FTP

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

_Made with ☕ and ❤️ for coffee lovers everywhere_
