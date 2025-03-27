function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Удаляем последний символ
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Заменяем символы ÷ и × на / и * для вычисления
        const expression = display.value.replace(/÷/g, '/').replace(/×/g, '*');
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Ошибка';
    }
}