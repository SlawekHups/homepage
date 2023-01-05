
let buttonPhotoRemove = document.querySelector(".js-buttonPhotoRemove");
let photoSlide = document.querySelector(".js-photoSlide");
let buttonChange = document.querySelector(".js-buttonChange");

buttonPhotoRemove.addEventListener("click", () => {
     photoSlide.classList.toggle("display");
     buttonChange.innerText = photoSlide.classList.contains("display") ? "Pokaż" : "Ukryj";
});

let sechangeBackgroundButton = document.querySelector(".js-sechangeBackgroundButton");
let body = document.querySelector(".body");
let colorDark = document.querySelector(".js-colorDark");

sechangeBackgroundButton.addEventListener("click", () => {
     body.classList.toggle("body--dark");
     colorDark.innerText = body.classList.contains("body--dark") ? "na jasny" : "na ciemny";
});