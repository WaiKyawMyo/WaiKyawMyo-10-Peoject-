let datecontainer = document.querySelector('.date-container');
let Hourcontainer = document.querySelector('.hour');
let Minutecontainer = document.querySelector('.minutes');
let secoundcontainer = document.querySelector('.Seocnt');

const weekdays =[
    "Sunday","Monday","Thuesday","Wedesday","Thursday","Friday","Saturday"
];
const monthName=[
    "January","February","March","April","May","June","July","August","September","October","November","December"
]
function formartTime(time){
    return time < 10? "0" + time : time;
}
function uptdateClock(){
    const today= new Date();
    
    let date = today.getDate();
    console.log(date)
    let day = weekdays[today.getDay()];
    let month= monthName[today.getMonth()];

    let hour = formartTime(today.getHours());
    let minutes= formartTime(today.getMinutes());
    let secounds = formartTime(today.getSeconds());

    datecontainer.innerHTML = `<p>${day}</p><span>${date}</span><p>
    ${month}</p>
    
    `;
    Hourcontainer.textContent = hour+ ":";
    Minutecontainer.textContent =minutes + ":"
    secoundcontainer.textContent= secounds 
}
setInterval(uptdateClock, 1000);