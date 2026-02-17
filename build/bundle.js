/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --bg: #0a0e27;
  --surface: #0f1428;
  --ink: #f5f7fb;
  --muted: #a7b0c0;
  --border: #1e2139;
  --yellow: #ffd200;
  /* Accent color for text/icons. In light mode, pure yellow on white fails contrast. */
  --yellow-ink: #ffd200;
  --yellow-hover: #ffe033;
  --red: #c1121f;
  --shadow: rgba(0, 0, 0, 0.35);
  --surface-rgb: 15, 20, 40;
  --radius: 1rem;
  --gradient-1: rgba(99, 102, 241, 0.1);
  --gradient-2: rgba(168, 85, 247, 0.08);
  --gradient-3: rgba(236, 72, 153, 0.06);
}

[data-theme=light] {
  --bg: #f8fafc;
  --surface: #ffffff;
  --ink: #1a1d24;
  --muted: #5c6370;
  --border: #e2e6ee;
  --shadow: rgba(0, 0, 0, 0.08);
  --surface-rgb: 255, 255, 255;
  --yellow-ink: #8a5200;
  --yellow-hover: #e6bd00;
  --gradient-1: rgba(99, 102, 241, 0.05);
  --gradient-2: rgba(168, 85, 247, 0.04);
  --gradient-3: rgba(236, 72, 153, 0.03);
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

[data-theme=light] {
  color-scheme: light;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink);
  position: relative;
  background: linear-gradient(135deg, #070a1d 0%, var(--bg) 55%, #0b1233 100%);
  background-attachment: fixed;
  text-rendering: optimizeLegibility;
  display: flex;
  min-height: 100vh;
}

[data-theme=light] body {
  background: linear-gradient(180deg, #bfe6ff 0%, #d8f0ff 45%, #f8fafc 100%);
  background-attachment: fixed;
}

body::before,
body::after {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
}

body::before {
  opacity: 0.85;
  background-image: radial-gradient(1px 1px at 25px 25px, rgba(255, 255, 255, 0.75) 60%, transparent 61%), radial-gradient(1px 1px at 80px 45px, rgba(255, 255, 255, 0.55) 60%, transparent 61%), radial-gradient(1px 1px at 60px 90px, rgba(255, 255, 255, 0.35) 60%, transparent 61%), radial-gradient(2px 2px at 110px 130px, rgba(255, 255, 255, 0.28) 60%, transparent 61%);
  background-size: 160px 160px;
  background-position: 0 0;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.18));
}

body::after {
  opacity: 1;
  background: radial-gradient(900px 500px at 15% 10%, rgba(255, 210, 0, 0.08), transparent 55%), radial-gradient(900px 500px at 85% 20%, rgba(99, 102, 241, 0.1), transparent 60%), radial-gradient(900px 600px at 50% 90%, rgba(236, 72, 153, 0.06), transparent 60%);
}

[data-theme=light] body::before {
  opacity: 0.9;
  filter: blur(0.2px);
  background: radial-gradient(220px 140px at 10% 22%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0) 65%), radial-gradient(300px 180px at 32% 14%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 66%), radial-gradient(280px 170px at 60% 20%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 68%), radial-gradient(340px 200px at 84% 16%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 66%);
}

[data-theme=light] body::after {
  background: radial-gradient(380px 240px at 18% 38%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 70%), radial-gradient(420px 260px at 55% 42%, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 72%), radial-gradient(420px 260px at 86% 46%, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0) 72%);
  opacity: 0.75;
  filter: blur(0.6px);
}

.container {
  width: min(1100px, 92%);
  margin: 0 auto;
}

a {
  color: inherit;
}

.main-content {
  flex: 1;
  margin-left: 200px;
  width: calc(100% - 200px);
}
@media (max-width: 900px) {
  .main-content {
    margin-left: 0;
    width: 100%;
  }
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  background: rgba(var(--surface-rgb), 0.95);
  backdrop-filter: saturate(120%) blur(10px);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 9999;
  transition: transform 0.3s ease;
}
@media (max-width: 900px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.sidebar-open {
    transform: translateX(0);
  }
}

.sidebar-header {
  padding: 1.5rem 1rem 1rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sidebar-brand {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}
.sidebar-brand .brand-avatar {
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 999px;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
  border: 1px solid rgba(255, 210, 0, 0.25);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  background: rgba(var(--surface-rgb), 0.6);
}
.sidebar-brand .brand-name {
  font-weight: 750;
  letter-spacing: -0.01em;
  color: var(--ink);
  font-size: 1rem;
  line-height: 1;
}
.sidebar-brand:hover .brand-name {
  color: var(--yellow-ink);
}

@media (max-width: 640px) {
  .sidebar-brand .brand-name {
    display: none;
  }
}
.sidebar .theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s ease, color 0.2s ease;
}
.sidebar .theme-toggle:hover {
  background: rgba(255, 210, 0, 0.12);
  color: var(--yellow-ink);
}
.sidebar .theme-toggle:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}
.sidebar .theme-toggle .theme-toggle-icon--sun {
  display: none;
}
.sidebar .theme-toggle .theme-toggle-icon--moon {
  display: inline;
}

[data-theme=light] .sidebar .theme-toggle .theme-toggle-icon--sun {
  display: inline;
}

[data-theme=light] .sidebar .theme-toggle .theme-toggle-icon--moon {
  display: none;
}

.sidebar-nav {
  flex: 1;
  padding: 1.5rem 0;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  color: var(--ink);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.2s ease, color 0.2s ease, padding-left 0.2s ease;
  border-left: 3px solid transparent;
}
.nav-link:hover {
  background: rgba(255, 210, 0, 0.08);
  color: var(--yellow-ink);
  padding-left: 1.25rem;
}
.nav-link.is-active {
  background: rgba(255, 210, 0, 0.12);
  color: var(--yellow-ink);
  border-left-color: var(--yellow-ink);
  padding-left: 1.25rem;
}

.sidebar-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1rem 0.5rem;
  border-top: 1px solid var(--border);
  margin-top: auto;
  /* Push to bottom if needed, though sidebar-nav has flex: 1 */
}
.sidebar-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: var(--muted);
  font-size: 1.1rem;
  border-radius: 50%;
  transition: all 0.2s ease;
}
.sidebar-social a:hover {
  color: var(--yellow-ink);
  background: rgba(255, 210, 0, 0.1);
}

.sidebar-footer-text {
  padding: 0.5rem 1rem 1.5rem;
  text-align: center;
}
.sidebar-footer-text small {
  display: block;
  color: var(--muted);
  font-size: 0.7rem;
  line-height: 1.5;
  opacity: 0.8;
}

.sidebar-toggle {
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10000;
  background: rgba(var(--surface-rgb), 0.95);
  backdrop-filter: saturate(120%) blur(10px);
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  padding: 0.75rem;
  cursor: pointer;
  transition: background 0.2s ease;
}
.sidebar-toggle:hover {
  background: rgba(var(--surface-rgb), 1);
}
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}
.sidebar-toggle .bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--ink);
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.sidebar-toggle .bar + .bar {
  margin-top: 5px;
}
.sidebar-toggle[aria-expanded=true] .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.sidebar-toggle[aria-expanded=true] .bar:nth-child(2) {
  opacity: 0;
}
.sidebar-toggle[aria-expanded=true] .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
@media (max-width: 900px) {
  .sidebar-toggle {
    display: block;
  }
}

.site-header {
  display: none;
}

.section {
  padding: clamp(72px, 10vh, 120px) 0;
  border-bottom: 1px solid var(--border);
}
.section--hero {
  min-height: 60vh;
  display: grid;
  place-items: center;
  position: relative;
  text-align: center;
  background-image: radial-gradient(1400px 400px at 10% -10%, rgba(255, 210, 0, 0.06), transparent 55%), radial-gradient(1400px 400px at 90% 10%, rgba(193, 18, 31, 0.05), transparent 55%);
  background-size: auto;
  background-position: center;
}
.section--hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(var(--surface-rgb), 0.2);
  z-index: 1;
}
.section--hero .container {
  position: relative;
  z-index: 1;
}
.section--hero .eyebrow {
  margin: 0 0 1rem 0;
  color: var(--yellow-ink);
  letter-spacing: 0.02em;
  font-size: 0.95rem;
  font-family: "Courier New", monospace;
  font-weight: 600;
}
.section--hero .hero-heading {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 750;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.03em;
  line-height: 1.15;
}
.section--hero .hero-intro {
  color: var(--ink);
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  margin: 0 auto 1.5rem;
  max-width: 70ch;
  line-height: 1.65;
}
.section--hero .hero-badges {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
.section--hero .hero-actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.25rem;
}
.section--hero .hero-pills {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.75rem;
  margin-bottom: 1.25rem;
}
.section--hero .hero-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: rgba(var(--surface-rgb), 0.6);
  border: 1px solid var(--border);
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 650;
}
.section--hero .hero-pill i {
  color: var(--yellow-ink);
  font-size: 0.95rem;
}
.section--hero .hero-social {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}
.section--alt {
  background: rgba(var(--surface-rgb), 0.3);
}
.section--accent {
  position: relative;
  background-image: radial-gradient(1200px 400px at 30% 10%, rgba(255, 210, 0, 0.05), transparent 55%), radial-gradient(900px 350px at 80% 100%, rgba(193, 18, 31, 0.04), transparent 55%);
}
.section--accent::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(var(--surface-rgb), 0.4);
  z-index: 1;
}
.section--accent .container {
  position: relative;
  z-index: 1;
}

.section-header {
  margin: 0 0 2rem 0;
}

.section-title {
  margin: 0 0 0.5rem 0;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
}
.section-title::before {
  content: "/ ";
  color: var(--yellow-ink);
  font-weight: 750;
}

.section-subtitle {
  margin: 0;
  color: var(--muted);
  max-width: 70ch;
  font-size: 0.98rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.8rem;
  text-decoration: none;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--ink);
  font-weight: 650;
  transition: transform 0.06s ease, background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}
.btn:hover {
  background: var(--yellow);
  color: #111;
  border-color: var(--yellow);
}
.btn:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}
.btn:active {
  transform: translateY(1px);
}
.btn--primary {
  background: var(--yellow);
  border-color: var(--yellow);
  color: #111;
}
.btn--primary:hover {
  background: var(--yellow-hover);
  border-color: var(--yellow-hover);
}
.btn--ghost {
  background: transparent;
}
.btn--ghost:hover {
  background: rgba(255, 210, 0, 0.12);
  border-color: rgba(255, 210, 0, 0.35);
  color: var(--yellow-ink);
}
.btn--small {
  padding: 0.5rem 0.75rem;
  border-radius: 0.7rem;
  font-size: 0.9rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(var(--surface-rgb), 0.6);
  border: 1px solid var(--border);
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
}
.status-badge--active {
  background: rgba(255, 210, 0, 0.12);
  border-color: rgba(255, 210, 0, 0.3);
  color: var(--yellow-ink);
}
.status-badge--active i {
  animation: pulse 2s ease-in-out infinite;
  font-size: 0.6rem;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
.social-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 0.7rem;
  border: 1px solid var(--border);
  background: rgba(var(--surface-rgb), 0.6);
  color: var(--ink);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 600;
  transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}
.social-link:hover {
  background: rgba(255, 210, 0, 0.12);
  border-color: rgba(255, 210, 0, 0.4);
  color: var(--yellow);
  transform: translateY(-2px);
}
.social-link:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}
.social-link i {
  font-size: 1.1rem;
}
@media (max-width: 640px) {
  .social-link span {
    display: none;
  }
}

.timeline {
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
}

.timeline-item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  padding: 1.25rem 1.25rem 1rem;
  box-shadow: 0 4px 16px var(--shadow);
}
.timeline-item:hover {
  border-color: rgba(255, 210, 0, 0.28);
  box-shadow: 0 6px 18px var(--shadow);
  transform: translateY(-1px);
}

.timeline-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
}

.timeline-title {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--yellow-ink);
}

.timeline-degree {
  margin: 0.5rem 0 0 0;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 600;
}

.timeline-meta {
  color: var(--muted);
  font-size: 0.95rem;
}

.timeline-bullets {
  margin: 0.85rem 0 0 1.1rem;
  color: var(--ink);
}
.timeline-bullets li {
  margin: 0.35rem 0;
}
.timeline-bullets li strong {
  color: var(--muted);
  font-weight: 650;
}

.timeline-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.25rem;
  background: transparent;
  border-radius: 0.75rem;
  border: 0;
}

.edu-logo {
  max-width: 120px;
  height: 80px;
  -o-object-fit: contain;
     object-fit: contain;
  border: 0;
  background: transparent;
  box-shadow: none;
  filter: none;
  transition: transform 0.2s ease;
}
.timeline-item:hover .edu-logo {
  transform: scale(1.05);
}

.timeline--grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
@media (max-width: 900px) {
  .timeline--grid {
    grid-template-columns: 1fr;
  }
}

.experience-logo {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.75rem;
  padding: 0.25rem;
  background: transparent;
  border-radius: 0.5rem;
  border: 0;
  width: -moz-fit-content;
  width: fit-content;
}

.company-logo {
  max-width: 100px;
  height: 50px;
  -o-object-fit: contain;
     object-fit: contain;
  border: 0;
  background: transparent;
  box-shadow: none;
  filter: none;
  transition: transform 0.2s ease;
}
.timeline-main:hover .company-logo {
  transform: scale(1.05);
}

.about-content {
  max-width: 70ch;
  margin: 0 auto;
}
.about-content p {
  font-size: 1.05rem;
  line-height: 1.75;
  margin: 0 0 1.25rem 0;
  color: var(--ink);
}
.about-content p:last-child {
  margin-bottom: 0;
}

