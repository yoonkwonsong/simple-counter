let displayNumber = 0

document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-dec")) {
            console.log("dec")

            displayNumber -= 1
        }
        if (e.target.classList.contains("btn-reset")) {
            console.log("reset")

            displayNumber = 0
        }
        if (e.target.classList.contains("btn-inc")) {
            console.log("inc")

            displayNumber += 1
        }

        console.log(displayNumber)

        document.querySelector(".number").textContent = displayNumber

        if (displayNumber < 0) {
            document.querySelector(".number").style.color = "rgb(214, 92, 92)"
        }
        if (displayNumber === 0) {
            document.querySelector(".number").style.color = "rgb(65, 65, 65)"
        }
        if (displayNumber > 0) {
            document.querySelector(".number").style.color = " rgb(112, 189, 89)"
        }
    })
})
