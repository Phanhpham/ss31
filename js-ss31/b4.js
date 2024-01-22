function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    } else {
        return str;
    }
}

const chuoiGoc1 = "This is a long sentence.";
const chuoiGoc2 = "Short";

console.log(truncate(chuoiGoc1, 10));
console.log(truncate(chuoiGoc2, 10)); 
