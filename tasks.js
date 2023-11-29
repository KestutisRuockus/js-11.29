function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//      6.

console.log("Task 6.");
let text = "Once upon a time in hollywood";
let result = text.replaceAll("O", "*").replaceAll("o", "*");
console.log(`${result}`);
console.log("\n");

//      7.

console.log("Task 7.");

let one = random(0, 2);
let two = random(0, 2);
let three = random(0, 2);
let four = random(0, 2);
let total0 = 0,
  total1 = 0,
  total2 = 0;
console.log(`Random number: ${one}, ${two}, ${three}, ${four}`);

if (one === 0) {
  total0 += 1;
} else if (one === 1) {
  total1 += 1;
} else if (one === 2) {
  total2 += 1;
}
if (two === 0) {
  total0 += 1;
} else if (two === 1) {
  total1 += 1;
} else if (two === 2) {
  total2 += 1;
}
if (three === 0) {
  total0 += 1;
} else if (three === 1) {
  total1 += 1;
} else if (three === 2) {
  total2 += 1;
}
if (four === 0) {
  total0 += 1;
} else if (four === 1) {
  total1 += 1;
} else if (four === 2) {
  total2 += 1;
}

console.log(`Numbers of 0: ${total0}`);
console.log(`Numbers of 1: ${total1}`);
console.log(`Numbers of 2: ${total2}`);
console.log("\n");

//      8.

console.log("Task 8.");
let number1 = random(0, 4);
let number2 = random(0, 4);
let dividedNumber;
console.log(`Number1: ${number1}, Number2: ${number2}`);

if (number1 === 0 || number2 === 0) {
  console.log('Dalyba su "0" negalima');
} else if (number1 === number2) {
  dividedNumber = 1;
  console.log(dividedNumber.toFixed(2));
} else if (number1 < number2) {
  dividedNumber = number2 / number1;
  console.log(dividedNumber.toFixed(2));
} else {
  dividedNumber = number1 / number2;
  console.log(dividedNumber.toFixed(2));
}

console.log("\n");

//      9.

console.log("Task 9.");
let num1 = random(0, 25);
let num2 = random(0, 25);
let num3 = random(0, 25);
let middleNum = 0;

console.log(`Num1: ${num1}, Num2: ${num2}, Num3: ${num3}`);

if (num1 === num2 || num1 === num3 || num2 === num3) {
  middleNum = "There is no middle number";
} else if (num1 < num2 && num2 < num3) {
  middleNum = num2;
} else if (num3 < num2 && num2 < num1) {
  middleNum = num2;
} else if (num2 < num1 && num1 < num3) {
  middleNum = num1;
} else if (num3 < num1 && num1 < num2) {
  middleNum = num1;
} else if (num1 < num3 && num3 < num2) {
  middleNum = num3;
} else if (num2 < num3 && num3 < num1) {
  middleNum = num3;
}

if (typeof middleNum !== "string") {
  console.log(`Middle number: ${middleNum}`);
} else {
  console.log(middleNum);
}
console.log("\n");

//      10.

console.log("Task 10.");

let firstname = "Jonas";
let lastname = "Jonaitis";
let smth = firstname[0] + lastname[0];
console.log(smth);
console.log("\n");

//      11.
console.log("Task 11.");

let randomStr =
  String.fromCharCode(random(97, 122)) +
  String.fromCharCode(random(97, 122)) +
  String.fromCharCode(random(97, 122));
console.log(`Random string: ${randomStr}`);
