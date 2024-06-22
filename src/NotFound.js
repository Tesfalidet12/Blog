import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>Sorry,The page you're looking for doesn't existor change name</p>
      <button>
        <Link to="/" class="link">
          Go to home page
        </Link>
      </button>
    </div>
  );
};
export default NotFound;
