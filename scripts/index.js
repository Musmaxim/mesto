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


function createCards(initialCardsData) {
    const cardData = template.querySelector('.element').cloneNode(true);
    const elementImage = cardData.querySelector('.element__image');
    const elementTitle = cardData.querySelector('.element__title');
    elementTitle.textContent = initialCardsData.name;
    elementImage.src = initialCardsData.link;
    elementImage.alt = initialCardsData.name;
    elementContainer.prepend(cardData);

    const popupPicture = document.querySelector('.popup_open-img'); ////я не могу вынести эти константы, а так же код по лайку и удалению карточки из этой функции, макет перестает полностью работать. Решение выше моего понимания, извините.
    const popupOpenImage = document.querySelector('.element__button');
    const popupCloseImage = document.querySelector('.popup__close-image');
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');


    popupOpenImage.addEventListener('click', function() {
        openPopup(popupPicture);
        popupImage.src = elementImage.src;
        popupCaption.textContent = elementTitle.textContent;
    });

    popupCloseImage.addEventListener('click', function() {
        closePopup(popupPicture);
    });

    const elementLikeBtn = cardData.querySelector('.element__like');
    const removeCardBtn = cardData.querySelector('.element__delete');

    function deleteCard() {
        cardData.remove();
    }

    removeCardBtn.addEventListener('click', deleteCard);

    function toggleLike(elementLikeBtn) {
        elementLikeBtn.classList.toggle('element__like_act');
    }

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