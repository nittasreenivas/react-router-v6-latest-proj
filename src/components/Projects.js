import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
export default function Projects() {
  return (
    <div>
      <h3> Projects</h3>
      <div>
        <ul className="proj">
          <Link to="/projects/ricky">
            {" "}
            <li> RICKY</li>
          </Link>
          <Link to="/projects/countries">
            {" "}
            <li> Countries</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
