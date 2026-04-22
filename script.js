/**
 * MD ADVOCACIA RJ - DARK GOLD LEGAL
 * JavaScript Principal - Vanilla ES6
 */

(function() {
    'use strict';

    // ============================================
    // UTILITIES
    // ============================================
    
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const prefersReducedMotion = () => {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    };

    // ============================================
    // NAVBAR
    // ============================================
    
    const initNavbar = () => {
        const navbar = document.getElementById('navbar');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (!navbar) return;

        // Scroll handler for navbar background
        const handleScroll = () => {
            if (window.scrollY > 80) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', debounce(handleScroll, 10), { passive: true });

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
                navToggle.setAttribute('aria-expanded', !isExpanded);
                navMenu.classList.toggle('active');
                
                // Animate hamburger
                const lines = navToggle.querySelectorAll('.hamburger-line');
                if (!isExpanded) {
                    lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    lines[1].style.opacity = '0';
                    lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
                } else {
                    lines[0].style.transform = '';
                    lines[1].style.opacity = '';
                    lines[2].style.transform = '';
                }
            });

            // Close menu on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('active');
                    const lines = navToggle.querySelectorAll('.hamburger-line');
                    lines[0].style.transform = '';
                    lines[1].style.opacity = '';
                    lines[2].style.transform = '';
                });
            });
        }
    };

    // ============================================
    // ACCORDION (Services & FAQ)
    // ============================================
    
    const initAccordion = () => {
        const accordions = document.querySelectorAll('.accordion-container, .faq-container');
        
        accordions.forEach(container => {
            const triggers = container.querySelectorAll('.accordion-trigger, .faq-trigger');
            
            triggers.forEach(trigger => {
                trigger.addEventListener('click', () => {
                    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
                    const panelId = trigger.getAttribute('aria-controls');
                    const panel = document.getElementById(panelId);
                    
                    // Close all other items in the same accordion (optional - for single-open behavior)
                    // Uncomment below for single-open accordion
                    /*
                    triggers.forEach(otherTrigger => {
                        if (otherTrigger !== trigger) {
                            otherTrigger.setAttribute('aria-expanded', 'false');
                            const otherPanelId = otherTrigger.getAttribute('aria-controls');
                            const otherPanel = document.getElementById(otherPanelId);
                            if (otherPanel) {
                                otherPanel.hidden = true;
                            }
                        }
                    });
                    */
                    
                    // Toggle current item
                    trigger.setAttribute('aria-expanded', !isExpanded);
                    if (panel) {
                        panel.hidden = isExpanded;
                    }
                });
            });
        });
    };

    // ============================================
    // TESTIMONIALS CAROUSEL
    // ============================================
    
    const initCarousel = () => {
        const carousel = document.querySelector('.testimonials-carousel');
        if (!carousel) return;

        const cards = carousel.querySelectorAll('.testimonial-card');
        const dots = carousel.querySelectorAll('.carousel-dot');
        
        if (cards.length === 0) return;

        let currentIndex = 0;
        let autoplayInterval;
        const autoplayDelay = 4000;

        const showSlide = (index) => {
            // Update cards
            cards.forEach((card, i) => {
                card.classList.toggle('active', i === index);
            });

            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            currentIndex = index;
        };

        const nextSlide = () => {
            const nextIndex = (currentIndex + 1) % cards.length;
            showSlide(nextIndex);
        };

        const startAutoplay = () => {
            autoplayInterval = setInterval(nextSlide, autoplayDelay);
        };

        const stopAutoplay = () => {
            clearInterval(autoplayInterval);
        };

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                stopAutoplay();
                showSlide(index);
                startAutoplay();
            });
        });

        // Pause on hover
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);

        // Start autoplay
        startAutoplay();
    };

    // ============================================
    // GALLERY SLIDER
    // ============================================
    
    const initGallerySlider = () => {
        const slider = document.querySelector('.gallery-slider');
        const prevBtn = document.querySelector('.slider-btn.prev');
        const nextBtn = document.querySelector('.slider-btn.next');
        
        if (!slider || !prevBtn || !nextBtn) return;

        const getScrollAmount = () => {
            const firstSlide = slider.querySelector('.gallery-slide');
            return firstSlide ? firstSlide.offsetWidth + 32 : 400; // card width + gap
        };

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });

        // Update active slide on scroll
        const updateActiveSlide = () => {
            const slides = slider.querySelectorAll('.gallery-slide');
            const sliderCenter = slider.scrollLeft + (slider.offsetWidth / 2);

            slides.forEach(slide => {
                const slideStart = slide.offsetLeft;
                const slideEnd = slideStart + slide.offsetWidth;

                if (sliderCenter >= slideStart && sliderCenter <= slideEnd) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        };

        slider.addEventListener('scroll', debounce(updateActiveSlide, 50));
        
        // Initial check
        setTimeout(updateActiveSlide, 100);
    };

    // ============================================
    // ANIMATED COUNTERS
    // ============================================
    
    const initCounters = () => {
        const counters = document.querySelectorAll('.counter-number[data-count]');
        
        if (counters.length === 0) return;

        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const duration = 1800;
            const startTime = performance.now();
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease-out function
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);
                
                counter.textContent = current;
                
                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            requestAnimationFrame(updateCounter);
        };

        // Use IntersectionObserver to trigger counters when visible
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if (!counter.classList.contains('counted')) {
                        counter.classList.add('counted');
                        if (!prefersReducedMotion()) {
                            animateCounter(counter);
                        } else {
                            counter.textContent = counter.getAttribute('data-count');
                        }
                    }
                }
            });
        }, observerOptions);

        counters.forEach(counter => observer.observe(counter));
    };

    // ============================================
    // SCROLL REVEAL ANIMATIONS
    // ============================================
    
    const initScrollReveal = () => {
        if (prefersReducedMotion()) return;

        const revealElements = document.querySelectorAll('.reveal, .reveal-children');
        
        if (revealElements.length === 0) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => observer.observe(el));
    };

    // ============================================
    // GOLD LINE ANIMATION
    // ============================================
    
    const initGoldLine = () => {
        const goldLine = document.querySelector('.quote-gold-line');
        if (!goldLine) return;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        observer.observe(goldLine);
    };

    // ============================================
    // FORM VALIDATION
    // ============================================
    
    const initFormValidation = () => {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const inputs = form.querySelectorAll('input, select, textarea');
        const submitBtn = form.querySelector('.form-submit');
        const successMessage = document.getElementById('form-success');

        // Validation rules
        const validators = {
            name: (value) => {
                if (!value.trim()) return 'Nome é obrigatório';
                if (value.trim().length < 3) return 'Nome deve ter pelo menos 3 caracteres';
                return '';
            },
            phone: (value) => {
                if (!value.trim()) return 'Telefone é obrigatório';
                const phoneRegex = /^[\d\s\-\(\)\+]{10,20}$/;
                if (!phoneRegex.test(value.replace(/\s/g, ''))) return 'Telefone inválido';
                return '';
            },
            email: (value) => {
                if (!value.trim()) return 'E-mail é obrigatório';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return 'E-mail inválido';
                return '';
            },
            area: (value) => {
                if (!value) return 'Selecione uma área de interesse';
                return '';
            }
        };

        // Validate single field
        const validateField = (field) => {
            const name = field.name;
            const value = field.value;
            const errorEl = field.parentElement.querySelector('.form-error');
            
            if (validators[name]) {
                const error = validators[name](value);
                
                if (error) {
                    field.classList.add('error');
                    if (errorEl) errorEl.textContent = error;
                    return false;
                } else {
                    field.classList.remove('error');
                    if (errorEl) errorEl.textContent = '';
                    return true;
                }
            }
            
            return true;
        };

        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', () => validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    validateField(input);
                }
            });
        });

        // Phone mask
        const phoneInput = form.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                
                if (value.length > 10) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                } else if (value.length > 6) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
                } else if (value.length > 2) {
                    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                }
                
                e.target.value = value;
            });
        }

        // Form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate all fields
            let isValid = true;
            inputs.forEach(input => {
                if (input.hasAttribute('required') || validators[input.name]) {
                    if (!validateField(input)) {
                        isValid = false;
                    }
                }
            });

            if (!isValid) return;

            // Show loading state
            submitBtn.disabled = true;

            // Simulate form submission (replace with actual API call)
            try {
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Show success message
                form.hidden = true;
                successMessage.hidden = false;
                
                // Reset form
                form.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            } finally {
                submitBtn.disabled = false;
            }
        });
    };

    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
                    });
                }
            });
        });
    };

    // ============================================
    // LAZY LOADING IMAGES
    // ============================================
    
    const initLazyLoading = () => {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        if ('loading' in HTMLImageElement.prototype) {
            // Browser supports native lazy loading
            return;
        }

        // Fallback for browsers without native lazy loading
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.removeAttribute('loading');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    };

    // ============================================
    // KEYBOARD NAVIGATION
    // ============================================
    
    const initKeyboardNavigation = () => {
        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const navMenu = document.getElementById('nav-menu');
                const navToggle = document.querySelector('.nav-toggle');
                
                if (navMenu && navMenu.classList.contains('active')) {
                    navToggle.click();
                }
            }
        });
    };

    // ============================================
    // PERFORMANCE: WILL-CHANGE OPTIMIZATION
    // ============================================
    
    const initPerformanceOptimizations = () => {
        // Add will-change to animated elements only when needed
        const animatedElements = document.querySelectorAll('.hero-particle, .marquee-track, .quote-decoration');
        
        animatedElements.forEach(el => {
            el.style.willChange = 'transform';
        });

        // Clean up will-change after animations
        setTimeout(() => {
            animatedElements.forEach(el => {
                el.style.willChange = 'auto';
            });
        }, 5000);
    };

    // ============================================
    // INITIALIZATION
    // ============================================
    
    const init = () => {
        initNavbar();
        initAccordion();
        initCarousel();
        initGallerySlider();
        initCounters();
        initScrollReveal();
        initGoldLine();
        initFormValidation();
        initSmoothScroll();
        initLazyLoading();
        initKeyboardNavigation();
        initPerformanceOptimizations();
    };

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-initialize on page visibility change (for carousel)
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            initCarousel();
        }
    });

})();
