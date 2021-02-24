var numberInput = document.getElementById("card-number-input");
var numberValue = document.getElementById("card-number");


var holderInput = document.getElementById("card-name-input");
var holderValue  = document.getElementById("card-holder-value"); 


var monthInput = document.getElementById("month-input");
var monthValue = document.getElementById("month-value");


var yearInput = document.getElementById("year-input");
var yearValue = document.getElementById("year-value");



//Card number value and input

numberInput.addEventListener("keyup", function(Event){
    if( Event.which > 57){
        if(Event.which == 40 || Event.which == 39 || Event.which == 38 || Event.which == 37 || Event.which < 32){}else{
        numberInput.value = numberInput.value.slice(0, -1);
        console.log(Event.which);
        
    }
} 
    if(numberInput.value.length == 7 || numberInput.value.length  == 17 || numberInput.value.length  == 27){
        numberInput.value = numberInput.value + "   ";
    }
    
    if(numberInput.value.length  == 1 || numberInput.value.length  == 3 || numberInput.value.length  == 5 || numberInput.value.length  == 11 || numberInput.value.length  == 13 || numberInput.value.length  == 15 || numberInput.value.length  == 21 || numberInput.value.length  == 23 || numberInput.value.length  == 25 || numberInput.value.length  == 31 || numberInput.value.length  == 33 || numberInput.value.length  == 35){
        numberInput.value = numberInput.value + " ";
    }
 
    if(numberInput.value.length > 37){
        numberInput.value = numberInput.value.slice(0, -1);
    }
    
    numberValue.innerHTML = numberInput.value;

    
   
});


//Holder value and input
holderInput.addEventListener("keyup", function(){
    holderValue.innerHTML = holderInput.value;
});


//month value and input
function changeMonth(a){
    monthValue.innerText = a;
};

//year value and input
function changeYear(a){
    yearValue.innerText = a;
};
