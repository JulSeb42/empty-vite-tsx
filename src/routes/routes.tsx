/*=============================================== Routes ===============================================*/

import { createBrowserRouter } from "react-router-dom"

import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

export default createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
])
