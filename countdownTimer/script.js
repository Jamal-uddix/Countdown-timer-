// catching the Document elements
let button = document.querySelector('button'); //timer function change button
let span = document.querySelectorAll('span');
let setButtons = document.querySelectorAll('.button-container')[0].children;
let container = document.getElementsByClassName('container')[0];
//the inner texts of document elments
let miliSec = 0;
let sec = 0;
let forwardInterval;
let onetimeIntervaler = 0;

button.addEventListener('click', () => {
    if (button.innerText == 'Backwards') {
        button.innerText = 'Forwards';
        backwardTimer();
    } else {
        button.innerText = "Backwards";
        forwardTimer();
    }
})


function lessThanTen() {
    if (sec < 10) {

        span[0].innerText = '0' + sec;
    } else {
        span[0].innerText = sec;

    }
}

let operatorContainer;
function backwardTimer() {

    let whenAddButton = 0;
    if (whenAddButton === 0) {

       
        operatorContainer = document.createElement('div');
        container.after(operatorContainer);

        let plus = document.createElement('button'); plus.innerText = '+';

        let minus = document.createElement('button'); minus.innerText = '-';
        operatorContainer.appendChild(plus)
        operatorContainer.appendChild(minus)

        operatorContainer.style.marginTop = '10px';
        plus.style.padding = '4px 10px ';
        minus.style.padding = '4px 10px ';
        minus.style.margin = '4px 10px ';
        console.log(plus)
        plus.addEventListener('click', () => {
            sec++;
            lessThanTen();

        })
        minus.addEventListener('click', () => {
            sec--;
            lessThanTen();

        })
    }
    // javascript main backward logic starts from here 

    let backwardInterval;
    // sec = 45;
    let secondTimeIntervaler = 0;

    setButtons[0].addEventListener('click', () => {
        if (secondTimeIntervaler === 0) {

            miliSec = 100;
            backwardInterval = setInterval(() => {
                miliSec--;
                if (miliSec == 0) {
                    miliSec = 100
                    sec--;
                    span[2].innerText = '0' + miliSec;
                    span[0].innerText = sec;
                } else {
                    span[2].innerText = miliSec;
                    span[0].innerText = sec;


                }
                // under ten conditions  i mean when to add a zero 

                if (sec < 10) {
                    span[0].innerText = '0' + sec;
                } else if (miliSec < 10) {
                    span[2].innerText = '0' + miliSec;


                }



                // when to stop this
                if (sec == 0) {
                    clearInterval(backwardInterval);
                    secondTimeIntervaler = 0;
                    sec = 0;
                    miliSec = 0;
                    span[0].innerText = '0' + sec;
                    span[2].innerText = '0' + miliSec;
                }
            }, 10)
            secondTimeIntervaler = 1;
        }

    })
    setButtons[1].addEventListener('click', () => {
        clearInterval(backwardInterval);
        secondTimeIntervaler = 0;

    })
    setButtons[2].addEventListener('click', () => {
        clearInterval(backwardInterval);
        secondTimeIntervaler = 0;
        sec = 0;
        miliSec = 0;
        span[0].innerText = '0' + sec;
        span[2].innerText = '0' + miliSec;
    })
}


function forwardTimer() {
    // the changing variables 
    operatorContainer.remove();
    // start button

    setButtons[0].addEventListener('click', () => {
        if (onetimeIntervaler === 0) {
            forwardInterval = setInterval(() => {
                miliSec++;
                // console.log(miliSec)
                if (miliSec < 10) {
                    span[2].innerText = '0' + miliSec;
                } else if (miliSec > 100) {
                    miliSec = 0;
                    span[2].innerText = '0' + miliSec;
                    sec++;
                    if (sec < 10) {
                        span[0].innerText = '0' + sec;
                    } else {
                        span[0].innerText = sec;
                    }

                } else {
                    span[2].innerText = miliSec;
                }


            }, 10)
        }


        onetimeIntervaler = 1;

    })
    // stop button 


    setButtons[1].addEventListener('click', () => {
        clearInterval(forwardInterval);
        onetimeIntervaler = 0;
    })

    // reset button 

    setButtons[2].addEventListener('click', () => {
        clearInterval(forwardInterval)
        miliSec = 0;
        sec = 0;
        span[0].innerText = '0' + sec;
        span[2].innerText = '0' + miliSec;
        onetimeIntervaler = 0;

    })


}

