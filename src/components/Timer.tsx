import "../styles/timer.css";
interface Props {

    mainPageRef: React.RefObject<HTMLDivElement | null>
}
const Timer: React.FC<Props> = ({ mainPageRef }) => {
    const goToPomodoroSection = (): void => {
        if (mainPageRef.current != null) {
          mainPageRef.current.style.background="rgb(186, 73, 73)"
        }
    }
    const goToShortBreakSection = (): void => {
        if (mainPageRef.current != null) {
            mainPageRef.current.style.background="rgb(56, 133, 138)"
        }
    }
    const goToLongBreakSection = (): void => {
        if (mainPageRef.current != null) {
            mainPageRef.current.style.background="rgb(57, 112, 151)"
        }
    }
    return (

        <section className="timer-section">
            <div className="timer-container">
                <div className="buttons-container">
                    <button onClick={goToPomodoroSection} className="pomodoro-button">Pomodoro</button>
                    <button onClick={goToShortBreakSection} className="shortBreak-button">Short Break</button>
                    <button onClick={goToLongBreakSection} className="longBreak-button">Long Break</button>
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