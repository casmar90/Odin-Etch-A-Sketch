/* eslint-disable eol-last */

// VALUES
let gridSize = 16;
let selectedColor = 'red';

const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll('button');

// SELECTORS
// const red = document.querySelector('.red');
// const green = document.querySelector('.green');
// const blue = document.querySelector('.blue');
// const yellow = document.querySelector('.yellow');
// const black = document.querySelector('.black');
// const eraser = document.querySelector('.eraser');
// const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clear');

const slider = document.querySelector('#myRange');
const gridSizeInfo = document.querySelector('#value');

gridSizeInfo.textContent = `${slider.value} x ${slider.value}`;

// FUNCTIONS
function createGrid() {
  grid.textContent = ''; // reset grid
  for (let col = 0; col < gridSize; col += 1) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.id = `column-${col + 1}`;
    document.querySelector('#grid').appendChild(column);
  }
  for (let i = 0; i < gridSize; i += 1) {
    for (let row = 0; row < gridSize; row += 1) {
      const createPixel = document.createElement('div');
      createPixel.classList.add('pixel');
      document.querySelector(`#column-${row + 1}`).appendChild(createPixel);
    }
  }
}

// --------------------------------------------------------

// SELECT COLOR
function selectColor(e) {
  buttons.forEach((button) => {
    if (e.target.classList.contains('btn')) {
      button.classList.remove('active');
      e.target.classList.add('active');
    }
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.textContent.toLowerCase() !== 'clear') {
      selectedColor = e.target.textContent.toLowerCase();
    }
  });
});

// RANDOM COLOR GENERATOR
function rgb() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

// CHECK IF MOUSE BUTTON IS DOWN
let down = false;

grid.addEventListener('mousedown', (e) => {
  down = true;
  e.preventDefault(); // prevents "block cursor" from appearing
});

document.addEventListener('mouseup', () => {
  down = false;
});

function drawingClick() {
  const items = document.querySelectorAll('.pixel');
  items.forEach((item) => {
    item.addEventListener('mousedown', () => {
      const pixel = item;
      pixel.className = 'pixel';
      if (selectedColor === 'rainbow') {
        item.classList.remove(selectedColor);
        pixel.style.backgroundColor = rgb();
      } else {
        item.classList.add(selectedColor);
      }
    });
  });
}

function drawingDrag() {
  const items = document.querySelectorAll('.pixel');
  items.forEach((item) => {
    item.addEventListener('mouseover', () => {
      if (down) {
        const pixel = item;
        pixel.className = 'pixel';
        if (selectedColor === 'rainbow') {
          item.classList.remove(selectedColor);
          pixel.style.backgroundColor = rgb();
        } else {
          item.classList.add(selectedColor);
        }
      }
    });
  });
}

// CLEAR GRID
clear.addEventListener('click', () => {
  const items = document.querySelectorAll('.pixel');
  items.forEach((item) => {
    const pixel = item;
    pixel.className = 'pixel';
    pixel.style.backgroundColor = '';
  });
});

// GRID SETUP
createGrid();
slider.oninput = function setGridSize() {
  gridSizeInfo.textContent = `${this.value} x ${this.value}`;
  gridSize = this.value;
  createGrid();
  drawingClick();
  drawingDrag();
};

// MARK ACTIVE BUTTON

document.addEventListener('click', selectColor, false);

// DRAWING
drawingClick();
drawingDrag();

// BACK TO ORIGINAL SIZE AFTER CLICK
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('buttonPushed');
    button.addEventListener('mouseleave', () => {
      button.classList.remove('buttonPushed');
    });
  });
});