.timeline--split {
  --timeline-line: rgba(255, 210, 0, 0.22);
  --timeline-dot: var(--yellow);
  --timeline-dot-ring: rgba(255, 210, 0, 0.14);
  --meta-col: 12.5rem;
  --axis-x: calc(var(--meta-col) + 1.25rem);
  position: relative;
  gap: 1.25rem;
}
.timeline--split::before {
  content: "";
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: var(--axis-x);
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(to bottom, transparent, var(--timeline-line) 10%, var(--timeline-line) 90%, transparent);
}
.timeline--split .timeline-item {
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  padding: 0;
  display: grid;
  grid-template-columns: var(--meta-col) 1fr;
  -moz-column-gap: 2.5rem;
       column-gap: 2.5rem;
  align-items: start;
  position: relative;
}
.timeline--split .timeline-item::before, .timeline--split .timeline-item::after {
  content: "";
  position: absolute;
  top: 1.1rem;
  left: var(--axis-x);
  transform: translateX(-50%);
  border-radius: 999px;
  pointer-events: none;
}
.timeline--split .timeline-item::before {
  width: 10px;
  height: 10px;
  background: var(--timeline-dot);
  box-shadow: 0 0 0 1px rgba(17, 17, 17, 0.22);
  z-index: 2;
}
.timeline--split .timeline-item::after {
  width: 30px;
  height: 30px;
  transform: translate(-50%, -10px);
  background: radial-gradient(circle at center, var(--timeline-dot-ring), transparent 70%);
  z-index: 1;
}
.timeline--split .timeline-side {
  padding-top: 0.25rem;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.35;
}
.timeline--split .timeline-date {
  font-weight: 650;
  color: var(--ink);
  letter-spacing: -0.01em;
}
.timeline--split .timeline-loc {
  margin-top: 0.25rem;
}
.timeline--split .timeline-main {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  padding: 1.25rem 1.25rem 1rem;
  box-shadow: 0 4px 16px var(--shadow);
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.55s ease, transform 0.55s ease;
}
.timeline--split .timeline-main:hover {
  border-color: rgba(255, 210, 0, 0.28);
  box-shadow: 0 6px 18px var(--shadow);
  transform: translateY(-1px);
}
.timeline--split .timeline-main.is-visible {
  opacity: 1;
  transform: none;
}
.timeline--split .timeline-role {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}
.timeline--split .timeline-org {
  margin-top: 0.25rem;
  color: var(--muted);
  font-size: 0.98rem;
}
@media (prefers-reduced-motion: reduce) {
  .timeline--split .timeline-main {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
@media (max-width: 640px) {
  .timeline--split {
    --meta-col: 0rem;
    --axis-x: 1.1rem;
    padding-left: 2.25rem;
  }
  .timeline--split::before {
    left: var(--axis-x);
  }
  .timeline--split .timeline-item {
    grid-template-columns: 1fr;
    row-gap: 0.6rem;
  }
  .timeline--split .timeline-side {
    color: var(--muted);
  }
  .timeline--split .timeline-date {
    color: var(--ink);
  }
}

.projects-grid {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.75rem;
  grid-template-columns: repeat(3, 1fr);
}
.projects-grid .project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  padding: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
}
.projects-grid .project-card:hover {
  border-color: rgba(255, 210, 0, 0.28);
  box-shadow: 0 6px 18px var(--shadow);
  transform: translateY(-1px);
}
@media (max-width: 1100px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}

.project-image {
  width: 100%;
  height: 200px;
  background: rgba(255, 210, 0, 0.05);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.project-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.28), transparent 55%);
  pointer-events: none;
}

.projects-grid .project-kicker {
  display: inline-flex;
  width: -moz-fit-content;
  width: fit-content;
  margin-top: 1.25rem;
  background: rgba(255, 210, 0, 0.12);
  border: 1px solid rgba(255, 210, 0, 0.22);
  color: var(--yellow-ink);
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-weight: 750;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-left: auto;
  margin-right: auto;
}

.projects-grid .project-subtitle {
  color: var(--muted);
  font-size: 0.98rem;
  margin-bottom: 1rem;
}

.projects-grid .project-tags li {
  background: rgba(var(--surface-rgb), 0.6);
  color: var(--muted);
}

.projects-grid .project-links {
  margin-top: auto;
}

.project-thumbnail {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
}
.project-card:hover .project-thumbnail {
  transform: scale(1.05);
  filter: brightness(1.1);
}

.project-card .project-kicker,
.project-card .project-title,
.project-card .project-subtitle,
.project-card .project-description,
.project-card .project-tags,
.project-card .project-links {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.project-card .project-kicker {
  margin-top: 1.5rem;
}
.project-card .project-links {
  padding-bottom: 1.25rem;
}

.project-tags {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.project-tags li {
  border: 1px solid var(--border);
  background: rgba(255, 210, 0, 0.06);
  color: var(--muted);
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  font-size: 0.85rem;
}

.projects-footer {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

.skills-compact {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.75rem;
}
@media (max-width: 900px) {
  .skills-compact {
    grid-template-columns: 1fr;
  }
}

.skill-category-inline {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  padding: 1.5rem;
  box-shadow: 0 4px 16px var(--shadow);
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  height: 100%;
}
.skill-category-inline:hover {
  border-color: rgba(255, 210, 0, 0.28);
  box-shadow: 0 6px 18px var(--shadow);
  transform: translateY(-1px);
}
@media (max-width: 640px) {
  .skill-category-inline {
    flex-direction: column;
    gap: 1rem;
  }
}

.skill-icon {
  flex-shrink: 0;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255, 210, 0, 0.15), rgba(255, 210, 0, 0.05));
  border: 2px solid rgba(255, 210, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.skill-icon i {
  font-size: 1.5rem;
  color: var(--yellow);
}

.skill-content {
  flex: 1;
  min-width: 0;
}
.skill-content h3 {
  margin: 0 0 1rem 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--ink);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-content: flex-start;
  min-width: 0;
}

.skill-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.9rem;
  background: rgba(var(--surface-rgb), 0.6);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--ink);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s ease;
}
.skill-tag i {
  font-size: 1rem;
  color: var(--yellow);
}
.skill-tag:hover {
  background: rgba(255, 210, 0, 0.1);
  border-color: rgba(255, 210, 0, 0.3);
  transform: translateY(-2px);
}

.carousel-container {
  position: relative;
  margin-top: 3rem;
  max-width: 800px;
  margin: 3rem auto 0;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 4px 20px var(--shadow);
}
.carousel-wrapper:hover {
  border-color: rgba(255, 210, 0, 0.28);
  box-shadow: 0 6px 18px var(--shadow);
  transform: translateY(-1px);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  flex-shrink: 0;
  padding: 3rem 2rem;
  display: none;
  position: relative;
  background-image: radial-gradient(900px 300px at 30% 0%, rgba(255, 210, 0, 0.05), transparent 55%), radial-gradient(900px 300px at 90% 100%, rgba(193, 18, 31, 0.04), transparent 55%);
  background-size: auto;
  background-position: center;
}
.carousel-slide.active {
  display: block;
}
.carousel-slide::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(var(--surface-rgb), 0.25);
  z-index: 1;
}
.carousel-slide .project-card {
  position: relative;
  z-index: 2;
}

.project-card {
  margin: 0;
}

.project-kicker {
  display: inline-block;
  background: var(--yellow);
  color: #111;
  padding: 0.45rem 0.9rem;
  border-radius: 2rem;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.project-title {
  color: var(--yellow-ink);
  font-size: 1.45rem;
  font-weight: 750;
  margin: 0 0 0.65rem 0;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.project-subtitle {
  color: var(--muted);
  font-size: 1.05rem;
  margin: 0 auto 1.5rem;
  max-width: 58ch;
}

.project-description {
  color: var(--ink);
  line-height: 1.7;
  font-size: 1rem;
  margin: 0 auto 1.75rem;
  max-width: 70ch;
  text-align: left;
}

.projects-grid .project-description {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-links {
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 1.1rem;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--surface-rgb), 0.9);
  border: 1px solid var(--border);
  color: var(--ink);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 10;
}
.carousel-btn:hover {
  background: var(--yellow);
  color: #111;
  border-color: var(--yellow);
  transform: translateY(-50%) scale(1.1);
}
.carousel-btn:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}
.carousel-btn--prev {
  left: -1.5rem;
}
.carousel-btn--next {
  right: -1.5rem;
}
@media (max-width: 900px) {
  .carousel-btn {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
  .carousel-btn--prev {
    left: -1.25rem;
  }
  .carousel-btn--next {
    right: -1.25rem;
  }
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.carousel-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--muted);
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}
.carousel-indicator:hover {
  border-color: var(--yellow);
  background: rgba(255, 210, 0, 0.3);
}
.carousel-indicator.active {
  background: var(--yellow);
  border-color: var(--yellow);
}
.carousel-indicator:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}

.site-footer {
  padding: 2rem 0;
  color: var(--muted);
  text-align: center;
  background: var(--surface);
  border-top: 1px solid var(--border);
}
.site-footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.site-footer small {
  order: 2;
}

.footer-social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  order: 1;
}
.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--ink);
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.2s ease;
}
.footer-social a:hover {
  background: rgba(255, 210, 0, 0.12);
  border-color: rgba(255, 210, 0, 0.4);
  color: var(--yellow);
  transform: translateY(-2px);
}
.footer-social a:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}

.contact-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}
.contact-content h2 {
  color: var(--yellow-ink);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  margin: 0 0 1.5rem 0;
  font-weight: 750;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.contact-content .contact-intro {
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0 0 2.5rem 0;
  color: var(--ink);
}

.contact-card-unified {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  padding: 2rem;
  box-shadow: 0 8px 32px var(--shadow);
  text-align: left;
}
.contact-card-unified:hover {
  border-color: rgba(255, 210, 0, 0.28);
  box-shadow: 0 6px 18px var(--shadow);
  transform: translateY(-1px);
}

.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 2rem;
  margin-bottom: 2rem;
}
@media (max-width: 640px) {
  .contact-info-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}
