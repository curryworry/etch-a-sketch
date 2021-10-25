const canvas = document.querySelector('#canvas');
console.log(canvas);
const canvasWidth = canvas.offsetWidth;
console.log(canvasWidth);

function calcDimensions(numOfRows){
    let width = canvasWidth/numOfRows;
    return width;
}



function drawGrid(){
    let width = calcDimensions(16);
    
    for(let i=0; i<256; i++){
        const gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-square');
    gridDiv.style.width='31.25px';
    gridDiv.style.height='31.25px';
        canvas.appendChild(gridDiv);
    }
}

drawGrid();