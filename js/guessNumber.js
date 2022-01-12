function start() {
    let range = prompt("Số lớn nhất trong giới hạn muốn đoán là: ");
    let i = 1;
    let randomNumber = Math.floor(Math.random() * (Number(range) - 0)); //hàm lấy số ngẫu nhiên trong khoảng từ 0 đến số yêu cầu
    console.log(randomNumber);
    while (i <= 3) { //i<=3 vì chỉ được đoán 3 lần
        let guess = prompt("Điền số mà bạn dự đoán");

        if (guess == randomNumber) {
            alert("congrat!!! You have guessed the correct number");
            break //đoán đúng rồi thì ngừng thôi
        } else { 
            alert("oooh??? Wrong, try again");
                i++;
            //đây là 1 đoạn test nhằm chuyển đổi lời thoại khi sai cả 3 lần (Đã hoạt động)
            // if (i !== 3) {  
            //     alert("oooh??? Wrong, try again");
            //     i++;
            // }
            // else {
            //     alert("You had tried 3 times, you lose!");
            //     break
            // }
        }
    };
}