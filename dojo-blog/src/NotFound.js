import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <h3>Page Not Found</h3>
      <Link to="/">Go Back To HomePage</Link>
    </div>
  );
};

export default NotFound;
