const gridContainer = document.querySelector(".grid-container");

let gridSideAmount = 16;
let gridCount =0;

makeGrid(16);

function makeGrid(gridSideAmount){
    for (i =0; i<gridSideAmount; i++){
        for(j =0; j<gridSideAmount; j++){
            gridCount++;
            const gridBlock = document.createElement("div");
            gridBlock.classList.add("gridBlock");
            const gridWidth = 1/(gridSideAmount)*100;
            gridBlock.setAttribute("style", `width: ${gridWidth}vw; height: ${gridWidth}vh`);
            gridContainer.appendChild(gridBlock);
        }
    }   

    const allBlocks = document.querySelectorAll(".gridBlock");

    allBlocks.forEach((gridBlock) =>{
        gridBlock.addEventListener("mouseover", () =>{
            gridBlock.classList.add("colored");
        });
    });

    //console.log(gridCount);
}

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", ()=>{
    const inputField = document.querySelector("input");
    gridSideAmount = inputField.value;
    clearGrid();
    makeGrid(gridSideAmount);
});

function clearGrid(){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

