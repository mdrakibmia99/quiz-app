import App from "@/App";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import Header from "@/components/share/Header";
import Login from "@/pages/Login";
import NotFoundPage from "@/pages/NotFoundPage";

import SignUp from "@/pages/SignUp";
import UserQuizTest from "@/pages/UserQuizTest";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/quiz/:id",
    element: <ProtectedRoute>
      <Header/>
      <UserQuizTest />
      </ProtectedRoute> 
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <SignUp />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);


export default router;