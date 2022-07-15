
// nhận vào khu vực => điểm ưu tiên
function calcAreaGrade(area) {
    if (area === "A") {
        return 2;
    }
    if (area === "B") {
        return 1;
    }
    if (area === "C") {
        return 0.5;
    }
    return 0;
}
function calcStudentTypeGrade(type) {
    if (type === "1") {
        return 2.5;
    }
    if (area === "2") {
        return 1.5;
    }
    if (area === "3") {
        return 1;
    }
    return 0;
}
function ex1() {
    // code logic kiểm tra thí sinh đậu hay rớt!
    var standardGrade = 23;
    var sub1 = 6;
    var sub2 = 8;
    var sub3 = 10;
    var area = "A";
    var studentType = "1";
    // tính điểm ưu tiên theo khu vực
    var areaGrade = calcAreaGrade(area);
    // tính điểm ưu tiên theo đối tượng
    var studentTypeGrade = calcStudentTypeGrade(studentType);
    var totalGrade = sub1 + sub2 + sub3 + areaGrade + studentTypeGrade;
    if (totalGrade >= standardGrade) {
        console.log("Đậu", totalGrade);
    } else {
        console.log("Rớt", totalGrade);
    }
}
ex1();

function ex2() {
    var fullName = "Lê Huỳnh Tuấn";
    var kw = 400;
    var totalPrice;
    if (kw <= 50) {
        totalPrice = 500 * kw;
    } else if (kw <= 100) {
        totalPrice = 500 * 50 + (kw - 50) * 650;
    } else if (kw <= 200) {
        totalPrice = 500 * 50 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        totalPrice = 500 * 50 + 50 * 850 + (kw - 150) * 1100;
    } else {
        totalPrice = 500 * 50 + 50 * 1100 + (kw - 200) * 1300;
    }
    console.log("Tổng tiền tính được:", totalPrice)
}
ex2();