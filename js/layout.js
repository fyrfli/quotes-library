'use strict';
// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

const quoteDisplay = document.querySelector(".quotes");
const debugDisplay = document.querySelector(".debug");
let i = 0;
let quote_section = "";

fetch("https://cdn.fyrfli.link/FavouriteQuotes.json")
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

function liveSearch() {
  let j;
  let input = document.getElementById('filter').value.toLowerCase();
  let item = document.getElementsByClassName('quote');
  
  for (j = 0; j < item.length; j++) {
    if (!item[j].innerText.toLowerCase().includes(input)) {
      item[j].style.display = "none";
    }
    else {
      item[j].style.display = "inline-block"
    }
  }
}


// The working funtion for live search from https://jupiter.fyrfli.net/js-play/jsplay.html
//   - this is for reference only
// function search_items() {
//     let input = document.getElementById('filter').value.toLowerCase();
//     let x = document.getElementsByClassName('item');

//     for (i = 0; i < x.length; i++) {
//         if (!x[i].innerHTML.toLowerCase().includes(input)) {
//             x[i].style.display = "none";
//         }
//         else {
//             x[i].style.display = "list-item";
//         }
//     }
// }

