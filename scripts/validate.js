function showInputError(formElement, input, enVal) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    input.classList.add(enVal.inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(enVal.errorClass);

}

function hideInputError(formElement, input, enVal) {
    const errorElement = formElement.querySelector(`#${input.id}-error`);
    input.classList.remove(enVal.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(enVal.errorClass);
}

function validateInput(formElement, input, enVal) {

    if (input.validity.valid) {
        hideInputError(formElement, input, enVal)
    } else {
        showInputError(formElement, input, enVal)
    }
}

function hasInvalidInputs(inputs) {
    return inputs.every(input => input.validity.valid);
}


function toggleButtonSubmit(button, enVal, inputs) {
    if (!hasInvalidInputs(inputs)) {
        button.classList.add(enVal.inactiveButtonClass);
        button.disabled = true;
    } else {
        button.classList.remove(enVal.inactiveButtonClass);
        button.disabled = false;
    }
}


function setInputListeners(formElement, enVal) {
    const inputs = Array.from(formElement.querySelectorAll(enVal.inputSelector));
    const button = formElement.querySelector(enVal.submitButtonSelector);
    inputs.forEach(input => {
        input.addEventListener('input', e => {
            validateInput(formElement, input, enVal);
            toggleButtonSubmit(button, enVal, inputs);
        });
    });
}


function enableValidation(enVal) {
    const forms = Array.from(document.querySelectorAll(enVal.formSelector));
    forms.forEach(form => {
        form.addEventListener('submit', preventFormSubmit);
        setInputListeners(form, enVal);
    });
}

function preventFormSubmit(e) {
    e.preventDefault();
}

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__item",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_inactive",
    inputErrorClass: "form__item_type_error",
    errorClass: "form__item-error_active"
});