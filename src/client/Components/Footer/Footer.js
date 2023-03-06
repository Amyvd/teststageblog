/* import links*/
import { Link } from "react-router-dom";

/*import css*/
import "./Footer.css";

/*  import data */
import icons from "../../Data/footerIconsData";

/* import components */
import FooterIcons from "../FooterIcons/FooterIcons";

let data = icons.footerIconsData.map(icon => {
    return <FooterIcons afbeelding={icon.Afbeelding} naam={icon.Name} informatie={icon.informatie}/>
});


const Footer = () => {
    return (
        <footer className="footer">
            <section className="footer__link">
                <ul className="footer__linkList">
                    <li className="footer__linkList__ListItems"><Link to="/" className="footer__linkList__ListItem__Link">Home</Link></li>
                    <li className="footer__linkList__ListItems"><Link to="/stageblog1" className="footer__linkList__ListItem__Link">Stage blog 1</Link></li>
                    <li className="footer__linkList__ListItems"><Link to="/stageblog2" className="footer__linkList__ListItem__Link">Stage blog 2</Link></li>
                </ul>
            </section>
            <section className="footerIcons__section">
                {data}
            </section>

            
        </footer>
    )
}

export default Footer;