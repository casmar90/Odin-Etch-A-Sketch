// VALUES
let gridSize = 16;
let selectedColor = 'red';

// SELECTORS
const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll('button');
const btns = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const slider = document.querySelector('#myRange');
const gridInfo = document.querySelector('#value');

// CREATE GRID
function createGrid() {
  gridInfo.textContent = `${slider.value} x ${slider.value}`; // grid size info
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

// PICK COLOR, MARK ACTIVE BUTTON, BUTTON PUSH ANIMATION
function pickColor() {
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      selectedColor = e.target.textContent.toLowerCase();
      btns.forEach((btnStatus) => {
        btnStatus.classList.remove('active');
        e.target.classList.add('active');
      });
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add('buttonPushed');
      button.addEventListener('mouseleave', () => {
        button.classList.remove('buttonPushed');
      });
    });
  });
}

// RANDOM COLOR GENERATOR
function rgb() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

// DRAWING
function updatePixel(item) {
  const pixel = item;
  pixel.className = 'pixel';
  if (selectedColor === 'rainbow') {
    pixel.style.backgroundColor = rgb();
  } else {
    pixel.classList.add(selectedColor);
    pixel.removeAttribute('style');
  }
}

function drawing() {
  let down = false;

  grid.addEventListener('mousedown', (e) => {
    down = true;
    e.preventDefault();
  });

  document.addEventListener('mouseup', () => {
    down = false;
  });

  const items = document.querySelectorAll('.pixel');
  items.forEach((item) => {
    item.addEventListener('mousedown', () => {
      updatePixel(item);
    });
    item.addEventListener('mouseover', () => {
      if (down) {
        updatePixel(item);
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
    pixel.removeAttribute('style');
  });
});

// CHANGE GRID SIZE
slider.oninput = function setGridSize() {
  gridInfo.textContent = `${this.value} x ${this.value}`;
  gridSize = this.value;
  createGrid();
  pickColor();
  drawing();
};

// RUN
createGrid();
pickColor();
drawing();