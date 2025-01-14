import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="shadow-lg py-3">
      <div className="flex justify-between items-center container mx-auto">
        <Link to="/" className="hover:text-indigo-900"> Home</Link>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Header;
