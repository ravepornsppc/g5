import { Link, Outlet } from 'react-router-dom';
import '../style/Navbar.css';
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a>Logo</a>
                </div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">TodoApp</Link></li>

                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;