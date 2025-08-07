const options_element = document.querySelector(".options");
const add_numbers = document.querySelector("#add");
const sub_numbers = document.querySelector("#sub");
const mul_numbers = document.querySelector("#mul");
const div_numbers = document.querySelector("#division");

btn.addEventListener("click", function () {
    options_element.style.visibility = "visible";
})



add_numbers.addEventListener("click", function () {


    let array = [];

    let totalNumbers = parseInt(prompt("How many number you want to Add : "));

    array = push_num(totalNumbers)

    let result = add(array);

    console.log(`Addition of the Number is ${result}.`);
    alert(`Addition of the Number is ${result}.`);

})

sub_numbers.addEventListener("click", function () {

    let array = [];

    let totalNumbers = parseInt(prompt("How many number you want to Subtract : "));

    array = push_num(totalNumbers)

    let result = sub(array);

    console.log(`Subtraction of the Number is ${result}.`);
    alert(`Subtraction of the Number is ${result}.`);

})

mul_numbers.addEventListener("click", function () {

    let array = [];

    let totalNumbers = parseInt(prompt("How many number you want to Multiply : "));

    array = push_num(totalNumbers)

    let result = mul(array);

        console.log(`Multiplication of the Number is ${result}.`);
        alert(`Multiplication of the Number is ${result}.`);

})

div_numbers.addEventListener("click", function () {

    let array = push_num(2)

    let result = div(array);

    if (result != 0) {
        console.log(`Division of the Number is ${result}.`);
        alert(`Division of the Number is ${result}.`);
    }

})


function push_num(totalNumbers) {
    if (isNaN(totalNumbers)) {
        alert("Invalid Input...");
        return; // Exit function early
    }

    let arr = [];
    for (let i = 0; i < totalNumbers; i++) {
        let num;
        do {
            num = parseInt(prompt(`Write ${i + 1} Number.`));
        } while (isNaN(num)); // Repeat until valid number
        arr.push(num);
    }
    return arr;
}



function add(number) {
    let add = 0;
    for (let i = 0; i < number.length; i++) {
        add = add + number[i];
    }

    return add;
}

function sub(number) {
    let sub = 0;
    let combine = 0;
    for (let i = 1; i < number.length; i++) {

        combine = number[i] + combine;
    }

    sub = number[0] - combine;

    return sub;
}

function mul(number) {
    let mul = 1;
    for (let i = 0; i < number.length; i++) {
        mul = mul * number[i];
    }

    return mul;
}

function div(number) {

    let div = 0;

    div = number[0] / number[1];

    return div;
}