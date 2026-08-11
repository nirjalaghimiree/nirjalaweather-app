import { Link } from "react-router-dom";

function Navbar({ theme, setTheme }) {
    return (
        <nav className="navbar">

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="theme-buttons">

                <button
                    onClick={() => setTheme("light")}
                >
                    ☀️ Light
                </button>

                <button
                    onClick={() => setTheme("dark")}
                >
                    🌙 Dark
                </button>

            </div>

        </nav>
    );
}

export default Navbar;