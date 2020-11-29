var years = document.querySelector("#year");
var btnYear = document.querySelector("#btn-year");
var outputTexts = document.querySelector("#outputText");

function checkLeapYear(year){
    
    if (year.length === 4){
        if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)){
            outputTexts.innerText = "Your birth year is leap year";
        }
        else{
            outputTexts.innerText = "Your birth year is not a leap year";
        }
    }
    else if (year.length !== 4){
        outputTexts.innerText = " ";
        alert("Enter correct four digits year");
        
    }   
}

function yearhandler(){
    checkLeapYear(years.value)
}
btnYear.addEventListener("click", yearhandler)


