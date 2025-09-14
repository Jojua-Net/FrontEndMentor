

rulesModal = () => {
    const rulesBtn = document.getElementById("rules-btn")
    const rulesBtnClose = document.getElementById("rules-modal-close")
    const rulesModal = document.getElementById("rules-modal")

    rulesBtn.addEventListener("click", () => {
        rulesModal.classList.add("opened")
    })

    rulesBtnClose.addEventListener("click", () => {
        rulesModal.classList.remove("opened")
    })
}


game = () => {
    const paper = document.getElementById("paper")
    const scissors = document.getElementById("scissors")
    const rock = document.getElementById("rock")

    const gameMoveSelect = document.getElementById("game-move-select")
    const gamePlayerSelectedMoves = document.getElementById("game-player-seleted-moves")

    const youPicked = document.getElementById("you-picked")
    const youPickedIcon = document.getElementById("you-picked-icon")
    const theHousePicked = document.getElementById("the-house-picked")
    const theHousePickedIcon = document.getElementById("the-house-picked-icon")
    
    let PlayerSelected = ""
    let botSelected = ""

    let score = 0 || parseInt(localStorage.getItem("score"))
    const headerScore = document.getElementById("score")
    headerScore.innerText = 0 || parseInt(localStorage.getItem("score"))

    gameBot = () => {
        const rNum = Math.floor(Math.random() * 4)

        switch (rNum) {
            case 0:
                theHousePicked.classList.add("icon-paper-1")
                theHousePickedIcon.classList.add("icon-paper")
                botSelected = "paper"
                break

            case 1:
                theHousePicked.classList.add("icon-scissors-1")
                theHousePickedIcon.classList.add("icon-scissors")
                botSelected = "scissors"
                break

            case 3:
                theHousePicked.classList.add("icon-rock-1")
                theHousePickedIcon.classList.add("icon-rock")
                botSelected = "rock"
                break

            default:
                theHousePicked.classList.add("icon-paper-1")
                theHousePickedIcon.classList.add("icon-paper")
                botSelected = "paper"
        }
    }

    gameStatus = () => {
        const gameStatus = document.getElementById("game-status")
        const gameStatusTitle = document.getElementById("game-status-title")
        const gameStatusBtn = document.getElementById("game-status-btn")


        gameStatusBtn.addEventListener("click", () => {
            location.reload()
        })
        

        switch (PlayerSelected) {
            case "paper":

                gameStatus.classList.remove("hidden")
                gameStatus.classList.add("showed")
                
                if (PlayerSelected === "paper" && botSelected === "paper") {
                    gameStatusTitle.innerText = "DRAW"
                    gameStatusBtn.style.color = "#000"
                } else if (PlayerSelected === "paper" && botSelected === "scissors") {
                    gameStatusTitle.innerText = "YOU LOSE"
                    gameStatusBtn.style.color = "red"

                    theHousePicked.classList.add("winner")

                } else {
                    gameStatusTitle.innerText = "YOU WIN"
                    gameStatusBtn.style.color = "BLUE"

                    youPicked.classList.add("winner")


                    score += 1
                    localStorage.setItem("score", score)
                    headerScore.innerText = 0 || parseInt(localStorage.getItem("score"))
                }

                break

            case "scissors":

                gameStatus.classList.remove("hidden")
                gameStatus.classList.add("showed")

                if (PlayerSelected === "scissors" && botSelected === "scissors") {
                    gameStatusTitle.innerText = "DRAW"
                    gameStatusBtn.style.color = "#000"
                } else if (PlayerSelected === "scissors" && botSelected === "paper") {
                    gameStatusTitle.innerText = "YOU WIN"
                    gameStatusBtn.style.color = "BLUE"

                    youPicked.classList.add("winner")


                    score += 1
                    localStorage.setItem("score", score)
                    headerScore.innerText = 0 || parseInt(localStorage.getItem("score"))
                } else {
                    gameStatusTitle.innerText = "YOU LOSE"
                    gameStatusBtn.style.color = "RED"

                    theHousePicked.classList.add("winner")
                }

                break

            case "rock":

                gameStatus.classList.remove("hidden")
                gameStatus.classList.add("showed")

                if (PlayerSelected === "rock" && botSelected === "rock") {
                    gameStatusTitle.innerText = "DRAW"
                    gameStatusBtn.style.color = "#000"
                } else if (PlayerSelected === "rock" && botSelected === "paper") {
                    gameStatusTitle.innerText = "YOU LOSE"
                    gameStatusBtn.style.color = "RED"

                    theHousePicked.classList.add("winner")
                } else {
                    gameStatusTitle.innerText = "YOU WIN"
                    gameStatusBtn.style.color = "BLUE"

                    youPicked.classList.add("winner")


                    score += 1
                    localStorage.setItem("score", score)
                    headerScore.innerText = 0 || parseInt(localStorage.getItem("score"))
                }

                break
        }
    }


    paper.addEventListener("click", () => {
        gameMoveSelect.classList.remove("showed")
        gameMoveSelect.classList.add("hidden")

        gamePlayerSelectedMoves.classList.remove("hidden")
        gamePlayerSelectedMoves.classList.add("showed")

        youPicked.classList.add("icon-paper-1")
        youPickedIcon.classList.add("icon-paper")

        PlayerSelected = "paper"

        setTimeout(gameBot, 1500)
        setTimeout(gameStatus, 2500)
    })

    scissors.addEventListener("click", () => {
        gameMoveSelect.classList.remove("showed")
        gameMoveSelect.classList.add("hidden")

        gamePlayerSelectedMoves.classList.remove("hidden")
        gamePlayerSelectedMoves.classList.add("showed")

        youPicked.classList.add("icon-scissors-1")
        youPickedIcon.classList.add("icon-scissors")

        PlayerSelected = "scissors"

        setTimeout(gameBot, 1500)
        setTimeout(gameStatus, 2500)
    })

    rock.addEventListener("click", () => {
        gameMoveSelect.classList.remove("showed")
        gameMoveSelect.classList.add("hidden")

        gamePlayerSelectedMoves.classList.remove("hidden")
        gamePlayerSelectedMoves.classList.add("showed")

        youPicked.classList.add("icon-rock-1")
        youPickedIcon.classList.add("icon-rock")

        PlayerSelected = "rock"

        setTimeout(gameBot, 1500)
        setTimeout(gameStatus, 2500)
    })
}


rulesModal()
game()