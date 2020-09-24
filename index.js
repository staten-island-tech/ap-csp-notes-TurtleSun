//NUMBERS
const num1 = 100;
const num2 = 50;
let val;

//Math OBject
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4); //round up
val = Math.floor(2.5); //round down
val = Math.sqrt(64);
val = Math.abs(-111);
val = Math.pow(8, 2);
val = Math.min(-2,33,5,6,3); //shows smallest value
val = Math.random(); //gives random decimal

val = Math.floor(Math.random() * 20); 
//"floor" allows whole #s n "random" gives random number btwn 1 and 20

console.log(val);




//FUnction /w parameters n arguments
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15){  
    //parameters = placeholders
    console.log('Running calCulate Bill');
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}