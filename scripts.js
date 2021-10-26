const canvas = document.querySelector('#canvas');
const canvasWidth = canvas.offsetWidth;
const slider = document.getElementById('grid-slider');
const clearButton = document.getElementById('clr-btn');
const colorPicker = document.getElementById('color-picker');
let sketchColor = colorPicker.value;

drawGrid();
slider.addEventListener('input',drawGrid);
clearButton.addEventListener('click',clearGrid);
colorPicker.addEventListener('input',chooseSketchColor);

function calcDimensions(numOfRows){
    let width = canvasWidth/numOfRows;
    return width;
}

function chooseSketchColor(e){
    sketchColor = e.target.value;
}

function drawGrid(e){
    canvas.innerHTML='';
    let rowCount;
    console.log(e);
    if(e){
    rowCount = e.target.value;
    }
    else{
    rowCount = slider.value;
    }
    
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

function sketch(e){
    e.target.style.backgroundColor=sketchColor;
}

function clearGrid(){
    canvas.innerHTML='';
    initializeGrid();
}

