// Burger
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("is-active"),
      document.body.classList.toggle("stop-scroll")
  });
});

document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    document.querySelector("header").classList.remove("is-active"),
      document.body.classList.remove("stop-scroll")
  });
});