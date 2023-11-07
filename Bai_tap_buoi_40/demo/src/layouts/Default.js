import "../assets/style.scss";
export const screen = () => {
  return `<header>
    <h1><a href="/" data-route>HEADER</a></h1>
    </header>
    <hr />
    <div class="main-app">
        <div class="list-menu">
        <h2>Menu</h2>
        <ul>
            <li><a href="/" data-route>Trang chủ</a></li>
            <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
            <li><a href="/san-pham" data-route>Sản phẩm</a></li>
        </ul>
        </div>
        <div class="show-product">
        {body}
        </div>
    </div>
    <footer>
    <h1>Footer</h1>
    </footer>`;
};
