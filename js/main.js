document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector(".mask_phone");
  const maskOptions = {
    mask: "(000)-000-00-00"
  };
  IMask(inputElement, maskOptions);
});

Fancybox.bind("[data-fancybox]", {
  Thumbs: {
    type: "classic",
  },
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ["close"],
    },
  },
});

const feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
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

const productsSwiper = new Swiper(".productsSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: false,
  grabCursor: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

const productPreviewSwiper = new Swiper(".productPreviewSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  loop: true,
  grabCursor: true,
  // preloadImages: false,
  lazy: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});