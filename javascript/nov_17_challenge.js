const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
let counter = document.querySelector("#counter");
let num = 0;
console.log(increase);
console.log(decrease);
console.log(reset);
console.log(counter);

let updateDisplay = () => {
    counter.innerHTML = num;
}

let plusBtn = () => {
    num++;
    updateDisplay();
}

let minusBtn = () => {
    num--;
    updateDisplay();
}

let resetBtn = () => {
    num = 0;
    updateDisplay();  
}
