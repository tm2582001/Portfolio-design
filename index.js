let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let queryAll = (queryAll) => document.querySelectorAll(queryAll);

let value =[99,95,96,94];

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

function skillPercentage(val){
    let number = classes("number")[val];
    console.log(number.innerHTML);
    if(number.innerHTML == "--"){
        counter(number,value[val]); 
    }
}


var skillCards = classes("skill-cards");
for(let i=0;i<skillCards.length;i++){
    new Waypoint({
        element: skillCards[i],
        handler: function() {
                const circle = queryAll("svg circle")[i];
                circle.style.setProperty("animation", "anim 2s linear forwards");
            skillPercentage(i);
        },
        offset: "80%",
      });
}
