import "normalize.css";
import "../common.scss";
import "./works.scss";
import "../../components/slider/slider";
import { initNavigationListeners } from "../../utilities/commonEvents";
import { FormSyncValidator } from "../../components/form_validation/form_validator";
import "../../components/enter_screen/enter_screen";
import { apiRequest } from "../../utilities/axiosConfig";

console.log("works.js");

const worksSection = document.querySelector(".works");
const scrollUpButton = document.querySelector("#scrollUpButton");

initNavigationListeners(worksSection);
scrollUpButton.addEventListener("click", e => {
  window.scrollTo(0, 0);
});

const form = document.querySelector(".form");
const [...inputs] = document.querySelectorAll(".form__input");
const submitButton = document.querySelector("#formSubmit");
const resetButton = document.querySelector("#formReset");

const formValidator = new FormSyncValidator(form);

// inputs.forEach(input =>
//   input.addEventListener("click", function(e) {
//     this.classList.remove("form__input--invalid");
//   })
// );

submitButton.addEventListener("click", e => {
  e.preventDefault();
  const isValid = formValidator.validateForm();
  if (isValid) {
    const inputName = form.elements.name;
    const inputMail = form.elements.mail;
    const inputMessage = form.elements.message;
    const eMail = {
      [inputName.name]: inputName.value,
      [inputMail.name]: inputMail.value,
      [inputMessage.name]: inputMessage.value
    };
    console.log("eMail", eMail);

    apiRequest
      .post("/works", eMail, { mode: "cors" })
      .then(response => {
        console.log("send mail response", response);
      })
      .catch(error => {
        console.log("send mail error", error);
      });
  }
});

resetButton.addEventListener("click", e => {
  formValidator.removeErrors();
});
