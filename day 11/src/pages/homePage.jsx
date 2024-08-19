import { Outlet, Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <nav>
        <ul>
        <li>
            <Link to="/">Home Page </Link>
          </li>
          <li>
            <Link to="/PageOne">Page one </Link>
          </li>
          <li>
            <Link to="/PageTwo">Page two </Link>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default HomePage;
