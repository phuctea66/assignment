/*
 * Pokeball Exercise
 *
 * Implements the functionality of the Pokeball webpage to show a mystery
 * Pokemon when a button is clicked.
 */
"use strict";
(function() {

  window.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("demo-btn");
    btn.addEventListener("click", init);
  });

  function init() {
   let ball = document.getElementById("pokeball")
   ball.src = "mystery.gif";
   ball.alt = "your new pokemon"
  }

})();