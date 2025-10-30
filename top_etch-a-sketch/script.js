let gridSize = 16;

const canvasContainer = document.querySelector('#canvasContainer');
const gridBordersCheckbox = document.querySelector('#gridBordersCheckbox');
const gridSizeText = document.querySelector('#gridSizeText');
const gridSizeSlider = document.querySelector('#gridSizeSlider')

function clearGrid() {
  canvasContainer.innerHTML = '';
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

canvasContainer.addEventListener('mouseover', e => {
  e.target.style.backgroundColor = "red";
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
  buildGrid();
});

function init() {
  buildGrid();

  gridBordersCheckbox.dispatchEvent(new CustomEvent('change'));
}

init();