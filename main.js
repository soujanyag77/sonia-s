document.addEventListener('DOMContentLoaded', () => {
    // --- STICKY NAV ON SCROLL ---
    const header = document.querySelector('.header');
    const scrollThreshold = 50;

    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // --- MOBILE HAMBURGER MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // --- ANIMATIONS ON SCROLL (INTERSECTION OBSERVER) ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window && animatedElements.length > 0) {
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    // If it contains a counting stat, trigger it
                    if (entry.target.classList.contains('stat-card')) {
                        animateCounter(entry.target.querySelector('.stat-number'));
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(el => animationObserver.observe(el));
    } else {
        // Fallback for older browsers
        animatedElements.forEach(el => el.classList.add('appear'));
    }

    // --- STATS COUNTER ANIMATION ---
    function animateCounter(counterEl) {
        if (!counterEl) return;
        const targetStr = counterEl.getAttribute('data-target');
        if (targetStr.includes(':')) {
            counterEl.textContent = targetStr;
            return;
        }
        const isPercent = targetStr.includes('%');
        const isPlus = targetStr.includes('+');
        const target = parseInt(targetStr.replace(/[^0-9]/g, ''), 10);
        
        let count = 0;
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / target), 15);
        
        const timer = setInterval(() => {
            count += Math.ceil(target / (duration / stepTime));
            if (count >= target) {
                count = target;
                clearInterval(timer);
            }
            counterEl.textContent = count + (isPercent ? '%' : '') + (isPlus ? '+' : '');
        }, stepTime);
    }

    // --- TESTIMONIAL SLIDER ---
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        };

        const nextSlide = () => {
            let next = currentSlide + 1;
            if (next >= slides.length) next = 0;
            showSlide(next);
        };

        const startAutoplay = () => {
            slideInterval = setInterval(nextSlide, 6000); // Change testimonial every 6s
        };

        const stopAutoplay = () => {
            clearInterval(slideInterval);
        };

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                showSlide(idx);
                stopAutoplay();
                startAutoplay();
            });
        });

        // Initialize Slider
        showSlide(0);
        startAutoplay();
    }

    // --- ACADEMICS TABS SYSTEM ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0) {
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.getAttribute('data-tab');
                
                tabButtons.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                btn.classList.add('active');
                const targetPane = document.getElementById(targetTab);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // --- FORM VALIDATION & MODAL FEEDBACK ---
    const forms = document.querySelectorAll('form');
    const modalOverlay = document.getElementById('success-modal');
    const modalClose = document.getElementById('modal-close');

    if (forms.length > 0) {
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Perform validation check
                let isValid = true;
                const requiredInputs = form.querySelectorAll('[required]');
                
                requiredInputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.style.borderColor = '#ef4444';
                        input.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
                    } else {
                        input.style.borderColor = '';
                        input.style.boxShadow = '';
                    }
                });

                if (isValid) {
                    // Show success modal
                    if (modalOverlay) {
                        modalOverlay.classList.add('active');
                    } else {
                        const lang = localStorage.getItem('kv-lang') || 'en';
                        const msg = (typeof KV_TRANSLATIONS !== 'undefined' && KV_TRANSLATIONS[lang])
                            ? KV_TRANSLATIONS[lang]['alert.thanks']
                            : 'Thank you! Your submission has been received.';
                        alert(msg);
                    }
                    form.reset();
                }
            });
        });
    }

    if (modalClose && modalOverlay) {
        modalClose.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
        
        // Close modal if clicked outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });
    }
});
