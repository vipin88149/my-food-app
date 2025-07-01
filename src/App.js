import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Grocery from "./components/Grocery";
// chunking
// code splitting 
// Dynamic Bundling
// lazy Loading
// on demand Loading
// dynaminc import

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
      <Provider store={appStore} >
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/grocery",
          element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
        },
        {
          path: "/about",
          element: <About />
        },
       {
          path: "/contact",
          element: <Contact />
       },
       {
          path: "/home",
          element: <Body />
       },
       {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
       },
      { path: "/cart",
        element: <Cart />
      }
      ],
      errorElement: <h1>something went wrong</h1>

    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />)