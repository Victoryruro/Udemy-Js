
let firstNumber = prompt("Enter first number");

let lastNumber = prompt("Enter last number");
var parameter = ["*","+","-","/"];
let enterParameter =prompt(parameter) ;
var result;

if (enterParameter === parameter[0]) {
    var result =Number(firstNumber) *  Number(lastNumber) ;
    
    
}
else if(enterParameter === parameter[1]){

    var result =Number(firstNumber) +  Number(lastNumber) ;

}
else if(enterParameter === parameter[2]){

    var result =Number(firstNumber) -  Number(lastNumber) ;

}
else if(enterParameter === parameter[3]){

    var result =Number(firstNumber) /  Number(lastNumber) ;

}
 


var anwser = alert("your answer is " + " " + result);