//funciones 
function mul(args) {
    mul1 = args[0];
    for (var i = 1; i < args.length; i++) {
        mul1 *= args[i];
    }
    return (mul1.toFixed(3)*1000 /1000);
}

function div(args) {
    div1 = args[0];
    for (var i = 1; i < args.length; i++) {
        div1 /= args[i];
    }
    return (div1.toFixed(3)*1000 /1000);
}

function sum(args) {
    sum1 = Number(args[0]);
    for (var i = 1; i < args.length; i++) {
        sum1 += Number(args[i]);
    }
    return (sum1.toFixed(3)*1000 /1000);
}

function sub(args) {
    sub1 = args[0];
    for (var i = 1; i < args.length; i++) {
        sub1 -= args[i];
    }
    return (sub1.toFixed(3)*1000 /1000);
}

    
//Input de datos y calculadora
function calculatorPro() {
    var userNumber = window.prompt("Type just numbers, separated by commas(,)", "");
     if (userNumber === null){
           return alert("Ok, Bye");
           
        } 
     else if (userNumber == ""){
            return alert ("You did not type any number, Bye");
            
        }
     else if (userNumber.length >= 1) {
         var args = userNumber.split(',');
         for(var i = 0; i < args.length; i++){
             if(isNaN(args[i])){
                 return alert("these are not numbers, please try again");
             }
         }
        if(args.length == 1){
             var square = (Math.sqrt(args[0]).toFixed(3))*1000/1000;
             return alert("Square is = " + square); 
          
        } else {
             var output = "Result:\nMul: " + mul(args) + "\nDiv: " + 
             div(args) + "\nSum: " + sum(args) + "\nSub: " + sub(args);
             alert(output);
         }    
     }
    }



//Bucle para volver a empezar
var shouldContinue = true;
while(shouldContinue) {
    calculatorPro();
    var newNumbers = prompt("New numbers? Y / N");
    if(newNumbers != null){
    switch(newNumbers.toLowerCase()) {
         case "y": 
             calculatorPro();
             break;
         case "n": 
            alert("Bye");
            shouldContinue = false;
            break;
        default:
            alert("Write y or n the next time.")
            shouldContinue = false;
            break;
    }
    }
    else{
    alert("Ok, bye");
    shouldContinue = false;
    }
}