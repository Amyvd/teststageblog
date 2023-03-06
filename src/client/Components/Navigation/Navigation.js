import { Link } from "react-router-dom";

import "./Navigation.css";



const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/" className="navigationTitle">StageBlog</Link>
            <ul className="navigation__list">
                <li className="navigation__listitem">
                    <Link to="/stageblog1" className="navigation__ListItem__link">StageBlog1</Link>
                </li>
                <li className="navigation__listitem">
                    <Link to="/stageblog2" className="navigation__ListItem__link">StageBlog2</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;