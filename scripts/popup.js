'use strict';

const popup = document.querySelector(".popup");
const popupContainer = document.querySelector('.popup-container');
const popupImage = document.querySelector('.popup__image');

popupContainer.addEventListener('click', function (event) {
    const openPopupImage = event.target.closest('.open-popup-image');

    if (!openPopupImage) {
        return;
    }

    popupImage.src = openPopupImage.getAttribute('src');
    popup.classList.add('popup_active');
})

popup.onclick = function () {
    popup.classList.remove('popup_active');
}