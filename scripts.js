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
    //console.log(e);
    if(e.target.id=="random-btn"){
        paintMode = 'random';
       // console.log(paintMode);
    }
    else if(e.target.id=="color-picker"){
        paintMode = 'single';
       // console.log(paintMode);
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
    /*let brushRgbColor = hexToRgb(brushColor);
    let currentCellColor = e.target.style.backgroundColor;
    let rgbCellColor = currentCellColor.match(/\d+/g);
    if(rgbCellColor){console.log(`Current cell color in RGB is ${rgbCellColor[0]}`);}
    console.log(`Current Cell Color is ${currentCellColor}`);
    console.log(`Brush color is ${brushColor}`);*/
    let paintR = Math.floor(Math.random() * 255) + 1;
    let paintG = Math.floor(Math.random() * 255) + 1;
    let paintB = Math.floor(Math.random() * 255) + 1;

    if(paintMode=='single'){
    e.target.style.backgroundColor=brushColor;
    }
    else if(paintMode=='random'){
        e.target.style.backgroundColor=`rgb(${paintR},${[paintG]},${paintB})`;
    }
    else if(paintMode=='eraser'){
        e.target.style.backgroundColor='rgb(240,239,239)';
    }
}

function clearGrid(){
    canvas.innerHTML='';
    drawGrid();
}

/*function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        let r= parseInt(result[1], 16);
        let g= parseInt(result[2], 16);
        let b= parseInt(result[3], 16);
        console.log(`rgb(${r},${g},${b})`);
        return `rgb(${r},${g},${b})`;
}*/