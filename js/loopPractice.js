function b1() {
    let i = 1;
    while (i < 100) {
        document.write(i + "<br>");
        i++;
        if (i === 99) {
            document.write("Hoàn thành");
            break
        }
    }
}

function b2() {
    let input = parseInt(prompt("Nhập nhiệt độ bất kỳ: "));
    while (20 > input || input > 100) {
        if (input < 20) {
            alert("Vui lòng tăng nhiệt độ");
        } if (input > 100) {
            alert("Vui lòng giảm nhiệt độ");
        }
        input = parseInt(prompt("Nhập nhiệt độ bất kỳ: "))
    }
}

function b3() {
    let number = 20;
    let n1 = 0, n2 = 1, nextTerm;
    let i = 2;
    document.write("20 số Fibonacci đầu tiên" + "<br>");
    nextTerm = n1 + n2;
    document.write(nextTerm + "<br>");
    while (i <= number) {
        document.write(nextTerm + "<br>");
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        i++;
    }
}

function b4() {
    let number = parseInt(prompt("Nhập một số nguyên dương bất kỳ:"));
    let n1 = 0, n2 = 1, nextTerm;
    let i = 2; 
    nextTerm = n1 + n2;
    while (i <= number) {
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        i++;
        if (nextTerm%5==0) {
            alert(`Số Fibonacci đầu tiên chia hết cho 5 là ${nextTerm}`);
            break
        }
    }
}

function b5() {
    let number = 20;
    let n1 = 0, n2 = 1, nextTerm;
    let i = 2; 
    let sum=0
    nextTerm = n1 + n2;
    sum+= nextTerm;
    while (i <= number) {
        sum += nextTerm;
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
        i++;   
    }
    alert(`Tổng của 20 số Fibonacci đầu tiên là ${sum}`);
}

function b6() {
    let soNumberChiaHetCho7=0;
    let sum=0;
   for (let i = 0; i < 1000; i++) {
       if (soNumberChiaHetCho7<=30) {
           if(i%7==0){
               soNumberChiaHetCho7+=1;
               console.log(soNumberChiaHetCho7);
               sum+=i;
               console.log(sum);  
           }         
       } else {
           break
       }
   }
   alert(`Tổng 30 số tự nhiên đầu tiên chia hết cho 7 là ${sum}`);
}

function b7() {
    for (let num = 1; num <= 100; num++) {
        if(num%3==0 && num%5!=0){
            document.write("fizz" + "<br>");
            continue;
        }else if(num%3!=0 && num%5==0){
            document.write("buzz" + "<br>");
            continue;
        }else if(num%3==0&&num%5==0){
            document.write("fizz-buzz" + "<br>");
            continue;
        }
        document.write(num + "<br>");
    }
}