const chat = document.getElementById("chat");
const success = document.getElementById("success");
const chat_button = document.getElementById("chat_button");
chat_button.addEventListener("click", e => {
  e.preventDefault();
  chat.classList.add("hidden_chat");
  success.classList.add("active_success");
});
document.addEventListener("DOMContentLoaded", () => {
  const inputElement = document.querySelector("#chat_phone");
  const maskOptions = {
    mask: "(000)-000-00-00"
  };
  IMask(inputElement, maskOptions);
});
const hide_button = document.querySelector(".hide_button");
if (hide_button) {
  hide_button.addEventListener("click", () => {
    hide_button.classList.contains("hide_button_active") ? hide_button.childNodes[1].innerHTML = "смотреть все" : hide_button.childNodes[1].innerHTML = "скрыть";
    hide_button.classList.toggle("hide_button_active");
  });
}

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