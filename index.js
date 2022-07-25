var winnerId = Math.floor(Math.random() * 3) + 1; 
function loserOrWinner(pressedId) {
    if (winnerId == pressedId) {
        document.getElementById("winnerOrLoser").innerHTML = 'Winner';
    } else {
        document.getElementById("winnerOrLoser").innerHTML = 'Loser';
    }
    winnerId = Math.floor(Math.random() * 3) + 1; 
}