const formulario = document.querySelector('.formulario')

const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const errorEmail = document.querySelector('#email-error')
const errorPassword = document.querySelector('#password-error')
const login = document.querySelector('.login')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/


formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    errorEmail.textContent = ''
    errorPassword.textContent = ''

    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()

    let valido = true

    if (email === '') {
        errorEmail.textContent = 'Agrega un email'
        valido = false
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = 'agrega un email valido'
        valido = false
    }

    if (password === '') {
        errorPassword.textContent = 'Agrega una contraseña'
        valido = false
    } else if ( password.length<6) {
        errorPassword.textContent = 'Agrega al menos 6 caracteres'
        valido = false
    }

    if (valido) {
        window.location.href = 'app.html'
    }

})
