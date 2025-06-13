// Smooth scroll for navbar links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});

// Collapse mobile navbar on click (Bootstrap requires jQuery normally)
document.addEventListener("click", function (event) {
  const nav = document.querySelector(".navbar-collapse");
  if (nav.classList.contains("in") && event.target.tagName === "A") {
    nav.classList.remove("in");
  }
});
