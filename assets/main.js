// — MOBILE MENU TOGGLE —
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// — FADE-IN CARDS WHEN SCROLLING —
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    // If card is visible in viewport — show it
    if (rect.top < window.innerHeight - 50) {
      card.classList.add("visible");
    }
  });
});
