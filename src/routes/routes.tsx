import App from "@/App";
import Login from "@/pages/Login";

import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <SignUp />
  },
]);


export default router;