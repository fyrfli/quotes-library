'use strict';
// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

const quoteDisplay = document.querySelector(".quote");
let numQuotes;
let randomNum;
let intervalID;
let iteratorID = 0;
let currQuote;

fetch("FavouriteQuotes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    currQuote = getQuote(data);
    for (let i = 0; i < 50; i++) {
      quoteDisplay.innerText = currQuote;
      intervalID = setInterval(() => {
        currQuote = getQuote(data);
        quoteDisplay.innerText = currQuote;
      }, 12000);
    }
  });


function getQuote(data) {
  let noQuotes = Object.entries(data).length;
  let randNo = Math.floor(Math.random() * noQuotes);
  return data[randNo].quote + "\n\n" + data[randNo].author.replace(/"/g, '');
}