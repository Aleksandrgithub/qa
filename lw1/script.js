let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);

function isValid() {
    if((process.argv.length != 5) || ((a == 0) && (b == 0) && (c == 0))) {
        console.log("не треугольник")
        return false
    } else if(((a + b) <= c) || ((a + c) <= b) || ((b + c) <= a) || (Math.abs(a - b) >= c) || (Math.abs(a - c) >= b) || (Math.abs(c - b) >= a)) {
        console.log("неизвестная ошибка")
        return false
    }
    return true
}

function typeDetect() {
    if((a == b) && (a == c)) {
        console.log("равносторонний")
    } else if(((a == b) && (a != c)) || ((c == b) && (c != a)) || ((a == c) && (a != b))) {
        console.log("равнобедренный")
    } else {
        console.log("обычный")
    }
}

function run() {
    if(isValid()) {
        typeDetect()
    }
}

run()