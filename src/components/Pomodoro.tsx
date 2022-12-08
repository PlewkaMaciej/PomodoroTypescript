import "../styles/pomodoro.css";
import Timer from "./Timer";
function Pomodoro() {
    return (

        <div className="main-app-container">
            <header className="heading-container">
                <h1 className="pomodoro-heading"> Pomofocus</h1>
            </header>
            <Timer/>
        </div>
    );
}

export default Pomodoro;