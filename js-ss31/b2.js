function timSoLonNhat(cacMang) {
   
    const ketQua = [];

    
    for (const mang of cacMang) {
        if (mang.length === 0) {
            ketQua.push(undefined); 
        } else {
            const soLonNhat = Math.max(mang);
            ketQua.push(soLonNhat);
        }
    }
    return ketQua;
}

// Sử dụng hàm với một số mảng thử nghiệm
const mang1 = [3, 8, 2, 5];
const mang2 = [12, 6, 9, 4];
const mang3 = [-1, 0, 7, 11];

const ketQua = timSoLonNhat(mang1, mang2, mang3);
console.log("Số lớn nhất trong mỗi mảng:", ketQua);
