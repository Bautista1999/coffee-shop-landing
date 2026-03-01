// Coffee Shop Landing Page - Main Script

document.addEventListener('DOMContentLoaded', function() {
    // Prevent horizontal scrolling
    preventHorizontalScroll();

    // Smooth scroll behavior for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA Button click handler
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const menuSection = document.querySelector('#menu');
            if (menuSection) {
                menuSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu items for animation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Handle responsive viewport adjustments
    handleResponsiveViewport();
    window.addEventListener('resize', handleResponsiveViewport);
});

/**
 * Prevent horizontal scrolling on mobile devices
 */
function preventHorizontalScroll() {
    // Ensure body and html don't exceed viewport width
    document.documentElement.style.maxWidth = '100vw';
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';

    // Disable horizontal scroll on touch devices
    document.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: true });
}

/**
 * Handle responsive viewport adjustments
 */
function handleResponsiveViewport() {
    const width = window.innerWidth;
    
    // Log viewport width in development (for testing)
    // console.log('Viewport width: ' + width);

    // Adjust body overflow
    if (width <= 480) {
        document.body.style.fontSize = '14px';
    } else if (width <= 768) {
        document.body.style.fontSize = '15px';
    } else {
        document.body.style.fontSize = '16px';
    }
}

/**
 * Handle form submission (for contact form)
 */
function handleFormSubmission(event) {
    if (event.target.name === 'contactForm') {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        
        // Log form data (in production, send to backend)
        console.log('Form submitted with data:', data);
        
        // Show success message
        alert('Thank you for your message! We will get back to you within 24 hours.');
        event.target.reset();
    }
}

// Attach form submission handler
document.addEventListener('submit', handleFormSubmission);
