function formIsValid(){
    let isValid = true
    isValid = checkEmail(emailInput, emailError) && isValid
    isValid = checkPassword(passwordInput, passwordError) && isValid
    return isValid
}

function showError(element, message){
    element.textContent = message
}

function clearError(element){
    element.textContent = ''
}

function checkEmail(emailInput, emailError){
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === '') {
        showError(emailError, 'Adres e-mail jest wymagany.');
        return false
    } else if (!emailRegex.test(emailValue)) {
        showError(emailError, 'Wprowadź poprawny adres e-mail.');
        return false
    }
    clearError(emailError);
    return true
}

function checkPassword(passwordInput, passwordError){
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(passwordInput.value)) {
        showError(passwordError, 'Hasło musi mieć min. 8 znaków, zawierać dużą literę, małą literę icyfrę.');
        return false
    }
    clearError(passwordError);
    return true
}

function checkExistens(emailInput, phoneInput, users){
    users.forEach(user => {
        if (emailInput.value == user.email | phoneInput.value == user.phone){
            alert('Użytkownik z takim emailem lub telefonem już istnieje')
            return false
        }
    });
    return true
}

const form = document.querySelector('form');

const emailContainer = form.querySelector('#email_container')

const emailInput = form.querySelector('#email')
const emailError = form.querySelector('#emailError')

emailInput.addEventListener('blur', (event)=>{
    checkEmail(emailInput, emailError)
})

const passwordInput = form.querySelector('#password')
const passwordError = form.querySelector('#passwordError')

passwordInput.addEventListener('blur', (event)=>{
    checkPassword(passwordInput, passwordError)
})