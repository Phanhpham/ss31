function timTuDaiNhat(chuoi) {
   
    const mangTu = chuoi.split(" ");

    let tuDaiNhat = "";
    let doDaiTuDaiNhat = 0;

    
    for (let i = 0; i < mangTu.length; i++) {
        const tuHienTai = mangTu[i];
        const doDaiTuHienTai = tuHienTai.length;

        if (doDaiTuHienTai > doDaiTuDaiNhat) {
            tuDaiNhat = tuHienTai;
            doDaiTuDaiNhat = doDaiTuHienTai;
        }
    }

    return { tuDaiNhat, doDaiTuDaiNhat };
}
const chuoiTest = "Chuỗi này có từ dài nhất là OpenAI và JavaScript";
const ketQua = timTuDaiNhat(chuoiTest);

console.log("Từ dài nhất:", ketQua.tuDaiNhat);
console.log("Độ dài của từ dài nhất:", ketQua.doDaiTuDaiNhat);
