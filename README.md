# Reading json and randomly posting content

I wanted to create an "app" that would read in JSON and print out the results randomly based on a randomly generated number. It took me a while to get right, mostly because of the JSON file format. I have it down now. This is my result.

## Next steps ...

I want to add more quotes and a button to run the code instead of having the user reload the page. 

Or at least create a timer loop to do the refreshing of the quotes automatically.

--  18 May, 2022 - 10:42:14

## Looping done.

I managed to get the looping done with a iteration count of 25 and an interval of 8seconds. So now, when you go to the live page, it should iterate 25 times through a random selection of my favourite quotes.

-- 28 May, 2022 - 09:28:53

## Changed the entire format of the page

I didn't like that the looping would repeat the same quote several times so I decided on a column format instead. This way **all** the quotes show up at once. No looping, no excessive animations ... just a simple page.

[![status-badge](https://ci.fyrfli.dev/api/badges/fyrfli/jsquotes/status.svg)](https://ci.fyrfli.dev/fyrfli/jsquotes)
