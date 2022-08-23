function checkStalemate() {
    var res = false;
    $.map($('.piece'), (p) => {
        var piece = $(p);
        if (piece.hasClass('knight_w')) {
            var knight1 = getPieceRelative(p, [1, -2]);
            var knight2 = getPieceRelative(p, [2, -1]);
            var knight3 = getPieceRelative(p, [1, 2]);
            var knight4 = getPieceRelative(p, [2, 1]);
            var knight5 = getPieceRelative(p, [-1, 2]);
            var knight6 = getPieceRelative(p, [-2, 1]);
            var knight7 = getPieceRelative(p, [-1, -2]);
            var knight8 = getPieceRelative(p, [-2, -1]);
            var knightMoves = [knight1, knight2, knight3, knight4, knight5, knight6, knight7, knight8];
            for (var i = 0; i < knightMoves.length; i++) {
                if (!knightMoves[i].hasClass('piece')) {
                    piece.removeClass('disabled');
                    res = true;
                }
            }
        } else if (piece.hasClass('rook_w')) {
            var run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, -i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, 0])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, 0])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
        } else if (piece.hasClass('bishop_w')) {
            var run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, -i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, -i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
        } else if (piece.hasClass('queen_w')) {
            var run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, -i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, 0])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, 0])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, -i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, -i])
                if (!move.hasClass('piece') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece-o')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
        } else if (piece.hasClass('pawn_w')) {
            var pawn1 = getPieceRelative(p, [0, -1]);
            var pawn2 = getPieceRelative(p, [0, -2]);
            var pawnTake1 = getPieceRelative(p, [1, -1]);
            var pawnTake2 = getPieceRelative(p, [-1, -1]);
            if (pawnTake1.hasClass('piece-o') || pawnTake1.hasClass('en-passant-o')) {
                piece.removeClass('disabled');
                res = true;
            }
            if (pawnTake2.hasClass('piece-o') || pawnTake2.hasClass('en-passant-o')) {
                piece.removeClass('disabled');
                res = true;
            }
            if (piece.hasClass('pawn') && !pawn1.hasClass('piece') && !pawn1.hasClass('piece-o')) {
                var pawnMoves = [pawn1, pawn2];
            } else {
                var pawnMoves = [pawn1];
            }
            for (var i = 0; i < pawnMoves.length; i++) {
                if (!pawnMoves[i].hasClass('piece') && !pawnMoves[i].hasClass('piece-o')) {
                    piece.removeClass('disabled');
                    res = true;
                }
            }
        }
    });
    if (res == true) {
        return true;
    } else {
        return false
    }
}

function checkStalemateO() {
    var res = false;
    $.map($('.piece-o'), (p) => {
        var piece = $(p);
        if (piece.hasClass('knight_b')) {
            var knight1 = getPieceRelative(p, [1, -2]);
            var knight2 = getPieceRelative(p, [2, -1]);
            var knight3 = getPieceRelative(p, [1, 2]);
            var knight4 = getPieceRelative(p, [2, 1]);
            var knight5 = getPieceRelative(p, [-1, 2]);
            var knight6 = getPieceRelative(p, [-2, 1]);
            var knight7 = getPieceRelative(p, [-1, -2]);
            var knight8 = getPieceRelative(p, [-2, -1]);
            var knightMoves = [knight1, knight2, knight3, knight4, knight5, knight6, knight7, knight8];
            for (var i = 0; i < knightMoves.length; i++) {
                if (!knightMoves[i].hasClass('piece-o')) {
                    piece.removeClass('disabled');
                    res = true;
                }
            }
        } else if (piece.hasClass('rook_b')) {
            var run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, -i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, 0])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, 0])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
        } else if (piece.hasClass('bishop_b')) {
            var run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, -i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, -i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
        } else if (piece.hasClass('queen_b')) {
            var run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [0, -i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, 0])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, 0])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [i, -i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
            run = true;
            for (i = 1; i <= 7; i++) {
                var move = getPieceRelative(p, [-i, -i])
                if (!move.hasClass('piece-o') && run == true) {
                    piece.removeClass('disabled');
                    res = true;
                    if (move.hasClass('piece')) {
                        run = false;
                    }
                } else {
                    run = false;
                }
            }
        } else if (piece.hasClass('pawn_b')) {
            var pawn1 = getPieceRelative(p, [0, 1]);
            var pawn2 = getPieceRelative(p, [0, 2]);
            var pawnTake1 = getPieceRelative(p, [1, 1]);
            var pawnTake2 = getPieceRelative(p, [-1, 1]);
            if (pawnTake1.hasClass('piece') || pawnTake1.hasClass('en-passant')) {
                piece.removeClass('disabled');
                res = true;
            }
            if (pawnTake2.hasClass('piece') || pawnTake2.hasClass('en-passant')) {
                piece.removeClass('disabled');
                res = true;
            }
            if (piece.hasClass('pawn') && !pawn1.hasClass('piece') && !pawn1.hasClass('piece-o')) {
                var pawnMoves = [pawn1, pawn2];
            } else {
                var pawnMoves = [pawn1];
            }
            for (var i = 0; i < pawnMoves.length; i++) {
                if (!pawnMoves[i].hasClass('piece-o') && !pawnMoves[i].hasClass('piece')) {
                    piece.removeClass('disabled');
                    res = true;
                }
            }
        }
    });
    if (res == true) {
        return true;
    } else {
        return false
    }
}