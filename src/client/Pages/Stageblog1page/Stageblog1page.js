/* import components */
import Navigation from "../../Components/Navigation/Navigation";
import WellboardInfoBedrijf from "../../Components/WellboardInfoBedrijf/WellboardInfoBedrijf";
import Wellboardlogboek from "../../Components/WellboardStageLogbek/Wellboardlogboek";

/* import data*/
import WellboardInfoBedrijfData from "../../Data/WellboardBedrijfsInfoData";
import WellboardLogboekStage from "../../Data/WellboardLogboekData";

/* import css */
import "./Stageblog1page.css";

/* map functie */
let WellboardData = WellboardInfoBedrijfData.map(wellboardData => {
    return <WellboardInfoBedrijf
        afbeelding={wellboardData.image}
        bedrijfNaam={wellboardData.naam}
        beschrijving={wellboardData.description}
        website={wellboardData.website}
        email={wellboardData.emailadress}
        telefoonnummer={wellboardData.telefoonnummer} />
});

let WellboardLogboekfunctie = WellboardLogboekStage.map(logboekData => {
    return <Wellboardlogboek 
    title={logboekData.title} 
    auteur={logboekData.auteur} 
    datum={logboekData.datum} 
    bericht={logboekData.bericht} />
});


const StageBlog1page = () => {

    
    return (
        <>
            <header className="stageblog1__header">
                <Navigation />
                <section className="wellboardInfo">
                    {WellboardData}
                </section>
                <section className="wellboardLogboek">
                    {WellboardLogboekfunctie}
                </section>
            </header>
        </>
    );
}

export default StageBlog1page;
