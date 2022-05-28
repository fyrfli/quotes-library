'use strict';
// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

const disp = document.querySelector(".quote");
let numQuotes;
let randomNum;
let intervalID;
let iteratorID = 0;

fetch("FavouriteQuotes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    numQuotes = Object.entries(data).length;
    randomNum = Math.floor(Math.random() * numQuotes);
    disp.classList.add("anim");
    disp.innerText = data[randomNum].quote + "\n\n" + data[randomNum].author.replace(/"/g, '');
    disp.classList.remove("anim");
    
    intervalID = setInterval(() => {
      if(iteratorID < numQuotes) {
        randomNum = Math.floor(Math.random() * numQuotes);
        disp.classList.add("anim");
        disp.innerText = data[randomNum].quote + "\n\n" + data[randomNum].author.replace(/"/g, '');
        disp.classList.remove("anim");
        iteratorID++;
      }
    }, 6000);
    clearInterval(intervalID);
    //numQuotes = Object.entries(data).length;
    //num = Math.floor(Math.random() * numQuotes);
    //disp.classList.add("anim");
    //disp.innerText = data[num].quote + "\n\n" + data[num].author.replace(/"/g, '');
  });