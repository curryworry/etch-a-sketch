const canvas = document.querySelector('#canvas');
const canvasWidth = canvas.offsetWidth;
const slider = document.getElementById('grid-slider');
initializeGrid();
slider.addEventListener('input',redrawGrid);
//canvas.addEventListener('mouseover',sketch);


function sketch(e){
    console.log(e);
    e.target.style.backgroundColor='black';
}


function calcDimensions(numOfRows){
    let width = canvasWidth/numOfRows;
    return width;
}

function initializeGrid(){
    canvas.innerHTML='';
    let rowCount = slider.value;
    let cellWidth = calcDimensions(rowCount);
    let gridSize = rowCount * rowCount;
    for(let i=0; i<gridSize; i++){
        const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-square');
    gridDiv.style.width = `${cellWidth}px`;
    gridDiv.style.height = `${cellWidth}px`;
        canvas.appendChild(gridDiv);
    }
    document.getElementById('grid-size-value').textContent = `${rowCount} x ${rowCount}`;
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square)=>square.addEventListener('mouseover',sketch));
}

function redrawGrid(e){
    canvas.innerHTML='';
    let rowCount = e.target.value;
    let cellWidth = calcDimensions(rowCount);
    let gridSize = rowCount * rowCount;
    for(let i=0; i<gridSize; i++){
        const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-square');
    gridDiv.style.width = `${cellWidth}px`;
    gridDiv.style.height = `${cellWidth}px`;
        canvas.appendChild(gridDiv);
    }
    document.getElementById('grid-size-value').textContent = `${rowCount} x ${rowCount}`;
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach((square)=>square.addEventListener('mouseover',sketch));
}

