"use strict";
(function () {
  window.addEventListener("load", () => {
    const cards = [
      "images/2C.png",
      "images/3S.png",
      "images/6D.png",
      "images/10S.png",
      "images/AD.png",
    ];
    let selectedCard = null;

    const board = id("board");
    for (let i = 0; i < cards.length; i++) {
      let img = document.createElement("img");
      img.src = cards[i];
      board.appendChild(img);

      img.addEventListener("click", () => {
        if (selectedCard === img) {
          img.classList.remove("selected");
          selectedCard = null;
          return;
        }
        if (selectedCard !== null) {
          selectedCard.classList.remove("selected");
        }
        img.classList.add("selected");
        selectedCard = img;
      });
    }

    function id(id) {
      return document.getElementById(id);
    }
  });
})();
