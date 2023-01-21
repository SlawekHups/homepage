{
     const toogleBackground = () => {
          const body = document.querySelector(".body");
          const colorDark = document.querySelector(".js-colorDark");

          body.classList.toggle("body--dark");
          colorDark.innerText = body.classList.contains("body--dark") ? "na jasny" : "na ciemny";
     };

     const onPhotoClick = () => {
          const buttonChange = document.querySelector(".js-buttonChange");
          const photoSlide = document.querySelector(".js-photoSlide");

          photoSlide.classList.toggle("display");
          buttonChange.innerText = photoSlide.classList.contains("display") ? "Pokaż" : "Ukryj";
     };

     const init = () => {
          const sechangeBackgroundButton = document.querySelector(".js-sechangeBackgroundButton");
          const buttonPhotoRemove = document.querySelector(".js-buttonPhotoRemove");

          sechangeBackgroundButton.addEventListener("click", toogleBackground);
          buttonPhotoRemove.addEventListener("click", onPhotoClick);
     };

     init();
}