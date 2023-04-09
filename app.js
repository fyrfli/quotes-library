const disp = document.querySelector(".display");

fetch("https://cdn.fyrfli.link/FavouriteQuotes.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    numQuotes = Object.entries(data).length;
    num = Math.floor(Math.random() * numQuotes);
    disp.innerText = data[num].quote + "\n\n" + data[num].author.replace(/"/g, '');
  })
