const popupProfile = document.querySelector('.popup_profile');
const openEditPopupBtn = document.querySelector('.info__edit');
const closeEditProfilePopupBtn = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.info__name');
const profileWork = document.querySelector('.info__work');
const formEditProfile = document.querySelector('.form_profile');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_work');
const popupAddCard = document.querySelector('.popup_add-cards');
const popupAll = document.querySelectorAll('.popup')

function enableEscListener() {
    document.addEventListener('keyup', handleClosePopup);
};

function handleClosePopup(evt) {
    evt.preventDefault();
    escEvent(evt, closePopup);
}

function escEvent(evt, action) {
    if (evt.key === 'Escape') {
        const activPopup = document.querySelector('.popup_visible');
        action(activPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_visible');
    enableEscListener();
}

function closePopup(popup) {
    popup.classList.remove('popup_visible');
    document.removeEventListener('keyup', handleClosePopup);
}

function buttonDisabled(popup) {
    const buttonSubmit = popup.querySelector('.form__button');
    buttonSubmit.classList.add("form__button_inactive");
    buttonSubmit.disabled = true;
}

popupAll.forEach(itemPopup => {
    itemPopup.addEventListener('click', (evt) => {
        if (evt.target === evt.currentTarget) {
            closePopup(itemPopup)
        };
    });
});

openEditPopupBtn.addEventListener('click', function() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileWork.textContent;
});

closeEditProfilePopupBtn.addEventListener('click', function() {
    closePopup(popupProfile);
});

function submitEditProfilePopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = jobInput.value;
    closePopup(popupProfile);
}

formEditProfile.addEventListener('submit', submitEditProfilePopup);

const openAddCardPopupBtn = document.querySelector('.button');
const closeAddCardPopupBtn = document.querySelector('.popup__close');
const elementContainer = document.querySelector('.elements');
const template = document.querySelector('.template').content;
const createCardBtn = document.querySelector('.form__create');
const formAddCard = document.querySelector('.form_cards');

openAddCardPopupBtn.addEventListener('click', function() {
    openPopup(popupAddCard);
    buttonDisabled(popupAddCard);
});

closeAddCardPopupBtn.addEventListener('click', function() {
    closePopup(popupAddCard);
    formAddCard.reset();
});

const popupPicture = document.querySelector('.popup_open-img');
const closeImagePopupBtn = document.querySelector('.popup__close-image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

closeImagePopupBtn.addEventListener('click', function() {
    closePopup(popupPicture);
});

function deleteCard(deleteElement) {
    deleteElement.remove();
}

function toggleLike(elementLike) {
    elementLike.classList.toggle('element__like_act');
}

function createCards(initialCardsData) {
    const cardData = template.cloneNode(true);
    const elementImage = cardData.querySelector('.element__image');
    const elementTitle = cardData.querySelector('.element__title');
    const popupOpenImage = cardData.querySelector('.element__button');
    elementTitle.textContent = initialCardsData.name;
    elementImage.src = initialCardsData.link;
    elementImage.alt = initialCardsData.name;

    popupOpenImage.addEventListener('click', function() {
        openPopup(popupPicture);
        popupImage.src = elementImage.src;
        popupImage.alt = elementTitle.textContent;
        popupCaption.textContent = elementTitle.textContent;
    });

    const element = cardData.querySelector('.element'); //данная переменная используется снизу 
    const removeCardBtn = cardData.querySelector('.element__delete');

    removeCardBtn.addEventListener('click', () => deleteCard(element)); //вот тут

    const elementLikeBtn = cardData.querySelector('.element__like');

    elementLikeBtn.addEventListener('click', function() {
        toggleLike(elementLikeBtn);
    });

    return cardData;

}

initialCards.forEach(function(initialCardsData) {
    const cardElement = createCards(initialCardsData);
    elementContainer.prepend(cardElement);
});

const cardNameInput = document.querySelector('.form__item_el_discr');
const cardImgInput = document.querySelector('.form__item_el_img');

function submitAddCardPopup(evt) {
    evt.preventDefault();
    const elementCard = createCards({ name: cardNameInput.value, link: cardImgInput.value });
    elementContainer.prepend(elementCard);
    closePopup(popupAddCard);
    formAddCard.reset();
}

formAddCard.addEventListener('submit', submitAddCardPopup);