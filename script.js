const gridContainer = document.querySelector(".grid-container");

let gridSideAmount = 16;
let gridCount =0;
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
console.log(gridCount);
const allBlocks = document.querySelectorAll(".gridBlock");
allBlocks.forEach((gridBlock) =>{
    gridBlock.addEventListener("mouseover", () =>{
        gridBlock.classList.add("colored");
    });
});

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", ()=>{
const inputField = document.querySelector("input");
gridSideAmount = inputField.value;
console.log(gridSideAmount);
location.reload();

});


