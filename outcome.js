function xemLai() {
    window.location.href = "review.html";
}
var ketQua = document.getElementById('ketQua');
// var soCauHoi = document.getElementById('soCauHoi').value;
var hienThi = document.createElement('div');
hienThi.classList.add('hienThi');
hienThi.innerHTML = `
    <h2>Kết quả</h2>
    <p>Trả lời đúng ... câu / Tổng số 40 câu</p>
    <p>Điểm số: ...</p>
    <button onclick="xemLai()">Xem lại bài thi</button>`;
ketQua.appendChild(hienThi);
