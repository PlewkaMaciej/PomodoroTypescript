import "../styles/timer.css";
import React, { useEffect, useRef, useState } from "react"
import skipIcon from "../icons/forward.png"
interface Props {
    mainPageRef: React.RefObject<HTMLDivElement | null>
}

const Timer: React.FC<Props> = ({ mainPageRef }) => {

    const buttonPomodoroRef = useRef<HTMLButtonElement>(null)
    const buttonShortBreakRef = useRef<HTMLButtonElement>(null)
    const longBreakButtonRef = useRef<HTMLButtonElement>(null)
    const [time, setTime] = useState<number>(3);
    const [IsStarted, setStarted] = useState<boolean>(false);
    const [minutes, setMinutes] = useState<number>(25);
    const [seconds, setSeconds] = useState<number>(0);
    const [howManyShortBreaks, sethowManyShortBreaks] = useState<number>(0)
    const [whichPhaseIsNow, setWhichPhaseIsNow] = useState<number>(0)

    useEffect(() => {
        if (IsStarted) {
            const TimeInterval = setInterval(() => {
                setTime((time) => time - 1)

            }, 1000)
            return () => {
                clearInterval(TimeInterval)
            }
        }

    }, [IsStarted])

    useEffect(() => {
        setMinutes(() => Math.floor(time / 60))
        setSeconds(() => time % 60)
        if (time <= 0) {
            if (whichPhaseIsNow === 0) {
                if (howManyShortBreaks < 3) {
                    shortBreakPhase()
                }
                if (howManyShortBreaks === 3) {
                    longBreakPhase()
                }
            }
            if (whichPhaseIsNow === 1) {
                sethowManyShortBreaks((howManyShortBreaks) => howManyShortBreaks + 1)
                pomodoroPhase()
            }
            if (whichPhaseIsNow === 2) {
                sethowManyShortBreaks(0)
                pomodoroPhase()
            }
        }
    }, [time])

    const startedCounting = (): void => {
        if (!IsStarted) {
            setStarted(true)
        }
        if (IsStarted) {
            setStarted(false)
        }
    }
    const goToPomodoroSection = (): void => {
        sethowManyShortBreaks(0)
        pomodoroPhase()
        setStarted(false)
    }
    const goToShortBreakSection = (): void => {
        sethowManyShortBreaks(1)
        shortBreakPhase()
        setStarted(false)
    }
    const goToLongBreakSection = (): void => {
        sethowManyShortBreaks(0)
        longBreakPhase()
        setStarted(false)
    }

    const skipPhase = (): void => {
        if (whichPhaseIsNow === 0) {
            if (howManyShortBreaks < 3) {
                shortBreakPhase()
            }
            if (howManyShortBreaks === 3) {
                longBreakPhase()
            }
        }
        if (whichPhaseIsNow === 1) {
            sethowManyShortBreaks((howManyShortBreaks) => howManyShortBreaks + 1)
            pomodoroPhase()

        }
        if (whichPhaseIsNow === 2) {
            sethowManyShortBreaks(0)
            pomodoroPhase()
        }
    }


    const pomodoroPhase = (): void => {
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
        setWhichPhaseIsNow(0)
        setTime(8)
    }

    const shortBreakPhase = (): void => {
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
        setTime(8)
        setWhichPhaseIsNow(1)
    }

    const longBreakPhase = (): void => {

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
        setTime(8)
        setWhichPhaseIsNow(2)
    }
    return (
        <>
            <section className="timer-section">
                <div className="timer-container">
                    <div className="buttons-container">
                        <button ref={buttonPomodoroRef} onClick={goToPomodoroSection} className="pomodoro-button">Pomodoro</button>
                        <button ref={buttonShortBreakRef} onClick={goToShortBreakSection} className="shortBreak-button">Short Break</button>
                        <button ref={longBreakButtonRef} onClick={goToLongBreakSection} className="longBreak-button">Long Break</button>
                    </div>
                    <div className="howMuchTimeLeft-container">
                        <p className="time-paragraph">{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
                    </div>
                    <div className="start-button-container">
                        {!IsStarted &&
                            <button onClick={startedCounting} className="start-timer-button">START</button>
                        }
                        {IsStarted &&
                            <>
                                <button onClick={startedCounting} className="start-timer-button">Stop</button>
                                <img onClick={skipPhase} className="skipIcon" src={skipIcon} />
                            </>
                        }
                    </div>
                </div>
            </section>
            <div className="container-for-break-or-work-info">
                {whichPhaseIsNow === 0 &&
                    <p className="breakOrWorkparagraph">Time for a focus!</p>

                }
                {whichPhaseIsNow > 0 &&

                    <p className="breakOrWorkparagraph">Time for a break!</p>
                }


            </div>
        </>
    );
}

export default Timer;