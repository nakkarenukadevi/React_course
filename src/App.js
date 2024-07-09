
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css"
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Cart from "./Cart";
import RestarentMenu from "./RestarentMenu";




const App = () => {
    return (<div>
        <Header />
        <Outlet />
    </div>

    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
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
                path: "/restarentmenu/:resid",
                element: <RestarentMenu />
            }
            ,
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />

    }

])
export default App


let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
