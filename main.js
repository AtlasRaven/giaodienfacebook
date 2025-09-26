document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".login-box form");
  form.addEventListener("submit", function (e) {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ Gmail và Mật khẩu!");
      e.preventDefault();
      return;
    }

    // Nếu muốn kiểm tra định dạng email nâng cao:
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Gmail không hợp lệ!");
      e.preventDefault();
      return;
    }

    // Nếu muốn kiểm tra độ dài mật khẩu:
    if (password.length < 6) {
      alert("Mật khẩu phải từ 6 ký tự trở lên!");
      e.preventDefault();
      return;
    }

    // Nếu muốn xử lý đăng nhập thật, thêm code ở đây
    // alert("Đăng nhập thành công!");
    // e.preventDefault(); // Nếu không muốn gửi form đi
  });
});
