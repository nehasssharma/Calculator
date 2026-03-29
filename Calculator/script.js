const display = document.getElementById('show');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (button.id === 'clearScreen') {
            display.value = '';
            return;
        }

        if (button.id === 'backspace') {
            display.value = display.value.slice(0, -1);
            return;
        }

        if (button.id === 'equals') {
            try {
                if (display.value.trim() === '') return;
                const result = eval(display.value);
                display.value = result;
            } catch (e) {
                display.value = 'Error';
                setTimeout(() => {
                    display.value = '';
                }, 2000);
            }
            return;
        }

        if (value) {
            display.value += value;
        }
    });
});