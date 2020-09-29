const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = [43, 56, 33, 23, 44, 36, 5];

let val;

val = numbers.length;

val = Array.isArray(numbers);

val = numbers[3];

//insert
numbers[2] = 100;

//find the index of the value
val = numbers.indexOf(36);

//mutating arrays
numbers.push(250);//add to end

numbers.unshift(120);//add to front

numbers.pop();//take off from end

numbers.shift();//take off from front

numbers.splice(1, 1);//splice values

numbers.reverse();//reverse

//concatenate array
val = numbers.concat(numbers2);

/* sorting array
val = numbers.sort(); */

//use the compare function
val = numbers.sort(function (x, y) {
  return x - y;
});

//Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(val);