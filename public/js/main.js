// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Animate numbers on scroll
const animateValue = (element, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');

      // Animate stat numbers
      if (entry.target.classList.contains('hero-stats')) {
        const statNumbers = entry.target.querySelectorAll('.stat-number[data-target]');
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target'));
          animateValue(stat, 0, target, 2000);
        });
      }
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-stats, .portfolio-card, .timeline-item, .about-content').forEach(el => {
  observer.observe(el);
});

// Contact form handling - using Formspree for static hosting
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);

  try {
    // Using Formspree - replace YOUR_FORM_ID with actual Formspree form ID
    // Sign up at formspree.io to get your form endpoint
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      contactForm.style.display = 'none';
      formSuccess.classList.add('show');

      // Reset form after 5 seconds
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'block';
        formSuccess.classList.remove('show');
      }, 5000);
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message. Please try again or email us directly at info@masriventures.com');
  }
});

// Add fade-in animation styles
const style = document.createElement('style');
style.textContent = `
  .portfolio-card,
  .timeline-item,
  .about-content {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .portfolio-card.animate,
  .timeline-item.animate,
  .about-content.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .timeline-item:nth-child(2) { transition-delay: 0.1s; }
  .timeline-item:nth-child(3) { transition-delay: 0.2s; }
  .timeline-item:nth-child(4) { transition-delay: 0.3s; }

  .portfolio-card:nth-child(2) { transition-delay: 0.2s; }
`;
document.head.appendChild(style);

// Active navigation highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  const scrollPosition = window.pageYOffset + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
