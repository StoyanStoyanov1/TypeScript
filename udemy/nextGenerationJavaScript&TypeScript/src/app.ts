const userName = 'Max';

let age = 30;

age = 29;

// var result;

// function add(a: number, b: number) {
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
//     console.log(isOld)
// } 

const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));
