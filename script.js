var btn = document.querySelectorAll('.btn');
console.log(btn);

var paraResult = document.getElementById('result')

var playerScore = 0;
var computerScore = 0;
document.querySelectorAll('.scores').innerHTML = 0;

btn.forEach((ele) => {
    ele.addEventListener('click', (e) => {
        // Get value from the player choice
        var playerSelect = e.target.id

        //   Get value from computer choice
        var computerChoice = computerSelect();

        // Lets play game in this function
        var exactResult = matchValue(playerSelect, computerChoice)
        console.log(
            exactResult
        );

    })

})


// Select value when computer will play the game
const computerSelect = () => {
    var comSelect = ['rock', 'paper', 'scissor'];
    var comResult = Math.floor(Math.random() * comSelect.length);
    return comSelect[comResult]
    // console.log(comSelect[comResult]);
}

const matchValue = (playerChoice, computerChoice) => {
    if (playerChoice == computerChoice) {
        paraResult.innerHTML = 'Match is tie';
    }
    else if (playerChoice == "scissor" && computerChoice == "paper" || 
    playerChoice == "rock" && computerChoice == "scissor" || 
    playerChoice == "paper" && computerChoice == "rock") {
        playerScore++;
        document.getElementById('score1').innerHTML =  playerScore; 
        paraResult.innerHTML = 'You win';
    }
    else{
        computerScore++;
        document.getElementById('score2').innerHTML =   computerScore;
        paraResult.innerHTML = 'You loss Computer Win';
    }
}