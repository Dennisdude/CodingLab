let gridSize = 16;
let isDrawing = false;
let isErasing = false;

const canvasContainer = document.querySelector('#canvasContainer');
const gridBordersCheckbox = document.querySelector('#gridBordersCheckbox');
const gridSizeText = document.querySelector('#gridSizeText');
const gridSizeSlider = document.querySelector('#gridSizeSlider');
const eraseButton = document.querySelector('#clearButton');
const resetButton = document.querySelector('#resetButton');

function clearGrid() {
  canvasContainer.innerHTML = '';
  buildGrid();
}

function buildGrid() {
  gridSizeText.textContent = `${gridSize}x${gridSize}`;

  for (let i = 0; i < (gridSize*gridSize); i++) {
    const canvasSquare = document.createElement('div');
    canvasContainer.appendChild(canvasSquare);
    canvasSquare.classList.add("square");
    canvasSquare.style.height = 100/gridSize + '%';
    canvasSquare.style.width = 100/gridSize + '%';
  }

  gridBordersCheckbox.dispatchEvent(new CustomEvent('change'));
}

function drawOnGrid(e) {
  if (!e.target.classList.contains("square")) return;

  if (isErasing) {
    e.target.style.backgroundColor = "white";
  } else if (isDrawing) {
    e.target.style.backgroundColor = "black";
  }
}

canvasContainer.addEventListener("mousedown", (e) => {
  isDrawing = true;
  drawOnGrid(e);
});

canvasContainer.addEventListener("mouseover", drawOnGrid);
document.addEventListener("mouseup", () => isDrawing = false);

eraseButton.addEventListener("click", () => {
  isErasing = !isErasing;
  eraseButton.classList.toggle("active");
});

gridBordersCheckbox.addEventListener('change', () => {
  const canvasSquares = document.querySelectorAll('.square');

  if (gridBordersCheckbox.checked) {
    canvasSquares.forEach(square => {
      square.classList.add('squareBorder');
    });
  } else {
    canvasSquares.forEach(square => {
      square.classList.remove('squareBorder');
    });
  }
});

gridSizeSlider.addEventListener('input', e => {
  gridSize = e.target.value;
  
  clearGrid();
});

resetButton.addEventListener("click", clearGrid);

function init() {
  buildGrid();
}

init();