// ==========================
// Back to Top Button Logic
// ==========================

// Show or hide the "Back to Top" button based on scroll position
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

// Scroll smoothly to top when button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================
// EmailJS Integration
// ==========================

// Initialize EmailJS (Replace with your actual Public Key)
emailjs.init("lEFQhQnpvRC1q33wg");

// Handle contact form submission using EmailJS
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_t00i3yd", "template_3em0h7e", this)
    .then(() => {
      // Show success message
      document.getElementById('success-msg').classList.remove('d-none');
      this.reset(); // Clear form after success
    })
    .catch((error) => {
      alert("Failed to send message. Please try again later.");
      console.error("EmailJS Error:", error);
    });
});

// ==========================
// Portfolio Filter Function
// ==========================

// Filter projects by category (SEO, Speed, Responsive)
  function filterProjects(category) {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
      // sabse pehle sab projects ko hide karo
      item.classList.remove('active');

      // agar category 'all' hai to sabko show karo
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.add('active');
      }
    });
  }