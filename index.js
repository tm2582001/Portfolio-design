let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let queryAll = (queryAll) => document.querySelectorAll(queryAll);

let value =[99,95,96,94];
let time = 0;

for(let i =0;i<value.length;i++){
    const circle = queryAll("svg circle")[i];
    circle.style.setProperty('--stroke-dashoffset', 438-(438*(value[i]/100)));
}

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

function skillPercentage(){
    if(time===0){
        for(let i= 0; i<value.length;i++){
            let number = classes("number")[i];
            counter(number,value[i]); 
        }
        time = 1;
    }
}

var waypoint = new Waypoint({
    element: id('skills'),
    handler: function() {
        for(let i =0;i<value.length;i++){
            const circle = queryAll("svg circle")[i];
            circle.style.setProperty('animation', "anim 2s linear forwards");
        }
        skillPercentage();
    },
    offset: 400
  });