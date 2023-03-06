/*import components*/
import ButtonStage from "../../Components/ButtonsStage/ButtonsStage";
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import Footer from "../../Components/Footer/Footer";

import "./Homepage.css";

const Homepage = () => {
    return (
        <>
            <Navigation />
            <div className="headerWrapper">
                <Header />
            </div>
            <main className="Homepage__main">
                <ButtonStage/>
            </main>
            <Footer/>
        </>
    );
}

export default Homepage;