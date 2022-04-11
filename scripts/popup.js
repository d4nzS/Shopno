"use strict";

const popup = document.querySelector(".popup");
const openPopupImages = document.querySelectorAll(".open-popup-image");
const popupImage = document.querySelector(".popup__image");

openPopupImages.forEach(openPopupImage => {
    openPopupImage.addEventListener("click", () => {
        const src = openPopupImage.getAttribute("src");

        popup.classList.add("popup_active");
        popupImage.setAttribute("src", src);
    });
});

openPopupImages.forEach(openPopupImage => {
    popup.addEventListener("click", () => {
        openPopupImage.classList.remove("open-popup-image_active");
        popup.classList.remove("popup_active");
    });
});