let secendCounter = document.getElementById('sc');
let minutesCounter = document.getElementById('mc');
let hourCounter = document.getElementById('hc');

let startBTN = document.getElementById('start');
let stopBTN = document.getElementById('stop');
let resetBTN = document.getElementById('reset');


let resetTimer;
startBTN.addEventListener('click' , ()=>{
    Timer = setInterval(()=>{
        let number = Number(secendCounter.innerHTML) + 1
        secendCounter.innerHTML = number 
        if(number == Number('61')){
          secendCounter.innerHTML = Number('0');
           let nexNum = Number(minutesCounter.innerHTML) + 1;
           minutesCounter.innerHTML = nexNum;
           if( nexNum == Number('61')){
            minutesCounter.innerHTML = Number('0');
            let nexNum2 = Number(hourCounter.innerHTML) + 1;
            hourCounter.innerHTML = nexNum2;
        }
        }
    },1000)
})


stopBTN.addEventListener('click' , ()=>{
    clearInterval(Timer)
})

resetBTN.addEventListener('click' , ()=>{
    secendCounter.innerHTML = Number('0');
    minutesCounter.innerHTML = Number('0');
    hourCounter.innerHTML = Number('0');
})