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
  grabCursor: false,
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

const categoriesListSwiper = new Swiper(".categoriesListSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 12,
  loop: false,
  grabCursor: true,
  breakpoints: {
    400: {
      slidesPerView: 1.75,
    },
    500: {
      slidesPerView: 2.15,
    },
    768: {
      slidesPerView: 3.15,
    },
    992: {
      slidesPerView: 3.15,
    },
    1200: {
      slidesPerView: 3.75,
    },
    1400: {
      slidesPerView: 4.15,
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

// Умный поиск
document.addEventListener('click', function(event) {
  if (!searchDropdown.contains(event.target)) {
    searchDropdown.style.display = 'none';
  }
});

const searchInput = document.getElementById('search-input-top');
const searchResults = document.getElementById('search-results');
const searchDropdown = document.querySelector('.search-dropdown');

searchInput.addEventListener('input', function() {
  const inputValue = this.value;

  if (inputValue.length > 0) {
    searchDropdown.style.display = 'block';
    searchResults.innerHTML = '';

    const suggestions = ['подсказка 1', 'подсказка 2', 'подсказка 3', 'подсказка 4'];

    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.addEventListener('click', function() {
        searchInput.value = suggestion;
        searchDropdown.style.display = 'none';
      });
      searchResults.appendChild(li);
    });
  } else {
    searchDropdown.style.display = 'none';
  }
});

document.addEventListener('click', function(event) {
  if (!searchDropdown.contains(event.target)) {
    searchDropdown.style.display = 'none';
  }
});
