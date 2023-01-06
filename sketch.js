// VALUES
let gridSize = 16;
let selectedColor = 'red';
let gridOn = false;

// SELECTORS
const grid = document.querySelector('#grid');
const buttons = document.querySelectorAll('button');
const btns = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const toggleGridButton = document.querySelector('.gridButton');
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
      if (gridOn) {
        createPixel.classList.add('pixel', 'addGrid');
      } else {
        createPixel.classList.add('pixel');
      }
      document.querySelector(`#column-${row + 1}`).appendChild(createPixel);
    }
  }
}

// PICK COLOR, MARK ACTIVE BUTTON, BUTTON PUSH ANIMATION
function pickColor() {
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      selectedColor = e.currentTarget.id;
      const eraserCircle = document.querySelector('.eraserCircle');
      btns.forEach((btnStatus) => {
        btnStatus.classList.remove('active');
        eraserCircle.classList.remove('active');
      });
      e.target.classList.add('active');
      if (selectedColor === 'eraser') {
        eraserCircle.classList.add('active');
      }
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
function ruby() {
  const h = 14;
  const s = 100;
  const l = Math.random() * (62 - 48) + 48;
  return `hsl(${h},${s}%,${l}%)`;
}

function emerald() {
  const h = 126;
  const s = 98;
  const l = Math.random() * (57 - 48) + 38;
  return `hsl(${h},${s}%,${l}%)`;
}

function sapphire() {
  const h = 200;
  const s = 100;
  const l = Math.random() * (75 - 50) + 50;
  // const l = Math.random() * 75;
  return `hsl(${h},${s}%,${l}%)`;
}

function topaz() {
  const h = 41;
  const s = 100;
  const l = Math.random() * (74 - 56) + 56;
  return `hsl(${h},${s}%,${l}%)`;
}

function amethyst() {
  const h = 270;
  const s = 100;
  const l = Math.random() * (68 - 50) + 60;
  return `hsl(${h},${s}%,${l}%)`;
}

function diamond() {
  const h = 0;
  const s = 0;
  const l = Math.random() * (90 - 75) + 75;
  return `hsl(${h},${s}%,${l}%)`;
}

function skull() {
  const h = 0;
  const s = 0;
  const l = Math.random() * (60 - 40) + 40;
  return `hsl(${h},${s}%,${l}%)`;
}

function unicorn() {
  const h = Math.random() * 360;
  const s = Math.random() * (100 - 50) + 50;
  // const s = 75;

  const l = Math.random() * (60 - 40) + 60;
  return `hsl(${h},${s}%,${l}%)`;
}

// DRAWING
function updatePixel(item) {
  const pixel = item;
  pixel.classList.remove('red', 'green', 'blue', 'yellow', 'black', 'eraser');

  if (selectedColor === 'ruby') {
    pixel.style.backgroundColor = ruby();
  } else if (selectedColor === 'emerald') {
    pixel.style.backgroundColor = emerald();
  } else if (selectedColor === 'sapphire') {
    pixel.style.backgroundColor = sapphire();
  } else if (selectedColor === 'topaz') {
    pixel.style.backgroundColor = topaz();
  } else if (selectedColor === 'amethyst') {
    pixel.style.backgroundColor = amethyst();
  } else if (selectedColor === 'diamond') {
    pixel.style.backgroundColor = diamond();
  } else if (selectedColor === 'skull') {
    pixel.style.backgroundColor = skull();
  } else if (selectedColor === 'unicorn') {
    pixel.style.backgroundColor = unicorn();
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

// TOGGLE GRID
toggleGridButton.addEventListener('click', () => {
  toggleGridButton.classList.toggle('gridButtonOn');

  const items = document.querySelectorAll('.pixel');
  items.forEach((item) => {
    item.classList.toggle('addGrid');
    if (item.classList.contains('addGrid')) {
      gridOn = true;
    } else {
      gridOn = false;
    }
  });
});

function clearGrid() {
  const items = document.querySelectorAll('.pixel');
  items.forEach((item) => {
    const pixel = item;
    if (item.classList.contains('addGrid')) {
      pixel.className = ('pixel addGrid');
      item.removeAttribute('style');
    } else {
      pixel.className = ('pixel');
      item.removeAttribute('style');
    }
  });
}

// CLEAR GRID
clear.addEventListener('click', clearGrid);

// RUN
function run() {
  createGrid();
  pickColor();
  drawing();
}

// CHANGE GRID SIZE
slider.oninput = function setGridSize() {
  gridInfo.textContent = `${this.value} x ${this.value}`;
  gridSize = this.value;
};

slider.addEventListener('click', run);
slider.addEventListener('touchend', run);
slider.addEventListener('keydown', (e) => {
  if (e.keyCode === 38 || e.keyCode === 40 || e.keyCode === 37 || e.keyCode === 39) {
    run();
  }
});

// START PROGRAM
run();