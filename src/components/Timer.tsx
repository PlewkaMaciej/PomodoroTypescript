import "../styles/timer.css";
function Timer() {
    return (

        <section className="timer-section">
            <div className="timer-container">
                <div className="buttons-container">
                    <button className="pomodoro-button">Pomodoro</button>
                    <button className="shortBreak-button">Short Break</button>
                    <button className="longBreak-button">Long Break</button>
                </div>
                <div className="howMuchTimeLeft-container">
                    <p className="time-paragraph">25:00</p>
                </div>
                <div className="start-button-container">
                    <button className="start-timer-button">START</button>
                </div>
            </div>
        </section>
    );
}

export default Timer;