import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import ShopAll from "./pages/ShopAll/ShopAll";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";

const App = () => {
  let cartItems = useState([
    { vegName: "3dsd", quantity: 1, cost: 10, img: "src" },
  ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/shop",
      element: <ShopAll />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
