if (age > 18) {
    console.log("go go!");
} else if (age < 15){
    console.log("very young so no");
} else {
    console.log("You are awkward so no")
}

// BIG NOTES HERE LOOK AND REMEMBER
// === to "compare same type"
// || for "or" statements
// && for "and" statements

//switches are used when there are a lot of different cases
/*
const color = 'red';

 switch(color){
    case 'red':
        console.log('color red');
        break;
    case 'blue':
        console.log('color blue');
        break;
    default:
        console.log('color not red or blue');
        break;
}
 */
let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`)