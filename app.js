//strIng CONcatenation- AKA combining "strings"
const name = 'potatoes';
const age = "90-100 days";

console.log(`I want ${name} and I'll get them in ${age}`) 

const combined = name + age; //results in string

console.log(typeof combined);

//I want potatoes.. POTATOES


// JS FUNCTs & PARAMETERS
const name = "potato"; //Global scope
const food = "smooth starchy veggies";

function adder(num1, num2) { //Function scope  |  () allows you to add parameters
    console.log(num1 + num2);
    }
        //variables from Global scope are available in Function scope, but not the other way around
        //kinda like a square is a rectangle but a rectangle is not always a square.. right?
    
    //to run the function, use a Function Invocation
adder (5,10);

function toUpper(text) { //do namingConventions cuz we're not bao^2
    const upperCased = text.toUpperCase();
    console.log(upperCased);
    //text & numbers have different built-in functions
}
toUpper(name);
toUpper(food);

//other methods:
const toUpper = function(){
}
const toUpper = () =>{
}
    //short n lazy way