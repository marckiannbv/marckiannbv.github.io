# 🌐 Marc Kiann B. Villaganes - Online Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional journey as an Information Technology student and aspiring Software Engineer.

![Portfolio Preview](assets/portfolio-preview.png)

## 🚀 Live Demo

[View Live Portfolio](#) <!-- Add your live URL here -->

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections](#sections)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)
- [License](#license)

---

## 📖 About

This online portfolio serves as a comprehensive showcase of my work, skills, and experiences in the field of Information Technology. It provides potential employers, collaborators, and clients with an interactive view of my technical capabilities and professional growth.

**Key Highlights:**
- ✨ Modern, clean design
- 📱 Fully responsive layout
- 🌓 Dark/Light theme toggle
- 🎬 Video gallery with fullscreen support
- 📧 Working contact form
- 🎨 Smooth animations and transitions

---

## ✨ Features

### Theme System
- **Dark Mode** (default) and **Light Mode**
- Persistent theme preference using localStorage
- Smooth theme transition animations

### Interactive Elements
- **Animated Typing Effect** - Dynamic role display on hero section
- **Project Modals** - Detailed project information with click interaction
- **Smooth Scrolling** - Seamless navigation between sections
- **Active Navigation** - Highlights current section in navbar
- **Back to Top Button** - Quick return to top of page

### Video Gallery
- HTML5 video player with custom controls
- Fullscreen button (appears on hover)
- Double-click fullscreen support
- Responsive video containers
- Cross-browser compatible

### Contact Form
- Client-side validation
- Email format verification
- Required field checking
- Success/error status messages

### Downloadable Resume
- Professional PDF resume
- One-click download
- Comprehensive information including:
  - Education and GPA
  - Technical skills and proficiency
  - Professional experience
  - Key projects with descriptions
  - Core competencies
  - Contact information

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes
- Touch-friendly interface

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5.3.2** - Responsive grid system

### Libraries & Frameworks
- **Font Awesome 6.4.0** - Icon library
- **AOS 2.3.1** - Animate On Scroll library
- **Google Fonts** - Poppins & Inter typefaces

### Tools
- Git & GitHub - Version control
- VS Code - Code editor

---

## 📑 Sections

### 1. **Home**
Hero section with:
- Animated typing effect showing roles
- Professional introduction
- Call-to-action buttons
- Social media links
- Profile image with border animation

### 2. **About**
- Personal introduction and purpose
- Educational background
- Technical focus areas
- Skills showcase with progress bars (8 technologies)
- **Downloadable PDF Resume** - Professional resume in PDF format

### 3. **Portfolio**
Featured projects with interactive cards:
- **School Information System** - Student and faculty management platform
- **Interactive Portfolio Website** - This project!

Each project includes:
- Project image
- Description
- Technology stack
- Detailed modal with features and links

### 4. **Experience**
Timeline display featuring:
- **On-the-Job Training** at Commission on Elections - Bucay (2025-Present)
- **Student Developer** - College Projects (2022-2025)

### 5. **Gallery**
Mixed media gallery with:
- Professional photos
- Project screenshots
- Video demonstrations (2 videos)
- Fullscreen video support

### 6. **Contact**
- Contact information (Email, Phone, Location)
- Availability hours
- Social media links
- Contact form with validation

---

## 💻 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for testing)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/marckiannbv/portfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd portfolio
   ```

3. **Open in browser**
   - Simply open `index.html` in your browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. **View in browser**
   - Open `http://localhost:8000` in your browser

### Customization

To customize the portfolio for your own use:

1. **Update personal information** in `index.html`:
   - Name, title, bio
   - Contact details
   - Social media links

2. **Modify theme colors** in `styles.css`:
   ```css
   :root {
       --primary-color: #3b82f6;
       --secondary-color: #2563eb;
       /* ... more variables */
   }
   ```

3. **Add your projects** in `script.js`:
   ```javascript
   const projectsData = {
       'Your Project Name': {
           features: [...],
           tech: [...],
           github: '...',
           demo: '...'
       }
   };
   ```

4. **Replace assets**:
   - Add your photos/videos to `assets/` folder
   - Update image paths in HTML

---

## 📁 File Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js               # JavaScript functionality
├── README.md               # This file
└── assets/                 # Media files
    ├── profile_img.png     # Profile photo
    ├── project2.png        # School system screenshot
    ├── project4.png        # Portfolio screenshot
    ├── project-video_1.mp4 # Demo video 1
    ├── project-video_2.mp4 # Demo video 2
    ├── favicon.png         # Site favicon
    └── Marc_Kiann_Villaganes_Resume.pdf  # Downloadable PDF resume
```

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

**Mobile Browsers:**
- ✅ iOS Safari
- ✅ Chrome Mobile
- ✅ Samsung Internet

---

## 🎯 Key Features Breakdown

### Technical Skills Display
- Progress bars showing proficiency levels
- 8 core technologies: HTML5, CSS3, JavaScript, PHP, Python, Java, MySQL, Bootstrap
- Visual skill representation

### Project Showcase
- Interactive project cards
- Hover effects and animations
- Modal popups with detailed information
- Technology badges
- Feature lists
- GitHub and demo links

### Video Integration
- Native HTML5 video player
- Custom fullscreen functionality
- Responsive video containers
- Optimized for mobile viewing

---

## 🚀 Future Enhancements

- [x] Add downloadable PDF resume ✅ **COMPLETED**
- [ ] Implement blog section
- [ ] Add testimonials/recommendations
- [ ] Include certifications section
- [ ] Add more project case studies
- [ ] Implement contact form backend
- [ ] Add Google Analytics
- [ ] Add more interactive animations
- [ ] Create project filtering system
- [ ] Add loading animations

---

## 📧 Contact

**Marc Kiann B. Villaganes**

- 📧 Email: marckiann.villaganes@email.com
- 📱 Phone: +63 123 456 7890
- 📍 Location: Patoc, Bucay, Abra - Philippines
- 💼 LinkedIn: [Marc Kiann Villaganes](https://www.linkedin.com/in/marc-kiann-villaganes-986995366/)
- 🐙 GitHub: [@marckiannbv](https://github.com/marckiannbv/)
- 📘 Facebook: [marc.kiann](https://www.facebook.com/marc.kiann)
- 📷 Instagram: [@marc_kiann_villaganes](https://www.instagram.com/marc_kiann_villaganes/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Bootstrap** - Responsive framework
- **Font Awesome** - Icon library
- **AOS Library** - Scroll animations
- **Google Fonts** - Typography
- **Unsplash** - Stock images (if used)

---

## 📸 Screenshots

### Desktop View
![Desktop Home](assets/screenshots/desktop-home.png)
![Desktop Portfolio](assets/screenshots/desktop-portfolio.png)

### Mobile View
![Mobile Home](assets/screenshots/mobile-home.png)
![Mobile Menu](assets/screenshots/mobile-menu.png)

### Theme Toggle
![Dark Theme](assets/screenshots/dark-theme.png)
![Light Theme](assets/screenshots/light-theme.png)

---

## 💡 Tips for Using This Portfolio

1. **Keep it updated** - Regularly add new projects and skills
2. **Optimize images** - Compress images for faster loading
3. **Test responsiveness** - Check on different devices
4. **Update contact info** - Keep your contact details current
5. **Add analytics** - Track visitors to understand traffic
6. **SEO optimization** - Update meta tags for better visibility

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ by Marc Kiann B. Villaganes

**© 2025 Marc Kiann B. Villaganes. All Rights Reserved.**

</div>
