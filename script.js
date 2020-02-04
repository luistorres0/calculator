let display = document.getElementById("display");
let currentNumber = '';
display.value = "0";

let expression = '';

let keys = [];
for(let i = 0; i < 10; i++) {
    let key = document.getElementById("key" + i);
    key.onclick = (event) => {
        currentNumber += event.target.value;
        expression += event.target.value;
        display.value = currentNumber;
        console.log(expression);
    }
    keys.push(key);
}

let keyAdd = document.getElementById("key+");
keyAdd.onclick = (event)=> {
    currentNumber = '';
    expression += '+';
    console.log(expression);
}

let keySubtract = document.getElementById("key-");
keySubtract.onclick = (event)=> {
    currentNumber = '';
    expression += '-';
    console.log(expression);
}

let keyMultiply = document.getElementById("keyx");
keyMultiply.onclick = (event)=> {
    currentNumber = '';
    expression += '*';
    console.log(expression);
}

let keyDivide = document.getElementById("key/");
keyDivide.onclick = (event)=> {
    currentNumber = '';
    expression += '/';
    console.log(expression);
}

let keyEqual = document.getElementById("key=");
keyEqual.onclick = (event) => {
    display.value = eval(expression);
    expression = '';
    currentNumber = '';
}

let keyClear = document.getElementById("keyC");
keyClear.onclick = (event) => {
    display.value = '0';
    expression = '';
    currentNumber = '';
}