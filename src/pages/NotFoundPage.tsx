import { Link } from "react-router-dom";
import notFound from '../assets/images/error-404-Page.gif'

const NotFoundPage = () => {
    return (
        <div>
        <Link to={'/'}>
            <img className="w-full" src={notFound} alt="" />

        </Link>
    </div>
    );
};

export default NotFoundPage;