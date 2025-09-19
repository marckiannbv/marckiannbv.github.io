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

