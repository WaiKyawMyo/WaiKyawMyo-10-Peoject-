document.getElementById('calcualtorBtn').addEventListener('click',calculation)

function calculation(){
    const loanAmount= parseFloat(document.getElementById('loanInput').value);
    const instrestRate= parseFloat(document.getElementById('inerestInput').value);
    const LoanTerm= parseFloat(document.getElementById('lonef').value);
     
    if(isNaN(loanAmount)|| isNaN(instrestRate)|| isNaN(LoanTerm)) {
        alert("Please Enter vaild Number for all teh Fields")
    }
    const monthlyInsterest = instrestRate /100 /12;
    const totalPayments = LoanTerm;
    const monthlyPaymenth = (loanAmount * monthlyInsterest)/(1-Math.pow(1+monthlyInsterest,-totalPayments));
    const totalInstest= (monthlyPaymenth * totalPayments)- loanAmount;

    displayResult(monthlyPaymenth,totalInstest);

}
function displayResult(monthlyPaymenth,totalInstest){
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML=`
    <p><strong>Monthly payment : ${monthlyPaymenth.toFixed(2)}</strong></p>
    <p><strong>Total Interest : ${totalInstest.toFixed(2)}</strong></p>
    ` 
    
}