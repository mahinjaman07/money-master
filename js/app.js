document.getElementById('calculate-btn').addEventListener('click',function(){
const myIncome = getInputValue('my-income');
const myFood = getInputValue('buy-foot');
const myRent = getInputValue('buy-rent');
const myClothes = getInputValue('buy-clothes');

const totalExpenses = myFood + myRent + myClothes;

if (isNaN(totalExpenses) && isNaN(myBalance)) {
    alert('Please Make Sure Your Input Amount');
    return;
}
const myBalance = myIncome - totalExpenses;
if (isNaN(myBalance)) {
    alert('Please Make Sure Your Input Amount');
    return;
}
setTheInnerText('total-expenses' , totalExpenses);
setTheInnerText('my-balance' , myBalance);
});


// Saveing Button

document.getElementById('saving-btn').addEventListener('click',function(){
    const myBalance = getTheInnerText('my-balance');
    const percentage = getInputValue('saving-percent');
    const savingAmount = getPercentageAmount (percentage,myBalance);
    if (myBalance < savingAmount) {
        alert('Age Income Kor sala pore tk joma');
    }
    else{
        const remainingBalance = myBalance - savingAmount;
        setTheInnerText('saving-amount' , savingAmount);
        setTheInnerText('remaining-balance' , remainingBalance);
    }

})