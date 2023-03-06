import { Link } from "react-router-dom";

import "./FooterIcons.css";

const FooterIcons = ({afbeelding, naam, informatie}) => {
    return (
        <ul className="footerIcons__list">
            <li className="footerIcons__listItem">
                <figure className="footerIcons__listItems__figure">
                    <Link to="www.linkedin.com/in/amy-van-duin-382275232" className="footerIcons__listItem__figure__Link">
                        <img src={afbeelding} alt={naam} className="footerIcons__listItem__figure__Image"></img>
                    </Link>
                    <p className="footerIcons__Name">{naam}</p>
                    <p className="footerIcons__informatie">{informatie}</p>
                </figure>
            </li>
        </ul>
    )
}

export default FooterIcons;