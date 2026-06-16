/* ================================================================
   PORTFOLIO SHARED JAVASCRIPT — Aila Quimio
   Used by all HTML pages: about, experience, projects, skills, contact
================================================================ */

/* ── THEME TOGGLE ── */
function getTheme() {
  return localStorage.getItem('portfolio-theme') || 'dark';
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  var icon = theme === 'dark' ? 'bi-sun' : 'bi-moon-stars';
  var el1 = document.getElementById('themeIcon');
  var el2 = document.getElementById('themeIconMobile');
  if (el1) el1.className = 'bi ' + icon;
  if (el2) el2.className = 'bi ' + icon;
  localStorage.setItem('portfolio-theme', theme);
}

function toggleTheme() {
  applyTheme(getTheme() === 'dark' ? 'light' : 'dark');
}

// Init icons
applyTheme(getTheme());

document.addEventListener('DOMContentLoaded', function () {
  var btn1 = document.getElementById('themeToggle');
  var btn2 = document.getElementById('themeToggleMobile');
  if (btn1) btn1.addEventListener('click', toggleTheme);
  if (btn2) btn2.addEventListener('click', toggleTheme);
});


/* ── ACTIVE NAV LINK ── */
function setActivePage(page) {
  document.querySelectorAll('.p-nav-link[data-page]').forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('data-page') === page);
  });
  document.querySelectorAll('.p-mobile-link[data-page]').forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('data-page') === page);
  });
}


/* ── REVEAL ANIMATIONS ── */
document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.reveal');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var parent = entry.target.parentElement;
        var delay = 0;
        if (parent) {
          var siblings = Array.from(parent.querySelectorAll('.reveal'));
          var idx = siblings.indexOf(entry.target);
          delay = idx * 80;
        }
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(function (el) { observer.observe(el); });
});