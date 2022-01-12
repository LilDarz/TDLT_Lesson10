function b1() {
    let num = prompt("Enter the number: ");
    let total = 0;
    while (num != -1) {
        num = prompt("Enter the number: ");
        alert(num);
        total += Number(num);
        document.getElementById("b1Score").innerHTML = total
        total = 0;
    }

}

function b2() {
    let i = 1;
    while (i<=100) {
        document.write("<hr width = " + i + "%>");
        i++;
    }
}