import '../style/Navbar.css';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a>Logo</a>
            </div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>TodoApp</li>

            </ul>
        </nav>
    );
}

export default Navbar;