.contact-info-item i {
  font-size: 1.4rem;
  color: var(--yellow);
  margin-top: 0.2rem;
  flex-shrink: 0;
}
.contact-info-item h3 {
  margin: 0 0 0.35rem 0;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.contact-info-item a, .contact-info-item p {
  margin: 0;
  color: var(--ink);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}
.contact-info-item a:hover, .contact-info-item p:hover {
  color: var(--yellow);
}
.contact-info-item p {
  color: var(--ink);
}

.contact-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.contact-copy-btn--inline {
  width: 2rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.6rem;
  border: 1px solid var(--border);
  background: rgba(var(--surface-rgb), 0.6);
  color: var(--muted);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.06s ease;
}
.contact-copy-btn--inline:hover {
  background: rgba(255, 210, 0, 0.12);
  border-color: rgba(255, 210, 0, 0.35);
  color: var(--yellow-ink);
}
.contact-copy-btn--inline:active {
  transform: translateY(1px);
}
.contact-copy-btn--inline:focus-visible {
  outline: 2px solid var(--yellow);
  outline-offset: 2px;
}

.contact-copy-status {
  margin: 1rem 0 0;
  text-align: center;
  color: var(--muted);
  font-size: 0.9rem;
  min-height: 1.25rem;
}

.contact-methods,
.contact-method,
.contact-icon-links,
.contact-icon-link,
.contact-card {
  display: none;
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"AACA;EACE,aAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,qFAAA;EACA,qBAAA;EACA,uBAAA;EACA,cAAA;EACA,6BAAA;EACA,yBAAA;EACA,cAAA;EAGA,qCAAA;EACA,sCAAA;EACA,sCAAA;AAFF;;AAIA;EACE,aAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,iBAAA;EACA,6BAAA;EACA,4BAAA;EACA,qBAAA;EACA,uBAAA;EAGA,sCAAA;EACA,sCAAA;EACA,sCAAA;AAHF;;AA6CA;EAAyB,sBAAA;AAzCzB;;AA0CA;EAAO,uBAAA;EAAyB,kBAAA;AArChC;;AAsCA;EAAuB,mBAAA;AAlCvB;;AAmCA;EACE,SAAA;EACA,gHAAA;EACA,eAnCU;EAoCV,gBAnCY;EAoCZ,iBA3CI;EA4CJ,kBAAA;EACA,4EACE;EACF,4BAAA;EACA,kCAAA;EACA,aAAA;EACA,iBAAA;AAjCF;;AAmCA;EACE,0EACE;EACF,4BAAA;AAjCF;;AAqCA;;EAEE,WAAA;EACA,eAAA;EACA,QAAA;EACA,oBAAA;EACA,WAAA;AAlCF;;AAsCA;EACE,aAAA;EACA,8WACE;EAIF,4BAAA;EACA,wBAAA;EACA,sDAAA;AAvCF;;AAyCA;EACE,UAAA;EACA,oQACE;AAvCJ;;AA4CA;EACE,YAAA;EACA,mBAAA;EACA,qZACE;AA1CJ;;AA+CA;EACE,kTACE;EAGF,aAAA;EACA,mBAAA;AA/CF;;AAiDA;EAAa,uBAAA;EAA2B,cAAA;AA5CxC;;AA6CA;EAAI,cAAA;AAzCJ;;AA4CA;EACE,OAAA;EACA,kBAAA;EACA,yBAAA;AAzCF;AAzDuB;EA+FvB;IAMI,cAAA;IACA,WAAA;EAxCF;AACF;;AA4CA;EACE,eAAA;EACA,OAAA;EACA,MAAA;EACA,SAAA;EACA,YAAA;EACA,0CAAA;EACA,0CAAA;EACA,qCAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,+BAAA;AAzCF;AA9EuB;EA2GvB;IAeI,4BAAA;EAxCF;EA0CE;IACE,wBAAA;EAxCJ;AACF;;AA4CA;EACE,yBAAA;EACA,sCAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AAzCF;;AA4CA;EACE,qBAAA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;AAzCF;AA2CE;EACE,aAAA;EACA,cAAA;EACA,oBAAA;EACA,oBAAA;KAAA,iBAAA;EACA,cAAA;EACA,yCAAA;EACA,0CAAA;EACA,yCAAA;AAzCJ;AA4CE;EACE,gBAAA;EACA,uBAAA;EACA,iBA5KE;EA6KF,eAAA;EACA,cAAA;AA1CJ;AA6CE;EAAsB,wBAnLZ;AAyIZ;;AA1HkB;EAwKhB;IAA6B,aAAA;EAzC7B;AACF;AA2CA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,UAAA;EACA,SAAA;EACA,qBAAA;EACA,uBAAA;EACA,iBAlMI;EAmMJ,eAAA;EACA,iBAAA;EACA,iDAAA;AAzCF;AA2CE;EACE,mCAAA;EACA,wBA3MQ;AAkKZ;AA4CE;EACE,gCAAA;EACA,mBAAA;AA1CJ;AA6CE;EAA0B,aAAA;AA1C5B;AA2CE;EAA2B,eAAA;AAxC7B;;AA2CA;EAAsE,eAAA;AAvCtE;;AAwCA;EAAuE,aAAA;AApCvE;;AAsCA;EACE,OAAA;EACA,iBAAA;EACA,gBAAA;AAnCF;;AAsCA;EACE,gBAAA;EACA,SAAA;EACA,UAAA;AAnCF;;AAsCA;EACE,cAAA;EACA,qBAAA;EACA,iBAvOI;EAwOJ,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yEAAA;EACA,kCAAA;AAnCF;AAqCE;EACE,mCAAA;EACA,wBAlPQ;EAmPR,qBAAA;AAnCJ;AAsCE;EACE,mCAAA;EACA,wBAxPQ;EAyPR,oCAzPQ;EA0PR,qBAAA;AApCJ;;AAyCA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,yBAAA;EACA,mCAAA;EACA,gBAAA;EAAkB,6DAAA;AArCpB;AAuCE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,mBA1QI;EA2QJ,iBAAA;EACA,kBAAA;EACA,yBAAA;AArCJ;AAuCI;EACE,wBAnRM;EAoRN,kCAAA;AArCN;;AA0CA;EACE,2BAAA;EACA,kBAAA;AAvCF;AAyCE;EACE,cAAA;EACA,mBA5RI;EA6RJ,iBAAA;EACA,gBAAA;EACA,YAAA;AAvCJ;;AA2CA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,cAAA;EACA,0CAAA;EACA,0CAAA;EACA,+BAAA;EACA,qBAAA;EACA,gBAAA;EACA,eAAA;EACA,gCAAA;AAxCF;AA0CE;EACE,uCAAA;AAxCJ;AA2CE;EACE,gCAAA;EACA,mBAAA;AAzCJ;AA4CE;EACE,cAAA;EACA,WAAA;EACA,WAAA;EACA,sBA/TE;EAgUF,kDAAA;AA1CJ;AA4CI;EACE,eAAA;AA1CN;AA+CI;EAAoB,wCAAA;AA5CxB;AA6CI;EAAoB,UAAA;AA1CxB;AA2CI;EAAoB,0CAAA;AAxCxB;AApRuB;EAsRvB;IA0CI,cAAA;EAxCF;AACF;;AA4CA;EACE,aAAA;AAzCF;;AA6CA;EACE,mCAAA;EAAqC,sCAAA;AAzCvC;AA2CE;EACE,gBAAA;EAAkB,aAAA;EAAe,mBAAA;EAAqB,kBAAA;EAAoB,kBAAA;EAC1E,yLACE;EAEF,qBAAA;EACA,2BAAA;AAvCJ;AAtSE;EAAY,WAAA;EAAa,kBAAA;EAAoB,QAAA;EAAU,yCAAA;EAAmD,UAAA;AA6S5G;AAkCI;EAAa,kBAAA;EAAoB,UAAA;AA9BrC;AA+BI;EACE,kBAAA;EACA,wBAxWM;EAyWN,sBAAA;EACA,kBAAA;EACA,qCAAA;EACA,gBAAA;AA7BN;AA+BI;EACE,mCAAA;EACA,gBAAA;EACA,qBAAA;EACA,uBAAA;EACA,iBAAA;AA7BN;AA+BI;EACE,iBApXA;EAqXA,sCAAA;EACA,qBAAA;EACA,eAAA;EACA,iBAAA;AA7BN;AA+BI;EACE,aAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,mBAAA;AA7BN;AA+BI;EAAgB,aAAA;EAAe,YAAA;EAAa,uBAAA;EAAyB,eAAA;EAAiB,mBAAA;AAxB1F;AAyBI;EACE,aAAA;EACA,uBAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,sBAAA;AAvBN;AAyBI;EACE,oBAAA;EACA,mBAAA;EACA,YAAA;EACA,wBAAA;EACA,oBAAA;EACA,yCAAA;EACA,+BAAA;EACA,iBAlZA;EAmZA,iBAAA;EACA,gBAAA;AAvBN;AAyBM;EAAI,wBAxZE;EAwZiB,kBAAA;AArB7B;AAuBI;EACE,aAAA;EACA,SAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;AArBN;AAyBE;EACE,yCAAA;AAvBJ;AA0BE;EACE,kBAAA;EACA,wLACE;AAzBN;AA3XE;EAAY,WAAA;EAAa,kBAAA;EAAoB,QAAA;EAAU,yCAAA;EAAmD,UAAA;AAkY5G;AAqBI;EAAa,kBAAA;EAAoB,UAAA;AAjBrC;;AAsBA;EAAkB,kBAAA;AAlBlB;;AAmBA;EACE,oBAAA;EACA,qCAAA;EACA,gBAAA;EACA,uBAAA;EACA,kBAAA;AAhBF;AAkBE;EACE,aAAA;EACA,wBA5bQ;EA6bR,gBAAA;AAhBJ;;AAmBA;EAAoB,SAAA;EAAW,mBA7bvB;EA6bsC,eAAA;EAAiB,kBAAA;AAZ/D;;AAeA;EACE,oBAAA;EAAsB,mBAAA;EAAqB,uBAAA;EAC3C,WAAA;EACA,qBAAA;EACA,qBAAA;EACA,qBAAA;EACA,+BAAA;EACA,0BArcQ;EAscR,iBAzcI;EA0cJ,gBAAA;EACA,qHAAA;AAVF;AAnaE;EAAU,yBAjCH;EAiCwB,WAAA;EAAa,2BAjCrC;AAycT;AAvaE;EAAkB,gCAAA;EAA4B,mBAAA;AA2ahD;AAGE;EAAW,0BAAA;AAAb;AAEE;EACE,yBAndK;EAodL,2BApdK;EAqdL,WAAA;AAAJ;AACI;EAAU,+BAAA;EAAiC,iCAAA;AAG/C;AAAE;EACE,uBAAA;AAEJ;AADI;EAAU,mCAAA;EAAqC,qCAAA;EAAuC,wBA1d9E;AAgeZ;AAHE;EACE,uBAAA;EACA,qBAAA;EACA,iBAAA;AAKJ;;AAAA;EACE,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;EACA,oBAAA;EACA,yCAAA;EACA,+BAAA;EACA,mBA1eM;EA2eN,iBAAA;EACA,gBAAA;AAGF;AADE;EACE,mCAAA;EACA,oCAAA;EACA,wBApfQ;AAufZ;AADI;EACE,wCAAA;EACA,iBAAA;AAGN;;AAEA;EACE;IAAW,UAAA;EAEX;EADA;IAAM,YAAA;EAIN;AACF;AADA;EACE,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,oBAAA;EACA,qBAAA;EACA,+BAAA;EACA,yCAAA;EACA,iBAzgBI;EA0gBJ,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,+FAAA;AAGF;AADE;EACE,mCAAA;EACA,oCAAA;EACA,oBArhBK;EAshBL,2BAAA;AAGJ;AAAE;EACE,gCAAA;EACA,mBAAA;AAEJ;AACE;EACE,iBAAA;AACJ;AAhhBkB;EAkhBhB;IAEI,aAAA;EAAJ;AACF;;AAKA;EAAY,aAAA;EAAe,SAAA;EAAW,kBAAA;AACtC;;AAAA;EAjhBE,0BApBQ;EAqBR,+BAAA;EACA,4BAAA;EACA,mGAAA;EA8gBmC,6BAAA;EAA+B,oCAAA;AASpE;AAthBE;EAAU,qCAAA;EAAuC,oCAAA;EAAgC,2BAAA;AA2hBnF;;AAbA;EAAgB,aAAA;EAAe,8BAAA;EAAgC,qBAAA;EAAuB,SAAA;EAAW,eAAA;AAqBjG;;AApBA;EAAkB,SAAA;EAAW,iBAAA;EAAmB,gBAAA;EAAkB,wBA5iBtD;AAukBZ;;AA1BA;EACE,oBAAA;EACA,iBA7iBI;EA8iBJ,eAAA;EACA,gBAAA;AA6BF;;AA3BA;EAAiB,mBAhjBT;EAgjBwB,kBAAA;AAgChC;;AA/BA;EACE,0BAAA;EACA,iBApjBI;AAslBN;AAjCE;EACE,iBAAA;AAmCJ;AAlCI;EACE,mBAvjBE;EAwjBF,gBAAA;AAoCN;;AA9BA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,sBAAA;EACA,SAAA;AAiCF;;AA9BA;EACE,gBAAA;EACA,YAAA;EACA,sBAAA;KAAA,mBAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;AAiCF;AA/BE;EACE,sBAAA;AAiCJ;;AA5BA;EACE,qCAAA;EACA,YAAA;AA+BF;AA5mBuB;EA2kBvB;IAKI,0BAAA;EAgCF;AACF;;AA5BA;EACE,aAAA;EACA,2BAAA;EACA,sBAAA;EACA,gBAAA;EACA,uBAAA;EACA,qBAAA;EACA,SAAA;EACA,uBAAA;EAAA,kBAAA;AA+BF;;AA5BA;EACE,gBAAA;EACA,YAAA;EACA,sBAAA;KAAA,mBAAA;EACA,SAAA;EACA,uBAAA;EACA,gBAAA;EACA,YAAA;EACA,+BAAA;AA+BF;AA7BE;EACE,sBAAA;AA+BJ;;AA1BA;EACE,eAAA;EACA,cAAA;AA6BF;AA3BE;EACE,kBAAA;EACA,iBAAA;EACA,qBAAA;EACA,iBAtoBE;AAmqBN;AA3BI;EACE,gBAAA;AA6BN;;AAvBA;EACE,wCAAA;EACA,6BAAA;EACA,4CAAA;EACA,mBAAA;EACA,yCAAA;EAEA,kBAAA;EACA,YAAA;AAyBF;AAvBE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;EACA,mBAAA;EACA,UAAA;EACA,kBAAA;EACA,oHAAA;AAyBJ;AAtBE;EAEE,uBAAA;EACA,SAAA;EACA,gBAAA;EACA,gBAAA;EACA,UAAA;EAEA,aAAA;EACA,0CAAA;EACA,uBAAA;OAAA,kBAAA;EACA,kBAAA;EACA,kBAAA;AAsBJ;AApBI;EAEE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,2BAAA;EACA,oBAAA;EACA,oBAAA;AAqBN;AAlBI;EACE,WAAA;EACA,YAAA;EACA,+BAAA;EACA,4CAAA;EACA,UAAA;AAoBN;AAjBI;EACE,WAAA;EACA,YAAA;EACA,iCAAA;EACA,wFAAA;EACA,UAAA;AAmBN;AAfE;EACE,oBAAA;EACA,mBA/sBI;EAgtBJ,kBAAA;EACA,iBAAA;AAiBJ;AAfE;EAAiB,gBAAA;EAAkB,iBAptB/B;EAotB4C,uBAAA;AAoBlD;AAnBE;EAAgB,mBAAA;AAsBlB;AApBE;EAhsBA,0BApBQ;EAqBR,+BAAA;EACA,4BAAA;EACA,mGAAA;EA+rBE,6BAAA;EACA,oCAAA;EAGA,UAAA;EACA,2BAAA;EACA,oDAAA;AAuBJ;AA3tBE;EAAU,qCAAA;EAAuC,oCAAA;EAAgC,2BAAA;AAguBnF;AA1BI;EACE,UAAA;EACA,eAAA;AA4BN;AAxBE;EAAiB,SAAA;EAAW,iBAAA;EAAmB,gBAAA;AA6BjD;AA5BE;EAAgB,mBAAA;EAAoB,mBAvuB9B;EAuuB6C,kBAAA;AAiCrD;AA/BE;EACE;IAAiB,UAAA;IAAY,eAAA;IAAiB,gBAAA;EAoChD;AACF;AAnwBkB;EAkoBlB;IAgGI,gBAAA;IACA,gBAAA;IAEA,qBAAA;EAoCF;EAlCE;IAAY,mBAAA;EAqCd;EAnCE;IACE,0BAAA;IACA,eAAA;EAqCJ;EAlCE;IAAiB,mBA1vBb;EA+xBN;EApCE;IAAiB,iBA5vBf;EAmyBJ;AACF;;AAnCA;EACE,aAAA;EACA,YAAA;EACA,mBAAA;EACA,qCAAA;AAsCF;AApCE;EAhvBA,0BApBQ;EAqBR,+BAAA;EACA,4BAAA;EACA,mGAAA;EA+uBE,UAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;AAyCJ;AA5xBE;EAAU,qCAAA;EAAuC,oCAAA;EAAgC,2BAAA;AAiyBnF;AA3CE;EAhBF;IAiBI,qCAAA;EA8CF;AACF;AAnzBuB;EAmvBvB;IAqBI,0BAAA;EA+CF;AACF;;AA3CA;EACE,WAAA;EACA,aAAA;EACA,mCAAA;EACA,sCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;AA8CF;AA5CE;EACE,WAAA;EACA,kBAAA;EACA,QAAA;EACA,yEAAA;EACA,oBAAA;AA8CJ;;AA1CA;EACE,oBAAA;EACA,uBAAA;EAAA,kBAAA;EACA,mBAAA;EACA,mCAAA;EACA,yCAAA;EACA,wBAvzBU;EAwzBV,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;EACA,kBAAA;AA6CF;;AA1CA;EACE,mBAh0BM;EAi0BN,kBAAA;EACA,mBAAA;AA6CF;;AA1CA;EACE,yCAAA;EACA,mBAv0BM;AAo3BR;;AA1CA;EACE,gBAAA;AA6CF;;AA1CA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;KAAA,iBAAA;EACA,iDAAA;AA6CF;AA3CE;EACE,sBAAA;EACA,uBAAA;AA6CJ;;AAvCE;;;;;;EAME,oBAAA;EACA,qBAAA;AA0CJ;AAvCE;EACE,kBAAA;AAyCJ;AAtCE;EACE,uBAAA;AAwCJ;;AApCA;EACE,gBAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;AAuCF;AArCE;EACE,+BAAA;EACA,mCAAA;EACA,mBA13BI;EA23BJ,wBAAA;EACA,oBAAA;EACA,kBAAA;AAuCJ;;AAnCA;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;AAsCF;;AAlCA;EACE,aAAA;EACA,gDAAA;EACA,WAAA;EACA,mBAAA;AAqCF;AAp6BuB;EA23BvB;IAOI,0BAAA;EAsCF;AACF;;AAnCA;EA73BE,0BApBQ;EAqBR,+BAAA;EACA,4BAAA;EACA,mGAAA;EA43BA,eAAA;EACA,oCAAA;EACA,aAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;AAyCF;AAz6BE;EAAU,qCAAA;EAAuC,oCAAA;EAAgC,2BAAA;AA86BnF;AA57BkB;EAu4BlB;IAUI,sBAAA;IACA,SAAA;EA+CF;AACF;;AA5CA;EACE,cAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,qFAAA;EACA,wCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AA+CF;AA7CE;EACE,iBAAA;EACA,oBAn7BK;AAk+BT;;AA3CA;EACE,OAAA;EACA,YAAA;AA8CF;AA5CE;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,iBA57BE;AA0+BN;;AA1CA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;EACA,YAAA;AA6CF;;AA1CA;EACE,oBAAA;EACA,mBAAA;EACA,YAAA;EACA,sBAAA;EACA,yCAAA;EACA,+BAAA;EACA,oBAAA;EACA,iBAh9BI;EAi9BJ,iBAAA;EACA,gBAAA;EACA,yBAAA;AA6CF;AA3CE;EACE,eAAA;EACA,oBA19BK;AAugCT;AA1CE;EACE,kCAAA;EACA,oCAAA;EACA,2BAAA;AA4CJ;;AAvCA;EAAsB,kBAAA;EAAoB,gBAAA;EAAkB,gBAAA;EAAkB,mBAAA;AA8C9E;;AA7CA;EAAoB,kBAAA;EAAoB,gBAAA;EAAkB,mBAAA;EA58BxD,0BApBQ;EAqBR,+BAAA;EACA,4BAAA;EACA,mGAAA;EAy8BiG,oCAAA;AAwDnG;AAhgCE;EAAU,qCAAA;EAAuC,oCAAA;EAAgC,2BAAA;AAqgCnF;;AA5DA;EAAkB,aAAA;EAAe,sCAAA;AAiEjC;;AAhEA;EACE,eAAA;EAAiB,cAAA;EAAgB,kBAAA;EAAoB,aAAA;EAAe,kBAAA;EACpE,sLACE;EAEF,qBAAA;EACA,2BAAA;AAqEF;AApEE;EAAW,cAAA;AAuEb;AA/hCE;EAAY,WAAA;EAAa,kBAAA;EAAoB,QAAA;EAAU,0CAAA;EAAmD,UAAA;AAsiC5G;AA5EE;EAAgB,kBAAA;EAAoB,UAAA;AAgFtC;;AA7EA;EAAgB,SAAA;AAiFhB;;AAhFA;EAAkB,qBAAA;EAAuB,yBAr/BhC;EAq/BqD,WAAA;EAAa,uBAAA;EAAyB,mBAAA;EAAqB,gBAAA;EAAkB,iBAAA;EAAmB,sBAAA;EAAwB,yBAAA;EAA2B,qBAAA;AA6FjN;;AA5FA;EAAiB,wBAr/BL;EAq/BwB,kBAAA;EAAoB,gBAAA;EAAkB,qBAAA;EAAsB,iBAAA;EAAmB,uBAAA;AAqGnH;;AApGA;EAAoB,mBAn/BZ;EAm/B2B,kBAAA;EAAoB,qBAAA;EAAuB,eAAA;AA2G9E;;AA1GA;EAAuB,iBAr/BjB;EAq/B8B,gBAAA;EAAkB,eAAA;EAAiB,sBAAA;EAAwB,eAAA;EAAiB,gBAAA;AAmHhH;;AAlHA;EACE,oBAAA;EACA,qBAAA;EACA,4BAAA;EACA,gBAAA;AAqHF;;AAnHA;EAAiB,aAAA;EAAe,2BAAA;EAA6B,YAAA;EAAa,eAAA;EAAiB,gBAAA;EAAkB,mBAAA;AA4H7G;;AA1HA;EACE,kBAAA;EAAoB,QAAA;EAAU,2BAAA;EA7+BX,aAAA;EAAe,mBAAA;EAAqB,uBAAA;EA8+BvD,yCAAA;EAA2C,+BAAA;EAA2B,iBAhgClE;EAigCJ,WAAA;EAAa,YAAA;EAAc,kBAAA;EAAoB,eAAA;EAAiB,iBAAA;EAAmB,iBAAA;EACnF,yBAAA;EAA2B,WAAA;AA0I7B;AAzIE;EAAU,yBAtgCH;EAsgCwB,WAAA;EAAa,2BAtgCrC;EAsgC4D,sCAAA;AA+IrE;AA9IE;EAAkB,gCAAA;EAA4B,mBAAA;AAkJhD;AAjJE;EAAU,aAAA;AAoJZ;AAnJE;EAAU,cAAA;AAsJZ;AA9oCuB;EAg/BvB;IAUI,aAAA;IAAe,cAAA;IAAgB,iBAAA;EA0JjC;EAzJE;IAAU,cAAA;EA4JZ;EA3JE;IAAU,eAAA;EA8JZ;AACF;;AA3JA;EAAuB,aAAA;EAAe,uBAAA;EAAyB,WAAA;EAAa,gBAAA;AAkK5E;;AAjKA;EACE,WAAA;EAAa,YAAA;EAAc,kBAAA;EAAoB,8BAAA;EAA0B,uBAAA;EAAyB,eAAA;EAAiB,yBAAA;AA0KrH;AAzKE;EAAU,2BAphCH;EAohC0B,kCAAA;AA6KnC;AA5KE;EAAW,yBArhCJ;EAqhCyB,2BArhCzB;AAqsCT;AA/KE;EAAkB,gCAAA;EAA4B,mBAAA;AAmLhD;;AA/KA;EACE,eAAA;EACA,mBAxhCM;EAyhCN,kBAAA;EACA,0BAxhCQ;EAyhCR,mCAAA;AAkLF;AAhLE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAkLJ;AA/KE;EACE,QAAA;AAiLJ;;AA5KA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;EACA,QAAA;AA+KF;AA7KE;EA/hCmB,aAAA;EAAe,mBAAA;EAAqB,uBAAA;EAiiCrD,cAAA;EACA,eAAA;EACA,kBAAA;EACA,uBAAA;EACA,+BAAA;EACA,iBAxjCE;EAyjCF,qBAAA;EACA,iBAAA;EACA,yBAAA;AAiLJ;AA/KI;EACE,mCAAA;EACA,oCAAA;EACA,oBAnkCG;EAokCH,2BAAA;AAiLN;AA9KI;EACE,gCAAA;EACA,mBAAA;AAgLN;;AA5KA;EACE,kBAAA;EAAoB,gBAAA;EAAkB,cAAA;AAiLxC;AAhLE;EACE,wBA/kCQ;EAglCR,uCAAA;EACA,oBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;AAkLJ;AAhLE;EAAiB,kBAAA;EAAoB,iBAAA;EAAmB,oBAAA;EAAsB,iBAplC1E;AA0wCN;;AAlLA;EAjkCE,0BApBQ;EAqBR,+BAAA;EACA,4BAAA;EACA,mGAAA;EAgkCA,aAAA;EACA,oCAAA;EACA,gBAAA;AAwLF;AAzvCE;EAAU,qCAAA;EAAuC,oCAAA;EAAgC,2BAAA;AA8vCnF;;AA1LA;EACE,aAAA;EACA,qCAAA;EACA,gBAAA;EACA,mBAAA;AA6LF;AAnxCkB;EAklClB;IAOI,0BAAA;IACA,YAAA;EA8LF;AACF;;AA3LA;EACE,aAAA;EACA,uBAAA;EACA,SAAA;AA8LF;AA5LE;EACE,iBAAA;EACA,oBArnCK;EAsnCL,kBAAA;EACA,cAAA;AA8LJ;AA3LE;EACE,qBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBA1nCI;EA2nCJ,yBAAA;EACA,sBAAA;AA6LJ;AA1LE;EACE,SAAA;EACA,iBAloCE;EAmoCF,eAAA;EACA,gBAAA;EACA,qBAAA;EACA,2BAAA;AA4LJ;AA1LI;EACE,oBA5oCG;AAw0CT;AAxLE;EACE,iBA9oCE;AAw0CN;;AAtLA;EACE,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;AAyLF;;AAtLA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,+BAAA;EACA,yCAAA;EACA,mBAjqCM;EAkqCN,eAAA;EACA,+FAAA;AAyLF;AAvLE;EACE,mCAAA;EACA,qCAAA;EACA,wBA3qCQ;AAo2CZ;AAtLE;EAAW,0BAAA;AAyLb;AAxLE;EAAkB,gCAAA;EAA4B,mBAAA;AA4LhD;;AAzLA;EACE,gBAAA;EACA,kBAAA;EACA,mBAlrCM;EAmrCN,iBAAA;EACA,mBAAA;AA4LF;;AAxLA;;;;;EAKE,aAAA;AA2LF","sourcesContent":["// Theme: CSS custom properties (enables light/dark toggle)\n:root {\n  --bg: #0a0e27;\n  --surface: #0f1428;\n  --ink: #f5f7fb;\n  --muted: #a7b0c0;\n  --border: #1e2139;\n  --yellow: #ffd200;\n  /* Accent color for text/icons. In light mode, pure yellow on white fails contrast. */\n  --yellow-ink: #ffd200;\n  --yellow-hover: #ffe033;\n  --red: #c1121f;\n  --shadow: rgba(0, 0, 0, 0.35);\n  --surface-rgb: 15, 20, 40;\n  --radius: 1rem;\n  \n  // Gradient colors\n  --gradient-1: rgba(99, 102, 241, 0.1);\n  --gradient-2: rgba(168, 85, 247, 0.08);\n  --gradient-3: rgba(236, 72, 153, 0.06);\n}\n[data-theme=\"light\"] {\n  --bg: #f8fafc;\n  --surface: #ffffff;\n  --ink: #1a1d24;\n  --muted: #5c6370;\n  --border: #e2e6ee;\n  --shadow: rgba(0, 0, 0, 0.08);\n  --surface-rgb: 255, 255, 255;\n  --yellow-ink: #8a5200;\n  --yellow-hover: #e6bd00;\n  \n  // Light theme gradients\n  --gradient-1: rgba(99, 102, 241, 0.05);\n  --gradient-2: rgba(168, 85, 247, 0.04);\n  --gradient-3: rgba(236, 72, 153, 0.03);\n}\n\n// SCSS variables mapped to CSS vars (rest of file unchanged)\n$yellow: var(--yellow);\n$yellowInk: var(--yellow-ink);\n$red: var(--red);\n$ink: var(--ink);\n$muted: var(--muted);\n$bg: var(--bg);\n$surface: var(--surface);\n$border: var(--border);\n$shadow: var(--shadow);\n$font-base: 16px;\n$line-height: 1.6;\n$maxw: 1100px;\n$nav-h: 72px;\n$nav-h-small: 56px; \n\n@mixin respond($bp) {\n  @if $bp == sm { @media (max-width: 640px) { @content; } }\n  @else if $bp == md { @media (max-width: 900px) { @content; } }\n  @else if $bp == lg { @media (max-width: 1200px) { @content; } }\n}\n\n@mixin flex-center { display: flex; align-items: center; justify-content: center; }\n@mixin overlay($opacity: 0.85) {\n  &::before { content: ''; position: absolute; inset: 0; background: rgba(var(--surface-rgb), #{$opacity}); z-index: 1; }\n}\n@mixin card-base {\n  background: $surface;\n  border: 1px solid $border;\n  border-radius: var(--radius);\n  transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease, background .2s ease;\n  &:hover { border-color: rgba(255, 210, 0, 0.28); box-shadow: 0 6px 18px $shadow; transform: translateY(-1px); }\n}\n@mixin btn-hover { \n  &:hover { background: $yellow; color: #111; border-color: $yellow; }\n  &:focus-visible { outline: 2px solid $yellow; outline-offset: 2px; }\n}\n\n//Base styles\n*, *::before, *::after { box-sizing: border-box; }\nhtml { scroll-behavior: smooth; color-scheme: dark; }\n[data-theme=\"light\"] { color-scheme: light; }\nbody {\n  margin: 0;\n  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\";\n  font-size: $font-base;\n  line-height: $line-height;\n  color: $ink;\n  position: relative;\n  background:\n    linear-gradient(135deg, #070a1d 0%, $bg 55%, #0b1233 100%);\n  background-attachment: fixed;\n  text-rendering: optimizeLegibility;\n  display: flex;\n  min-height: 100vh;\n}\n[data-theme=\"light\"] body {\n  background:\n    linear-gradient(180deg, #bfe6ff 0%, #d8f0ff 45%, #f8fafc 100%);\n  background-attachment: fixed;\n}\n\n// Background decoration layers (stars in dark, clouds in light)\nbody::before,\nbody::after {\n  content: \"\";\n  position: fixed;\n  inset: 0;\n  pointer-events: none;\n  z-index: -1;\n}\n\n// Stars (dark mode)\nbody::before {\n  opacity: 0.85;\n  background-image:\n    radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,0.75) 60%, transparent 61%),\n    radial-gradient(1px 1px at 80px 45px, rgba(255,255,255,0.55) 60%, transparent 61%),\n    radial-gradient(1px 1px at 60px 90px, rgba(255,255,255,0.35) 60%, transparent 61%),\n    radial-gradient(2px 2px at 110px 130px, rgba(255,255,255,0.28) 60%, transparent 61%);\n  background-size: 160px 160px;\n  background-position: 0 0;\n  filter: drop-shadow(0 0 2px rgba(255,255,255,0.18));\n}\nbody::after {\n  opacity: 1;\n  background:\n    radial-gradient(900px 500px at 15% 10%, rgba(255, 210, 0, 0.08), transparent 55%),\n    radial-gradient(900px 500px at 85% 20%, rgba(99, 102, 241, 0.10), transparent 60%),\n    radial-gradient(900px 600px at 50% 90%, rgba(236, 72, 153, 0.06), transparent 60%);\n}\n\n[data-theme=\"light\"] body::before {\n  opacity: 0.9;\n  filter: blur(0.2px);\n  background:\n    radial-gradient(220px 140px at 10% 22%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 65%),\n    radial-gradient(300px 180px at 32% 14%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 66%),\n    radial-gradient(280px 170px at 60% 20%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 68%),\n    radial-gradient(340px 200px at 84% 16%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 66%);\n}\n[data-theme=\"light\"] body::after {\n  background:\n    radial-gradient(380px 240px at 18% 38%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%),\n    radial-gradient(420px 260px at 55% 42%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 72%),\n    radial-gradient(420px 260px at 86% 46%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 72%);\n  opacity: 0.75;\n  filter: blur(0.6px);\n}\n.container { width: min(#{$maxw}, 92%); margin: 0 auto; }\na { color: inherit; }\n\n// Main content wrapper\n.main-content {\n  flex: 1;\n  margin-left: 200px;\n  width: calc(100% - 200px);\n  \n  @include respond(md) {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n\n// Sidebar Navigation\n.sidebar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 200px;\n  background: rgba(var(--surface-rgb), 0.95);\n  backdrop-filter: saturate(120%) blur(10px);\n  border-right: 1px solid $border;\n  display: flex;\n  flex-direction: column;\n  z-index: 9999;\n  transition: transform 0.3s ease;\n  \n  @include respond(md) {\n    transform: translateX(-100%);\n    \n    &.sidebar-open {\n      transform: translateX(0);\n    }\n  }\n}\n\n.sidebar-header {\n  padding: 1.5rem 1rem 1rem;\n  border-bottom: 1px solid $border;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.sidebar-brand {\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: .6rem;\n\n  .brand-avatar {\n    width: 2.1rem;\n    height: 2.1rem;\n    border-radius: 999px;\n    object-fit: cover;\n    display: block;\n    border: 1px solid rgba(255, 210, 0, 0.25);\n    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);\n    background: rgba(var(--surface-rgb), 0.6);\n  }\n\n  .brand-name {\n    font-weight: 750;\n    letter-spacing: -0.01em;\n    color: $ink;\n    font-size: 1rem;\n    line-height: 1;\n  }\n\n  &:hover .brand-name { color: $yellowInk; }\n}\n\n@include respond(sm) {\n  .sidebar-brand .brand-name { display: none; }\n}\n\n.sidebar .theme-toggle {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  padding: 0;\n  border: 0;\n  border-radius: .5rem;\n  background: transparent;\n  color: $ink;\n  cursor: pointer;\n  font-size: 1.1rem;\n  transition: background .2s ease, color .2s ease;\n  \n  &:hover {\n    background: rgba(255, 210, 0, 0.12);\n    color: $yellowInk;\n  }\n  \n  &:focus-visible {\n    outline: 2px solid $yellow;\n    outline-offset: 2px;\n  }\n  \n  .theme-toggle-icon--sun { display: none; }\n  .theme-toggle-icon--moon { display: inline; }\n}\n\n[data-theme=\"light\"] .sidebar .theme-toggle .theme-toggle-icon--sun { display: inline; }\n[data-theme=\"light\"] .sidebar .theme-toggle .theme-toggle-icon--moon { display: none; }\n\n.sidebar-nav {\n  flex: 1;\n  padding: 1.5rem 0;\n  overflow-y: auto;\n}\n\n.nav-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.nav-link {\n  display: block;\n  padding: 0.75rem 1rem;\n  color: $ink;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: background .2s ease, color .2s ease, padding-left .2s ease;\n  border-left: 3px solid transparent;\n  \n  &:hover {\n    background: rgba(255, 210, 0, 0.08);\n    color: $yellowInk;\n    padding-left: 1.25rem;\n  }\n  \n  &.is-active {\n    background: rgba(255, 210, 0, 0.12);\n    color: $yellowInk;\n    border-left-color: $yellowInk;\n    padding-left: 1.25rem;\n  }\n}\n\n// Sidebar social icons (restored)\n.sidebar-social {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem 1rem 0.5rem;\n  border-top: 1px solid $border;\n  margin-top: auto; /* Push to bottom if needed, though sidebar-nav has flex: 1 */\n  \n  a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 2rem;\n    height: 2rem;\n    color: $muted;\n    font-size: 1.1rem;\n    border-radius: 50%;\n    transition: all 0.2s ease;\n    \n    &:hover {\n      color: $yellowInk;\n      background: rgba(255, 210, 0, 0.1);\n    }\n  }\n}\n\n.sidebar-footer-text {\n  padding: 0.5rem 1rem 1.5rem;\n  text-align: center;\n  \n  small {\n    display: block;\n    color: $muted;\n    font-size: 0.7rem;\n    line-height: 1.5;\n    opacity: 0.8;\n  }\n}\n\n.sidebar-toggle {\n  display: none;\n  position: fixed;\n  top: 1rem;\n  left: 1rem;\n  z-index: 10000;\n  background: rgba(var(--surface-rgb), 0.95);\n  backdrop-filter: saturate(120%) blur(10px);\n  border: 1px solid $border;\n  border-radius: .5rem;\n  padding: .75rem;\n  cursor: pointer;\n  transition: background .2s ease;\n  \n  &:hover {\n    background: rgba(var(--surface-rgb), 1);\n  }\n  \n  &:focus-visible {\n    outline: 2px solid $yellow;\n    outline-offset: 2px;\n  }\n  \n  .bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    background: $ink;\n    transition: transform .2s ease, opacity .2s ease;\n    \n    & + .bar {\n      margin-top: 5px;\n    }\n  }\n  \n  &[aria-expanded=\"true\"] {\n    .bar:nth-child(1) { transform: translateY(7px) rotate(45deg); }\n    .bar:nth-child(2) { opacity: 0; }\n    .bar:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }\n  }\n  \n  @include respond(md) {\n    display: block;\n  }\n}\n\n// Hide old header\n.site-header {\n  display: none;\n}\n\n//sections\n.section {\n  padding: clamp(72px, 10vh, 120px) 0; border-bottom: 1px solid $border;\n  \n  &--hero {\n    min-height: 60vh; display: grid; place-items: center; position: relative; text-align: center;\n    background-image:\n      radial-gradient(1400px 400px at 10% -10%, rgba(255, 210, 0, 0.06), transparent 55%),\n      radial-gradient(1400px 400px at 90% 10%, rgba(193, 18, 31, 0.05), transparent 55%);\n    background-size: auto;\n    background-position: center;\n    @include overlay(0.2);\n    .container { position: relative; z-index: 1; }\n    .eyebrow { \n      margin: 0 0 1rem 0; \n      color: $yellowInk; \n      letter-spacing: .02em;\n      font-size: .95rem; \n      font-family: 'Courier New', monospace;\n      font-weight: 600;\n    }\n    .hero-heading { \n      font-size: clamp(2.5rem, 5vw, 4rem); \n      font-weight: 750; \n      margin: 0 0 1.25rem 0; \n      letter-spacing: -0.03em;\n      line-height: 1.15;\n    }\n    .hero-intro { \n      color: $ink; \n      font-size: clamp(1.05rem, 2vw, 1.2rem); \n      margin: 0 auto 1.5rem; \n      max-width: 70ch;\n      line-height: 1.65;\n    }\n    .hero-badges {\n      display: flex;\n      gap: .75rem;\n      justify-content: center;\n      flex-wrap: wrap;\n      margin-bottom: 2rem;\n    }\n    .hero-actions { display: flex; gap: .75rem; justify-content: center; flex-wrap: wrap; margin-top: 1.25rem; }\n    .hero-pills {\n      display: flex;\n      justify-content: center;\n      gap: .5rem;\n      flex-wrap: wrap;\n      margin-top: .75rem;\n      margin-bottom: 1.25rem;\n    }\n    .hero-pill {\n      display: inline-flex;\n      align-items: center;\n      gap: .45rem;\n      padding: .45rem .75rem;\n      border-radius: 999px;\n      background: rgba(var(--surface-rgb), 0.6);\n      border: 1px solid $border;\n      color: $ink;\n      font-size: .9rem;\n      font-weight: 650;\n\n      i { color: $yellowInk; font-size: .95rem; }\n    }\n    .hero-social {\n      display: flex;\n      gap: 1rem;\n      justify-content: center;\n      flex-wrap: wrap;\n      margin-top: 2rem;\n    }\n  }\n\n  &--alt {\n    background: rgba(var(--surface-rgb), 0.3);\n  }\n\n  &--accent {\n    position: relative;\n    background-image:\n      radial-gradient(1200px 400px at 30% 10%, rgba(255, 210, 0, 0.05), transparent 55%),\n      radial-gradient(900px 350px at 80% 100%, rgba(193, 18, 31, 0.04), transparent 55%);\n    @include overlay(0.4);\n    .container { position: relative; z-index: 1; }\n  }\n}\n\n//Section headers\n.section-header { margin: 0 0 2rem 0; }\n.section-title {\n  margin: 0 0 .5rem 0;\n  font-size: clamp(1.5rem, 2.8vw, 2rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  position: relative;\n\n  &::before {\n    content: \"/ \";\n    color: $yellowInk;\n    font-weight: 750;\n  }\n}\n.section-subtitle { margin: 0; color: $muted; max-width: 70ch; font-size: 0.98rem; }\n\n//Buttons\n.btn {\n  display: inline-flex; align-items: center; justify-content: center;\n  gap: .5rem;\n  padding: .75rem 1rem;\n  border-radius: .8rem;\n  text-decoration: none;\n  border: 1px solid $border;\n  background: $surface;\n  color: $ink;\n  font-weight: 650;\n  transition: transform .06s ease, background .2s ease, border-color .2s ease, color .2s ease, box-shadow .2s ease;\n  @include btn-hover;\n  &:active { transform: translateY(1px); }\n\n  &--primary {\n    background: $yellow;\n    border-color: $yellow;\n    color: #111;\n    &:hover { background: var(--yellow-hover); border-color: var(--yellow-hover); }\n  }\n\n  &--ghost {\n    background: transparent;\n    &:hover { background: rgba(255, 210, 0, 0.12); border-color: rgba(255, 210, 0, 0.35); color: $yellowInk; }\n  }\n\n  &--small {\n    padding: .5rem .75rem;\n    border-radius: .7rem;\n    font-size: .9rem;\n  }\n}\n\n// Status badges\n.status-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: .5rem;\n  padding: .5rem 1rem;\n  border-radius: 999px;\n  background: rgba(var(--surface-rgb), 0.6);\n  border: 1px solid $border;\n  color: $muted;\n  font-size: .9rem;\n  font-weight: 600;\n  \n  &--active {\n    background: rgba(255, 210, 0, 0.12);\n    border-color: rgba(255, 210, 0, 0.3);\n    color: $yellowInk;\n    \n    i {\n      animation: pulse 2s ease-in-out infinite;\n      font-size: .6rem;\n    }\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { opacity: 1; }\n  50% { opacity: 0.5; }\n}\n\n// Social links in hero\n.social-link {\n  display: inline-flex;\n  align-items: center;\n  gap: .5rem;\n  padding: .6rem 1rem;\n  border-radius: .7rem;\n  border: 1px solid $border;\n  background: rgba(var(--surface-rgb), 0.6);\n  color: $ink;\n  text-decoration: none;\n  font-size: .95rem;\n  font-weight: 600;\n  transition: background .2s ease, border-color .2s ease, color .2s ease, transform .15s ease;\n  \n  &:hover {\n    background: rgba(255, 210, 0, 0.12);\n    border-color: rgba(255, 210, 0, 0.4);\n    color: $yellow;\n    transform: translateY(-2px);\n  }\n  \n  &:focus-visible {\n    outline: 2px solid $yellow;\n    outline-offset: 2px;\n  }\n  \n  i {\n    font-size: 1.1rem;\n  }\n  \n  span {\n    @include respond(sm) {\n      display: none;\n    }\n  }\n}\n\n//Timeline (Education / Experience)\n.timeline { display: grid; gap: 1rem; margin-top: 1.5rem; }\n.timeline-item { @include card-base; padding: 1.25rem 1.25rem 1rem; box-shadow: 0 4px 16px $shadow; }\n.timeline-top { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; }\n.timeline-title { margin: 0; font-size: 1.2rem; font-weight: 700; color: $yellowInk; }\n.timeline-degree {\n  margin: .5rem 0 0 0;\n  color: $ink;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.timeline-meta { color: $muted; font-size: .95rem; }\n.timeline-bullets { \n  margin: .85rem 0 0 1.1rem; \n  color: $ink; \n  li { \n    margin: .35rem 0;\n    strong {\n      color: $muted;\n      font-weight: 650;\n    }\n  } \n}\n\n// Logo/Image placeholders for Education\n.timeline-logo {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  padding: .25rem;\n  background: transparent;\n  border-radius: 0.75rem;\n  border: 0;\n}\n\n.edu-logo {\n  max-width: 120px;\n  height: 80px;\n  object-fit: contain;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  filter: none;\n  transition: transform 0.2s ease;\n  \n  .timeline-item:hover & {\n    transform: scale(1.05);\n  }\n}\n\n// Education grid layout\n.timeline--grid {\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n  \n  @include respond(md) {\n    grid-template-columns: 1fr;\n  }\n}\n\n// Logo/Image for Experience\n.experience-logo {\n  display: flex;\n  justify-content: flex-start;\n  margin-bottom: 0.75rem;\n  padding: .25rem;\n  background: transparent;\n  border-radius: 0.5rem;\n  border: 0;\n  width: fit-content;\n}\n\n.company-logo {\n  max-width: 100px;\n  height: 50px;\n  object-fit: contain;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  filter: none;\n  transition: transform 0.2s ease;\n  \n  .timeline-main:hover & {\n    transform: scale(1.05);\n  }\n}\n\n// About section\n.about-content {\n  max-width: 70ch;\n  margin: 0 auto;\n  \n  p {\n    font-size: 1.05rem;\n    line-height: 1.75;\n    margin: 0 0 1.25rem 0;\n    color: $ink;\n    \n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n}\n\n// Split timeline variant (Experience): date/location on left, card on right\n.timeline--split {\n  --timeline-line: rgba(255, 210, 0, 0.22);\n  --timeline-dot: #{$yellow};\n  --timeline-dot-ring: rgba(255, 210, 0, 0.14);\n  --meta-col: 12.5rem;\n  --axis-x: calc(var(--meta-col) + 1.25rem);\n\n  position: relative;\n  gap: 1.25rem;\n\n  &::before {\n    content: \"\";\n    position: absolute;\n    top: .5rem;\n    bottom: .5rem;\n    left: var(--axis-x);\n    width: 2px;\n    border-radius: 2px;\n    background: linear-gradient(to bottom, transparent, var(--timeline-line) 10%, var(--timeline-line) 90%, transparent);\n  }\n\n  .timeline-item {\n    // override base card styling for this variant\n    background: transparent;\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n    padding: 0;\n\n    display: grid;\n    grid-template-columns: var(--meta-col) 1fr;\n    column-gap: 2.5rem;\n    align-items: start;\n    position: relative;\n\n    &::before,\n    &::after {\n      content: \"\";\n      position: absolute;\n      top: 1.1rem;\n      left: var(--axis-x);\n      transform: translateX(-50%);\n      border-radius: 999px;\n      pointer-events: none;\n    }\n\n    &::before {\n      width: 10px;\n      height: 10px;\n      background: var(--timeline-dot);\n      box-shadow: 0 0 0 1px rgba(17, 17, 17, 0.22);\n      z-index: 2;\n    }\n\n    &::after {\n      width: 30px;\n      height: 30px;\n      transform: translate(-50%, -10px);\n      background: radial-gradient(circle at center, var(--timeline-dot-ring), transparent 70%);\n      z-index: 1;\n    }\n  }\n\n  .timeline-side {\n    padding-top: .25rem;\n    color: $muted;\n    font-size: .95rem;\n    line-height: 1.35;\n  }\n  .timeline-date { font-weight: 650; color: $ink; letter-spacing: -0.01em; }\n  .timeline-loc { margin-top: .25rem; }\n\n  .timeline-main {\n    @include card-base;\n    padding: 1.25rem 1.25rem 1rem;\n    box-shadow: 0 4px 16px $shadow;\n\n    // Scroll reveal defaults (JS adds .is-visible)\n    opacity: 0;\n    transform: translateY(10px);\n    transition: opacity .55s ease, transform .55s ease;\n\n    &.is-visible {\n      opacity: 1;\n      transform: none;\n    }\n  }\n\n  .timeline-role { margin: 0; font-size: 1.1rem; font-weight: 700; }\n  .timeline-org { margin-top: .25rem; color: $muted; font-size: .98rem; }\n\n  @media (prefers-reduced-motion: reduce) {\n    .timeline-main { opacity: 1; transform: none; transition: none; }\n  }\n\n  @include respond(sm) {\n    --meta-col: 0rem;\n    --axis-x: 1.1rem;\n\n    padding-left: 2.25rem;\n\n    &::before { left: var(--axis-x); }\n\n    .timeline-item {\n      grid-template-columns: 1fr;\n      row-gap: .6rem;\n    }\n\n    .timeline-side { color: $muted; }\n    .timeline-date { color: $ink; }\n  }\n}\n\n// Projects grid (3 columns)\n.projects-grid {\n  display: grid;\n  gap: 1.25rem;\n  margin-top: 1.75rem;\n  grid-template-columns: repeat(3, 1fr);\n\n  .project-card {\n    @include card-base;\n    padding: 0;\n    text-align: left;\n    display: flex;\n    flex-direction: column;\n    min-height: 100%;\n    overflow: hidden;\n  }\n\n  @media (max-width: 1100px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @include respond(md) {\n    grid-template-columns: 1fr;\n  }\n}\n\n// Project image placeholder\n.project-image {\n  width: 100%;\n  height: 200px;\n  background: rgba(255, 210, 0, 0.05);\n  border-bottom: 1px solid $border;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  \n  &::after {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.28), transparent 55%);\n    pointer-events: none;\n  }\n}\n\n.projects-grid .project-kicker {\n  display: inline-flex;\n  width: fit-content;\n  margin-top: 1.25rem;\n  background: rgba(255, 210, 0, 0.12);\n  border: 1px solid rgba(255, 210, 0, 0.22);\n  color: $yellowInk;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n  font-weight: 750;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.projects-grid .project-subtitle {\n  color: $muted;\n  font-size: 0.98rem;\n  margin-bottom: 1rem;\n}\n\n.projects-grid .project-tags li {\n  background: rgba(var(--surface-rgb), 0.6);\n  color: $muted;\n}\n\n.projects-grid .project-links {\n  margin-top: auto;\n}\n\n.project-thumbnail {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease, filter 0.3s ease;\n  \n  .project-card:hover & {\n    transform: scale(1.05);\n    filter: brightness(1.1);\n  }\n}\n\n// Update project card content padding\n.project-card {\n  .project-kicker,\n  .project-title,\n  .project-subtitle,\n  .project-description,\n  .project-tags,\n  .project-links {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  \n  .project-kicker {\n    margin-top: 1.5rem;\n  }\n  \n  .project-links {\n    padding-bottom: 1.25rem;\n  }\n}\n\n.project-tags {\n  list-style: none;\n  padding: 0;\n  margin: 1rem 0 0;\n  display: flex;\n  gap: .5rem;\n  flex-wrap: wrap;\n\n  li {\n    border: 1px solid $border;\n    background: rgba(255, 210, 0, 0.06);\n    color: $muted;\n    padding: .25rem .55rem;\n    border-radius: 999px;\n    font-size: .85rem;\n  }\n}\n\n.projects-footer {\n  margin-top: 1.5rem;\n  display: flex;\n  justify-content: center;\n}\n\n// Skills section - Compact inline layout\n.skills-compact {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.5rem;\n  margin-top: 1.75rem;\n\n  @include respond(md) {\n    grid-template-columns: 1fr;\n  }\n}\n\n.skill-category-inline {\n  @include card-base;\n  padding: 1.5rem;\n  box-shadow: 0 4px 16px $shadow;\n  display: flex;\n  align-items: flex-start;\n  gap: 1.5rem;\n  height: 100%;\n  \n  @include respond(sm) {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n\n.skill-icon {\n  flex-shrink: 0;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(255, 210, 0, 0.15), rgba(255, 210, 0, 0.05));\n  border: 2px solid rgba(255, 210, 0, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  i {\n    font-size: 1.5rem;\n    color: $yellow;\n  }\n}\n\n.skill-content {\n  flex: 1;\n  min-width: 0;\n  \n  h3 {\n    margin: 0 0 1rem 0;\n    font-size: 1.1rem;\n    font-weight: 700;\n    color: $ink;\n  }\n}\n\n.skill-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  align-content: flex-start;\n  min-width: 0;\n}\n\n.skill-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.5rem 0.9rem;\n  background: rgba(var(--surface-rgb), 0.6);\n  border: 1px solid $border;\n  border-radius: 999px;\n  color: $ink;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n  \n  i {\n    font-size: 1rem;\n    color: $yellow;\n  }\n  \n  &:hover {\n    background: rgba(255, 210, 0, 0.1);\n    border-color: rgba(255, 210, 0, 0.3);\n    transform: translateY(-2px);\n  }\n}\n\n//Carousel\n.carousel-container { position: relative; margin-top: 3rem; max-width: 800px; margin: 3rem auto 0; }\n.carousel-wrapper { position: relative; overflow: hidden; border-radius: 1rem; @include card-base; box-shadow: 0 4px 20px $shadow; }\n.carousel-track { display: flex; transition: transform 0.5s ease-in-out; }\n.carousel-slide {\n  min-width: 100%; flex-shrink: 0; padding: 3rem 2rem; display: none; position: relative;\n  background-image:\n    radial-gradient(900px 300px at 30% 0%, rgba(255, 210, 0, 0.05), transparent 55%),\n    radial-gradient(900px 300px at 90% 100%, rgba(193, 18, 31, 0.04), transparent 55%);\n  background-size: auto;\n  background-position: center;\n  &.active { display: block; }\n  @include overlay(0.25);\n  .project-card { position: relative; z-index: 2; }\n}\n\n.project-card { margin: 0; }\n.project-kicker { display: inline-block; background: $yellow; color: #111; padding: 0.45rem 0.9rem; border-radius: 2rem; font-weight: 700; font-size: 0.8rem; margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.1em; }\n.project-title { color: $yellowInk; font-size: 1.45rem; font-weight: 750; margin: 0 0 .65rem 0; line-height: 1.25; letter-spacing: -0.02em; }\n.project-subtitle { color: $muted; font-size: 1.05rem; margin: 0 auto 1.5rem; max-width: 58ch; }\n.project-description { color: $ink; line-height: 1.7; font-size: 1rem; margin: 0 auto 1.75rem; max-width: 70ch; text-align: left; }\n.projects-grid .project-description {\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.project-links { display: flex; justify-content: flex-start; gap: .75rem; flex-wrap: wrap; margin-top: auto; padding-top: 1.1rem; }\n\n.carousel-btn {\n  position: absolute; top: 50%; transform: translateY(-50%); @include flex-center;\n  background: rgba(var(--surface-rgb), 0.9); border: 1px solid $border; color: $ink;\n  width: 3rem; height: 3rem; border-radius: 50%; cursor: pointer; font-size: 1.5rem; font-weight: bold;\n  transition: all 0.3s ease; z-index: 10;\n  &:hover { background: $yellow; color: #111; border-color: $yellow; transform: translateY(-50%) scale(1.1); }\n  &:focus-visible { outline: 2px solid $yellow; outline-offset: 2px; }\n  &--prev { left: -1.5rem; }\n  &--next { right: -1.5rem; }\n  @include respond(md) {\n    width: 2.5rem; height: 2.5rem; font-size: 1.2rem;\n    &--prev { left: -1.25rem; }\n    &--next { right: -1.25rem; }\n  }\n}\n\n.carousel-indicators { display: flex; justify-content: center; gap: 0.5rem; margin-top: 2rem; }\n.carousel-indicator {\n  width: 12px; height: 12px; border-radius: 50%; border: 2px solid $muted; background: transparent; cursor: pointer; transition: all 0.3s ease;\n  &:hover { border-color: $yellow; background: rgba(255, 210, 0, 0.3); }\n  &.active { background: $yellow; border-color: $yellow; }\n  &:focus-visible { outline: 2px solid $yellow; outline-offset: 2px; }\n}\n\n//Contact\n.site-footer { \n  padding: 2rem 0; \n  color: $muted; \n  text-align: center; \n  background: $surface; \n  border-top: 1px solid $border;\n  \n  .container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n  }\n  \n  small {\n    order: 2;\n  }\n}\n\n// Footer social icons\n.footer-social {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  order: 1;\n  \n  a {\n    @include flex-center;\n    width: 2.75rem;\n    height: 2.75rem;\n    border-radius: 50%;\n    background: transparent;\n    border: 1px solid $border;\n    color: $ink;\n    text-decoration: none;\n    font-size: 1.1rem;\n    transition: all .2s ease;\n    \n    &:hover {\n      background: rgba(255, 210, 0, 0.12);\n      border-color: rgba(255, 210, 0, 0.4);\n      color: $yellow;\n      transform: translateY(-2px);\n    }\n    \n    &:focus-visible {\n      outline: 2px solid $yellow;\n      outline-offset: 2px;\n    }\n  }\n}\n.contact-content {\n  text-align: center; max-width: 800px; margin: 0 auto;\n  h2 { \n    color: $yellowInk; \n    font-size: clamp(1.8rem, 3.5vw, 2.5rem); \n    margin: 0 0 1.5rem 0; \n    font-weight: 750; \n    letter-spacing: -0.02em;\n    line-height: 1.3;\n  }\n  .contact-intro { font-size: 1.05rem; line-height: 1.65; margin: 0 0 2.5rem 0; color: $ink; }\n}\n\n// Unified contact card\n.contact-card-unified {\n  @include card-base;\n  padding: 2rem;\n  box-shadow: 0 8px 32px $shadow;\n  text-align: left;\n}\n\n.contact-info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.5rem 2rem;\n  margin-bottom: 2rem;\n  \n  @include respond(sm) {\n    grid-template-columns: 1fr;\n    gap: 1.25rem;\n  }\n}\n\n.contact-info-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  \n  i {\n    font-size: 1.4rem;\n    color: $yellow;\n    margin-top: 0.2rem;\n    flex-shrink: 0;\n  }\n  \n  h3 {\n    margin: 0 0 0.35rem 0;\n    font-size: 0.9rem;\n    font-weight: 700;\n    color: $muted;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n  \n  a, p {\n    margin: 0;\n    color: $ink;\n    font-size: 1rem;\n    font-weight: 600;\n    text-decoration: none;\n    transition: color 0.2s ease;\n    \n    &:hover {\n      color: $yellow;\n    }\n  }\n  \n  p {\n    color: $ink;\n  }\n}\n\n.contact-inline {\n  display: inline-flex;\n  align-items: center;\n  gap: .5rem;\n  flex-wrap: wrap;\n}\n\n.contact-copy-btn--inline {\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: .6rem;\n  border: 1px solid $border;\n  background: rgba(var(--surface-rgb), 0.6);\n  color: $muted;\n  cursor: pointer;\n  transition: background .2s ease, color .2s ease, border-color .2s ease, transform .06s ease;\n\n  &:hover {\n    background: rgba(255, 210, 0, 0.12);\n    border-color: rgba(255, 210, 0, 0.35);\n    color: $yellowInk;\n  }\n\n  &:active { transform: translateY(1px); }\n  &:focus-visible { outline: 2px solid $yellow; outline-offset: 2px; }\n}\n\n.contact-copy-status {\n  margin: 1rem 0 0;\n  text-align: center;\n  color: $muted;\n  font-size: 0.9rem;\n  min-height: 1.25rem;\n}\n\n// Remove old contact styles\n.contact-methods,\n.contact-method,\n.contact-icon-links,\n.contact-icon-link,\n.contact-card {\n  display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <title>Aryaman Nasare | Portfolio</title>\n    <meta name=\"description\" content=\"Aryaman Nasare — Software Engineer specializing in automation, data systems, and AI.\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css\" />\n  </head>\n  <body>\n\n    <!-- Sidebar Navigation -->\n    <aside class=\"sidebar\" role=\"navigation\">\n      <div class=\"sidebar-header\">\n        <a href=\"#home\" class=\"sidebar-brand\">\n          <img\n            class=\"brand-avatar\"\n            src=\"https://github.com/aryabro.png?size=96\"\n            alt=\"Aryaman Nasare\"\n            width=\"34\"\n            height=\"34\"\n            loading=\"lazy\"\n            decoding=\"async\"\n            referrerpolicy=\"no-referrer\"\n          />\n          <span class=\"brand-name\">Aryaman</span>\n        </a>\n        <button class=\"theme-toggle\" type=\"button\" aria-label=\"Toggle light/dark theme\" aria-pressed=\"false\" title=\"Toggle theme\">\n          <span class=\"theme-toggle-icon theme-toggle-icon--sun\" aria-hidden=\"true\"><i class=\"fas fa-cloud-sun\"></i></span>\n          <span class=\"theme-toggle-icon theme-toggle-icon--moon\" aria-hidden=\"true\"><i class=\"fas fa-moon\"></i></span>\n        </button>\n      </div>\n\n      <nav class=\"sidebar-nav\" id=\"sidebar-nav\">\n        <ul class=\"nav-list\">\n          <li><a href=\"#home\" class=\"nav-link\">Home</a></li>\n          <li><a href=\"#about\" class=\"nav-link\">About</a></li>\n          <li><a href=\"#education\" class=\"nav-link\">Education</a></li>\n          <li><a href=\"#experience\" class=\"nav-link\">Experience</a></li>\n          <li><a href=\"#projects\" class=\"nav-link\">Projects</a></li>\n          <li><a href=\"#skills\" class=\"nav-link\">Skills</a></li>\n          <li><a href=\"#contact\" class=\"nav-link\">Contact</a></li>\n        </ul>\n      </nav>\n\n      <div class=\"sidebar-social\">\n        <a href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\" title=\"GitHub\">\n          <i class=\"fab fa-github\"></i>\n        </a>\n        <a href=\"https://www.linkedin.com/in/aryaman-nasare/\" target=\"_blank\" rel=\"noopener\" aria-label=\"LinkedIn\" title=\"LinkedIn\">\n          <i class=\"fab fa-linkedin\"></i>\n        </a>\n        <a href=\"mailto:nasare2@illinois.edu\" aria-label=\"Email\" title=\"Email\">\n          <i class=\"fas fa-envelope\"></i>\n        </a>\n      </div>\n      <div class=\"sidebar-footer-text\">\n        <small>© <span id=\"year\"></span> Aryaman Nasare.<br>Built with HTML, SCSS, and JavaScript.</small>\n      </div>\n\n      <button class=\"sidebar-toggle\" aria-label=\"Toggle sidebar\" aria-expanded=\"false\">\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n        <span class=\"bar\"></span>\n      </button>\n    </aside>\n\n    <!-- Main Content -->\n    <main id=\"content\" class=\"main-content\">\n      <section id=\"home\" class=\"section section--hero\">\n        <div class=\"container\">\n          <p class=\"eyebrow\">Aryaman Nasare</p>\n          <h1 id=\"home-title\" class=\"hero-heading\">\n            Software Engineer building<br>\n            reliable systems that scale\n          </h1>\n          <p class=\"hero-intro\">\n            I'm <strong>Aryaman Nasare</strong> — CS Grad @ UIUC (GPA 3.96/4.00). I build backend services, automation,\n            and applied AI features with an emphasis on reliability, performance, and clean engineering.\n          </p>\n\n          <div class=\"hero-pills\" aria-label=\"Focus areas\">\n            <span class=\"hero-pill\"><i class=\"fas fa-server\" aria-hidden=\"true\"></i> Backend & APIs</span>\n            <span class=\"hero-pill\"><i class=\"fas fa-gears\" aria-hidden=\"true\"></i> Automation / CI</span>\n            <span class=\"hero-pill\"><i class=\"fas fa-brain\" aria-hidden=\"true\"></i> AI + RAG</span>\n          </div>\n          \n          <div class=\"hero-badges\">\n            <span class=\"status-badge status-badge--active\">\n              <i class=\"fas fa-circle\" aria-hidden=\"true\"></i> Open for roles across US\n            </span>\n          </div>\n\n          <div class=\"hero-actions\">\n            <a class=\"btn btn--primary\" href=\"#projects\">View My Work</a>\n            <a class=\"btn btn--ghost\" href=\"#contact\">Contact</a>\n            <a class=\"btn btn--ghost\" href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\">GitHub</a>\n          </div>\n\n          <div class=\"hero-social\">\n            <a class=\"social-link\" href=\"mailto:nasare2@illinois.edu\" aria-label=\"Email\" title=\"Email\">\n              <i class=\"fas fa-envelope\" aria-hidden=\"true\"></i>\n              <span>Email</span>\n            </a>\n            <a class=\"social-link\" href=\"https://www.linkedin.com/in/aryaman-nasare/\" target=\"_blank\" rel=\"noopener\" aria-label=\"LinkedIn\" title=\"LinkedIn\">\n              <i class=\"fab fa-linkedin\" aria-hidden=\"true\"></i>\n              <span>LinkedIn</span>\n            </a>\n            <a class=\"social-link\" href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\" aria-label=\"GitHub\" title=\"GitHub\">\n              <i class=\"fab fa-github\" aria-hidden=\"true\"></i>\n              <span>GitHub</span>\n            </a>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"about\" class=\"section\">\n        <div class=\"container\">\n          <header class=\"section-header\">\n            <h2 id=\"about-title\" class=\"section-title\">About Me</h2>\n            <p class=\"section-subtitle\">Who I am and what I do.</p>\n          </header>\n\n          <div class=\"about-content\">\n            <p>\n              I'm a computer science graduate student at the University of Illinois Urbana-Champaign, focused on building \n              intelligent software that is reliable, scalable, and production-ready. My background spans software engineering, \n              automation, data systems, and AI.\n            </p>\n            <p>\n              I started my journey in India, where I worked on engineering projects and gained hands-on experience in cloud systems \n              and automation before moving to the U.S. to deepen my foundation in algorithms, systems, and applied AI.\n            </p>\n            <p>\n              I'm currently seeking software engineering roles where I can work on meaningful systems, learn from strong engineers, \n              and ship work that matters at scale.\n            </p>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"education\" class=\"section\">\n        <div class=\"container\">\n          <header class=\"section-header\">\n            <h2 id=\"education-title\" class=\"section-title\">Education</h2>\n            <p class=\"section-subtitle\">Academic background and coursework highlights.</p>\n          </header>\n\n          <div class=\"timeline timeline--grid\">\n            <article class=\"timeline-item\">\n              <div class=\"timeline-logo\">\n                <img src=\"assets/logos/uiuc-logo.png\" alt=\"University of Illinois Logo\" class=\"edu-logo\">\n              </div>\n              <div class=\"timeline-top\">\n                <h3 class=\"timeline-title\">University of Illinois Urbana-Champaign</h3>\n                <span class=\"timeline-meta\">Aug 2024 – Dec 2025 • Champaign, Illinois</span>\n              </div>\n              <div class=\"timeline-degree\">Master of Science in Computer Science</div>\n              <ul class=\"timeline-bullets\">\n                <li><strong>GPA:</strong> 3.96 / 4.00</li>\n                <li><strong>Relevant coursework:</strong> Cloud Computing Applications, Deep Learning for Computer Vision, Software Engineering</li>\n              </ul>\n            </article>\n\n            <article class=\"timeline-item\">\n              <div class=\"timeline-logo\">\n                <img src=\"assets/logos/pune-university-logo.png\" alt=\"Pune University Logo\" class=\"edu-logo\">\n              </div>\n              <div class=\"timeline-top\">\n                <h3 class=\"timeline-title\">Savitribai Phule Pune University</h3>\n                <span class=\"timeline-meta\">Aug 2019 – May 2023 • Pune, India</span>\n              </div>\n              <div class=\"timeline-degree\">Bachelor of Computer Engineering (Honors in Data Science)</div>\n              <ul class=\"timeline-bullets\">\n                <li><strong>GPA:</strong> 8.74 / 10.00</li>\n              </ul>\n            </article>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"experience\" class=\"section\">\n        <div class=\"container\">\n          <header class=\"section-header\">\n            <h2 id=\"experience-title\" class=\"section-title\">Experience</h2>\n            <p class=\"section-subtitle\">Work across automation, data systems, and backend engineering.</p>\n          </header>\n\n          <div class=\"timeline timeline--split\" aria-label=\"Experience timeline\">\n            <article class=\"timeline-item\">\n              <div class=\"timeline-side\" aria-label=\"Dates and location\">\n                <div class=\"timeline-date\">May 2025 – Dec 2025</div>\n                <div class=\"timeline-loc\">Champaign, Illinois</div>\n              </div>\n              <div class=\"timeline-main\">\n                <div class=\"experience-logo\">\n                  <img src=\"assets/logos/uiuc-logo.png\" alt=\"UIUC Logo\" class=\"company-logo\">\n                </div>\n                <h3 class=\"timeline-role\">Graduate Teaching Assistant</h3>\n                <div class=\"timeline-org\">University of Illinois Urbana-Champaign</div>\n                <ul class=\"timeline-bullets\">\n                  <li>Developed data systems assignments covering SQL schema design and indexing, NoSQL/graph systems (MongoDB, Neo4j), and Docker-based data curation workflows for 550+ students across two graduate courses.</li>\n                  <li>Engineered a Bash automation script using the GitHub REST API to parse user CSVs and batch-provision organization access, saving 15+ hours of manual onboarding effort.</li>\n                </ul>\n              </div>\n            </article>\n\n            <article class=\"timeline-item\">\n              <div class=\"timeline-side\" aria-label=\"Dates and location\">\n                <div class=\"timeline-date\">May 2025 – Aug 2025</div>\n                <div class=\"timeline-loc\">Remote (Miami, Florida)</div>\n              </div>\n              <div class=\"timeline-main\">\n                <div class=\"experience-logo\">\n                  <img src=\"assets/logos/ria-advisory-logo.png\" alt=\"RIA Advisory Logo\" class=\"company-logo\">\n                </div>\n                <h3 class=\"timeline-role\">Software Engineer Intern (Technology Track)</h3>\n                <div class=\"timeline-org\">RIA Advisory</div>\n                <ul class=\"timeline-bullets\">\n                  <li>Built 60+ end-to-end automation flows with Selenium to validate a SaaS test automation platform, using dynamic waits and strict assertions to reduce flakiness and expand regression coverage.</li>\n                  <li>Engineered a LangChain RAG pipeline indexing 200+ pages of internal technical guides into a FAISS vector store, enabling 20+ interns to self-resolve environment issues and reducing troubleshooting time by 33%.</li>\n                </ul>\n              </div>\n            </article>\n\n            <article class=\"timeline-item\">\n              <div class=\"timeline-side\" aria-label=\"Dates and location\">\n                <div class=\"timeline-date\">Jan 2024 – Jul 2024</div>\n                <div class=\"timeline-loc\">Navi Mumbai, India</div>\n              </div>\n              <div class=\"timeline-main\">\n                <div class=\"experience-logo\">\n                  <img src=\"assets/logos/jio-logo.png\" alt=\"Reliance Jio Logo\" class=\"company-logo\">\n                </div>\n                <h3 class=\"timeline-role\">Software Engineer Trainee</h3>\n                <div class=\"timeline-org\">Reliance Jio Platforms Ltd.</div>\n                <ul class=\"timeline-bullets\">\n                  <li>Orchestrated regression strategies for the JioPartnerWorld application (1M+ users), validating cloud-hosted microservices via Jenkins CI/CD pipelines and Jira-tracked end-to-end scenarios, reducing production defect leakage by 15%.</li>\n                  <li>Built a Selenium automation suite executed via AWS CodeBuild with parallelized cloud execution to cut test execution time by ~90% (saving 6+ minutes per cycle).</li>\n                  <li>Led root cause analysis across distributed systems by analyzing AWS CloudWatch logs and SAP IDoc failures, improving MTTR by 40% through cross-team collaboration.</li>\n                </ul>\n              </div>\n            </article>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"projects\" class=\"section\">\n        <div class=\"container\">\n          <header class=\"section-header\">\n            <h2 id=\"projects-title\" class=\"section-title\">Featured Projects</h2>\n            <p class=\"section-subtitle\">Code that solves real problems.</p>\n          </header>\n\n          <div class=\"projects-grid\" aria-label=\"Projects\">\n            <article class=\"project-card\">\n              <div class=\"project-image\">\n                <img src=\"https://via.placeholder.com/600x400/0a0e27/ffd200?text=InsightHub\" alt=\"InsightHub Project\" class=\"project-thumbnail\">\n              </div>\n              <div class=\"project-kicker\">Full-Stack</div>\n              <h3 class=\"project-title\">InsightHub</h3>\n              <div class=\"project-subtitle\">AI-powered team collaboration with secure docs + RAG chat/search.</div>\n              <p class=\"project-description\">\n                Designed and built a full-stack, multi-tenant platform for secure document management, team activity notifications, and AI-assisted chat.\n                Implemented JWT auth with centralized Express middleware for team-membership/creator authorization, plus CORS allowlisting for strict tenant isolation.\n                Added an embeddings + vector similarity RAG pipeline over uploaded documents for context-aware answers inside private workspaces.\n              </p>\n              <ul class=\"project-tags\" aria-label=\"Tech highlights\">\n                <li>JWT</li>\n                <li>Express</li>\n                <li>RAG</li>\n                <li>Vector search</li>\n                <li>Node.js</li>\n                <li>MongoDB</li>\n              </ul>\n              <div class=\"project-links\">\n                <a class=\"btn btn--small btn--ghost\" href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\">\n                  <i class=\"fab fa-github\" aria-hidden=\"true\"></i> View Code\n                </a>\n              </div>\n            </article>\n\n            <article class=\"project-card\">\n              <div class=\"project-image\">\n                <img src=\"https://via.placeholder.com/600x400/0a0e27/ffd200?text=GhibliDream\" alt=\"GhibliDream Project\" class=\"project-thumbnail\">\n              </div>\n              <div class=\"project-kicker\">Deep Learning</div>\n              <h3 class=\"project-title\">GhibliDream</h3>\n              <div class=\"project-subtitle\">Few-shot image generation via DreamBooth fine-tuning (Stable Diffusion 2.0).</div>\n              <p class=\"project-description\">\n                Built an end-to-end few-shot fine-tuning pipeline enabling Studio-Ghibli-style generation from only 5–7 image–text pairs; containerized with Docker for reproducible reruns.\n                Automated LLM-assisted caption rewriting across an 800+ image dataset and used a two-token identifier strategy to improve subject/background disentanglement, reaching 0.914 foreground CLIP similarity.\n              </p>\n              <ul class=\"project-tags\" aria-label=\"Tech highlights\">\n                <li>Stable Diffusion</li>\n                <li>DreamBooth</li>\n                <li>Docker</li>\n                <li>CLIP</li>\n                <li>PyTorch</li>\n              </ul>\n              <div class=\"project-links\">\n                <a class=\"btn btn--small btn--ghost\" href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\">\n                  <i class=\"fab fa-github\" aria-hidden=\"true\"></i> View Code\n                </a>\n              </div>\n            </article>\n\n            <article class=\"project-card\">\n              <div class=\"project-image\">\n                <img src=\"https://via.placeholder.com/600x400/0a0e27/ffd200?text=SWE-Agent\" alt=\"SWE-Agent Project\" class=\"project-thumbnail\">\n              </div>\n              <div class=\"project-kicker\">AI Agents</div>\n              <h3 class=\"project-title\">SWE-Agent</h3>\n              <div class=\"project-subtitle\">Autonomous code repair system using tool-driven LLM workflows.</div>\n              <p class=\"project-description\">\n                Extended the Mini-SWE-Agent framework to resolve GitHub issues by building 10 structured tools (regex search/replace, linter, memory search) for code navigation and patching via a tool-call protocol.\n                Achieved a 70% resolution rate (28/40) on SWE-bench Verified (Django, Matplotlib), improving 2.3× over baseline (12/40) with iterative validation inside a Docker sandbox.\n              </p>\n              <ul class=\"project-tags\" aria-label=\"Tech highlights\">\n                <li>LLM Tooling</li>\n                <li>Benchmarks</li>\n                <li>Docker</li>\n                <li>Automation</li>\n                <li>Python</li>\n              </ul>\n              <div class=\"project-links\">\n                <a class=\"btn btn--small btn--ghost\" href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\">\n                  <i class=\"fab fa-github\" aria-hidden=\"true\"></i> View Code\n                </a>\n              </div>\n            </article>\n          </div>\n          <div class=\"projects-footer\">\n            <a class=\"btn btn--ghost\" href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\">\n              <i class=\"fab fa-github\" aria-hidden=\"true\"></i> View all on GitHub\n            </a>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"skills\" class=\"section section--alt\">\n        <div class=\"container\">\n          <header class=\"section-header\">\n            <h2 id=\"skills-title\" class=\"section-title\">Technical Arsenal</h2>\n            <p class=\"section-subtitle\">Technologies and tools I work with.</p>\n          </header>\n\n          <div class=\"skills-compact\">\n            <div class=\"skill-category-inline\">\n              <div class=\"skill-icon\">\n                <i class=\"fas fa-code\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"skill-content\">\n                <h3>Programming</h3>\n                <div class=\"skill-tags\">\n                  <span class=\"skill-tag\"><i class=\"fab fa-python\"></i> Python</span>\n                  <span class=\"skill-tag\"><i class=\"fab fa-java\"></i> Java</span>\n                  <span class=\"skill-tag\"><i class=\"fab fa-js\"></i> JavaScript</span>\n                  <span class=\"skill-tag\"><i class=\"fab fa-node-js\"></i> TypeScript</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-terminal\"></i> C++</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-terminal\"></i> Bash</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-database\"></i> SQL</span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"skill-category-inline\">\n              <div class=\"skill-icon\">\n                <i class=\"fas fa-server\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"skill-content\">\n                <h3>Backend / Cloud</h3>\n                <div class=\"skill-tags\">\n                  <span class=\"skill-tag\"><i class=\"fab fa-aws\"></i> AWS</span>\n                  <span class=\"skill-tag\"><i class=\"fab fa-docker\"></i> Docker</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-dharmachakra\"></i> Kubernetes</span>\n                  <span class=\"skill-tag\"><i class=\"fab fa-node-js\"></i> Node.js</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-leaf\"></i> Spring Boot</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-database\"></i> MongoDB</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-database\"></i> MySQL</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-code-branch\"></i> CI/CD</span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"skill-category-inline\">\n              <div class=\"skill-icon\">\n                <i class=\"fas fa-brain\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"skill-content\">\n                <h3>AI / ML</h3>\n                <div class=\"skill-tags\">\n                  <span class=\"skill-tag\"><i class=\"fas fa-fire\"></i> PyTorch</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-brain\"></i> TensorFlow</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-link\"></i> LangChain</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-vector-square\"></i> RAG</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-search\"></i> FAISS</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-image\"></i> Stable Diffusion</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-eye\"></i> OpenCV</span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"skill-category-inline\">\n              <div class=\"skill-icon\">\n                <i class=\"fas fa-tools\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"skill-content\">\n                <h3>Automation & Testing</h3>\n                <div class=\"skill-tags\">\n                  <span class=\"skill-tag\"><i class=\"fas fa-robot\"></i> Selenium</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-flask\"></i> Pytest</span>\n                  <span class=\"skill-tag\"><i class=\"fab fa-github\"></i> GitHub API</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-terminal\"></i> Bash</span>\n                  <span class=\"skill-tag\"><i class=\"fas fa-check-circle\"></i> Test Frameworks</span>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <section id=\"contact\" class=\"section section--accent\">\n        <div class=\"container\">\n          <div class=\"contact-content\">\n            <h2 id=\"contact-title\">Let's build something that works at scale</h2>\n            <p class=\"contact-intro\">Want to collaborate, chat about a role, or discuss a project? Reach out to me here... </a></p>\n            \n            <div class=\"contact-card-unified\" aria-label=\"Contact information\">\n              <div class=\"contact-info-grid\">\n                <div class=\"contact-info-item\">\n                  <i class=\"fas fa-envelope\" aria-hidden=\"true\"></i>\n                  <div>\n                    <h3>Email</h3>\n                    <div class=\"contact-inline\">\n                      <a href=\"mailto:nasare2@illinois.edu\">nasare2@illinois.edu</a>\n                      <button\n                        class=\"contact-copy-btn contact-copy-btn--inline\"\n                        type=\"button\"\n                        data-copy=\"nasare2@illinois.edu\"\n                        aria-label=\"Copy email\"\n                        title=\"Copy email\"\n                      >\n                        <i class=\"fas fa-copy\" aria-hidden=\"true\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"contact-info-item\">\n                  <i class=\"fas fa-map-marker-alt\" aria-hidden=\"true\"></i>\n                  <div>\n                    <h3>Location</h3>\n                    <p>United States</p>\n                  </div>\n                </div>\n                \n                <div class=\"contact-info-item\">\n                  <i class=\"fab fa-linkedin\" aria-hidden=\"true\"></i>\n                  <div>\n                    <h3>LinkedIn</h3>\n                    <a href=\"https://www.linkedin.com/in/aryaman-nasare/\" target=\"_blank\" rel=\"noopener\">aryaman-nasare</a>\n                  </div>\n                </div>\n                \n                <div class=\"contact-info-item\">\n                  <i class=\"fab fa-github\" aria-hidden=\"true\"></i>\n                  <div>\n                    <h3>GitHub</h3>\n                    <a href=\"https://github.com/aryabro\" target=\"_blank\" rel=\"noopener\">aryabro</a>\n                  </div>\n                </div>\n              </div>\n              \n              <p class=\"contact-copy-status\" aria-live=\"polite\"></p>\n            </div>\n          </div>\n        </div>\n      </section>\n    </main>\n  </body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

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
  } // Sidebar toggle for mobile


  var sidebarToggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('.sidebar');

  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', function () {
      var open = sidebar.classList.toggle('sidebar-open');
      sidebarToggle.setAttribute('aria-expanded', String(open));
    });
  } // Close sidebar when a link is clicked (mobile)


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
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 100;
      var sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    }); //highlight last section

    if (scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100) {
      currentSection = sections[sections.length - 1].getAttribute('id');
    } // Update all nav links


    var allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(function (link) {
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
      setTimeout(function () {
        positionTicking = false;
      }, 16);
    }
  }

  window.addEventListener('scroll', requestPositionTick);
  updateActiveNavItem(); // carousel JS removed (projects now render as a grid)
  // Footer year

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear()); // Contact card: copy email

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
        })["catch"](function () {
          setCopyStatus('Could not copy automatically. Please copy manually: ' + value);
        });
      } else {
        setCopyStatus('Copy not supported in this browser. Email: ' + value);
      }
    });
  } // Timeline reveal on scroll (Experience)


  var timelineCards = document.querySelectorAll('.timeline--split .timeline-main');

  if (timelineCards && timelineCards.length) {
    var prefersReduced = false;

    try {
      prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {
      prefersReduced = false;
    }

    if (prefersReduced) {
      timelineCards.forEach(function (el) {
        el.classList.add('is-visible');
      });
    } else if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.12
      });
      timelineCards.forEach(function (el) {
        io.observe(el);
      });
    } else {
      // Fallback: no IO support
      timelineCards.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }
})();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map