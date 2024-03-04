// Exams.forEach(exam => {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `
//                             <td style="width:10%">${exam.stt}</td>
//                             <td style="width:25%">${exam.examName}</td>
//                             <td style="width:25%">${exam.examType}</td>
//                             <td style="width:10%">${exam.status}</td>
//                             <td style="width:20%">${exam.describe}</td>
//                             <td style="width:10%">
//                                 ${exam.stt}
//                             </td>
//                         `;
//     document.querySelector('table tbody').appendChild(tr);
//     console.log(tr.innerHTML);
// })




var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("addExamModal");
var closeBtn = modal.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("show");
});

closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
});


var openUpdateModals = document.getElementsByClassName("openUpdateModal");
var modals = document.getElementsByClassName("modal");
var closeBtns = document.getElementsByClassName("close");

for (var i = 0; i < openUpdateModals.length; i++) {
    openUpdateModals[i].addEventListener("click", function (event) {
        event.preventDefault();
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.classList.add("show");
    });
}

for (var j = 0; j < closeBtns.length; j++) {
    closeBtns[j].addEventListener("click", function () {
        var modal = this.closest(".modal");
        modal.classList.remove("show");
    });
}

var openDeleteModal = document.getElementsByClassName("openDeleteModal");

for (var i = 0; i < openDeleteModal.length; i++) {
    openDeleteModal[i].addEventListener("click", function (event) {
        event.preventDefault();
        var modalId = this.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.classList.add("show");
    });
}


// form

document.getElementById("addExamForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ các trường thông tin
    var examName = document.getElementById("examName").value;
    var examType = document.getElementById("examType").value;
    var examStatus = document.getElementById("examStatus").value;
    var examDescription = document.getElementById("examDescription").value;

    // Kiểm tra xem các trường thông tin có được điền đầy đủ hay không
    if (examName && examType && examStatus && examDescription) {
        // Reset form sau khi submit thành công (tuỳ theo nhu cầu)
        this.reset();
        alert("Thêm thành công");

        var formContainer = document.getElementById("addExamModal");
        formContainer.style.display = "none";
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});

document.getElementById("updateExamForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ các trường thông tin
    var examName = document.getElementById("NameUp").value;
    var examType = document.getElementById("TypeUp").value;
    var examStatus = document.getElementById("StatusUp").value;
    var examDescription = document.getElementById("DescriptionUp").value;

    // Kiểm tra xem các trường thông tin có được điền đầy đủ hay không
    if (examName && examType && examStatus && examDescription) {
        // Reset form sau khi submit thành công (tuỳ theo nhu cầu)
        this.reset();
        alert("Cập nhật thành công");
        var formContainer = document.getElementById("updateExamForm");
        formContainer.style.display = "none";
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});