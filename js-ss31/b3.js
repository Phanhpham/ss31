function kiemTraKetThuc(str, target) {
    return str.endsWith(target);
}

const chuoiGoc = "Hello, world!";
const chuoiCon1 = "world!";
const chuoiCon2 = "planet";

console.log(kiemTraKetThuc(chuoiGoc, chuoiCon1)); 
console.log(kiemTraKetThuc(chuoiGoc, chuoiCon2)); 
