const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

const calculate = (btnValue) => {
    console.log(btnValue);
}

// eventlist. for buttons
buttons.forEach((button) => {
    // click listener calls calc.
    button.addEventListener("click", e => calculate(e.target.dataset.value));
});