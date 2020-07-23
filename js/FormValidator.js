// export default class FormValidator {
//   constructor(container) {
//       this.container = container;
//   }
//   checkValidity() {
//     const field = this.container.querySelector('.popup-entry__input');
//     const button = this.container.querySelector('.popup-entry__submit');
//     console.log(this.container);
//     if (field.validity.valid) {
//       button.textContent = "fafasfseff";
//     }
//   }
//   listen() {
//     console.log(this.container);
//     this.container.querySelector('.popup-entry__input').addEventListener('input', this.checkValidity)
//   }
// }

export default class FormValidator {
  constructor(container) {
    this.container = container;
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
}