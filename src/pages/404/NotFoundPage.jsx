import { Link } from "react-router-dom";
import "./NotFoundPage.css";
const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="flex-vt-center">
        <p className="page-title">404</p>
        <p className="typo-title">Page Not Found</p>
        <p className="typo-label">
          The Page you are looking for doesn't exist or an erro occurred. Go To{" "}
          <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
};
export { NotFoundPage };
