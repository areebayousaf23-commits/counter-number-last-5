const increaseButtonEl = document.querySelector(".counter_button--increase");
const decreaseButtonEl = document.querySelector(".counter_button--decrease");
const resetButtonEl = document.querySelector(".counter_reset-button");
const counterValueEl = document.querySelector(".counter_value");
const messageEl = document.querySelector(".counter_message");

const MAX_VALUE = 5;

increaseButtonEl.addEventListener("click", function () {
    let currentValue = +counterValueEl.textContent;

    if (currentValue < MAX_VALUE) {
        currentValue++;
        counterValueEl.textContent = currentValue;
    }

    if (currentValue === MAX_VALUE) {
        messageEl.textContent = "Maximum value reached";
    }
});

decreaseButtonEl.addEventListener("click", function () {
    let currentValue = +counterValueEl.textContent;

    currentValue--;
    counterValueEl.textContent = currentValue;

    if (currentValue < MAX_VALUE) {
        messageEl.textContent = "";
    }
});

resetButtonEl.addEventListener("click", function () {
    counterValueEl.textContent = 0;
    messageEl.textContent = "";
});