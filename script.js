document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  function changeActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
    console.log(window.scrollY, currentSection);
  }

  window.addEventListener("scroll", changeActiveNav);
  changeActiveNav(); // <- trigger once on load
});

function scrollToProjects() {
  const target = document.getElementById("projects");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToAboutMe() {
  const target = document.getElementById("about");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
