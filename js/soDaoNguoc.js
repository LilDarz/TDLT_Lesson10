let inputNumber = prompt("Nhập vào 1 số bất kỳ");
let reverseNumber=0;
let lastDigit;
while (inputNumber!=0) {
    lastDigit = inputNumber%10; // chia cho 10 lấy số dư (lấy lần lượt số hàng đơn vị tức số cuối cùng của dãy số)
    reverseNumber= reverseNumber*10 + lastDigit; //phép tính nhằm lấy số hàng đơn vị vừa lấy và mỗi lần *10 là đẩy số đó lên 1 nấc
    inputNumber= Math.floor(inputNumber/10); //khởi tạo lại số input để tiếp tục lấy số hàng đơn vị again.
}
alert(`Số đảo ngược của ${inputNumber} là ${reverseNumber}`);