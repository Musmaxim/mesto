let popupProfile = document.querySelector('.popup__profile');
let openPopupBtn = document.querySelector('.info__edit');
let closePopupBtn = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.info__name');
let profileWork = document.querySelector('.info__work');
let formElement = document.querySelector('.form__profile');
let nameInput = document.querySelector('.form__item_el_name');
let jobInput = document.querySelector('.form__item_el_work');

function openPopup(popup) {
    popup.classList.add('popup_visible');
}

function closePopup(popup) {
    popup.classList.remove('popup_visible');
}


openPopupBtn.addEventListener('click', function() {
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileWork.textContent;
});

closePopupBtn.addEventListener('click', function() {
    closePopup(popupProfile);
});


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileWork.textContent = jobInput.value;
    closePopup(popupProfile);
}

formElement.addEventListener('submit', formSubmitHandler);



const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

let popupElement = document.querySelector('.popup_add-cards');
let openPopupElementBtn = document.querySelector('.elements__add');
let closePopupElementBtn = document.querySelector('.popup__close');
let elementContainer = document.querySelector('.elements');
let template = document.querySelector('.template').content;
const createCardBtn = document.querySelector('.form__create');
let formCards = document.querySelector('.form__cards');




openPopupElementBtn.addEventListener('click', function() {
    openPopup(popupElement);

});

closePopupElementBtn.addEventListener('click', function() {
    closePopup(popupElement);
});


function createCards(initialCardsData) {
    let cardData = template.querySelector('.element').cloneNode(true);
    cardData.querySelector('.element__title').textContent = initialCardsData.name;
    cardData.querySelector('.element__image').src = initialCardsData.link;
    cardData.querySelector('.element__image').alt = initialCardsData.name;
    elementContainer.prepend(cardData);
    let elementLikeBtn = document.querySelector('.element__like');
    let removeCardBtn = document.querySelector('.element__delete');

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


    let popupPicture = document.querySelector('.popup_open-img');
    let popupOpenImage = document.querySelector('.element__button');
    let popupCloseImage = document.querySelector('.popup__close-image');
    let popupImage = document.querySelector('.popup__image');
    let elementImage = document.querySelector('.element__image');
    let popupCaption = document.querySelector('.popup__caption');
    let elementTitle = document.querySelector('.element__title');

    popupOpenImage.addEventListener('click', function() {
        openPopup(popupPicture);
        popupImage.src = elementImage.src;
        popupCaption.textContent = elementTitle.textContent;
    });

    popupCloseImage.addEventListener('click', function() {
        closePopup(popupPicture);
    });


    return cardData;

}

initialCards.forEach(function(initialCardsData) {
    let cardElement = createCards(initialCardsData);
    elementContainer.prepend(cardElement);
});


function CreateCardSubmit(evt) {
    evt.preventDefault();
    let cardNameInput = document.querySelector('.form__item_el_discr');
    let cardImgInput = document.querySelector('.form__item_el_img');
    const elementCard = createCards({ name: cardNameInput.value, link: cardImgInput.value });
    elementContainer.prepend(elementCard);
    closePopup(popupElement);
}

formCards.addEventListener('submit', CreateCardSubmit);