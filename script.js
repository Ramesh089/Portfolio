/* ============================================================
   RAMESH PORTFOLIO — script.js
   Vanilla JavaScript — No Frameworks
   Features:
     1.  Hero entrance animations (slide-left / slide-right)
     2.  Navbar scroll shadow
     3.  Active nav-link highlight on scroll
     4.  Scroll reveal via IntersectionObserver
     5.  Skill tags staggered reveal
     6.  Values grid staggered reveal
     7.  Projects mini-cards staggered reveal
     8.  Certificates grid staggered reveal
     9.  Dark mode toggle (localStorage)
     10. Hamburger mobile menu
     11. Smooth scroll fallback
     12. Contact form validation & submit
   ============================================================ */

/* ============================================================
   1. HERO ENTRANCE — trigger slide animations after load
   ============================================================ */
window.addEventListener("load", function () {
  setTimeout(function () {
    document
      .querySelectorAll(".slide-left, .slide-right")
      .forEach(function (el) {
        el.classList.add("visible");
      });
  }, 120);
});

/* ============================================================
   2. NAVBAR — shadow on scroll
   ============================================================ */
(function initNavbarScroll() {
  var navbar = document.getElementById("navbar");
  function handleScroll() {
    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
})();

/* ============================================================
   3. ACTIVE NAV-LINK on scroll
   ============================================================ */
(function initActiveNavLink() {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav-link");
  var NAV_HEIGHT = 80;

  function updateActiveLink() {
    var currentId = "";
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - NAV_HEIGHT - 20;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute("id");
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentId) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
})();

/* ============================================================
   4. SCROLL REVEAL — generic .reveal elements
   ============================================================ */
(function initScrollReveal() {
  var revealElements = document.querySelectorAll(".reveal");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ============================================================
   5. SKILL TAGS — staggered reveal when column enters view
   ============================================================ */
(function initSkillTagsReveal() {
  var cols = document.querySelectorAll(".skill-tag-col");

  cols.forEach(function (col) {
    var tags = col.querySelectorAll(".skill-tag");

    /* Set initial state */
    tags.forEach(function (tag) {
      tag.style.opacity = "0";
      tag.style.transform = "translateY(16px)";
      tag.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            tags.forEach(function (tag, index) {
              setTimeout(function () {
                tag.style.opacity = "1";
                tag.style.transform = "translateY(0)";
              }, index * 70);
            });
            observer.unobserve(col);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(col);
  });
})();

/* ============================================================
   6. VALUES GRID — staggered reveal
   ============================================================ */
(function initValuesReveal() {
  var valuesGrid = document.querySelector(".values-grid");
  if (!valuesGrid) return;
  var cards = valuesGrid.querySelectorAll(".value-card");

  cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(24px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          cards.forEach(function (card, index) {
            setTimeout(function () {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 80);
          });
          observer.unobserve(valuesGrid);
        }
      });
    },
    { threshold: 0.1 },
  );

  observer.observe(valuesGrid);
})();

/* ============================================================
   7. PROJECTS MINI-CARDS — staggered reveal
   ============================================================ */
(function initProjectsReveal() {
  var grid = document.querySelector(".projects-mini-grid");
  if (!grid) return;
  var cards = grid.querySelectorAll(".proj-mini-card");

  cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(24px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          cards.forEach(function (card, index) {
            setTimeout(function () {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 80);
          });
          observer.unobserve(grid);
        }
      });
    },
    { threshold: 0.08 },
  );

  observer.observe(grid);
})();

/* ============================================================
   8. CERTIFICATES GRID — staggered reveal
   ============================================================ */
(function initCertReveal() {
  var certGrid = document.querySelector(".cert-grid");
  if (!certGrid) return;
  var cards = certGrid.querySelectorAll(".cert-card");

  cards.forEach(function (card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(28px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          cards.forEach(function (card, index) {
            setTimeout(function () {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, index * 90);
          });
          observer.unobserve(certGrid);
        }
      });
    },
    { threshold: 0.08 },
  );

  observer.observe(certGrid);
})();

/* ============================================================
   9. DARK MODE TOGGLE — persists via localStorage
   ============================================================ */
(function initDarkMode() {
  var toggleBtn = document.getElementById("darkToggle");
  var toggleIcon = document.getElementById("toggleIcon");
  var html = document.documentElement;
  var STORAGE_KEY = "ramesh-portfolio-theme";

  function getInitialTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (theme === "dark") {
      toggleIcon.classList.remove("fa-moon");
      toggleIcon.classList.add("fa-sun");
    } else {
      toggleIcon.classList.remove("fa-sun");
      toggleIcon.classList.add("fa-moon");
    }
  }

  applyTheme(getInitialTheme());

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      var current = html.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }
})();

/* ============================================================
   10. HAMBURGER MOBILE MENU
   ============================================================ */
(function initHamburger() {
  var hamburger = document.getElementById("hamburger");
  var navLinks = document.getElementById("navLinks");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
})();

/* ============================================================
   11. SMOOTH SCROLL FALLBACK (for older browsers)
   ============================================================ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var navHeight =
        (document.getElementById("navbar") || {}).offsetHeight || 70;
      var targetPos =
        target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    });
  });
})();

/* ============================================================
   12. CONTACT FORM — validation & submit handler
   ============================================================ */
(function initContactForm() {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var fields = {
    name: {
      input: document.getElementById("contactName"),
      error: document.getElementById("nameError"),
      validate: function (v) {
        return v.trim().length >= 2;
      },
    },
    email: {
      input: document.getElementById("contactEmail"),
      error: document.getElementById("emailError"),
      validate: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
      },
    },
    subject: {
      input: document.getElementById("contactSubject"),
      error: document.getElementById("subjectError"),
      validate: function (v) {
        return v.trim().length >= 3;
      },
    },
    message: {
      input: document.getElementById("contactMessage"),
      error: document.getElementById("messageError"),
      validate: function (v) {
        return v.trim().length >= 10;
      },
    },
  };

  var successBanner = document.getElementById("formSuccess");

  function validateField(key) {
    var f = fields[key];
    var valid = f.validate(f.input.value);
    if (valid) {
      f.input.classList.remove("invalid");
      f.error.classList.remove("visible");
    } else {
      f.input.classList.add("invalid");
      f.error.classList.add("visible");
    }
    return valid;
  }

  Object.keys(fields).forEach(function (key) {
    fields[key].input.addEventListener("blur", function () {
      validateField(key);
    });
    fields[key].input.addEventListener("input", function () {
      if (fields[key].input.classList.contains("invalid")) {
        validateField(key);
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var allValid = Object.keys(fields).reduce(function (acc, key) {
      return validateField(key) && acc;
    }, true);
    if (!allValid) return;

    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin"></i> Sending…';

    setTimeout(function () {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML =
        '<i class="fa-solid fa-paper-plane"></i> Send Message';
      successBanner.classList.add("visible");
      setTimeout(function () {
        successBanner.classList.remove("visible");
      }, 5000);
    }, 1800);
  });
})();

/* ============================================================
   CONSOLE SIGNATURE
   ============================================================ */
console.log(
  "%c Ramesh Portfolio %c Vanilla HTML · CSS · JS ",
  "background:#2563eb; color:#fff; padding:4px 10px; border-radius:4px 0 0 4px; font-weight:bold;",
  "background:#1f2937; color:#fff; padding:4px 10px; border-radius:0 4px 4px 0;",
);
