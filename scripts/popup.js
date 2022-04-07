"use strict";

const popup = document.querySelector(".popup");
const openPopupImage = document.querySelectorAll(".open-popup-image");
const popupImage = document.querySelector(".popup__image");

for (let i = 0; i < openPopupImage.length; i++) {
    openPopupImage[i].addEventListener("click", () => {
        const src = openPopupImage[i].getAttribute("src");

        popup.classList.add("popup_active");
        popupImage.setAttribute("src", src);
    });
}

for (let i = 0; i < openPopupImage.length; i++) {
    popup.addEventListener("click", () => {
        openPopupImage[i].classList.remove("open-popup-image_active");
        popup.classList.remove("popup_active");
    });
}