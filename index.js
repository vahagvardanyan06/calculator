const display = document.getElementById("display");
const operators = document.querySelectorAll(".operator");


function isOperator(operator){

    if(operator == "*" || operator == "/" || operator == "+" || operator == "-"){

        return true;
    }

    return false;
}


function operatorsDisabled(bool){

    operators.forEach( operator => {
        
        operator.disabled = bool;
    })
}

function addToDisplay(char){
   
   display.value += char;

   (isOperator(display.value[display.value.length-1])) ? operatorsDisabled(true) : operatorsDisabled(false);

}

function clearDisplay(){
    display.value = null;
}

function calculate(){
    
    let indexOfOperator = []
    let operator;

    
    indexOfOperator.push(display.value.indexOf("+"));
    indexOfOperator.push(display.value.indexOf("*"));
    indexOfOperator.push(display.value.indexOf("/"));
    indexOfOperator.push(display.value.indexOf("-"));
    
    
    for(let i = 0; i<indexOfOperator.length; i++){
        
        if(indexOfOperator[i] != -1){
            
            operator = indexOfOperator[i];
        }
    }
    
    
    switch (display.value[operator]) {
        case "*":

            indexOfOperator = display.value.split("*");
            display.value = String( indexOfOperator[0] * indexOfOperator[1] );
            break;

        case "/":

            indexOfOperator = display.value.split("/");
            display.value = String( indexOfOperator[0] / indexOfOperator[1] );
            break;
            
        case "+":

            indexOfOperator = display.value.split("+");
            display.value = String( Number(indexOfOperator[0]) + Number(indexOfOperator[1]) );
            break;  

        case "-":

            indexOfOperator = display.value.split("-");
            display.value = String( indexOfOperator[0] - indexOfOperator[1] );
            break;

        default:
            break;
    } 
    
    

}

