const items = Array.from(document.getElementsByClassName('items'))
const play = document.getElementById('play')
const first_number = document.getElementById('first_number')
const second_number = document.getElementById('second_number')
const third_number = document.getElementById('third_number')
const balance = document.getElementById('balance')
const newGame = document.getElementById('newGame')
const restart = document.getElementById('restart')
const money = document.getElementById('money')
let count = 0
let myBalance = 1000
let randomNum
balance.innerHTML = `Balance ${myBalance}`
let coefFirst = 1
let coefSecond = 20
let coefThird = 45


play.addEventListener('click', () => {
    if (money.value === '' || money.value === 0) {
        display.style.color = 'red'
        display.innerText = `Select the amounth`
    }
    if (myBalance < money.value) {
        money.value = ''
        display.style.color = 'red'
        display.innerText = `You don't have enough Balance`
    } else {

        if (first_number.value && second_number.value && third_number.value && money.value) {
            if (first_number.value === second_number.value || first_number.value === third_number.value || second_number.value === third_number.value) {
                display.style.color = 'red'
                display.innerText = `Numbers can't be repeated`
            } else if (first_number.value !== second_number.value && first_number.value !== third_number.value && second_number.value !== third_number.value) {
                if (first_number.value > 40 || second_number.value > 40 || third_number.value > 40) {
                    display.style.color = 'red'
                    display.innerText = `Number can't be grater than 40`
                } else if (first_number.value <= 40 && second_number.value <= 40 && third_number.value <= 40) {
                    display.style.color = 'black'
                    display.innerText = `Wait numbers to be selected`
                    balance.innerHTML = `Balance ${myBalance = myBalance - money.value}`
                    play.disabled = true
                    for (let i = 0; i < 35; i++) {
                        setTimeout(() => {
                            randomNum = Math.floor(Math.random(40) * items.length)
                            if (items[randomNum].style.backgroundColor !== 'red') {
                                items[randomNum].style.backgroundColor = 'red'
                                count++
                            } else {
                                let isNotFin = true;
                                while (isNotFin) {
                                    let randomNum = Math.floor(Math.random(40) * items.length);
                                    if (items[randomNum].style.backgroundColor !== 'red') {
                                        items[randomNum].style.backgroundColor = 'red';
                                        isNotFin = false
                                        count++
                                    }
                                }
                            }
                            if (count === 35) {
                                let addCount = 0
                                items.map(el => {
                                    if (el.style.backgroundColor !== 'red') {
                                        if (el.innerText === first_number.value) {
                                            el.style.backgroundColor = 'green'
                                            addCount = addCount + 1
                                        }
                                        if (el.innerText === second_number.value) {
                                            el.style.backgroundColor = 'green'
                                            addCount = addCount + 1
                                        }
                                        if (el.innerText === third_number.value) {
                                            el.style.backgroundColor = 'green'
                                            addCount = addCount + 1
                                        }
                                    }
                                    if (el.style.backgroundColor !== 'green') {
                                        display.innerText = `TRY AGAIN`
                                    }
                                })
                                if (addCount === 1) {
                                    display.style.color = 'green'
                                    display.innerHTML = `You won ${money.value * coefFirst}`
                                    myBalance = myBalance + (money.value * coefFirst)
                                } else if (addCount === 2) {
                                    display.style.color = 'green'
                                    display.innerHTML = `You won ${money.value * coefSecond}`
                                    myBalance = myBalance + (money.value * coefSecond)
                                } else if (addCount === 3) {
                                    display.style.color = 'green'
                                    display.innerHTML = `You won ${money.value * coefThird}`
                                    myBalance = myBalance + (money.value * coefThird)
                                }
                                balance.innerHTML = `Balance ${myBalance}`
                            }
                        }, 100 * i)
                    }
                }
            }
        }
    }
    if (myBalance === 0) {
        display.innerText = `Your balance is zero`
    }
})
newGame.addEventListener('click', () => {
    count = 0
    first_number.value = 1
    second_number.value = 2
    third_number.value = 3
    money.value = ''
    play.disabled = false
    items.map(el => {
        el.style.backgroundColor = ''
        display.style.color = 'black'
        display.innerText = `Select the numbers and Money`
    })
})
restart.addEventListener('click', () => {
    myBalance = 1000
    play.disabled = false
    items.map(el => {
        el.style.backgroundColor = ''
    })
    balance.innerHTML = `Balance  ${myBalance}`
    first_number.value = 1
    second_number.value = 2
    third_number.value = 3
    money.value = ''
    display.style.color = 'black'
    display.innerText = `Select the numbers and Money`
})