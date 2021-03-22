let popup = document.querySelector('.popup');
let openPopupBtn = document.querySelector('.info__edit');
let closePopupBtn = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.info__name');
let profileWork = document.querySelector('.info__work');
let formelement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_el_name');
let jobInput = document.querySelector('.form__item_el_work');

function openPopup() {
    popup.classList.add('popup_visible');
    nameInput.value = profileName.textContent;
    jobInput.value = profileWork.textContent;
}

function closePopup() {
    popup.classList.remove('popup_visible');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = jobInput.value;
    closePopup();
}

formelement.addEventListener('submit', formSubmitHandler);

openPopupBtn.addEventListener('click', openPopup);

closePopupBtn.addEventListener('click', closePopup);