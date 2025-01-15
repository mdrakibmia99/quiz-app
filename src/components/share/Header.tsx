import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

const Header = () => {
  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();
  const token = useAppSelector(selectCurrentToken);

  const handleLogout = async () => {
    dispatch(logout());
    toast.success("logout!");
    await logOut({});
  };
  return (
    <div className="shadow-lg py-3 sticky top-0 z-50 bg-slate-50">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="hover:text-indigo-900">
          {" "}
          Home
        </Link>
        {token ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Link to="/login" className="hover:text-indigo-900">
            <Button onClick={handleLogout}>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
