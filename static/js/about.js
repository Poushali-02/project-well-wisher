// about.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.about-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    const botCard = document.querySelector('.bot-card');
    const botFeatures = document.querySelectorAll('.bot-feature');
    
    if (botCard) {
        botCard.addEventListener('mousemove', (e) => {
            const x = e.clientX - botCard.getBoundingClientRect().left;
            const y = e.clientY - botCard.getBoundingClientRect().top;
            
            botFeatures.forEach(feature => {
                const dx = feature.getBoundingClientRect().left - x;
                const dy = feature.getBoundingClientRect().top - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = Math.sqrt(
                    Math.pow(botCard.offsetWidth, 2) + 
                    Math.pow(botCard.offsetHeight, 2)
                );
                
                const opacity = 1 - (distance / maxDistance) * 0.5;
                feature.style.transform = `translateY(${-5 * opacity}px)`;
                feature.style.boxShadow = `0 ${5 * opacity}px ${15 * opacity}px rgba(0, 0, 0, ${0.1 * opacity})`;
            });
        });
        
        botCard.addEventListener('mouseleave', () => {
            botFeatures.forEach(feature => {
                feature.style.transform = '';
                feature.style.boxShadow = '';
            });
        });
    }
});