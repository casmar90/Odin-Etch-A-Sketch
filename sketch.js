// Grid 
for (let i = 0; i < 256; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    document.getElementById('grid').appendChild(pixel);
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
    items.forEach(item =>  item.className = 'pixel'
      );
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











// <button class="red">Red</button>
//             <button class="green">Green</button>
//             <button class="blue">Blue</button>
//             <button class="yellow">Yellow</button>
//             <button class="black">Black</button>
//             <button class="white">White</button>
//             <button class="rainbow">Rainbow</button>
//             <button class="clear">Clear</button>





// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//     // and for each one we add a 'click' listener
//     button.addEventListener('click', () => {

//         again.style.display = 'none';
//         controls.style.display = 'block';
//         yt.style.display = 'none';
    
//     }

// $(document).ready(function(){
    
    //     let isDown = false;   // Tracks status of mouse button
    
    //     $(document).mousedown(function() {
        //       isDown = true;      // When mouse goes down, set isDown to true
//     })
//     .mouseup(function() {
//       isDown = false;    // When mouse goes up, set isDown to false
//     });
  
//     $(".pixel").mouseover(function(){
//       if(isDown) {        // Only change css if mouse is down
//           // $(this).css({background:"#333333"});
//         item.style.backgroundColor = "#FF0000";
//       }
//     });
//   });





// drawing();

// function drawing() {
//     let items = document.querySelectorAll('.pixel');
//     items.forEach(item => {

//       let isDown = false;   // Tracks status of mouse button
//         item.addEventListener('mousedown', () => {
//           isDown = true;      // When mouse goes down, set isDown to true
          
          
//           // $(".pixel").mouseover(function(){
//             item.addEventListener('mouseover', () => {
//     if(isDown) {        // Only change css if mouse is down
       
//       item.style.backgroundColor = "#FF0000";
//     }
//   });
//           // item.style.backgroundColor = "#FF0000";
//         });


//     });
// }

// let down = false;
// $(document).mousedown(function() {
//     down = true;
// }).mouseup(function() {
//     down = false;  
// });
// $("#example").mouseout(function() {
//     if(down) {
//         console.log("down");  
//     } 
//     else {
//         console.log("up");   
//     }
// });



// item.addEventListener('click', drawing, false);
// item.addEventListener('mouseover', drawing, false);

// function drawing() {
// };

// function drawing(e) {
//     let draw2 = document.getElementByClass("pixel");
//     draw2.style.backgroundColor = "#FF0000";
//     //console.log(e);
//   }

// function doSomething(e) {

//     let change = document.getElementByClass("pixel");
//     change.style.backgroundColor = "#FF0000";

//     // example: update the div with the event type
//     var p = document.getElementById("placeholder");
//     p.innerHTML = e.type;
// }