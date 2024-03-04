function hienThiThoiGian() {
    var thoiGian = document.getElementById('thoiGian').value;
    var thoiGianGioiHan = document.getElementById('thoiGianGioiHan');
  
    if (thoiGian === 'gioiHan') {
      thoiGianGioiHan.style.display = 'block';
    } else {
      thoiGianGioiHan.style.display = 'none';
    }
  }

  function taoThanhCong() {
    alert("Bạn đã tạo thành công bài kiểm tra! Có thể bắt đầu làm bài ngay.");
  }
  
  function taoInputCauHoi() {
    var soCauHoi = document.getElementById('soCauHoi').value;
    var cauHoiContainer = document.getElementById('cauHoiContainer');
    cauHoiContainer.innerHTML = ''; // Xóa nội dung cũ
  
    for (var i = 1; i <= soCauHoi; i++) {
      var cauHoiDiv = document.createElement('div');
      cauHoiDiv.classList.add('cau-hoi');
  
      cauHoiDiv.innerHTML = `
            <h3>Câu hỏi ${i}</h3>
            <label for="deBaiCauHoi${i}">Đề bài:</label>
            <input type="text" id="deBaiCauHoi${i}" placeholder="Nhập đề bài câu hỏi ${i}...">
  
            <label for="phuongAnA${i}">Phương án A:</label>
            <input type="text" id="phuongAnA${i}" placeholder="Nhập phương án A...">
  
            <label for="phuongAnB${i}">Phương án B:</label>
            <input type="text" id="phuongAnB${i}" placeholder="Nhập phương án B...">
  
            <label for="phuongAnC${i}">Phương án C:</label>
            <input type="text" id="phuongAnC${i}" placeholder="Nhập phương án C...">
  
            <label for="phuongAnD${i}">Phương án D:</label>
            <input type="text" id="phuongAnD${i}" placeholder="Nhập phương án D...">
  
            <label for="phuongAnDung${i}">Phương án đúng:</label>
            <select id="phuongAnDung${i}">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        `;
  
      cauHoiContainer.appendChild(cauHoiDiv);
    }
    var hoanThanh = document.createElement('div');
    hoanThanh.innerHTML = `
      <button onclick="taoThanhCong()">Tạo bài kiểm tra</button>`;
    cauHoiContainer.appendChild(hoanThanh);

  }

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
    if (soCauHoi == 0 && tongDiem == 0) {
      alert ("Vui lòng nhập số câu hỏi và tổng điểm!");
    }
    else if (soCauHoi == 0) {
      alert ("Vui lòng nhập số câu hỏi!");
    }
    else if (tongDiem == 0) {
      alert ("Vui lòng nhập tổng điểm!");
    } else {
    taoInputCauHoi();  
    }
  }
  
  // Gọi hàm tạo input câu hỏi khi trang web được load
  // document.addEventListener('DOMContentLoaded', function () {
  //   taoInputCauHoi();
  // });
  
  
