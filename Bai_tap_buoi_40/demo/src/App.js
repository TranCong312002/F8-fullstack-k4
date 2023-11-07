import { router } from "./utils/router";
import { screen } from "./layouts/Default";
import { home } from "./pages/home";
import { About } from "./Pages/about";
import { Products } from "./Pages/product";
import { ProductDetail } from "./Pages/productdetail";
export const app = () => {
  return router(
    [
      {
        path: "/",
        component: home,
      },
      {
        path: "/gioi-thieu",
        component: About,
      },
      {
        path: "/san-pham",
        component: Products,
      },
      {
        path: "/san-pham/:id",
        component: ProductDetail,
      },
    ],
    screen
  );
};
