let gridSize = 16;

const canvasContainer = document.querySelector('#canvasContainer');
const gridSizeText = document.querySelector('#gridSizeText');
const gridSizeSlider = document.querySelector('#gridSizeSlider')

function clearGrid() {
  canvasContainer.innerHTML = '';
}

function buildGrid() {
  for (let i = 0; i < (gridSize*gridSize); i++) {
    const canvasSquare = document.createElement('div');
    canvasContainer.appendChild(canvasSquare);
    canvasSquare.classList.add("square");
    canvasSquare.style.height = 100/gridSize + '%';
    canvasSquare.style.width = 100/gridSize + '%';
  }
}

canvasContainer.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = "red";
});

gridSizeSlider.addEventListener('input', e => {
  clearGrid();
  gridSize = e.target.value;
  buildGrid();
  gridSizeText.textContent = `${gridSize}x${gridSize}`;
});

function init() {
  buildGrid();
}

init();