document.getElementById('incrementBtn').addEventListener('click',invrementCounter);
document.getElementById('decrementBtn').addEventListener('click',deceCounter);
document.getElementById('resetBtn').addEventListener('click',resetcounter);
let counterDisplay =document.getElementById('counterDisplay');
let countervalue = 0;

function updatecounterDisplay(){
    counterDisplay.textContent  = countervalue;
}

function invrementCounter(){
    countervalue++
    updatecounterDisplay();
}
function deceCounter(){
    if(countervalue>0){
        countervalue--;
    updatecounterDisplay();
    }
    
}
function resetcounter(){
    countervalue=0;
    updatecounterDisplay();
}