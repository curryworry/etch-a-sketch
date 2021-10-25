const canvas = document.querySelector('#canvas');
console.log(canvas);
const canvasWidth = canvas.offsetWidth;
console.log(canvasWidth);
const slider = document.getElementById('grid-slider');
console.log(slider);
slider.addEventListener('input',drawGrid);
console.log(slider.value);

function calcDimensions(numOfRows){
    let width = canvasWidth/numOfRows;
    return width;
}

function drawGrid(e){
    canvas.innerHTML='';
    let rowCount = e.target.value;
    let cellWidth = calcDimensions(rowCount);
    let gridSize = rowCount * rowCount;
    console.log(rowCount);
    console.log(cellWidth);
    console.log(gridSize);
    for(let i=0; i<gridSize; i++){
        const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-square');
    gridDiv.style.width = `${cellWidth}px`;
    gridDiv.style.height = `${cellWidth}px`;
        canvas.appendChild(gridDiv);
    }
}

