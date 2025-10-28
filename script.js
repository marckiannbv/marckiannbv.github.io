// ====================================
// Initialize AOS (Animate On Scroll)
// ====================================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ====================================
// Theme Toggle Functionality
// ====================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', function() {
    let theme = html.getAttribute('data-theme');
    
    if (theme === 'dark') {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    } else {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('.theme-icon');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ====================================
// Typed Text Effect
// ====================================
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
];

const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
            cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Start the typing effect when the page loads
document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ====================================
// Navigation Menu Toggle (Mobile)
// ====================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ====================================
// Active Navigation Link on Scroll
// ====================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// ====================================
// Navbar Background on Scroll
// ====================================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ====================================
// Smooth Scrolling for Navigation Links
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// Back to Top Button
// ====================================
const backToTopButton = document.getElementById('backToTop');

function handleBackToTopButton() {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
}

window.addEventListener('scroll', handleBackToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ====================================
// Contact Form Handling
// ====================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
        showFormStatus('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormStatus('Please enter a valid email address.', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual backend endpoint)
    setTimeout(() => {
        // Success response
        showFormStatus('Thank you! Your message has been sent successfully. I will get back to you soon!', 'success');
        contactForm.reset();
        
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        
        // In a real implementation, you would send the data to a backend:
        /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                showFormStatus('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
            }
        } catch (error) {
            showFormStatus('Oops! Something went wrong. Please try again later.', 'error');
        } finally {
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
        }
        */
    }, 1500);
});

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// ====================================
// Portfolio Filter Functionality
// ====================================
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ====================================
// Gallery Tab Functionality
// ====================================
const galleryTabs = document.querySelectorAll('.gallery-tab');
const galleryContents = document.querySelectorAll('.gallery-content');

galleryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        galleryTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get target content
        const target = this.getAttribute('data-tab');
        
        // Hide all gallery contents
        galleryContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Show target content
        const targetContent = document.getElementById(target);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// ====================================
// Skills Progress Animation
// ====================================
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-progress') || bar.style.width;
        bar.style.width = '0';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
}

// Trigger animation when skills section is in view
const skillsSection = document.querySelector('.skills-container');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
}

// ====================================
// Print Resume Functionality
// ====================================
function printResume() {
    window.print();
}

// Add print button functionality if needed
const printButton = document.querySelector('.print-resume');
if (printButton) {
    printButton.addEventListener('click', printResume);
}

// ====================================
// Dynamic Year in Footer
// ====================================
const updateFooterYear = () => {
    const yearElements = document.querySelectorAll('.footer-bottom p');
    yearElements.forEach(element => {
        if (element.textContent.includes('2025')) {
            element.textContent = element.textContent.replace('2025', new Date().getFullYear());
        }
    });
};

updateFooterYear();

// ====================================
// Accessibility Improvements
// ====================================
// Add skip to content link functionality
const skipLink = document.querySelector('.skip-to-content');
if (skipLink) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#home');
        if (mainContent) {
            mainContent.tabIndex = -1;
            mainContent.focus();
        }
    });
}

// Add keyboard navigation for portfolio cards
const portfolioCardsForKeyboard = document.querySelectorAll('.portfolio-card');
portfolioCardsForKeyboard.forEach(card => {
    card.setAttribute('tabindex', '0');
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const link = card.querySelector('.project-link');
            if (link) link.click();
        }
    });
});

// ====================================
// Final Initialization
// ====================================
console.log('%c✅ Portfolio fully loaded and interactive!', 'color: #10b981; font-size: 16px; font-weight: bold;');

// ====================================
// Project Modal Functionality
// ====================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Project data
    const projectsData = {
        'School Information System': {
            features: [
                'Student enrollment and records management',
                'Grade computation and report cards generation',
                'Attendance tracking system with notifications',
                'Faculty and class scheduling management',
                'Parent portal for real-time grade viewing',
                'Automated notifications and announcements',
                'Multi-user role management (Admin, Teacher, Student, Parent)',
                'Comprehensive reporting and analytics dashboard'
            ],
            tech: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
            github: 'https://github.com/marckiannbv/school-information-system',
            demo: '#'
        },
        'Interactive Portfolio Website': {
            features: [
                'Fully responsive design for all devices',
                'Dark/Light theme toggle with localStorage persistence',
                'Smooth scroll animations using AOS library',
                'Interactive project modals with detailed information',
                'Contact form with client-side validation',
                'SEO optimized structure and metadata',
                'Video gallery with fullscreen support',
                'Cross-browser compatible design',
                'Accessible and user-friendly interface'
            ],
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            github: 'https://github.com/marckiannbv/portfolio',
            demo: '#'
        }
    };

    // Get modal elements
    const projectModal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalGithub = document.getElementById('modalGithub');
    const modalDemo = document.getElementById('modalDemo');

    // Get all portfolio cards
    const portfolioCardsModal = document.querySelectorAll('.portfolio-card');

    // Check if elements exist
    if (!projectModal || !portfolioCardsModal.length) {
        console.warn('Modal elements not found. Make sure modal HTML is present.');
        return;
    }

    // Add click event to each portfolio card
    portfolioCardsModal.forEach(card => {
        card.addEventListener('click', function() {
            // Get project data from card
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('.portfolio-content p').textContent;
            const image = card.querySelector('.portfolio-image img').src;
            const projectData = projectsData[title];
            
            if (projectData) {
                // Populate modal
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalImage.src = image;
                modalImage.alt = title;
                
                // Add technologies
                modalTech.innerHTML = '';
                projectData.tech.forEach(tech => {
                    const tag = document.createElement('span');
                    tag.className = 'project-modal-tech-tag';
                    tag.textContent = tech;
                    modalTech.appendChild(tag);
                });
                
                // Add features
                modalFeatures.innerHTML = '';
                projectData.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    modalFeatures.appendChild(li);
                });
                
                // Set links
                modalGithub.href = projectData.github;
                modalDemo.href = projectData.demo;
                
                // Show modal
                projectModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    function closeModal() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside
    if (projectModal) {
        projectModal.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
            closeModal();
        }
    });

    console.log('✅ Project modal functionality loaded!');
    
}); // End of DOMContentLoaded

// ====================================
// Gallery Video Fullscreen Functionality
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButtons = document.querySelectorAll('.fullscreen-btn');
    
    fullscreenButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const videoContainer = this.closest('.video-container');
            const video = videoContainer.querySelector('.gallery-video-player');
            
            if (video) {
                // Try to request fullscreen
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) { // Safari
                    video.webkitRequestFullscreen();
                } else if (video.mozRequestFullScreen) { // Firefox
                    video.mozRequestFullScreen();
                } else if (video.msRequestFullscreen) { // IE/Edge
                    video.msRequestFullscreen();
                }
                
                // Play the video when entering fullscreen
                video.play();
            }
        });
    });
    
    // Alternative: Click on video itself to go fullscreen
    const galleryVideos = document.querySelectorAll('.gallery-video-player');
    
    galleryVideos.forEach(video => {
        video.addEventListener('dblclick', function(e) {
            e.preventDefault();
            
            if (this.requestFullscreen) {
                this.requestFullscreen();
            } else if (this.webkitRequestFullscreen) {
                this.webkitRequestFullscreen();
            } else if (this.mozRequestFullScreen) {
                this.mozRequestFullScreen();
            } else if (this.msRequestFullscreen) {
                this.msRequestFullscreen();
            }
        });
    });
    
    console.log('✅ Gallery video fullscreen functionality loaded!');
});
