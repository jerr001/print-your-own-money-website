// /author-website/js/main.js
// ==============================
// JS for sticky nav active link & contact form success
// ==============================

// Highlight active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Contact form success message
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Simulate form submission for demo
      contactForm.style.display = "none";
      document.getElementById("formSuccess").style.display = "block";

      // Uncomment below for real form submission
      // contactForm.submit();
    });
  }
});
