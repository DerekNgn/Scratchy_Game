Ticket = document.getElementById("Ticket")

prizes = ['kiss', '5 min snuggle', 'extra topping for boba', 'kinder egg', '1 cup boba', 'chocolate bar', '1 free shirt', 'shopping spree']

const randomArray = (count, max) => {
    const nums = []
    while (nums.length < count) {
        r = Math.floor(Math.random()*max)
        if (nums.indexOf(r) === -1) {
            nums.push(r)
        }
    }
    return nums
}

winNumbers = randomArray(12, 25)

displayWinNumbers = document.createElement("ul")
displayWinNumbers.setAttribute("id","WinNums")

for (num of winNumbers) {
    addWinNum = document.createElement("li")
    addWinNum.innerHTML = num
    displayWinNumbers.appendChild(addWinNum)
}

Ticket.appendChild(displayWinNumbers)

playersNumbers = [
    {game:1, numbers:randomArray(4, 15), prize:prizes[Math.floor(Math.random()*prizes.length)]},
    {game:2, numbers:randomArray(4, 15), prize:prizes[Math.floor(Math.random()*prizes.length)]},
    {game:3, numbers:randomArray(4, 15), prize:prizes[Math.floor(Math.random()*prizes.length)]},
    {game:4, numbers:randomArray(4, 15), prize:prizes[Math.floor(Math.random()*prizes.length)]},
    {game:5, numbers:randomArray(4, 15), prize:prizes[Math.floor(Math.random()*prizes.length)]},
]

playerGames = document.createElement("table")
playerGames.setAttribute("id","PlayNums")

for (game of playersNumbers) {
    playerNumbers = document.createElement("tr")
    playerNumbers.setAttribute("id",`Game_${game.game}`)
    for (num of game.numbers) {
        singleNum = document.createElement("td")
        singleNum.innerHTML = num
        playerNumbers.appendChild(singleNum)
    }
    gamePrize = document.createElement("td")
    gamePrize.setAttribute("id","gamePrize")
    gamePrize.innerHTML = game.prize
    playerNumbers.appendChild(gamePrize)
    playerGames.appendChild(playerNumbers)
}

Ticket.appendChild(playerGames)

function setup() {
    createCanvas(450, 600);
  }

let ticket_cover = loadImage("./ticket_cover.png");

function draw() {
    strokeWeight(5);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY)
    }
}