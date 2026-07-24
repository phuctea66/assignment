/**
 * JS for working with JSON exercise
 */

"use strict";
(function () {
  window.addEventListener("load", init);

  // Initialize event listeners when the page loads

  /**
   * Sets up event listeners for the page elements
   * - Adds a click event listener to the "loadDataButton"
   *   that triggers the loadData function
   */
  function init() {
    id("loadDataButton").addEventListener("click", loadData);
  }

  /**
   * Handles loading and displaying JSON data
   * - Defines a JSON object with sample data
   *    { name: "Alice", age: 30, country: "USA" },
        { name: "Bob", age: 25, country: "UK" },
        { name: "Charlie", age: 35, country: "Canada" }
   * - Shows a countdown timer before displaying the data
   * - Calls the displayData function to present the data after the countdown
   */
  function loadData() {
    const p = id("dataContainer");
    const span = gen("span");

    let data = [
      { name: "Alice", age: 30, country: "USA" },
      { name: "Bob", age: 25, country: "UK" },
      { name: "Charlie", age: 35, country: "Canada" },
    ];

    p.textContent = "";
    span.textContent = 3;
    span.id = "countdown";

    p.append("Loading data in ");
    p.append(span);
    p.append(" seconds...");

    let count = 3;

    const timer = setInterval(() => {
      span.textContent = --count;

      if (count === 0) {
        clearInterval(timer);
        p.textContent = "";
        displayData(data);
      }
    }, 1000);

    // Define the JSON object with sample data

    // Prepare to show countdown and data

    // Update countdown every second
  }

  /**
   * Displays the JSON data in the data container
   * - Clears any existing content in the container
   * - Iterates over each item in the JSON data and creates
   *   a new div element for each item with formatted text
   * - Appends each div to the container
   * @param {object} data - The JSON data to be displayed
   */
  function displayData(data) {
    data.forEach((obj) => {
      let ele = gen("div");
      ele.textContent =
        "Name:" + obj.name + ", Age:" + obj.age + ", Country:" + obj.country;
      ele.classList.add("data-item");
      id("dataContainer").appendChild(ele);
    });
  }

  /**
   * Retrieves the DOM element with the specified ID
   * @param {string} id - The ID of the element to retrieve
   * @returns {object} - The DOM element with the specified ID
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Creates a new DOM element with the specified tag name
   * @param {string} tagName - The name of the tag for the new element
   * @returns {object} - The newly created DOM element
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
