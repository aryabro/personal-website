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

    // Contact: click email to copy + toast popup
    var toastEl = document.getElementById('toast');
    var toastTimer = null;
    function showToast(msg) {
      if (!toastEl) return;
      toastEl.textContent = msg;
      toastEl.classList.add('is-visible');
      if (toastTimer) window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(function () {
        toastEl.classList.remove('is-visible');
      }, 2200);
    }

    function copyToClipboard(value) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(value);
      }
      // Fallback for older browsers
      return new Promise(function (resolve, reject) {
        try {
          var ta = document.createElement('textarea');
          ta.value = value;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.left = '-9999px';
          ta.style.top = '0';
          document.body.appendChild(ta);
          ta.select();
          ta.setSelectionRange(0, ta.value.length);
          var ok = document.execCommand && document.execCommand('copy');
          document.body.removeChild(ta);
          if (ok) resolve();
          else reject(new Error('copy_failed'));
        } catch (e) {
          reject(e);
        }
      });
    }

    var emailCopyBtn = document.querySelector('.contact-email-copy');
    if (emailCopyBtn) {
      emailCopyBtn.addEventListener('click', function () {
        var value = emailCopyBtn.getAttribute('data-copy-email') || '';
        if (!value) return;
        copyToClipboard(value).then(function () {
          showToast('Email copied to clipboard.');
        }).catch(function () {
          showToast('Could not copy email. Please copy manually.');
        });
      });
    }

    // Education: modal for long details
    var eduModal = document.getElementById('edu-modal');
    var eduModalTitle = document.getElementById('edu-modal-title');
    var eduModalBody = document.getElementById('edu-modal-body');
    var eduModalCloseTargets = eduModal ? eduModal.querySelectorAll('[data-modal-close]') : null;
    var lastFocusedEl = null;

    function isEduModalOpen() {
      return !!(eduModal && eduModal.classList.contains('is-open'));
    }

    function openEduModal(title, html) {
      if (!eduModal || !eduModalTitle || !eduModalBody) return;
      lastFocusedEl = document.activeElement;
      eduModalTitle.textContent = title || 'Details';
      eduModalBody.innerHTML = html || '';
      eduModal.classList.add('is-open');
      eduModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      var closeBtn = eduModal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeEduModal() {
      if (!eduModal) return;
      eduModal.classList.remove('is-open');
      eduModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (eduModalBody) eduModalBody.innerHTML = '';
      if (lastFocusedEl && lastFocusedEl.focus) lastFocusedEl.focus();
      lastFocusedEl = null;
    }

    var eduMoreBtns = document.querySelectorAll('.edu-more-btn');
    if (eduMoreBtns && eduMoreBtns.length) {
      eduMoreBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var item = btn.closest ? btn.closest('.edu-item') : null;
          if (!item) return;
          var titleEl = item.querySelector('.edu-school');
          var detailsEl = item.querySelector('.edu-details');
          if (!detailsEl) return;
          openEduModal(titleEl ? titleEl.textContent : 'Details', detailsEl.innerHTML);
        });
      });
    }

    if (eduModalCloseTargets && eduModalCloseTargets.length) {
      eduModalCloseTargets.forEach(function (el) {
        el.addEventListener('click', closeEduModal);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (!isEduModalOpen()) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeEduModal();
      }
    });

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
