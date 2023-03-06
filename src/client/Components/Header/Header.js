import "./Header.css";

import blogImage from "../../Img/blog.png";

const Header = () => {
    return (

        <header className="header">
            <article className="header__article">
                <h1 className="Headerarticle__title">Welkom</h1>
                <h3 className="Headerarticle__subtitle">Op Het Stageblog van:</h3>
                <p className="Headerarticle__text line-1 anim-typewriter">Amy van Duin</p>
            </article>
            <figure className="header__figure">
                <img src={blogImage} alt="" className="header__figure__image" />
            </figure>
        </header>

    )
}

export default Header;