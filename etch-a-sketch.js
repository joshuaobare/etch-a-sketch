
const container=document.querySelector('#container')

/*for (let x=0;x < 256; x++) {
    
    this["grid"+x] = document.createElement('div')  // creates a variable that differentiates itself from the next based on the iteration
    this["grid"+x].classList.add('grid')            // could've been an array lol
    container.appendChild(this["grid"+x])
    this["grid"+x].addEventListener('mouseover', () => {
        this["grid"+x].classList.add('grid2')
    })
} */

function gridSize() {

    let side = prompt("What size should the grid be?");
    
    if (side > 100) {
        alert('Grid size too big, try again')
        gridSize()
    }
    
    else {
    
    for (let x=0;x < (side*side); x++) {
    
        this["grid"+x] = document.createElement('div')  // creates a variable that differentiates itself from the next based on the iteration
        
        let sizing = 1000/side
        this["grid"+x].classList.add('grid')            // could've been an array lol
        this["grid"+x].style.width = sizing + "px";
        this["grid"+x].style.height = sizing + "px";
       
        container.appendChild(this["grid"+x])
        
        this["grid"+x].addEventListener('mouseover', () => {
            this["grid"+x].classList.add('grid2')
        })
    }}
}

document.getElementById("btn"),onclick = gridSize;