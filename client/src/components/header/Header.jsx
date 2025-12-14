import styles from "./Header.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext.jsx";

export default function Header() {
    const { user, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
    logout();
    navigate("/"); // пренасочваме към login
};
    return (
        <>
            <header className={styles.header}>
                <img src="/school.svg" className={styles.logo} />
                <nav className={styles.nav}>
                    <ul>
                        <li><Link to={"/"} className="nav-link" >Home</Link></li>
                        <li><Link to={"/courses"} className="nav-link">Courses</Link></li>
                        <li><Link to={"/contacts"} className="nav-link">Contacts</Link></li>
                        <li><Link to={"/about"} className="nav-link" >About</Link></li>
                        <li><Link to={"/users"} className="nav-link">Users</Link></li>
                    </ul>
                </nav>
                <nav className={styles.nav}>
                    <ul>
                        {isAuthenticated ? (
                            <>
                                <span style={{ marginLeft: 12, marginRight: 12 }}>
                                    Hello, {user?.firstName ?? "User"}
                                </span>

                                <button onClick={handleLogout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" style={{ marginLeft: 12 }}>Login</Link>
                                <Link to="/register" style={{ marginLeft: 12 }}>Register</Link>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </>
    );
}
