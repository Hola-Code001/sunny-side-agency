const menuBtn = document.querySelector(".mobile-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const hiddenElement = document.querySelectorAll(".hidden");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0,
  }
);

hiddenElement.forEach((el) => {
  observer.observe(el);
});
