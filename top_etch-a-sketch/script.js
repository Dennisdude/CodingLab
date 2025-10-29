let gridSize = 16;

const canvasContainer = document.querySelector('#canvas');

function buildGrid() {
  for (let i = 0; i < (gridSize*gridSize); i++) {
    const canvasSquare = document.createElement('div');
    canvasContainer.appendChild(canvasSquare);
    canvasSquare.classList.add("square");
    canvasSquare.style.height = 100/gridSize + '%';
    canvasSquare.style.width = 100/gridSize + '%';
  }
}

function init() {
  buildGrid();
}

init();