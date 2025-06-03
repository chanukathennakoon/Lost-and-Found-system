import { Link, useNavigate } from 'react-router-dom';
import { logout, isAuthenticated } from '../utils/auth';

export default function Navbar() {
  const navigate = useNavigate();

  return (
 <nav className="navbar navbar-dark" style={{ backgroundColor: '#4B0082' }}>



      <div className="container">
        <Link className="navbar-brand" to="/dashboard">Lost & Found</Link>
        {isAuthenticated() && (
          <div>
            <Link className="btn btn-outline-light btn-sm me-2" to="/add">Add</Link>
            <Link className="btn btn-outline-light btn-sm me-2" to="/items">View</Link>
            <button className="btn btn-outline-light btn-sm" onClick={() => { logout(); navigate("/"); }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
