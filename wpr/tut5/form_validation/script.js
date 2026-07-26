/**
 * JS for dynamic form validation exercise
 */

"use strict";
(function () {
  window.addEventListener("load", init);

  const form = id("registrationForm");

  const nameInput = id("name");
  const emailInput = id("email");
  const passwordInput = id("password");
  const confirmInput = id("confirmPassword");

  const nameError = id("nameError");
  const emailError = id("emailError");
  const passwordError = id("passwordError");
  const confirmError = id("confirmPasswordError");

  /**
   * Sets up necessary functionality when page loads
   */
  function init() {
    // Add event listener to form submit button

    // Add event listeners to input fields for real-time validation
    form.addEventListener("submit", validateForm);
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    passwordInput.addEventListener("input", validatePassword);
    confirmInput.addEventListener("input", validateConfirmPassword);
  }

  /**
   * Validates the entire form on submit
   * @param {Event} event - the event that triggered this function
   */
  function validateForm(event) {
    // Prevent form from submitting if there are validation errors
    event.preventDefault();
    let isValid = validateName() && validateEmail() && validatePassword() && validateConfirmPassword();

    if(!isValid) {
      return;
    }
    startCountdown();
  }

  /**
   * Starts a 3-second countdown and displays a success message
   */
  function startCountdown() {
    id("countdown").style.display = "block";
    id("countdown").textContent = 3;
    let count = 3;
    const timer = setInterval(() => {
      id("countdown").textContent = --count;
      if(count === 0) {
        clearInterval(timer);
        id("countdown").textContent = "Form submited successfullly!"
      }
    }, 1000);
  }

  /**
   * Validates the name field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateName() {
    if(nameInput.value.trim() === "") {
      nameError.textContent = "Name is required";
      return false;
    }
    if(nameInput.value.length < 3) {
      nameError.textContent = "Name must be at least 3 characters"
      return false;
    }
    nameError.textContent = "";
    return true;
  }

  /**
   * Validates the email field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(emailInput.value)) {
      emailError.textContent = "Invalid email";
      return false;
    }

    emailError.textContent = "";
    return true;
  }

  /**
   * Validates the password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validatePassword() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!regex.test(passwordInput.value)) {
      passwordError.textContent =
        "Password must contain uppercase, lowercase and number";
      return false;
    }

    passwordError.textContent = "";
    return true;
  }

  /**
   * Validates the confirm password field
   * @returns {boolean} - true if valid, false otherwise
   */
  function validateConfirmPassword() {
    if (confirmInput.value !== passwordInput.value) {
      confirmError.textContent = "Passwords do not match";
      return false;
    }
    confirmError.textContent = "";
    return true;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} - DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
