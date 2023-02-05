const navBtn = document.querySelector(".nav-bar-mob");
const headerEl = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// STICKY NAVBAR

const herosec = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector("header").classList.add("sticky");
    } else {
      document.querySelector("header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
  }
);

obs.observe(herosec);
