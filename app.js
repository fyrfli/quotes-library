// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

const disp = document.querySelector(".display");
const numIterations = 20;
let ctr = 0;

fetch("FavouriteQuotes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // quotes = data;
    doTheLoop(data);
  })

// doTheLoop(quotes);

function doTheLoop(quotes) {
  console.log("Entering doTheLoop");
  numQuotes = Object.entries(quotes).length;
  console.log(numQuotes);
  getQuote(quotes, numQuotes);
  timerID = setInterval(getQuote, 6000, quotes, numQuotes);
  console.log("Timer ID: " + timerID);
  setTimeout(() => {
    console.log("Stopping");
    clearInterval(timerID);
    console.log("Stopped");
    30000
  });
}

function getQuote(quotes, numQuotes) {
  console.log("Entering getQuote");
  num = Math.floor(Math.random() * numQuotes);
  disp.classList.remove(".hidden");
  disp.classList.add(".anim");
  disp.innerText = quotes[num].quote + "\n\n" + quotes[num].author.replace(/"/g, '');
  disp.classList.remove(".anim");
  // disp.classList.add(".hidden");
}