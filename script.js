/* ============================================================
   RAMESH PORTFOLIO — script.js
   Vanilla JavaScript — No Frameworks
   Features:
     1.  Hero entrance animations on page load
     2.  Navbar scroll shadow
     3.  Active nav-link highlight on scroll
     4.  Scroll reveal via IntersectionObserver
     5.  Animated progress bars (skills + habit)
     6.  Dark mode toggle (persists via localStorage)
     7.  Hamburger mobile menu
     8.  Smooth scroll fallback (JS, for older browsers)
     9.  Values grid staggered reveal
   ============================================================ */


/* ============================================================
   1. HERO ENTRANCE ANIMATIONS
   Trigger slide-left / slide-right after page load
   ============================================================ */
window.addEventListener('load', function () {
  // Small delay so CSS transition is ready to fire
  setTimeout(function () {
    document.querySelectorAll('.slide-left, .slide-right').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 120);
});


/* ============================================================
   2. NAVBAR — Add shadow + background on scroll
   ============================================================ */
(function initNavbarScroll() {
  var navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run once immediately
})();


/* ============================================================
   3. ACTIVE NAV-LINK HIGHLIGHT ON SCROLL
   Compares scroll position with each section's offset
   ============================================================ */
(function initActiveNavLink() {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');
  var NAV_HEIGHT = 80; // px — adjust if navbar height changes

  function updateActiveLink() {
    var currentId = '';

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - NAV_HEIGHT - 20;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentId) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // Initialise on load
})();


/* ============================================================
   4. SCROLL REVEAL — Intersection Observer
   Adds .visible class when element enters viewport
   ============================================================ */
(function initScrollReveal() {
  var revealElements = document.querySelectorAll('.reveal');

  // Observer callback
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop watching once visible
      }
    });
  }, {
    threshold  : 0.12,                   // 12 % of element visible
    rootMargin : '0px 0px -40px 0px'    // slightly early trigger
  });

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ============================================================
   5a. SKILL PROGRESS BAR ANIMATION
   Reads data-level attribute, animates width via CSS transition
   Fires when skill section scrolls into view
   ============================================================ */
(function initSkillBars() {
  var skillItems = document.querySelectorAll('.skill-item');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var item  = entry.target;
        var fill  = item.querySelector('.skill-fill');
        var level = item.getAttribute('data-level');

        if (fill && level) {
          // Short delay creates a staggered feel
          setTimeout(function () {
            fill.style.width = level + '%';
          }, 180);
        }

        observer.unobserve(item);
      }
    });
  }, { threshold: 0.3 });

  skillItems.forEach(function (item) {
    observer.observe(item);
  });
})();


/* ============================================================
   5b. HABIT PROGRESS BAR ANIMATION
   Same pattern, separate observer for the habit section bar
   ============================================================ */
(function initHabitBar() {
  var habitFill = document.querySelector('.habit-fill');
  if (!habitFill) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var level = habitFill.getAttribute('data-level') || 65;
        setTimeout(function () {
          habitFill.style.width = level + '%';
        }, 180);
        observer.unobserve(habitFill);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(habitFill);
})();


/* ============================================================
   6. DARK MODE TOGGLE
   Saves preference to localStorage so it persists across visits
   ============================================================ */
(function initDarkMode() {
  var toggleBtn  = document.getElementById('darkToggle');
  var toggleIcon = document.getElementById('toggleIcon');
  var html       = document.documentElement;
  var STORAGE_KEY = 'ramesh-portfolio-theme';

  /* Determine theme to show on first load */
  function getInitialTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    // Respect OS preference if no saved value
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /* Apply a theme to <html> and update icon */
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    if (theme === 'dark') {
      toggleIcon.classList.remove('fa-moon');
      toggleIcon.classList.add('fa-sun');
    } else {
      toggleIcon.classList.remove('fa-sun');
      toggleIcon.classList.add('fa-moon');
    }
  }

  /* Initialise */
  applyTheme(getInitialTheme());

  /* Toggle on button click */
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }
})();


