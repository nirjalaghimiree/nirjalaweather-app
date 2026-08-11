import { Link } from "react-router-dom";

function Navbar({ theme, setTheme }) {
    return (
        <nav className="navbar">

            {/* Navigation */}
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>

                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            {/* Light / Dark buttons */}
            <div className="theme-buttons">

                <button
                    onClick={() => setTheme("light")}
                    className={theme === "light" ? "active" : ""}
                >
                    ☀️ Light
                </button>

                <button
                    onClick={() => setTheme("dark")}
                    className={theme === "dark" ? "active" : ""}
                >
                    🌙 Dark
                </button>

            </div>

        </nav>
    );
}

export default Navbar;