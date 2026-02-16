const screen = document.querySelector('.nub');
const buttons = document.querySelectorAll('button');

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const value = button.dataset.value || button.innerText;

        if (value === "AC") {
            currentInput = "";
            screen.value = "";
            return;
        }

        if (value === "DEL") {
            currentInput = currentInput.slice(0, -1);
            screen.value = currentInput;
            return;
        }

        if (value === "=") {
            if (!currentInput) return;

            try {
                currentInput = eval(currentInput);
                screen.value = currentInput;
            } catch {
                screen.value = "Error";
                currentInput = "";
            }
            return;
        }

        if (value === "+/-") {
            if (!currentInput) return;

            if (currentInput.startsWith("-")) {
                currentInput = currentInput.substring(1);
            } else {
                currentInput = "-" + currentInput;
            }

            screen.value = currentInput;
            return;
        }

        if (value === "%") {
            if (!currentInput) return;

            currentInput = (parseFloat(currentInput) / 100).toString();
            screen.value = currentInput;
            return;
        }

        if (["+", "-", "*", "/"].includes(value) &&
            ["+", "-", "*", "/"].includes(currentInput.slice(-1))) {
            return;
        }

        currentInput += value;
        screen.value = currentInput;
    });
});
