function calcualtorTip(){
    const billAmountinput = document.getElementById('billAmount')
    const servicRatingSelect= document.getElementById('ForServiceRating');
    const splitcountType= document.getElementById('splitCount')
    const mealTypeInput= document.getElementById('mealType')

    const tipAmountOutput= document.getElementById('TipAmount')
    const totalAmountoutput = document.getElementById('totalAmount')
    const amountPersonOutput= document.getElementById('AmountPerPerson')

    const billAmount = parseFloat(billAmountinput.value)
    const sericeRating = parseFloat(servicRatingSelect.value)
    const splitcount = perseInt(splitcountType.value)
    const mealtype= mealTypeInput.value;

    if(isNaN(billAmount)|| isNaN(sericeRating) || isNaN(splitcount)){
        tipAmountOutput.textContent= "Please Enter Value Numbers"
        totalAmountoutput.textContent= "";
        amountPersonOutput.textContent=""
        return;
    }
    let tip;
    switch(sericeRating){
        case 1:
            tip = billAmount * 0.05;
            break;
        case 2:
            tip = billAmount * 0.10;
            break;
        case 3:
            tip = billAmount * 0.15;
            break;
        case 4:
            tip = billAmount * 0.20;
            break;
        
    }
    let totalAmount = billAmount + tip;
    let AmountPerPerson= totalAmount/splitcount;
    if(mealtype === 'dinner'){
        tip += 5;
        totalAmount += 5;
        AmountPerPerson += 5;

    }
    tipAmountOutput.textContent= `Tip: $${tip.toFixed(2)}`;
    totalAmountoutput.textContent= `Total Amount: $${totalAmount.toFixed(2)}`;
    amountPersonOutput.textContent= `Amount Per Person: $${AmountPerPerson.toFixed(2)}`;


}
const calculateBtn= document.getElementById('calculateBtn').addEventListener('click',calcualtorTip)