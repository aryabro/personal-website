(function () {
    // Theme: init from localStorage or prefers-color-scheme, toggle persists
    var THEME_KEY = 'portfolio-theme';
    var root = document.documentElement;
    function getSystemTheme() {
      try {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
      } catch (e) {
        return 'dark';
      }
    }
    function applyTheme(theme) {
      root.setAttribute('data-theme', theme === 'light' ? 'light' : 'dark');
    }
    function initTheme() {
      var stored = localStorage.getItem(THEME_KEY);
      var theme = stored === 'light' || stored === 'dark' ? stored : getSystemTheme();
      applyTheme(theme);
      return theme;
    }
    var currentTheme = initTheme();
    var themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', currentTheme === 'light');
      themeToggle.addEventListener('click', function () {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(currentTheme);
        localStorage.setItem(THEME_KEY, currentTheme);
        themeToggle.setAttribute('aria-pressed', currentTheme === 'light');
      });
    }
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
        if (localStorage.getItem(THEME_KEY)) return;
        currentTheme = e.matches ? 'light' : 'dark';
        applyTheme(currentTheme);
        if (themeToggle) themeToggle.setAttribute('aria-pressed', currentTheme === 'light');
      });
    }

    // Sidebar toggle for mobile
    var sidebarToggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.sidebar');
  
    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', function () {
        var open = sidebar.classList.toggle('sidebar-open');
        sidebarToggle.setAttribute('aria-expanded', String(open));
      });
    }

    // Close sidebar when a link is clicked (mobile)
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (!sidebar || !sidebarToggle) return;
        if (sidebar.classList.contains('sidebar-open')) {
          sidebar.classList.remove('sidebar-open');
          sidebarToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    var sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavItem() {
      var scrollY = window.scrollY;
      var currentSection = '';
      
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 100;
        var sectionHeight = section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      //highlight last section
      if (scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
        currentSection = sections[sections.length - 1].getAttribute('id');
      }
      
      // Update all nav links
      var allNavLinks = document.querySelectorAll('.nav-link');
      allNavLinks.forEach(function(link) {
        link.classList.remove('is-active');
        var href = link.getAttribute('href');
        if (href === '#' + currentSection) {
          link.classList.add('is-active');
        }
      });
    }
    
    var positionTicking = false;
    function requestPositionTick() {
      if (!positionTicking) {
        requestAnimationFrame(updateActiveNavItem);
        positionTicking = true;
        setTimeout(function() { positionTicking = false; }, 16);
      }
    }
    
    window.addEventListener('scroll', requestPositionTick);
    
    updateActiveNavItem();

    // carousel JS removed (projects now render as a grid)

    // Footer year
    var year = document.getElementById('year');
    if (year) year.textContent = String(new Date().getFullYear());

    // Contact card: copy email
    var copyBtn = document.querySelector('.contact-copy-btn');
    var copyStatus = document.querySelector('.contact-copy-status');
    function setCopyStatus(msg) {
      if (copyStatus) copyStatus.textContent = msg;
    }
    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var value = copyBtn.getAttribute('data-copy') || '';
        if (!value) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(function () {
            setCopyStatus('Copied email to clipboard.');
          }).catch(function () {
            setCopyStatus('Could not copy automatically. Please copy manually: ' + value);
          });
        } else {
          setCopyStatus('Copy not supported in this browser. Email: ' + value);
        }
      });
    }

    // Timeline reveal on scroll (Experience)
    var timelineCards = document.querySelectorAll('.timeline--split .timeline-main');
    if (timelineCards && timelineCards.length) {
      var prefersReduced = false;
      try {
        prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      } catch (e) {
        prefersReduced = false;
      }

      if (prefersReduced) {
        timelineCards.forEach(function (el) { el.classList.add('is-visible'); });
      } else if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

        timelineCards.forEach(function (el) { io.observe(el); });
      } else {
        // Fallback: no IO support
        timelineCards.forEach(function (el) { el.classList.add('is-visible'); });
      }
    }
  })();
