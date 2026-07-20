/*
 * Capitalizing text of all paragraphs
 */
"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * init - write your logic here
   */
  function init() {
    const paras = document.querySelectorAll("h2, p");
    paras.forEach((p) => {
      console.log(p.textContent);
      p.textContent = p.textContent.toUpperCase();
    })
  }

})();