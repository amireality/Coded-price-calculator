// script.js
document.addEventListener('keydown', function(event) {
    var key = event.key.toUpperCase();
    var validKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Z'];
    if (validKeys.includes(key)) {
        calculate(key);
    }
});

function calculate(column) {
    const number = parseFloat(document.getElementById('inputNumber').value);
    if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
    }

    const defaultNumbers = {
        'A': 0.5,
        'B': 0.55,
        'C': 0.6,
        'D': 0.65,
        'E': 0.7,
        'F': 0.75,
        'G': 0.80,
        'H': 0.85,
        'I': 0.90,
        'Z': 1
    };

    if (!(column in defaultNumbers)) {
        alert('Invalid column selected.');
        return;
    }

    const multiplicationResult = number * defaultNumbers[column];
    const divisionResult = number / defaultNumbers[column];

    document.getElementById('multiplicationResult').textContent = multiplicationResult;
    document.getElementById('divisionResult').textContent = divisionResult;
}




