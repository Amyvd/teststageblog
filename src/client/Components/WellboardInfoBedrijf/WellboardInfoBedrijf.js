/* import components */

/* import css files */
import "./WellboardInfoBedrijf.css";

const WellboardInfoBedrijf = ({afbeelding, bedrijfNaam, beschrijving, website, email, telefoonnummer}) => {

    
    return (
        <>
            <article className="wellboardInfo__article">
                <header className="wellboardInfo__article__header">
                    <figure className="wellboardInfo__article__figure">
                        <img src={afbeelding} alt="" href="https://wellboard.nl/" className="wellboardInfo__article__figure__image"/>
                    </figure>
                </header>
                <main className="wellboardInfo__article__main">
                    <h1 className="wellboardInfo__article__bedrijfsnaam">{bedrijfNaam ||  "placeholder title"}</h1>
                    <p className="wellboardInfo__article__beschrijving">{beschrijving}</p>
                    <p className="wellboardInfo__article__informatie">{email}</p>
                    <p className="wellboardInfo__article__informatie">{telefoonnummer}</p>
                </main>
            </article>
        </>
    )
}

export default WellboardInfoBedrijf;