let ox, oy;
//tam giác 1

for (oy = 1; oy <= 5; oy++) {
    document.write('<br/>');
    for (ox = 1; ox <= oy; ox++) {
        document.write('*');
    }
}
document.write('<br/>');
//tam giác 2
for (oy = 1; oy <= 5; oy++) {
    document.write("<br>");
    for (ox = oy; ox <= 5; ox++) {
        document.write("*");
    }
}
document.write("<br>");
//tam giác 3 (tam giác 3 và 4 phải đặt thêm 1 biến nữa là oz để không bị trùng với ox)
for (oy = 1; oy <= 5; oy++) {
    document.write("<br>")
    for (ox = oy; ox <= 5; ox++) {
        document.write("&ensp;");
    }
    for (oz = 1; oz <= oy; oz++) {
        document.write("*");
    }
}
document.write("<br>");
//tam giác 4
for (oy = 1; oy <= 5; oy++) {
    document.write("</br>");
    for (ox = 1; ox <= oy; ox++) {
        document.write("&ensp;");
    }
    for (oz = oy; oz <= 5; oz++) {
        document.write("*");
    }
}
document.write("<br>");