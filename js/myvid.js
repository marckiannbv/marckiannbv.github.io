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

