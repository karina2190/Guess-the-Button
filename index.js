var winningButton = Math.floor(Math.random() * 3) + 1; 
function loserOrWinner(pressedButton) {
    if (winningButton == pressedButton) {
        alert('winner');
    } else {
        alert('loser');
    }
    winningButton = Math.floor(Math.random() * 3) + 1; 
}