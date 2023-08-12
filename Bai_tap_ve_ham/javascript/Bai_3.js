var change = function (n) {
  if (n < 0 || n > 9999) {
    return "Lỗi";
  }

  var name = "";
  var chinh = [
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
    "không",
  ];
  if (n === 0) {
    return chinh[9];
  }
  if (n === 10) {
    return "Mười";
  }
  var phu = ["nghìn", "trăm", "mươi", "linh"];
  if (n > 1000) {
    du = n % 1000;
    console.log(du);
    name += chinh[parseInt(n / 1000) - 1] + " " + phu[0] + " ";
    if (du === 0) {
      return name;
    }
    if (du > 100) {
      name += chinh[parseInt(du / 100) - 1] + " " + phu[1] + " ";
      du = du % 100;
      if (du > 10) {
        name += chinh[parseInt(du / 10) - 1] + " ";
        du = du % 10;
        if (du === 0) {
          return (name += phu[2]);
        } else {
          return (name += chinh[parseInt(du) - 1]);
        }
      } else if (du === 0) {
        return name;
      } else {
        return name + phu[3] + " " + chinh[parseInt(du) - 1];
      }
    } else if (du > 10) {
      name +=
        chinh[9] + " " + phu[1] + " " + chinh[parseInt(du / 10) - 1] + " ";
      du = du % 10;
      if (du === 0) {
        return (name += phu[2]);
      } else {
        return (name += chinh[parseInt(du) - 1]);
      }
    } else if (du === 0) {
      return name;
    } else {
      return (
        name +
        chinh[9] +
        " " +
        phu[1] +
        " " +
        phu[3] +
        " " +
        chinh[parseInt(du) - 1]
      );
    }
  } else if (n > 100) {
    du = n % 100;
    console.log(du);
    name += chinh[parseInt(n / 100) - 1] + " " + phu[1] + " ";
    if (du === 0) {
      return name;
    }
    if (du > 10) {
      name += chinh[parseInt(du / 10) - 1] + " ";
      du = du % 10;
      if (du === 0) {
        return (name += phu[2]);
      } else {
        return (name += chinh[parseInt(du) - 1]);
      }
    } else if (du === 0) {
      return name;
    } else {
      return name + phu[3] + " " + chinh[parseInt(du) - 1];
    }
  } else if (n > 10) {
    du = n % 10;
    console.log(du);
    name += chinh[parseInt(n / 10) - 1] + " ";
    if (du === 0) {
      return name + phu[2];
    } else {
      return name + chinh[parseInt(du) - 1];
    }
  } else {
    return name + chinh[n - 1];
  }
};
console.log(change(11));
