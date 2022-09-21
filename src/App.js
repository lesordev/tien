import { Provider } from "react-redux";
import { store } from "./redux";
import { useRoutes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CartPage } from "./pages/CartPage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
  ]);

  return <Provider store={store}>{routes}</Provider>;
}

export default App;
