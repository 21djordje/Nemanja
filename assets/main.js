// Dodavanje klase .scroll na navbar kada se skroluje
window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  let navbar = document.querySelector("nav");

  if (currentScroll > 0) {
    navbar.classList.add("menu-scrolled");
  } else {
    navbar.classList.remove("menu-scrolled");
  }
});

// Provjera da li svaka ima alt atribut
let images = document.querySelectorAll("img");

images.forEach((img) => {
  if (!img.alt || img.alt.trim() === "") {
    img.alt = "Tremolo band za svadbe, rodjendane, krštenja i ostale proslave";
  }
});
