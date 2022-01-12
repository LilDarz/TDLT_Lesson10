let number = parseInt(prompt("Nhập một số nguyên dương bất kỳ:"));
let n1 = 0, n2 = 1, nextTerm;
let i=2; //vì tính từ n>2 mới cần tính toán
document.write("Fibonacci Series" + "<br>");
nextTerm = n1 + n2;
document.write(nextTerm);//viết ra số 1 thứ nhất
while (i <= number) { 
    document.write(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    i++;
}