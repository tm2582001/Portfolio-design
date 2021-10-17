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

let value =[99,95,96,94]

for(let i= 1; i<=value.length;i++){
   let number = id("number" + i);
   counter(number,value[i-1]); 
}
