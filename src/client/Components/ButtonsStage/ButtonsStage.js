import { Link } from "react-router-dom";
import "./ButtonsStage.css";

const ButtonStage = () => {
    return (
        <div className="ButtonSection">
            <Link to="/stageblog1"> <button className="Buttons button1">Stage 1</button></Link>
            <Link to="/stageblog2"><button className="Buttons button2">Stage 2</button></Link>
        </div>
    )
}

export default ButtonStage;