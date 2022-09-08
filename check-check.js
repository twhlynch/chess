function undoTurn() {
    turn -= 1;
    putPeicesBack();

}

event.onMove().then(function (event) {
    if check(move) {
        undoTurn();
    }
}
    // if in check 
        // undo and take 1 off turn and redo turn




kingMoves = findKingMoves()
for move in kingMoves
    doMove(move)
    assignChecks()
    if check(move)
        goBack()


while check() {
    on('move', (m, p) => {
        currentChecks = [];
        reassignChecks();
        if (check(king)) {
            m.back();

        }
        if 
    });
}


if (turns.length == 1) {
    highlightTurn();
}



on any turn:not(.king){
    if king in check after move{
        go back
    }
}