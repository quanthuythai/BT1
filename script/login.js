 
function register(e){
    event.preventDefault();
    var username=document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var date=document.getElementById("date").value;
    var password=document.getElementById("password").value;
    var repeatpass=document.getElementById("repeatpass").value;
    if (password != repeatpass){
        alert("Mật khẩu không trùng khớp");
        window.location.reload();
    }
    else  {
        var user = {
        username : username,
        email: email,
        date : date,
        password: password,
      };
      var json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Đăng ký thành công"); }
    
  }

function login(e){
    event.preventDefault();
    var username=document.getElementById("username").value; 
    var password=document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data=JSON.parse(user);
    if (username == data.username && password == data.password){
        alert("Đăng nhập thành công");
        window.location.href="home.html";
    }
    else{
        alert("Vui lòng kiểm tra lại tài khoản và mật khẩu");
    }
}
function adlogin(e){
    event.preventDefault();
    var username=document.getElementById("username").value; 
    var password=document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data=JSON.parse(user);
    if (username == data.username && password == data.password){
        alert("Đăng nhập thành công");
        window.location.href="manageExam.html";
    }
    else{
        alert("Vui lòng kiểm tra lại tài khoản và mật khẩu");
    }
}