"use strict";

const popup = document.querySelector(".popup");
const openPopupButton = document.querySelectorAll(".open-popup-button");
const popupImage = document.querySelector(".popup__image");

for (let i = 0; i < openPopupButton.length; i++) {
    openPopupButton[i].addEventListener("click", function () {
        const src = openPopupButton[i].getAttribute("src");

        popup.classList.add("popup_active");
        popupImage.setAttribute("src", src);
    });
}

for (let i = 0; i < openPopupButton.length; i++) {
    popup.addEventListener("click", function () {
        openPopupButton[i].classList.remove("open-popup-button_active");
        popup.classList.remove("popup_active");
    })
}






