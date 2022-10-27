 let gridSize = 16;

 //Grid size slider
 let slider = document.getElementById("myRange");
 let output = document.getElementById("demo");
 output.innerHTML = slider.value; // Display the default slider value

 // Update the current slider value (each time you drag the slider handle)
 slider.oninput = function () {
   output.innerHTML = this.value;
   // return this.value;
   gridSize = this.value;
   createGrid();
 }


 createGrid()
function createGrid() {

  const resetGrid = document.getElementById('grid');
  resetGrid.innerHTML = '';

  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    row.id = "row-" + (i + 1);
    document.getElementById('grid').appendChild(row);
   }

   for (let i = 0; i < gridSize; i++) {
     for (let i = 0; i < gridSize; i++) {
       let pixel = document.createElement('div');
       pixel.classList.add('pixel');
       document.getElementById('row-' + (i + 1)).appendChild(pixel);
     }
   }

 }

 // Buttons
 let selectedColor = 'red';

 const red = document.querySelector('.red');
 red.onclick = () => selectedColor = ('red')

 const green = document.querySelector('.green');
 green.onclick = () => selectedColor = ('green');

 const blue = document.querySelector('.blue');
 blue.onclick = () => selectedColor = ('blue');

 const yellow = document.querySelector('.yellow');
 yellow.onclick = () => selectedColor = ('yellow');

 const black = document.querySelector('.black');
 black.onclick = () => selectedColor = ('black');

 const white = document.querySelector('.white');
 white.onclick = () => selectedColor = ('white');


 // let r = Math.floor(Math.random() * 255);
 // let g = Math.floor(Math.random() * 255);
 // let b = Math.floor(Math.random() * 255);
 // console.log(r);
 // console.log(g);
 // console.log(b);

 // function rgb(r, g, b){
 //     return "rgb("+r+","+g+","+b+")";
 //   }
 //   console.log(rgb (r, g, b));

 //   document.getElementById("myH2").style.color 

 //  let randomColor = rgb(155, 102, 102);




 const rainbow = document.querySelector('.rainbow');
 rainbow.onclick = () => selectedColor = ('rainbow');



 const clear = document.querySelector('.clear');
 let items = document.querySelectorAll('.pixel');
 clear.onclick = () => {
   let items = document.querySelectorAll('.pixel');
   items.forEach(item => item.className = 'pixel');
 }






 // Drawing
 drawing();

 function drawing() {
   let items = document.querySelectorAll('.pixel');
   items.forEach(item => {

     item.addEventListener('mouseover', () => {
       item.className = 'pixel';
       item.classList.add(selectedColor);
     });



   });
 }