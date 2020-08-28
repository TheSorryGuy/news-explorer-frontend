export default class FormValidator {
  constructor(container, errors) {
    this.container = container;
    this.errors = errors
  }


  setSubmitState() {

    const button = this.container.querySelector('.popup-entry__submit');
    const check = this.inputsValid.bind(this);

    if (check()) {
      button.classList.add('popup-entry__submit_active');
    } else {
      button.classList.remove('popup-entry__submit_active');
    }
  }

  setEventListeners() {
    this.container.addEventListener('input', this.setSubmitState.bind(this));
    this.container.addEventListener('input', this.checkInputValidity.bind(this));
  }

  inputsValid() {
    const inputsList = this.container.querySelectorAll('.popup-entry__input')
    var check = true;
    inputsList.forEach((input) => {
      if (
        input.parentElement.classList.contains('popup-entry__additional-field_opened') ||
        !input.parentElement.classList.contains('popup-entry__additional-field')
        ) {
          if (!input.validity.valid) {
            check = false;
          }
        }
    });
    return check;
  }

  checkInputValidity() {
    const inputsList = this.container.querySelectorAll('.popup-entry__input')
    inputsList.forEach((input) => {
      const error = input.nextElementSibling;
      this.checker.call(this, input, error);
    })
  }

  checker(input, error) {
    if (input.validity.valueMissing) {
      error.textContent = this.errors.emptyError;
      return;
    }
    if (!input.validity.valid && input.type === 'password') {
      error.textContent = this.errors.passwordLength;
      return;
    }
    if (!input.validity.valid && input.type === 'email') {
      error.textContent = this.errors.emailPattern;
      return;
    }
    if (input.validity.valid) {
      error.textContent = ''
      return;
    }
    else {
      error.textContent = this.errors.nameLength;
      return;
    }
  }
}