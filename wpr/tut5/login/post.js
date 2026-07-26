/*
 * Sending POST request with fetch
 */
'use strict';
(function() {
  const API_URL = 'http://103.159.50.237/wpr/api/login.php';

  window.addEventListener('load', init);

  /**
   * TODO - setup the sign-in button on initial page load
   */
  function init() {
    qs('form').addEventListener("submit", function(e) {
      e.preventDefault();
      signIn();
    });
  }

  function signIn() {
    const user = id("username").value;
    const pass = id("password").value;

    const data = new URLSearchParams ({
      user: user,
      password: pass
    });

    fetch(API_URL, {method: "POST", body: data})
    .then(statusCheck)
    .then(res => res.text())
    .then(data => {
      id("response").textContent = data;
      id("username").value = "";
      id("password").value = "";
    })
    .catch(err => console.log(err))
  }


  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the element that has matched the selector passed.
   * @param {string} selector - selector for element
   * @return {object} DOM object associated with selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Create an emty element that has matched the selector passed.
   * @param {string} selector - selector for element
   * @return {object} an empty DOM object.
   */
  function gen(selector) {
    return document.createElement(selector);
  }
})();
