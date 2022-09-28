const hourelement= document.getElementById("hour");
const minelement = document.getElementById("minutes");
const secElemet = document.getElementById("seconds");
var ampmElement = document.getElementById("ampm");


var months= ["January" ,"February", 
"March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"];
var weeks = ["Sunday", "Monday", "Tuesday", 
"Wednesday", "Thursday","Friday","Saturday"];


var monthEl = document.getElementById("month");
var datenumEl = document.getElementById("daynum");
var yearEl = document.getElementById("year");
var daynamEl = document.getElementById("dayname");

function updateClock(){


let dayToday = new Date().getDay();
let year = new Date().getFullYear();
let datnumber = new Date().getDate();
let monthsnumber =new Date().getMonth()

monthEl.innerHTML = months[monthsnumber];
datenumEl.innerHTML = datnumber;
yearEl.innerHTML = year;
daynamEl.innerHTML = weeks[dayToday];


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


