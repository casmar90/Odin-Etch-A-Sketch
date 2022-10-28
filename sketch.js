 let gridSize = 16;

 // GRID RANGE SLIDER
 let slider = document.getElementById("myRange");
 let output = document.getElementById("value");
 output.innerHTML = slider.value + ' x ' + slider.value; // Display grid size

 // Update the current slider value (each time you drag the slider handle)
 slider.oninput = function () {
     output.innerHTML = this.value + ' x ' + this.value;
     gridSize = this.value;
     createGrid();
     drawing();
 }

 // GRID SETUP
 createGrid()

 function createGrid() {

     const resetGrid = document.getElementById('grid');
     resetGrid.innerHTML = '';

     for (let i = 0; i < gridSize; i++) {
         let column = document.createElement('div');
         column.classList.add('column');
         column.id = "column-" + (i + 1);
         document.getElementById('grid').appendChild(column);
     }

     for (let i = 0; i < gridSize; i++) {
         for (let i = 0; i < gridSize; i++) {
             let pixel = document.createElement('div');
             pixel.classList.add('pixel');
             document.getElementById('column-' + (i + 1)).appendChild(pixel);
         }
     }
 }

 // BUTTONS
 let selectedColumn = 'red';

 const red = document.querySelector('.red');
 const green = document.querySelector('.green');
 const blue = document.querySelector('.blue');
 const yellow = document.querySelector('.yellow');
 const black = document.querySelector('.black');
 const eraser = document.querySelector('.eraser');

 red.onclick = () => selectedColumn = ('red');
 //  red.onclick = () => red.style.color = 'violet';

 green.onclick = () => selectedColumn = ('green');
 blue.onclick = () => selectedColumn = ('blue');
 yellow.onclick = () => selectedColumn = ('yellow');
 black.onclick = () => selectedColumn = ('black');
 eraser.onclick = () => selectedColumn = ('eraser');

 //  let r = Math.floor(Math.random() * 255);
 //  let g = Math.floor(Math.random() * 255);
 //  let b = Math.floor(Math.random() * 255);
 //  console.log(r);
 //  console.log(g);
 //  console.log(b);

 //  function rgb(r, g, b) {
 //      return "rgb(" + r + "," + g + "," + b + ")";
 //  }
 //  console.log(rgb(r, g, b));
 //  let randomColumn = rgb(r, g, b);

 //   document.getElementById("myH2").style.Column 

 //  let randomColumn = rgb(155, 102, 102);

 const rainbow = document.querySelector('.rainbow');
 rainbow.onclick = () => selectedColumn = ('rainbow');

 const clear = document.querySelector('.clear');
 let items = document.querySelectorAll('.pixel');
 clear.onclick = () => {
     let items = document.querySelectorAll('.pixel');
     items.forEach(item => item.className = 'pixel');
 }

 // DRAWING
 drawing();

 function drawing() {
     let items = document.querySelectorAll('.pixel');
     items.forEach(item => {
         item.addEventListener('mouseover', () => {
             item.className = 'pixel';
             item.classList.add(selectedColumn);
         });
     });
 }