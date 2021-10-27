const canvas = document.querySelector('#canvas');
const canvasWidth = canvas.offsetWidth;
const slider = document.getElementById('grid-slider');
const clearButton = document.getElementById('clr-btn');
const colorPicker = document.getElementById('color-picker');
const randomButton = document.getElementById('random-btn');
const eraserButton = document.getElementById('eraser-btn');
let brushColor = colorPicker.value;
let paintMode = 'single';

drawGrid();
slider.addEventListener('input',drawGrid);
clearButton.addEventListener('click',clearGrid);
colorPicker.addEventListener('input',chooseBrushColor);
randomButton.addEventListener('click',chooseMode);
colorPicker.addEventListener('click',chooseMode);
eraserButton.addEventListener('click',chooseMode);

function chooseMode(e){
    if(e.target.id=="random-btn"){
        paintMode = 'random';
    }
    else if(e.target.id=="color-picker"){
        paintMode = 'single';
    }

    else if(e.target.id=="eraser-btn"){
        paintMode = 'eraser';
    }
}

function calcDimensions(numOfRows){
    let width = canvasWidth/numOfRows;
    return width;
}

function chooseBrushColor(e){
    brushColor = e.target.value;
}

function drawGrid(e){
    canvas.innerHTML='';
    let rowCount;
   // console.log(e);
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
    let paintR = Math.floor(Math.random() * 255) + 1;
    let paintG = Math.floor(Math.random() * 255) + 1;
    let paintB = Math.floor(Math.random() * 255) + 1;

    if(paintMode=='single'){
    e.target.style.backgroundColor=brushColor;
    }
    else if(paintMode=='random'){
        if(e.target.style.filter==''){
            let filterString = 'brightness(1)';
            e.target.style.filter = filterString;
            e.target.style.backgroundColor=`rgb(${paintR},${[paintG]},${paintB})`;
        }
        else{
        let filterString = e.target.style.filter;
        let filterValue = filterString.split('(')[1].split(')')[0];
        filterValue = filterValue - 0.1;
        e.target.style.filter=`brightness(${filterValue})`;
        }
    }
    else if(paintMode=='eraser'){
        e.target.style.backgroundColor='rgb(240,239,239)';
    }
}

function clearGrid(){
    canvas.innerHTML='';
    drawGrid();
}
