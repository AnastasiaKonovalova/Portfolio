export class FormSyncValidator {
  constructor(form) {
    this.form = form;
    this.errorField = null;
    this.error = null;
    this.inputs = [];
    this.radios = [];
    this._getInputs();
  }

  _getInputs() {
    const [...elements] = this.form.elements;

    elements.forEach(element => {
      if (element.tagName !== "BUTTON") {
        if (element.type !== "radio") {
          this.inputs.push(element);
        } else {
          this.radios.push(element);
        }
      }
    });
  }

  _validateRadios(radios) {
    if (radios.length === 0) {
    } else if (!radios.find(element => element.checked)) {
      return "Подумайте, робот ли вы";
    }
  }

  _validateInput(input) {
    if (input.value.trim() === "" || (input.type === "checkbox" && !input.checked)) {
      input.classList.add("form__input--invalid");
      return "Нужно заполнить все поля";
    } else {
      if (input.id === "inputMail" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input.value)) {
        input.classList.add("form__input--invalid");
        return "Ваш e-mail не похож на общепринятый e-mail";
      } else {
        return null;
      }
    }
  }

  _createErrorField(text) {
    if (!text) {
      return;
    }

    this.errorField = document.createElement("div");
    this.errorField.className = "form__error";
    this.errorField.textContent = text;
    this.form.insertBefore(this.errorField, this.form.lastElementChild);
  }

  removeErrors() {
    this.errorField && this.form.removeChild(this.errorField);
    this.errorField = null;
    this.error = null;
    this.inputs.forEach(input => input.classList.remove("form__input--invalid"));
  }

  validateForm() {
    this.removeErrors();
    this.error = this.inputs.reduce((accum, input) => {
      if (!accum) {
        return this._validateInput(input);
      } else {
        return accum;
      }
    }, this.error);

    const radioError = !this.error && this._validateRadios(this.radios);
    if (radioError) {
      this.error = radioError;
    }

    this._createErrorField(this.error);
  }
}
