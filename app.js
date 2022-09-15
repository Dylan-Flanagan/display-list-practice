// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';
// initialize global state
const candyList = document.getElementById('candy-list');
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
function displayCandies() {
    candyList.innerHTML = '';

    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}
displayCandies();
