// let sout, i, j;
// sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
// i = j = 1;
// while (i <= 10) {
//     sout = sout + "<tr>";
//     while (j <= 10) {
//         sout = sout + "<td>" + i * j + "</td>";
//         j++;
//     }
//     sout = sout + "</tr>";
//     j = 1;
//     i++;
// }
// sout = sout + "</table>";
// document.write(sout);
let sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (let i = 1; i <= 10; i++) {
    sout = sout + "<tr>";
    for (let j = 1; j <= 10; j++) {
        sout = `${sout} <td> ${i * j}`
    }
    sout = sout + "</tr>";

}
sout = sout + "</table>";
document.write(sout);