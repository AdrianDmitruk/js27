const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(".slide-container img");
let slideIndex = 0;

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });
};

showSlide(slideIndex);

prev.addEventListener("click", function () {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
});

next.addEventListener("click", function () {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
});
