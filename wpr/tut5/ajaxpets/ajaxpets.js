/**
 * A webpage for fetching cute pet photos.
 * Photos will be populated on the page after the user
 * selects their desired pet type.
 */
"use strict";
(function () {
  window.addEventListener("load", init);
  const URL_API = "http://103.159.50.237/wpr/api/pets/index.php";
  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    // TODO
    let radios = document.querySelectorAll("input");
    radios.forEach((radio) => {
      radio.addEventListener("change", makeRequest);
    });
  }

  /**
   * TODO: Fetch data from the ajax pets API!
   */
  function makeRequest(event) {
    // TODO
    id("pictures").innerHTML = "";

    let radio = event.target;

    fetch(URL_API + "?animal=" + radio.value)
      .then(statusCheck)
      .then((res) => res.text())
      .then(processRes)
      .catch((error) => {
        console.log(error);
      });
  }

  function processRes(data) {
    let imgs = data.split("\n");
    imgs.forEach((img) => {
      let pic = gen("img");
      pic.src = img;
      id("pictures").appendChild(pic);
    });
  }

  /**
   * TODO: Implement any other functions you need
   */

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
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
  function gen(selector) {
    return document.createElement(selector);
  }
})();
