import { Boxicons } from "boxicons";
function Histories() {
  return (
    <div>
      <div className="histories">
        <div className="delete">
          <box-icon type="solid" name="trash-alt"></box-icon>
        </div>
        <table className="table-histories">
          <thead>
            <tr>
              <th>Số lần nhập</th>
              <th>Số nhập vào</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
          <caption>Lần chơi thứ 3/3</caption>
          <caption className="maxInput">Số lần nhập tối đa</caption>
          <caption className="rate">Tỷ lệ đúng</caption>
        </table>

        <table className="table-histories">
          <thead>
            <tr>
              <th>Số lần nhập</th>
              <th>Số nhập vào</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
          <caption>Lần chơi thứ 3/3</caption>
          <caption className="maxInput">Số lần nhập tối đa</caption>
          <caption className="rate">Tỷ lệ đúng</caption>
        </table>
        <table className="table-histories">
          <thead>
            <tr>
              <th>Số lần nhập</th>
              <th>Số nhập vào</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
            </tr>
          </tbody>
          <caption>Lần chơi thứ 3/3</caption>
          <caption className="maxInput">Số lần nhập tối đa</caption>
          <caption className="rate">Tỷ lệ đúng</caption>
        </table>
      </div>
    </div>
  );
}

export default Histories;
