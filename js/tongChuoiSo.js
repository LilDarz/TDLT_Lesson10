function show() {
    let number1 = Number(document.getElementById("1stNumber").value);
    let number2 = Number(document.getElementById("2ndNumber").value);
    let sum = 0;
    if (number1 < number2) {
        for (let i = number1; i <= number2; i++) {
            sum += i;
        }
        alert(sum);
    } else {
        for (let i = number2; i <= number1; i++) {
            sum += i;
        }
        alert(sum);
    }

}

