function calculator (num1,num2) {
    if (typeof num1 === "number" && num2 === undefined) {
         var square = (Math.sqrt(num1).toFixed(3))*1000/1000;
         console.log("Square = " + square);
    } else if (typeof num1 === "number" && typeof num2 === "number") {
        results = [];
        results.push("num1+num2 = " + (num1 + num2).toFixed(3)*1000/1000); 
        results.push(" num1-num2 = " + (num1 - num2).toFixed(3)*1000/1000);
        results.push(" num1*num2 = " + (num1 * num2).toFixed(3)*1000/1000);
        results.push(" num1/num2 = " + (num1 / num2).toFixed(3)*1000/1000);
        console.log("Results = " + results);
    } else if (isNaN(num1) || isNaN(num2)) {
        console.log("Sorry these are not numbers. Please try again");
}
}

         calculator(4,6);
