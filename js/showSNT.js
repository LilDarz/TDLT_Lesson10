let numbers = parseInt(prompt("Nhập số lượng số nguyên tố muốn in ra"));
let count = 0;
let numberSNT = 0;
for (let i = 1; i < 9999; i++) {
    if (numberSNT < numbers) {
        for (let j = 0; j <= i; j++) {
            if (i % j == 0) {
                count += 1;
            }

        }
        if (count == 2) {
            document.write(`${i} <br>`);
            numberSNT += 1;
        }
        count = 0;
    } else {
        break
    }
}