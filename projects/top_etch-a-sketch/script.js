(() => {
  const DEFAULT_GRID_SIZE = 16;
  const GRID_CLASS = 'square';
  const BORDER_CLASS = 'squareBorder';

  let gridSize = DEFAULT_GRID_SIZE;
  let isDrawing = false;
  let isErasing = false;

  const canvasContainer = document.querySelector('#canvasContainer');
  const gridBordersCheckbox = document.querySelector('#gridBordersCheckbox');
  const gridSizeText = document.querySelector('#gridSizeText');
  const gridSizeSlider = document.querySelector('#gridSizeSlider');
  const eraseButton = document.querySelector('#clearButton');
  const resetButton = document.querySelector('#resetButton');

  function updateGridSizeText() {
    gridSizeText.textContent = `${gridSize}x${gridSize}`;
  }

  function applyBorderStyle() {
    const shouldShowBorders = gridBordersCheckbox.checked;
    const squares = canvasContainer.querySelectorAll(`.${GRID_CLASS}`);

    squares.forEach(square => {
      square.classList.toggle(BORDER_CLASS, shouldShowBorders);
    });
  }

  function clearGrid() {
    canvasContainer.textContent = '';
    buildGrid();
  }

  function buildGrid() {
    updateGridSizeText();

    const fragment = document.createDocumentFragment();
    const sizePercent = 100 / gridSize;

    for (let i = 0; i < gridSize * gridSize; i += 1) {
      const square = document.createElement('div');
      square.className = GRID_CLASS;
      square.style.width = `${sizePercent}%`;
      square.style.height = `${sizePercent}%`;

      fragment.appendChild(square);
    }

    canvasContainer.appendChild(fragment);
    applyBorderStyle();
  }

  function paintSquare(target) {
    if (!target.classList.contains(GRID_CLASS)) return;

    target.style.backgroundColor = isErasing ? 'white' : 'black';
  }

  function handleMouseDown(event) {
    if (!event.target.classList.contains(GRID_CLASS)) return;

    isDrawing = true;
    paintSquare(event.target);
  }

  function handleMouseOver(event) {
    if (!isDrawing) return;
    paintSquare(event.target);
  }

  function handleMouseUp() {
    isDrawing = false;
  }

  function toggleEraser() {
    isErasing = !isErasing;
    eraseButton.classList.toggle('active', isErasing);
  }

  function init() {
    buildGrid();

    canvasContainer.addEventListener('mousedown', handleMouseDown);
    canvasContainer.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseup', handleMouseUp);

    
    gridBordersCheckbox.addEventListener('change', applyBorderStyle);
    
    gridSizeSlider.addEventListener('input', (event) => {
      gridSize = Number(event.target.value);
      clearGrid();
    });
    
    eraseButton.addEventListener('click', toggleEraser);
    resetButton.addEventListener('click', clearGrid);
  }

  init();
})();