
let input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("id", "number")

function buttons(btn, fn, val, content) {
    let ele = document.createElement(btn);
    ele.setAttribute(fn, val);
    ele.innerHTML = content;
    return ele;
}

let calculator = document.createElement("div");
calculator.setAttribute("class", "calculator")
let keys = document.createElement("div");
keys.setAttribute("class", "keys")

let button1 = buttons("button", "onclick", "num('1')", "1");

let button2 = buttons("button", "onclick", "num('2')", "2");

let button3 = buttons("button", "onclick", "num('3')", "3");

let button4 = buttons("button", "onclick", "num('*')", "x");


let button5 = buttons("button", "onclick", "num('4')", "4");

let button6 = buttons("button", "onclick", "num('5')", "5");

let button7 = buttons("button", "onclick", "num('6')", "6");

let button8 = buttons("button", "onclick", "num('-')", "-");


let button9 = buttons("button", "onclick", "num('7')", "7");

let button10 = buttons("button", "onclick", "num('8')", "8");

let button11 = buttons("button", "onclick", "num('9')", "9");

let button12 = buttons("button", "onclick", "num('+')", "+");


let button13 = buttons("button", "id", "clear", "AC");

let button14 = buttons("button", "onclick", "num('0')", "0");

let button15 = buttons("button", "onclick", "equal()", "=");

let button16 = buttons("button", "onclick", "num('/')", "/");





keys.append(input, button1, button2, button3, button4, button5, button6, button7, button8, button9, button10, button11, button12, button13, button14, button15, button16);
calculator.append(keys)
document.body.append(calculator)


let res = document.getElementById("number");
function num(val) {
    res.value += val;
}
let cl = document.getElementById("clear");
cl.addEventListener("click", clean)
function clean() {
    res.value = "";
};
function equal() {
    try {
        res.value = eval(res.value)
    }
    catch (err) {
        alert("invalid")
    }
}