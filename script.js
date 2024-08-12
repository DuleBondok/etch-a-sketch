let container = document.querySelector("#container");

let numberOfSquares = 16;

const btn = document.querySelector(".btn");

btn.addEventListener("click", resizingGrid);

function resizingGrid()  {
    let newGridSize = prompt("How many squares should be in the grid?");
  
    while (newGridSize > 100 || newGridSize < 1 || newGridSize === NaN) {
      newGridSize = prompt("Enter a number less than 100 and greater than 0");
    }
  
    createGrid(newGridSize);
  };


  function createGrid(size)
  {
    container.innerHTML = "";
    const totalSize=size;
    for(let i=0;i<totalSize;i++)
    {
        const divsRow = document.createElement("div");
        divsRow.style.border = "1px solid black";
        divsRow.style.width = "50px";
        divsRow.style.height= "50px";
        divsRow.style.display = "grid";
        container.appendChild(divsRow);
        for(let i = 0;i<totalSize;i++)
        {
            const divsColumn = document.createElement("div");
            divsColumn.style.border = "1px solid black";
            divsColumn.style.width = "50px";
            divsColumn.style.height= "50px";
            divsRow.appendChild(divsColumn);

        }
    }
  }






for(let i = 0;i<numberOfSquares;i++)
{
    let rowDiv=document.createElement("div");
    rowDiv.classList.add("allDivs");
    rowDiv.style.border = "1px solid black";
    rowDiv.style.width = "50px";
    rowDiv.style.height= "50px";
    rowDiv.style.display = "grid";
    container.appendChild(rowDiv);
    {
        for(let i = 0;i<numberOfSquares;i++)
        {
            let columnDiv = document.createElement("div");
            columnDiv.classList.add("allDivs");
            columnDiv.style.border = "1px solid black";
            columnDiv.style.width = "50px";
            columnDiv.style.height= "50px";
            rowDiv.appendChild(columnDiv);

        }
    }

}

const gridBoxes = document.querySelectorAll(".allDivs")
gridBoxes.forEach((columnDiv) => {
    columnDiv.addEventListener("mouseover" , () => {
        columnDiv.style.backgroundColor = "red";
    });
});

gridBoxes.forEach((columnDiv) => {
    columnDiv.addEventListener("mouseout" , () => {
        columnDiv.style.backgroundColor = "";
    });
});