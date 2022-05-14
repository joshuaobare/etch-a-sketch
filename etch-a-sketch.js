
const container=document.querySelector('#container')


function gridSize() {
    container.innerHTML =''                           // empties the grid each time the button is clicked
    let side = prompt("What size should the grid be?");
    
    if (side > 100) {
        alert('Grid size too big, try again')
        gridSize()
    }
    
    else {
    
    for (let x=0;x < (side*side); x++) {            // loop varies depending on the grid's intended size  
        
        this["grid"+x] = document.createElement('div')  // creates a variable that differentiates itself from the next based on the iteration
        
        let sizing = 500/side                          // sizing defines the size of a single div. 1000 is the default size of the container as per css
        this["grid"+x].classList.add('grid')            
        this["grid"+x].style.width = sizing + "px";      
        this["grid"+x].style.height = sizing + "px";
       
        container.appendChild(this["grid"+x])
        
        this["grid"+x].addEventListener('mouseover', () => { // hovering over a div changes it to .grid2 class
            this["grid"+x].classList.add('grid2')
        })
    }}
}

btn = document.getElementById("btn")
btn.addEventListener('click',gridSize)