
const container=document.querySelector('#container')

for (let x=0;x < 256; x++) {
    
    this["grid"+x] = document.createElement('div')  // creates a variable that differentiates itself from the next based on the iteration
    this["grid"+x].classList.add('grid')            // could've been an array lol
    container.appendChild(this["grid"+x])
    this["grid"+x].addEventListener('mouseover', () => {
        this["grid"+x].classList.add('grid2')
    })
}

