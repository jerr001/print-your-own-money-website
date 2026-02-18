// /author-website/js/main.js
// ==============================
// Hamburger Menu, Dark Mode, and Navigation
// ==============================

document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // Hamburger Menu Toggle
  // ==============================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }

  // Close menu when a link is clicked
  const navLinkItems = navLinks.querySelectorAll("a");
  navLinkItems.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // ==============================
  // Dark Mode Toggle
  // ==============================
  const darkModeBtn = document.getElementById("darkModeBtn");
  const htmlElement = document.documentElement;

  // Load dark mode preference from localStorage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    htmlElement.classList.add("dark-mode");
  }

  // Toggle dark mode
  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function () {
      htmlElement.classList.toggle("dark-mode");
      const isNowDark = htmlElement.classList.contains("dark-mode");
      localStorage.setItem("darkMode", isNowDark);
    });
  }

  // ==============================
  // Active Link Detection (Scroll Based)
  // ==============================
  const sections = document.querySelectorAll("main > section[id]");
  const navItems = document.querySelectorAll(".nav-links a[href^='#']");

  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // ==============================
  // Smooth Scrolling for Anchor Links
  // ==============================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ==============================
  // Contact Form Handling
  // ==============================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    // Note: Form will submit to Formsubmit.co
    // You can optionally add additional handling here if needed
    contactForm.addEventListener("submit", function (e) {
      // Let the form submit normally to Formsubmit
      // Uncomment below only if you want to prevent default submission
      // e.preventDefault();
      // contactForm.style.display = "none";
      // document.getElementById("formSuccess").style.display = "block";
    });
  }
});