/* ============================================================
   7. HAMBURGER MOBILE MENU
   Toggles .open class on nav-links list
   ============================================================ */
(function initHamburger() {
  var hamburger = document.getElementById('hamburger');
  var navLinks  = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  /* Toggle menu */
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  /* Close when a link is clicked (smooth scroll takes over) */
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  /* Close when clicking outside the menu */
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
    }
  });
})();


/* ============================================================
   8. SMOOTH SCROLL FALLBACK
   CSS scroll-behavior handles modern browsers.
   This JS fallback handles anchor clicks for older engines.
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var navHeight = (document.getElementById('navbar') || {}).offsetHeight || 70;
      var targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });
})();


/* ============================================================
   9. VALUES GRID — STAGGERED REVEAL
   Manually stagger each value card for a polished entrance
   ============================================================ */
(function initValuesReveal() {
  var valuesGrid = document.querySelector('.values-grid');
  if (!valuesGrid) return;

  var cards = valuesGrid.querySelectorAll('.value-card');

  /* Set initial hidden state */
  cards.forEach(function (card) {
    card.style.opacity   = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  /* Reveal with stagger when grid enters viewport */
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        cards.forEach(function (card, index) {
          setTimeout(function () {
            card.style.opacity   = '1';
            card.style.transform = 'translateY(0)';
          }, index * 80); // 80ms between each card
        });
        observer.unobserve(valuesGrid);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(valuesGrid);
})();


/* ============================================================
   10. CONTACT FORM — Client-side validation & submit handler
   ============================================================ */
(function initContactForm() {
  var form        = document.getElementById('contactForm');
  if (!form) return;

  var fields = {
    name   : { input: document.getElementById('contactName'),    error: document.getElementById('nameError'),    validate: function(v){ return v.trim().length >= 2; } },
    email  : { input: document.getElementById('contactEmail'),   error: document.getElementById('emailError'),   validate: function(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); } },
    subject: { input: document.getElementById('contactSubject'), error: document.getElementById('subjectError'), validate: function(v){ return v.trim().length >= 3; } },
    message: { input: document.getElementById('contactMessage'), error: document.getElementById('messageError'), validate: function(v){ return v.trim().length >= 10; } }
  };

  var successBanner = document.getElementById('formSuccess');

  /* Validate a single field — show/hide error */
  function validateField(key) {
    var f     = fields[key];
    var valid = f.validate(f.input.value);
    if (valid) {
      f.input.classList.remove('invalid');
      f.error.classList.remove('visible');
    } else {
      f.input.classList.add('invalid');
      f.error.classList.add('visible');
    }
    return valid;
  }

  /* Live validation on blur */
  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener('blur', function () {
      validateField(key);
    });
    /* Clear invalid state while typing */
    fields[key].input.addEventListener('input', function () {
      if (fields[key].input.classList.contains('invalid')) {
        validateField(key);
      }
    });
  });

  /* Form submit */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Validate all fields */
    var allValid = Object.keys(fields).reduce(function (acc, key) {
      return validateField(key) && acc;
    }, true);

    if (!allValid) return;

    /* Simulate sending — replace with real fetch/API call as needed */
    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled    = true;
    submitBtn.innerHTML   = '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

    setTimeout(function () {
      /* Reset form */
      form.reset();
      submitBtn.disabled  = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';

      /* Show success banner */
      successBanner.classList.add('visible');
      setTimeout(function () {
        successBanner.classList.remove('visible');
      }, 5000);
    }, 1800); // Simulated 1.8s network delay
  });
})();


/* ============================================================
   Visible in browser DevTools — adds a professional touch
   ============================================================ */
console.log(
  '%c Ramesh Portfolio %c Vanilla HTML · CSS · JS ',
  'background:#2563eb; color:#fff; padding:4px 10px; border-radius:4px 0 0 4px; font-weight:bold;',
  'background:#1f2937; color:#fff; padding:4px 10px; border-radius:0 4px 4px 0;'
);
