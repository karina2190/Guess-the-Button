var winnerId = Math.floor(Math.random() * 3) + 1; 
function loserOrWinner(pressedId) {
    if (winnerId == pressedId) {
        alert('winner');
    } else {
        alert('loser');
    }
    winnerId = Math.floor(Math.random() * 3) + 1; 
}