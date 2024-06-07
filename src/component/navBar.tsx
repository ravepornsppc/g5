import '../style/Navbar.css';
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a>Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/todo">TodoApp</a></li>

            </ul>
        </nav>
    );
}

export default Navbar;