/*
 * Quadratic equation solver exercise
 *
 * TODO: implement the functionality for index.html webpage to solve quadratic equations
 * Use-case scenario: when a user enters numbers on three text fields with ids of "a",
 * "b", "c" and clicks "Solve" button, equation solution will be displayed on the <div>
 * with id "result".
 * 
 */
 "use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    const inputA = document.getElementById("a");
    const inputB = document.getElementById("b");
    const inputC = document.getElementById("c");

    const btn = document.querySelector("button");
    btn.addEventListener("click", solve);

    function solve() {
      const a = inputA.valueAsNumber;
      const b = inputB.valueAsNumber;
      const c = inputC.valueAsNumber;

      const result = document.getElementById("result");
      
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        result.textContent = "Please enter correct numbers"
      } else {
        let delta = b * b - 4 * a * c;

         if (delta < 0) {
        result.textContent = "No solution";
    } 
    else if (delta === 0) {
        let x = -b / (2 * a);
        result.textContent = `x = ${x}`;
    } 
    else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        result.textContent = `x1 = ${x1}, x2 = ${x2}`;
    }
      }
    }
  }
})();