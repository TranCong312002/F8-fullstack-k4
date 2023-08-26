var Customer = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
};
const data = [];
function handleRegister(name, password, email) {
  var customer = new Customer(name, password, email);
  //   console.log(customer);
  for (var key in customer) {
    if (customer[key] == undefined) {
      console.log("Lỗi!!. mời bạn chạy lại");
      return 0;
    }
  }
  customer.role = "user";
  data.push(customer);
  return data;
}

function handleLogin(name, password) {
  for (var key in data) {
    var info = data[key];
    if (name === info.name && password === info.password) {
      return console.log(info);
    }
  }
  return console.log("Thông tin đăng nhập không hợp lệ");
}
handleRegister("cong", 123, "cong2002@gmail.com");
handleRegister("congdz", 312002, "cong2002@gmail.com");
handleRegister("congsiudz", 2002, "cong2002@gmail.com");
handleRegister("cong", 1234, "cong2002@gmail.com");
handleLogin("congdz", 312002);
