const form = document.getElementById('form')
const email = document.getElementById('email')
const country = document.getElementById('country')
const zipCode = document.getElementById('zip-code')
const password = document.getElementById('password1')
const password2 = document.getElementById('password2')
const formControls = document.querySelectorAll('.form-control')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	let msg = ''

	formControls.forEach((control) => {
		control.className === 'form-control error' ||
		control.className === 'form-control'
			? (msg = 'Try again')
			: (msg = 'High Five')
	})

	alert(msg)

	form.reset()
	formControls.forEach((control) => (control.className = 'form-control'))
})

email.addEventListener('input', () => {
	!validateEmail()
		? setError(email, 'Please enter a valid email address')
		: setSuccess(email)
})

country.addEventListener('input', () => {
	validateCountry()
})

zipCode.addEventListener('input', () => {
	validateZip()
})

password.addEventListener('input', () => {
	validatePassword()
})

password2.addEventListener('input', () => {
	checkPassword()
})

function validateEmail() {
	const emailVal = email.value.trim()

	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		emailVal
	)
}

function validateCountry() {
	const countryVal = country.value.trim()

	if (countryVal === '' || countryVal.length < 3) {
		setError(country)
	} else {
		setSuccess(country)
	}
}

function validateZip() {
	const zipVal = zipCode.value.trim()

	if (zipVal === '' || zipVal.length < 5) {
		setError(zipCode)
	} else {
		setSuccess(zipCode)
	}
}

function validatePassword() {
	const passwordVal = password.value.trim()

	if (passwordVal.length < 8) {
		setError(password, 'Password is too short')
	} else if (passwordVal.length > 20) {
		setError(password, 'Password is too long')
	} else if (passwordVal.search(/\d/) == -1) {
		setError(password, 'Password must contain at least one digit')
	} else if (passwordVal.search(/[a-zA-Z]/) == -1) {
		setError(password, 'Password must contain at least one letter')
	} else if (
		passwordVal.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]/) != -1
	) {
		setError(password, 'Password contains invalid characters')
	} else {
		setSuccess(password)
	}
}

function checkPassword() {
	const checkVal = password2.value.trim()

	if (checkVal === '' || checkVal !== password.value.trim()) {
		setError(password2, 'The passwords must match')
	} else {
		setSuccess(password2)
	}
}

function setError(input, msg = '') {
	const formControl = input.parentElement
	const small = formControl.querySelector('small')
	formControl.className = 'form-control error'
	formControl.style.marginBottom = '20px'
	small.innerText = msg || input.validationMessage
}

function setSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
	formControl.style.marginBottom = '10px'
}
