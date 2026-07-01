// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ZEUP WEBSITE - MAIN SCRIPT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.getElementById('navbarMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove('active');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll to contact section
function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.ecosystem-card, .value-card, .problem-item, .timeline-phase, .metric-card, .testimonial-card, .dashboard-mock, .faq-item').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Contact form: embedded directly as a Google Forms iframe (see index.html
// .gform-embed-wrapper) — Google handles validation and submission natively,
// no JS needed here. A hand-built form can't POST to Google Forms reliably:
// each submission requires a fresh per-pageload anti-abuse token generated
// by Google's own rendered page, which a static site can't reproduce.

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add stagger animation for items
function staggerElements(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * delay}ms`;
    });
}

// Apply stagger to various elements
staggerElements('.stat', 100);
staggerElements('.ecosystem-card', 150);
staggerElements('.problem-item', 100);
staggerElements('.value-card', 100);

// Number counter animation
function animateCounter(element, target, duration = 1000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stat numbers for animation
const statNumbers = document.querySelectorAll('.stat-number');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';

            // Extract the number from text
            const text = entry.target.textContent;
            const numberMatch = text.match(/\d+/);
            if (numberMatch) {
                const number = parseInt(numberMatch[0]);
                animateCounter(entry.target, number);
            }
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statObserver.observe(stat);
});

// Animate progress bars
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const width = entry.target.style.width;
                entry.target.style.width = '0';

                setTimeout(() => {
                    entry.target.style.width = width;
                    entry.target.style.transition = 'width 0.8s ease-out';
                }, 100);
            }
        });
    }, { threshold: 0.3 });

    progressFills.forEach(fill => {
        progressObserver.observe(fill);
    });
}

animateProgressBars();

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    }
});

// (Auto-focus on the contact form was removed: it scrolled the page to the
//  form on load. The landing page must open at the hero.)

// Keyboard navigation for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            btn.click();
        }
    });
});

// Print current year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
}

// Dark mode preference detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Dark mode is already applied via CSS
    console.log('Dark mode detected');
}

// Accessibility: Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Performance: Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize tooltips if needed
function initTooltips() {
    document.querySelectorAll('[data-tooltip]').forEach(el => {
        el.addEventListener('mouseenter', function() {
            const tooltip = this.getAttribute('data-tooltip');
            // Create and show tooltip
            console.log('Tooltip:', tooltip);
        });
    });
}

initTooltips();

// Educación: functional category filter for the product library
(function () {
    const filterBar = document.getElementById('courseFilters');
    const grid = document.getElementById('courseGrid');
    if (!filterBar || !grid) return;

    const chips = filterBar.querySelectorAll('.filter-chip');
    const cards = grid.querySelectorAll('[data-category]');

    filterBar.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const filter = chip.dataset.filter;
        cards.forEach(card => {
            const match = filter === 'todos' || card.dataset.category === filter;
            card.style.display = match ? '' : 'none';
        });
    });
})();

// Holographic cursor-follow glow (matches Claude Design backdrop feel)
(function () {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return; // skip on touch
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    window.addEventListener('mousemove', function (e) {
        glow.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    }, { passive: true });
})();

console.log('ZEUP Website loaded successfully');
