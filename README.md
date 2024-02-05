# a_million_dollars
a game of what would you do if you won a million dollars.
from the home page you can see your account, what you own and options for different catagories to shop in. items have button to add to cart. cart shows items and total and hitting checkout updates your account and home page

after starting this project i'm quickly realizing every little step can be broken down into a bunch more steps and every one is a whole challenge by its self.

so everything seems easy to understand except im getting an error that i cant even begin to solve, maybe im not understanding this as much as i need to.

so while im working on the shopping cart i everything went from working great to errors that caused my main shop to dissapear. Ive been doing every check along the wat and can't figure out what happened so ive just been working on getting it back. i have an error spot that i don't know how it could be related and ive put a bunch of console.log everywhere to see what is getting acessed. no luck. but i'll keep working.
 i was giong to start moving some data around to get something to generate and i noticed this "working tree" a quick google search didnt answer why it was there but as soon as i save my work it went away and the shop was working like normal, about a half a second after ranting on here that i can't fix it.. i hate technology.

 i have a lot to do, i am just struggling to find the focus to do it. but i want to make the store fully fonctional and add a footer to make suggestions of what to add. and decide if i want the main page to have button links to each catagory or still have dropdown catagories. the drop down was the origional idea but after working on it, it might just be too messy to make. 

i'm going to make a new js page for the home page and find the best way to manage the saved data, add a restart button, add cards to the home page to show what you own. finnaly get around to making all the cards that i want. and figure out how to add new catagories. now that im done with the tutorial i feel like i have what i need to make a pretty cool project.

so one home page one shop page and one generate shop function.
what button you press on the home page will take you to the next page and pass the argument of what catagory chosen. argument will have to be put in storage. in shop will have to pull catagory from storage and either
pass as argument in the generate shop function or name a variable to use 

so i need to rework the footers on the cards for the diferent shaped pictures and i need to research how to make all the items show in the cart.

so i am completely stumped.
i need to search all arrays for each thing in the cart and then print out their cards. ill search each item one at a time if its in one array ill push the data or the location to a new group else ill check the next array.
then once i have the data from all items ill print the cards.

check if first item is in array. if not ill check the next array else ill print the card and go back to function thatll pick the next item. 

first function tests if there are items in basket if so thenit will see if its count has reached the basket length add 1 to count and start next function else it will print the cart empty message. the second function will find the item by searching each catagory and if its empty it will search the next catagory

what about saving the catagory in local storage 
merge all catagories into one giang list to search

i ended up finding the command to merge the arrays into one array that is easy to search.

i want to add a third catagory for big toys itll have things like motorcycles boats jetskies snowmobiles 4wheelers dirtbikes small planes.
i need to remake my functions to make more sense, like calculate first then display everything

maybe add a way to gamble.