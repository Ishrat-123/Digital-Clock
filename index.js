const hourelement= document.getElementById("hour");
const minelement = document.getElementById("minutes");
const secElemet = document.getElementById("seconds");
var ampmElement = document.getElementById("ampm");

function updateClock(){
let hours = new Date().getHours();
let sec = new Date().getSeconds();
let min = new Date().getMinutes();
let ampm = "AM"

if(hours >= 12){
    ampmElement.innerHTML = 'PM';
}else{
    ampmElement.innerHTML = 'AM';
}

if(hours>12){
    hours = hours -12
}


hours = hours<10 ? "0"+ hours:hours;
sec = sec<10? "0" + sec:sec;
min =  min<10 ? "0" + min : min ;

hourelement.innerText = hours;
minelement.innerText = min;
secElemet.innerText = sec;
ampmElement,(innerText = ampm);

setTimeout(()=>{
    updateClock()
}, 1000)
}

updateClock();