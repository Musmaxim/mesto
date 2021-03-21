let popup = document.querySelector('.popup');
let openPopupBtn = document.getElementById('open_popup_btn');
let closePopupBtn = document.querySelector('.popup__close-button');
let closePopupOverlay = document.querySelector('.popup__overlay');
let ProfileName = document.querySelector('.profile__name');
let ProfileWork = document.querySelector('.profile__work');
let formElement = document.querySelector('.save');
let nameInput = document.querySelector('.text_el_name');
let jobInput = document.querySelector('.text_el_work');

function openPopup() {
    popup.classList.add('popup_visible');
    nameInput.value = ProfileName.textContent;
    jobInput.value = ProfileWork.textContent;
}

function closePopup() {
    popup.classList.remove('popup_visible');
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    ProfileName.textContent = nameInput.value;
    ProfileWork.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('click', formSubmitHandler);

openPopupBtn.addEventListener('click', function() {
    openPopup();

});

closePopupBtn.addEventListener('click', function() {
    closePopup();

});

closePopupOverlay.addEventListener('click', function() {
    closePopup();

});