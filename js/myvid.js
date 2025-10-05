// Create floating particles
    function createParticles() {
        const particlesContainer = document.getElementById('particles');

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
                
            // Random properties
            const size = Math.random() * 4 + 2;
            const left = Math.random() * 100;
            const animationDuration = Math.random() * 10 + 10;
            const delay = Math.random() * 15;
                
                particle.style.cssText = `
                    width: ${size}px;
                    height: ${size}px;
                    left: ${left}%;
                    animation-duration: ${animationDuration}s;
                    animation-delay: ${delay}s;
                `;
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize particles when page loads
        window.addEventListener('load', createParticles);

        // Add scroll effect to hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-section');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
    });

// Navigation
    fetch("nav.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;

        // Optional: highlight active page
        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll("#navbar a").forEach(link => {
            if(link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    });


//video & slideshow
    const video = document.getElementById("background-video");
    const btn = document.getElementById("pause-button");
    let slideIndex = 1;

    function toggleVideo() {
        if (video.paused) {
            video.play();
            btn.textContent = "Pause";
        } else {
            video.pause();
            btn.textContent = "Play";
        }
    }

    function showSlide(n) {
        const slides = document.getElementsByClassName("slide");

        if (n > slides.length) { slideIndex = 1; }
            if (n < 1) { slideIndex = slides.length; }
            
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active");
            }
            
            slides[slideIndex - 1].classList.add("active");
    }

    // Auto slideshow
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 4000);

// Gallery
    const galleryWrapper = document.getElementById('galleryWrapper');
    const customScrollbar = document.getElementById('customScrollbar');
    const scrollbarThumb = document.getElementById('scrollbarThumb');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    // Horizontal scroll functionality
    function scrollGallery(direction) {
        const scrollAmount = 370; // Width of one item plus gap
        galleryWrapper.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }

    // Update custom scrollbar
    function updateScrollbar() {
        const scrollRatio = galleryWrapper.scrollLeft / (galleryWrapper.scrollWidth - galleryWrapper.clientWidth);
        const thumbWidth = (galleryWrapper.clientWidth / galleryWrapper.scrollWidth) * 100;
        const thumbLeft = scrollRatio * (100 - thumbWidth);
        
        scrollbarThumb.style.width = `${Math.max(thumbWidth, 10)}%`;
        scrollbarThumb.style.left = `${thumbLeft}%`;
    }

    // Custom scrollbar click handling
    customScrollbar.addEventListener('click', (e) => {
        const rect = customScrollbar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickRatio = clickX / rect.width;
        const scrollTarget = clickRatio * (galleryWrapper.scrollWidth - galleryWrapper.clientWidth);
        
        galleryWrapper.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
        });
    });

        // Listen to scroll events
        galleryWrapper.addEventListener('scroll', updateScrollbar);

        // Lightbox functionality
        galleryImages.forEach(img => {
            img.addEventListener('click', (e) => {
                e.preventDefault();
                lightboxImg.src = img.src;
                lightbox.style.display = 'flex';
                setTimeout(() => {
                    lightbox.style.opacity = '1';
                }, 10);
            });
        });

        // Close lightbox
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.style.display = 'none';
                }, 300);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.style.display === 'flex') {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    lightbox.style.display = 'none';
                }, 300);
            }
            
            // Arrow key navigation for gallery
            if (e.key === 'ArrowLeft') {
                scrollGallery(-1);
            } else if (e.key === 'ArrowRight') {
                scrollGallery(1);
            }
        });

        // Initialize scrollbar on load
        window.addEventListener('load', updateScrollbar);
        window.addEventListener('resize', updateScrollbar);

        // Smooth scroll behavior for mouse wheel
        galleryWrapper.addEventListener('wheel', (e) => {
            e.preventDefault();
            galleryWrapper.scrollBy({
                left: e.deltaY * 2,
                behavior: 'smooth'
            });
        });

    // Animate skill progress bars on scroll
    const skillProgresses = document.querySelectorAll('.skill-progress');

    const observeSkills = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.style.width;
                progress.style.width = '0%';
                setTimeout(() => {
                    progress.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    skillProgresses.forEach(skill => {
        observeSkills.observe(skill);
    });

    // Download functionality (placeholder)
    document.getElementById('downloadBtn').addEventListener('click', () => {
        // In a real implementation, this would download a PDF
        alert('Resume download feature - would download PDF in real implementation');
    });

    // Add parallax effect to floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.2 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Add entrance animations to sections
    const sections = document.querySelectorAll('.section');
    const observeSections = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observeSections.observe(section);
    });
