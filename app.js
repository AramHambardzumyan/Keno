const items = Array.from(document.getElementsByClassName('items'))
const numbers = Array.from(document.getElementsByClassName('numbers'))
const play = document.getElementById('play')
const first_number = document.getElementById('first_number')
const second_number = document.getElementById('second_number')
const third_number = document.getElementById('third_number')
const compare = document.getElementById('compare')
const balance = document.getElementById('balance')
const newGame = document .getElementById('newGame')
const restart = document.getElementById('restart')
const money = document.getElementById('money')
let count = 1
let myBalance = 1000
let randomNum
balance.innerHTML = `Balance ${myBalance}`
let coffFirst = 1
let coffSecond = 20
let coffThird = 45


play.addEventListener('click', () => {
    if(myBalance < money.value){

        money.value = ''
    } else {
        balance.innerHTML = `Balance ${myBalance = myBalance - money.value}`
        
    if (first_number.value && second_number.value && third_number.value && money.value) {
        if (first_number.value !== second_number.value && first_number.value !== third_number.value && second_number.value !== third_number.value) {
            play.disabled = true
            for (let i = 0; i < 35; i++) {
                setTimeout(() => {
                     randomNum = Math.floor(Math.random(40) * items.length)
                    if (items[randomNum].style.backgroundColor !== 'red') {
                        items[randomNum].style.backgroundColor = 'red'

                    } else {
                        
                        let isNotFin = true;
                        while(isNotFin) {
                            let randomNum = Math.floor(Math.random(40) * items.length);
                            if(items[randomNum].style.backgroundColor !== 'red') {
                                items[randomNum].style.backgroundColor = 'red';
                                isNotFin  = false
                            }
                        }
                    }

                }, 100 * i)

            }


            
          
        }
    }
    }
    

   

})

// if(isFin === true){
   
// }

compare.addEventListener('click', () => {
    // items.map(el => {
    // if(el.innerText === first_number.value && el.innerText === second_number.value && el.innerText === third_number.value && el.style.backgroundColor === 'red'){}
    // el.style.backgroundColor = ''       
    //             play.disabled = false
    //             first_number.value = '' 
    //             second_number.value = ''
    //             third_number.value = ''
    //             money.value = ''
    // })
    // balance.innerHTML = `Balance ${myBalance = myBalance - money.value}`
    let addCount = 0
    items.map(el => {
        if(el.style.backgroundColor !== 'red'){
            
           
                if(el.innerText === first_number.value){
                    el.style.backgroundColor = 'green'
                    addCount = addCount + 1
                }
                if(el.innerText === second_number.value){
                    el.style.backgroundColor = 'green'
                    addCount = addCount + 1
                }
                if(el.innerText === third_number.value){
                    el.style.backgroundColor = 'green'
                    addCount = addCount + 1
                }
                
        } 

        })

        if(addCount === 1){
            myBalance = myBalance + (money.value * coffFirst) 
        }  else if(addCount === 2){
            myBalance = myBalance + (money.value * coffSecond) 
        } else  if(addCount === 3){
            console.log(myBalance)
            myBalance = myBalance +(money.value * coffThird) 
        } 
        balance.innerHTML = `Balance ${myBalance}`

})
newGame.addEventListener('click' , () => {
    first_number.value = '' 
    second_number.value = ''
    third_number.value = ''
    money.value = ''
    play.disabled = false
    items.map(el => {
        el.style.backgroundColor = ''
    })
      compare.click()

})
restart.addEventListener('click' , () => {
    myBalance = 1000
    play.disabled = false
    items.map(el => {
        el.style.backgroundColor = ''
        })
        balance.innerHTML = `Balance  ${myBalance}`
        first_number.value = '' 
        second_number.value = ''
        third_number.value = ''
        money.value = ''

})
