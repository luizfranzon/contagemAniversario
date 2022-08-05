import { useEffect, useState } from "react"
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function throwConfetti() {
    jsConfetti.addConfetti()
}

export function App() {

    const [timer, setTimer] = useState()

    const destTime = new Date("aug 5, 2022 00:00:00").getTime()

    function calcDifference() {
        var now = new Date().getTime();
        var difference = destTime - now;

        return difference;
    }

    function calcTimer() {
        var difference = calcDifference();

        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference <= 0) {
            return "CHEGO!!!"
        } else {
            return `${hours} hora(s) ${minutes} minuto(s) e ${seconds} segundo(s)`
        }
    }

    setInterval(() => {
        setTimer(calcTimer())
    }, 1000)

    useEffect(() => {
        setTimer(calcTimer())
        throwConfetti()
    })

    useEffect(() => {
        document.body.addEventListener("click", throwConfetti);
    })

    return (
        <div>
            <p> 🎂🥳🎉 19 años yeeeeee felicidade uhuuu! 🎂🥳🎉 </p>
            <h1>{timer}</h1>
        </div>
    )
}
