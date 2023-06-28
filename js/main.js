document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector(".mask_phone");
  const maskOptions = {
    mask: "(000)-000-00-00"
  };
  IMask(inputElement, maskOptions);
});

const feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".feedback-next",
    prevEl: ".feedback-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
  },
});