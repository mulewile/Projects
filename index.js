const body = document.querySelector('[data-js="body"]');
const tButton = document.querySelector('[data-js="theme-button"]');

tButton.addEventListener("click", () => {
  body.classList.remove("h1");
  body.classList.add("light--theme");
});
