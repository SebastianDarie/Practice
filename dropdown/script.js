const btn = document.querySelector('.drop')
const contact = document.querySelector('#contact')

function reveal(e) {
    e.currentTarget.parentNode.childNodes[3].classList.toggle('show')
}

btn.addEventListener('click', reveal)
contact.addEventListener('click', reveal)
