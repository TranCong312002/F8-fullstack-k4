const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var Customer = function (name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
};
result = [];
function createCustomers(customers) {
  for (var key of customers) {
    new Customer(key.name, key.age, key.address);
    var getName = key.name.split(" ");
    var short_name = getName.splice(1, getName.length - 2);
    key["short Name"] = getName.join(" ");
    result.push(key);
  }
  return result.sort(function (start, end) {
    if (start.age < end.age) {
      return -1;
    }
  });
}
// const result = createCustomers(customers);
console.log(createCustomers(customers));
