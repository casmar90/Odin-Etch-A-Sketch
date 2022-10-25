//Grid 
for (let i = 0; i < 256; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    document.getElementById('grid').appendChild(pixel);
}




// item.addEventListener('mousedown',  () => {
    // });
    
        drawing();        
function drawing() {
    let items = document.querySelectorAll('.pixel');
    items.forEach(item => {
    
            item.addEventListener('mouseover',  () => {
                item.style.backgroundColor = "#FF0000";
            });

        });
    }

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