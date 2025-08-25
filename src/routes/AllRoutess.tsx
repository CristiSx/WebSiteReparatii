import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home";
export const Allroutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    }
])