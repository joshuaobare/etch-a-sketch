
const container=document.querySelector('#container')

for (let x=0;x < 256; x++) {
    
    this["grid"+x] = document.createElement('div')  // creates a variable that differentiates itself from the next based on the iteration
    this["grid"+x].classList.add('grid')
    container.appendChild(this["grid"+x])
    
}

