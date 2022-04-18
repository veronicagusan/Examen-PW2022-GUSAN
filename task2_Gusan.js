let fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < fibonacciNumbers.length; i++) {
    console.log(fibonacciNumbers[i]);
}
//este cea mai primit

i = 0;
while (i < fibonacciNumbers.length) {
    console.log(fibonacciNumbers[i]);
    i++;
}

i = 0;
do {
    console.log(fibonacciNumbers[i]);
    i++;
} while (i < fibonacciNumbers.length);

for (let number of fibonacciNumbers) {
    console.log(number);
}

for (let number in fibonacciNumbers) {
    console.log(fibonacciNumbers[number]);
}

fibonacciNumbers.forEach(element => console.log(element));

let newFibonacci = fibonacciNumbers.map(element => console.log(element));