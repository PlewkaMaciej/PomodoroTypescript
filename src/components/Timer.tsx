import "../styles/timer.css";
import React, { useRef } from "react"
interface Props {

    mainPageRef: React.RefObject<HTMLDivElement | null>
}

const Timer: React.FC<Props> = ({ mainPageRef }) => {
    const buttonPomodoroRef = useRef<HTMLButtonElement>(null)
    const buttonShortBreakRef = useRef<HTMLButtonElement>(null)
    const longBreakButtonRef = useRef<HTMLButtonElement>(null)
    const goToPomodoroSection = (): void => {
        if (mainPageRef.current != null) {
            mainPageRef.current.style.background = "rgb(186, 73, 73)"
        }
        if (buttonPomodoroRef.current != null) {
            buttonPomodoroRef.current.style.background = "rgba(255, 255, 255, 0.1)"
        }
        if (buttonShortBreakRef.current != null) {
            buttonShortBreakRef.current.style.background = "none"
        }
        if (longBreakButtonRef.current != null) {
            longBreakButtonRef.current.style.background = "none"
        }
    }
    const goToShortBreakSection = (): void => {
        if (mainPageRef.current != null) {
            mainPageRef.current.style.background = "rgb(56, 133, 138)"
        }
        if (buttonPomodoroRef.current != null) {
            buttonPomodoroRef.current.style.background = "none"
        }
        if (buttonShortBreakRef.current != null) {
            buttonShortBreakRef.current.style.background = "rgba(255, 255, 255, 0.1)"
        }
        if (longBreakButtonRef.current != null) {
            longBreakButtonRef.current.style.background = "none"
        }
    }
    const goToLongBreakSection = (): void => {
        if (mainPageRef.current != null) {
            mainPageRef.current.style.background = "rgb(57, 112, 151)"
        }
        if (buttonPomodoroRef.current != null) {
            buttonPomodoroRef.current.style.background = "none"
        }
        if (buttonShortBreakRef.current != null) {
            buttonShortBreakRef.current.style.background = "none"
        }
        if (longBreakButtonRef.current != null) {
            longBreakButtonRef.current.style.background = "rgba(255, 255, 255, 0.1)"
        }
    }
    return (

        <section className="timer-section">
            <div className="timer-container">
                <div className="buttons-container">
                    <button ref={buttonPomodoroRef} onClick={goToPomodoroSection} className="pomodoro-button">Pomodoro</button>
                    <button ref={buttonShortBreakRef} onClick={goToShortBreakSection} className="shortBreak-button">Short Break</button>
                    <button ref={longBreakButtonRef} onClick={goToLongBreakSection} className="longBreak-button">Long Break</button>
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