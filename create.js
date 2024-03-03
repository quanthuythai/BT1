function hienThiThoiGian() {
    var thoiGian = document.getElementById('thoiGian').value;
    var thoiGianGioiHan = document.getElementById('thoiGianGioiHan');

    if (thoiGian === 'gioiHan') {
        thoiGianGioiHan.style.display = 'block';
    } else {
        thoiGianGioiHan.style.display = 'none';
    }
}

function taoInputCauHoi() {
    var soCauHoi = document.getElementById('soCauHoi').value;
    var cauHoiContainer = document.getElementById('cauHoiContainer');
    cauHoiContainer.innerHTML = ''; // Xóa nội dung cũ

    for (var i = 1; i <= soCauHoi; i++) {
        var cauHoiDiv = document.createElement('div');
        cauHoiDiv.classList.add('cau-hoi');

        cauHoiDiv.innerHTML = `
            <h3>Câu Hỏi ${i}</h3>
            <label for="deBaiCauHoi${i}">Đề Bài:</label>
            <input type="text" id="deBaiCauHoi${i}" placeholder="Nhập đề bài câu hỏi ${i}...">

            <label for="phuongAnA${i}">Phương Án A:</label>
            <input type="text" id="phuongAnA${i}" placeholder="Nhập phương án A...">

            <label for="phuongAnB${i}">Phương Án B:</label>
            <input type="text" id="phuongAnB${i}" placeholder="Nhập phương án B...">

            <label for="phuongAnC${i}">Phương Án C:</label>
            <input type="text" id="phuongAnC${i}" placeholder="Nhập phương án C...">

            <label for="phuongAnD${i}">Phương Án D:</label>
            <input type="text" id="phuongAnD${i}" placeholder="Nhập phương án D...">

            <label for="phuongAnDung${i}">Phương Án Đúng:</label>
            <select id="phuongAnDung${i}">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        `;

        cauHoiContainer.appendChild(cauHoiDiv);
    }
}

function luuThongTin() {
    function luuThongTin() {
        var tenBaiThi = document.getElementById('tenBaiThi').value;
        var thoiGian = document.getElementById('thoiGian').value;
        var thoiGianBatDau = document.getElementById('thoiGianBatDau').value;
        var thoiGianKetThuc = document.getElementById('thoiGianKetThuc').value;
        var soCauHoi = document.getElementById('soCauHoi').value;
        var tongDiem = document.getElementById('tongDiem').value;
    
        // Thực hiện lưu thông tin bài thi
        console.log('Thông Tin Bài Thi:');
        console.log('Tên Bài Thi:', tenBaiThi);
        console.log('Thời Gian Thi:', thoiGian);
        if (thoiGian === 'gioiHan') {
            console.log('Thời Gian Bắt Đầu:', thoiGianBatDau);
            console.log('Thời Gian Kết Thúc:', thoiGianKetThuc);
        }
        console.log('Số Câu Hỏi:', soCauHoi);
        console.log('Tổng Điểm:', tongDiem);
    
        // Thêm phần xử lý thêm câu hỏi vào đây (lặp qua số câu hỏi, tạo form nhập câu hỏi, ...)
    }
}



// Gọi hàm tạo input câu hỏi khi trang web được load
document.addEventListener('DOMContentLoaded', function () {
    taoInputCauHoi();
});

// document.getElementById('luu').addEventListener("click", function ()) {
//     luuThongTin();
// } ;