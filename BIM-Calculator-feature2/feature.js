document.getElementById('bimform').addEventListener("submit",function(e){
    e.preventDefault();
    const Gender =document.getElementById('Gender').value;
    const age= parseInt(document.getElementById('age').value);
    const heightfeet= parseInt(document.getElementById('heightFE').value);
    const heightinches=parseInt(document.getElementById('heightIC').value);
    const weiht= parseFloat(document.getElementById('weight').value);

    if (Gender && age && heightfeet && heightinches && weiht){
        const heightINMeters = ((heightfeet * 12) + heightinches) * 0.0254;
        const bmi = weiht / (heightINMeters * heightINMeters);
        const resultElemet= document.getElementById('resultforBMI');
        let category = "";
        if (bmi< 18.5){
            category = "Underweight"
        }else if (bmi >= 18.5 && bmi < 24.9){
            category = "Normal weight"
        }else if (bmi>= 25 && bmi <29.9){ 
            category= "Over weight"
        }else{
            category = "Obese"
        }
        let resultmessage = 'Your BMI:' + bmi.toFixed(2) + '<br>';
        resultmessage += category ;
        resultElemet.innerHTML = resultmessage;
    }
});