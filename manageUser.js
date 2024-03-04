var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("addStudentModal");
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

document.getElementById("addUserForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ các trường thông tin
    var studentName = document.getElementById("studentName").value;
    var studentCode = document.getElementById("studentCode").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentGender = document.getElementById("studentGender").value;

    // Kiểm tra xem các trường thông tin có được điền đầy đủ hay không
    if (studentName && studentCode && studentEmail && studentGender) {
        // Gửi dữ liệu đến server hoặc xử lý dữ liệu theo nhu cầu của bạn
        // Reset form sau khi submit thành công (tuỳ theo nhu cầu)
        this.reset();
        alert("Thêm thành công");

        var formContainer = document.getElementById("addUserForm");
        formContainer.style.display = "none";
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});

document.getElementById("updateExamForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ các trường thông tin
    var examName = document.getElementById("NameUp").value;
    var examType = document.getElementById("CodeUp").value;
    var examStatus = document.getElementById("EmailUp").value;
    var examDescription = document.getElementById("GenderUp").value;

    // Kiểm tra xem các trường thông tin có được điền đầy đủ hay không
    if (examName && examType && examStatus && examDescription) {
        // Gửi dữ liệu đến server hoặc xử lý dữ liệu theo nhu cầu của bạn
        console.log("Tên kỳ thi:", examName);
        console.log("Loại kỳ thi:", examType);
        console.log("Trạng thái:", examStatus);
        console.log("Mô tả:", examDescription);

        // Reset form sau khi submit thành công (tuỳ theo nhu cầu)
        this.reset();
        alert("Cập nhật thành công");
        var formContainer = document.getElementById("modal1");
        formContainer.style.display = "none";
    } else {
        alert("Vui lòng điền đầy đủ thông tin");
    }
});