const confirmBtn = document.querySelector('.confirm')
const nameInput = document.querySelector('.name')
const cardNumberInput = document.querySelector('.card')
const monthInput = document.querySelector('.month')
const yearInput = document.querySelector('.year')
const cvcInput = document.querySelector('.cvc')
const cardNumber = document.querySelector('.card-number')
const cardOwner = document.querySelector('.owner')
const cardDate = document.querySelector('.date')
const cvcNumber = document.querySelector('.cvc-number')
const errorCard = document.querySelector('.error-card')

const cardNrReg = /^([0-9]{16})$/
const yearReg = /^([0-9]{4})$/
const monthReg = /^([0-9]{1-2})$/
const cvcReg = /^([0-9]{3})$/

const checkData = () => {
    if(cardNumberInput.value.length !== 16 || !cardNumberInput.value.match(cardNrReg)) {
        errorCard.style.visibility = 'visible'
        console.log(cardNumberInput.value);
    } else if(monthInput.value.length > 2 || yearInput.value !== 4 || )  {
    
    }
}

confirmBtn.addEventListener('click', checkData)