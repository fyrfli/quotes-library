'use strict';
// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

const quoteDisplay = document.querySelector(".quotes");
const debugDisplay = document.querySelector(".debug");
let i = 0;
let quote_section = "";

fetch("assets/FavouriteQuotes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    while (i < Object.entries(data).length) {
      quote_section = document.createElement("section")
      quote_section.className = "quote";
      quote_section.innerText = "\"" + data[i].quote + "\"\n\n" + data[i].author;
      quoteDisplay.appendChild(quote_section);
      i++;
    }
  });
