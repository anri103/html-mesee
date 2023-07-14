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

const partnersSwiper = new Swiper(".partnersSwiper", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  loop: true,
  freeMode: true,
  speed: 5000,
  autoplay: {
      delay: 1,
      disableOnInteraction: false,
  },
  breakpoints: {
    992: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 6.5,
      spaceBetween: 30,
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
    1400: {
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

const thumbsSwiper = new Swiper(".thumbsSwiper", {
  spaceBetween: 8,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const productItemSwiper = new Swiper(".productItemSwiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  grabCursor: true,
  thumbs: {
      swiper: thumbsSwiper,
  },
  breakpoints: {
      992: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
  },
});

// Клик по кнопке меняет статус
const buttonsState = document.querySelectorAll('.btn-state');

buttonsState.forEach(button => {
  button.addEventListener('click', () => {
    // Проверяем, есть ли у кнопки класс "active"
    if (button.classList.contains('active')) {
      // Если есть, то удаляем класс "active"
      button.classList.remove('active');
    } else {
      // Если нет, то добавляем класс "active"
      button.classList.add('active');
    }
  });
});
