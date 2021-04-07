const popupProfile = document.querySelector('.popup_profile');
const openEditPopupBtn = document.querySelector('.info__edit');
const closePopupBtn = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.info__name');
const profileWork = document.querySelector('.info__work');
const formEditProfile = document.querySelector('.form_profile');
const nameInput = document.querySelector('.form__item_el_name');
const jobInput = document.querySelector('.form__item_el_work');

function openPopup(popup) {
    popup.classList.add('popup_visible');
}

function closePopup(popup) {
    popup.classList.remove('popup_visible');
}


openEditPopupBtn.addEventListener('click', function() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileWork.textContent;
});

closePopupBtn.addEventListener('click', function() {
    closePopup(popupProfile);
});


function submitEditProfilePopup(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = jobInput.value;
    closePopup(popupProfile);
}

formEditProfile.addEventListener('submit', submitEditProfilePopup);


const popupAddCard = document.querySelector('.popup_add-cards');
const openAddCardPopupBtn = document.querySelector('.button');
const closePopupElementBtn = document.querySelector('.popup__close');
const elementContainer = document.querySelector('.elements');
const template = document.querySelector('.template').content;
const createCardBtn = document.querySelector('.form__create');
const formAddCard = document.querySelector('.form_cards');

openAddCardPopupBtn.addEventListener('click', function() {
    openPopup(popupAddCard);

});

closePopupElementBtn.addEventListener('click', function() {
    closePopup(popupAddCard);
});

const popupPicture = document.querySelector('.popup_open-img');
const popupCloseImage = document.querySelector('.popup__close-image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');

popupCloseImage.addEventListener('click', function() {
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
        popupCaption.textContent = elementTitle.textContent;
    });
    console.log(popupCaption);


    const element = cardData.querySelector('.element');
    const removeCardBtn = cardData.querySelector('.element__delete');
    removeCardBtn.addEventListener('click', () => deleteCard(element));

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