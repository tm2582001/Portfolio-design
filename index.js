let id = (id) => document.getElementById(id);

function counter (number,maxPercentage){
    let counter = 0;
    setInterval(()=>{
        if(counter == maxPercentage){
            clearInterval();
        }else{
            counter += 1;
            number.innerHTML = counter + "%";
        }
        
    },2000/maxPercentage);
}


let number1 = id("number1");
counter(number1,99);
let number2 = id("number2");
counter(number2,95);
let number3 = id("number3");
counter(number3,96);
let number4 = id("number4");
counter(number4,94);