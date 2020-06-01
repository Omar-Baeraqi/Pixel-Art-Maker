// Select color input
// Add event listener to colorPicker button with a change event and a function to store the color value
const colorButton = document.getElementById('colorPicker');
let color = '#000000';
colorButton.addEventListener('change', chooseColor);
function chooseColor() {
    color = colorButton.value;
}
// Select size input
/* Declaring two variables for height & width and create a function to be called and update thier values 
based on user input everytime submit button is clicked */
let gridHeight;
let gridWidth;
function sizeInput() {
    gridHeight = document.getElementById("inputHeight").value;
    gridWidth = document.getElementById("inputWidth").value;
}
// When size is submitted by the user, call makeGrid()
const submitButton = document.querySelectorAll('input')[2];
submitButton.addEventListener('click', makeGrid);

function makeGrid(event) {

// Your code goes here!
    let grid = document.getElementById('pixelCanvas');
    event.preventDefault();
    sizeInput();
// Reset grid: a loop for resetting the grid to a blank state
    for(let i = 0; i < grid.childNodes.length; i++) {
        grid.childNodes[i].remove();
    }
// Create grid: nested loops for creating the grid based on user input for height & width
    for (let i = 0; i < gridHeight; i++) {
        let row = grid.insertRow();
        for (let j = 0; j < gridWidth; j++) {
            row.insertCell();
        }
    }
/* Color grid sqaures: loop for adding event listerners to grid squares with a function for changing
   the color of each square */
    let cells = document.querySelectorAll('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', squareColor);
    }
    function squareColor() {
        this.style.backgroundColor = color;
    }
}