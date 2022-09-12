let wrapper = document.getElementById('wrapper')
let wrapper2 = document.getElementById('wrapper2')
let button = document.getElementById('submit')
let buttons = document.querySelectorAll('button.btn')
let valueOfbutton = 0


function wrapperChange() {
    wrapper.style.display = 'none'
    wrapper2.style.display = 'block'
}

button.addEventListener('click', wrapperChange)

function style(e) {
    e.target.classList.toggle(':focus')
    valueOfbutton = e.target.innerHTML
    document.getElementById('selected').innerHTML = `You selected ${valueOfbutton} out of 5`

}

buttons.forEach(button => {
    button.addEventListener('click', style)    

})
