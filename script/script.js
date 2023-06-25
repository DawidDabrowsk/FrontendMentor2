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
const errorCvc = document.querySelector('.error-cvc')
const errorCardName = document.querySelector('.error-card-name')
const continueBtn = document.querySelector('.continue')
const mainArea = document.querySelector('.main')
const popupSuccess = document.querySelector('.popup-success')

const nameReg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
const cardNrReg = /^([0-9 ]{16,19})+$/g
const yearReg = /^([0-9]{2,4})$/g
const monthReg = /^([0-9]{1,2})$/g
const cvcReg = /^([0-9]{3})$/g

const clearInputs = () => {
    errorCardName.style.visibility = 'hidden'
    errorCard.style.visibility = 'hidden'
    errorCvc.style.visibility = 'hidden'
    nameInput.classList.remove('wrong-input')
    cardNumberInput.classList.remove('wrong-input')
    monthInput.classList.remove('wrong-input')
    yearInput.classList.remove('wrong-input')
    cvcInput.classList.remove('wrong-input')
}

const checkData = () => {
    clearInputs()
    if(!nameInput.value.match(nameReg)) {
        errorCardName.style.visibility = 'visible' 
        nameInput.classList.add('wrong-input')
    }
    if(!cardNumberInput.value.match(cardNrReg)) {
        errorCard.style.visibility = 'visible' 
        cardNumberInput.classList.add('wrong-input')
    }
    if(!monthInput.value.match(monthReg)) {
        monthInput.classList.add('wrong-input')
        errorCvc.style.visibility = 'visible'
        errorCvc.innerHTML = 'Wrong month format'
    }
    if(!yearInput.value.match(yearReg)) {
        yearInput.classList.add('wrong-input')
        errorCvc.style.visibility = 'visible'
        errorCvc.innerHTML = 'Wrong year format'
    }
    if(!cvcInput.value.match(cvcReg)) {
        cvcInput.classList.add('wrong-input')
        errorCvc.style.visibility = 'visible'
        errorCvc.innerHTML = 'Wrong CVC number'
    }
    if(nameReg.test(nameInput.value) && cardNrReg.test(cardNumberInput.value) && monthReg.test(monthInput.value) && yearReg.test(yearInput.value) && cvcReg.test(cvcInput.value)) {
        mainArea.style.display = 'none'
        popupSuccess.style.display = 'block'
    }

}

const changeCardOwner = () => {
    cardOwner.textContent = nameInput.value
}

const changeCardNumber = () => {
    cardNumber.textContent = cardNumberInput.value
}

const changeCardData = () => {
    cardDate.innerHTML = `${monthInput.value}/${yearInput.value}`
}

const changeCvcNumber = () => {
    cvcNumber.textContent = cvcInput.value
}


confirmBtn.addEventListener('click', checkData)
continueBtn.addEventListener('click', () => {
    location.reload()
})