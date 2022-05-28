// Full year for footer
const todayDate = new Date();
jsyear.innerText = todayDate.getFullYear();

const disp = document.querySelector(".quote");

fetch("FavouriteQuotes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    numQuotes = Object.entries(data).length;
    num = Math.floor(Math.random() * numQuotes);
    disp.classList.add("anim");
    disp.innerText = data[num].quote + "\n\n" + data[num].author.replace(/"/g, '');
  })