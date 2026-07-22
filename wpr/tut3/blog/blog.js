/**
 * JS for blog post section exercise
 */

"use strict";
(function () {
  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    qs("button").addEventListener("click", addEntry);
  }

  /**
   * TODO
   * adds a blog entry to the blog post page
   */
  function addEntry() {
    const date = id("date").value;
    const entry = id("entry").value;

    const dateContent = gen("h3");
    dateContent.textContent = date;

    const entryContent = gen("p");
    entryContent.textContent = "Entry: " + entry;

    if (date === "" || entry === "") {
      id("date").value = "";
      id("entry").value = "";
      return console.log("Invalid input");
    } else {
      const article = gen("article");
      article.classList.add("post");
      article.addEventListener("click", () => {
        article.remove();
        qs("button").disabled = false;
      });

      id("posts").appendChild(article);
      article.appendChild(dateContent);
      article.appendChild(entryContent);

      id("date").value = "";
      id("entry").value = "";
    }

    if(qsa(".post").length >= 3) {
      qs("button").disabled = true;
    }
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
  /**
   * Returns a DOM object from the given tag name.
   * @param {string} tagName - the name of the element to be created.
   * @returns {object} a DOM object of the specified tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
