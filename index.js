var num = Math.floor(Math.random() * 3) + 1; 
function pressedButton(id) {
    if (num == id) {
        alert('winner');
    } else {
        alert('loser');
    }
    num = Math.floor(Math.random() * 3) + 1; 
}