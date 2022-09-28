const hourelement= document.getElementById("hour");
const minelement = document.getElementById("minutes");
const secElemet = document.getElementById("seconds");
var ampmElement = document.getElementById("ampm");

// var dateEl = document.getElementById("dayname");
// var monthEl = document.getElementById("month");
// var datenumEl = document.getElementById("daynum");
// var yearEl = document.getElementById("year");



function updateClock(){
let hours = new Date().getHours();
let sec = new Date().getSeconds();
let min = new Date().getMinutes();
let ampm = "AM"


var dtename = new Date().getDay();
var year = new Date().getFullYear();
var datnumber = new Date().getDate();
var monthsnumber =new Date().getMonth()


var months = ["January" ,"February", 
"March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"];
var week = ["Sunday ", "Monday", "Tuesday", 
"Wednessday", "Thursday","Friday","Saturday"];
var ids = ["dayname","month", "daunym", "year"];

var values = [week[dtename], months[monthsnumber],datenumber, year]

for (var i =0; i>ids.length;i++){
    document.getElementById(ids[i].firstChild.nodevalue= values[i]);
}




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


