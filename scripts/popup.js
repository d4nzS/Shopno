"use strict";

const popup = document.querySelector(".popup");
const openPopupImages = document.querySelectorAll(".open-popup-image");
const popupImage = document.querySelector(".popup__image");

for (let i = 0; i < openPopupImages.length; i++) {
    openPopupImages[i].addEventListener("click", () => {
        const src = openPopupImages[i].getAttribute("src");

        popup.classList.add("popup_active");
        popupImage.setAttribute("src", src);
    });
}

for (let i = 0; i < openPopupImages.length; i++) {
    popup.addEventListener("click", () => {
        openPopupImages[i].classList.remove("open-popup-image_active");
        popup.classList.remove("popup_active");
    });
}