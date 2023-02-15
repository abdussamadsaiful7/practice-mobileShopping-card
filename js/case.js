
//1) add event listener to the case plus button,

function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
   const caseNumberString = caseNumberField.value;
   const previousCaseNumber = parseInt(caseNumberString);

   let newCaseNumber;
    

   if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
   }
   else{
    newCaseNumber = previousCaseNumber -1;
   };
   
  

   caseNumberField.value = newCaseNumber;
};






document.getElementById('btn-case-plus').addEventListener('click', function(){
   updateCaseNumber(true);
});

document.getElementById('btn-case-minus').addEventListener('click', function(){

    updateCaseNumber(false);
    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber  = parseInt(caseNumberString);

    // const newCaseNumber2 = previousCaseNumber - 1;
    // caseNumberField.value = newCaseNumber2;
    
});