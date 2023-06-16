import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Products/Product';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import { ProductAndCartLoader } from './Loaders/ProductsAndCartLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "shop",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>,
        },
        {
          path: '/order',
          loader: ProductAndCartLoader,
          element:<Orders></Orders>

        },
        {
          path: "/products",
          element: <Product></Product>

        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>

        }

      ]
    },
    
    
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
    
);
}

export default App;
