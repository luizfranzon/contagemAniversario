import { useEffect, useState } from "react"
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

function throwConfetti() {
    jsConfetti.addConfetti({
        emojis: ['🥳', '🎂', '🎉', '🎈', '🎊'],
    })
    jsConfetti.addConfetti()
}

throwConfetti()

export function App() {

    const [timer, setTimer] = useState()

    const destTime = new Date("aug 17, 2022 00:00:00").getTime()

    function calcDifference() {
        var now = new Date().getTime();
        var difference = destTime - now;

        return difference;
    }

    function calcTimer() {
        var difference = calcDifference();

        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if (difference <= 0) {
            return "feliz cumpleaños"
        } else {
            return `${days} dia(s) ${hours} hora(s) ${minutes} minuto(s) e ${seconds} segundo(s)`
        }
    }

    setInterval(() => {
        setTimer(calcTimer())
    }, 1000)

    useEffect(() => {
        setTimer(calcTimer())
    })

    useEffect(() => {
        document.body.addEventListener("click", throwConfetti);
    })

    return (
        <div>
            <p> 🥳🎂🥳 18 anos do danolo eeeeeeee 🎉🎂🎉 </p>
            <h1>{timer}</h1>
        </div>
    )
}