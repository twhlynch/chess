/* ---------- setup ---------- */
var turn;
function setup() {
turn = 1;
// pieces
$('[data-row=6], [data-row=7]').addClass('piece');
$('[data-row=0], [data-row=1]').addClass('piece-o');
// black
$('[data-row=0][data-col=0]').addClass('rook_b');
$('[data-row=0][data-col=1]').addClass('knight_b');
$('[data-row=0][data-col=2]').addClass('bishop_b');
$('[data-row=0][data-col=4]').addClass('queen_b');
$('[data-row=0][data-col=3]').addClass('king_b');
$('[data-row=0][data-col=5]').addClass('bishop_b');
$('[data-row=0][data-col=6]').addClass('knight_b');
$('[data-row=0][data-col=7]').addClass('rook_b');
$('[data-row=1][data-col=0]').addClass('pawn_b');
$('[data-row=1][data-col=1]').addClass('pawn_b');
$('[data-row=1][data-col=2]').addClass('pawn_b');
$('[data-row=1][data-col=3]').addClass('pawn_b');
$('[data-row=1][data-col=4]').addClass('pawn_b');
$('[data-row=1][data-col=5]').addClass('pawn_b');
$('[data-row=1][data-col=6]').addClass('pawn_b');
$('[data-row=1][data-col=7]').addClass('pawn_b');
// white
$('[data-row=7][data-col=0]').addClass('rook_w');
$('[data-row=7][data-col=1]').addClass('knight_w');
$('[data-row=7][data-col=2]').addClass('bishop_w');
$('[data-row=7][data-col=4]').addClass('queen_w');
$('[data-row=7][data-col=3]').addClass('king_w');
$('[data-row=7][data-col=5]').addClass('bishop_w');
$('[data-row=7][data-col=6]').addClass('knight_w');
$('[data-row=7][data-col=7]').addClass('rook_w');
$('[data-row=6][data-col=0]').addClass('pawn_w');
$('[data-row=6][data-col=1]').addClass('pawn_w');
$('[data-row=6][data-col=2]').addClass('pawn_w');
$('[data-row=6][data-col=3]').addClass('pawn_w');
$('[data-row=6][data-col=4]').addClass('pawn_w');
$('[data-row=6][data-col=5]').addClass('pawn_w');
$('[data-row=6][data-col=6]').addClass('pawn_w');
$('[data-row=6][data-col=7]').addClass('pawn_w');
// special
$('[data-row=6], [data-row=1]').addClass('pawn');

$('[data-row=0][data-col=3]').addClass('castle');
$('[data-row=7][data-col=3]').addClass('castle');
$('.rook_b, .rook_w').addClass('castle');
}
setup();
/* ---------- functions ---------- */

function whiteWin() {
	$('#EndGame').css("display", "grid");
	$('#restart, #back').css("display", "flex");
	$('#EndGame p').text("White Wins");
}
function blackWin() {
	$('#EndGame').css("display", "grid");
	$('#restart, #back').css("display", "flex");
	$('#EndGame p').text("Black Wins");
}
function gameDraw() {
	$('#EndGame').css("display", "grid");
	$('#restart, #back').css("display", "flex");
	$('#EndGame p').text("Game Tied");
}

$('#restart').click(function() {
	$('#EndGame').css("display", "none");
	$('#restart, #back').css("display", "none");
	$('#EndGame p').text("");
    $('.piece').removeClass('piece');
    $('.piece-o').removeClass('piece-o');
    $('.selected').removeClass('selected');
    $('.selected-o').removeClass('selected-o');
    $('.pawn').removeClass('pawn');
    $('.queen_w').removeClass('queen_w');
    $('.king_w').removeClass('king_w');
    $('.bishop_w').removeClass('bishop_w');
    $('.knight_w').removeClass('knight_w');
    $('.rook_w').removeClass('rook_w');
    $('.pawn_w').removeClass('pawn_w');
    $('.disabled').removeClass('disabled');
    $('.queen_b').removeClass('queen_b');
    $('.king_b').removeClass('king_b');
    $('.bishop_b').removeClass('bishop_b');
    $('.knight_b').removeClass('knight_b');
    $('.rook_b').removeClass('rook_b');
    $('.pawn_b').removeClass('pawn_b');
    $('.check').removeClass('check');
    $('.check-o').removeClass('check-o');
    setup();
    prepareForMove();
});
$('#back').click(function() {

});

function debug() {
    $('head').append('<link rel="stylesheet" type="text/css" href="debug.css">');
    var turnCount = turn;
    const turnCheck = setInterval(function() {
        if (turnCount != turn) {
            turnCount = turn;
            console.log('turn: ' + turn);
        }
    }, 100);
}
function getPieceLocation(tile) {
    var loc = [tile.getAttribute('data-col'), tile.getAttribute('data-row')];
    return loc;
}
function getPiece([col, row]) {
    var piece = $('[data-col="' + col + '"][data-row="' + row + '"]');
    return piece;
}
function getPieceRelative(piece, [col, row]) {
    var loc = getPieceLocation(piece);
    var newLoc = [(parseInt(loc[0]) + col).toString(), (parseInt(loc[1]) + row).toString()];
    return getPiece(newLoc);
}

/* ---------- click events ---------- */

function prepareForMove() {
    getChecksO();
    getChecks();

    $('.piece, .selected, .piece-o, .selected-o').off('click');
    //$('*').off('click');

    $('.selected').removeClass('selected');
    $('.selected-o').removeClass('selected-o');

    $('.origin').removeClass('origin');

    $('.piece:not(.disabled)').click(function() {
        if (turn  % 2 == 1 && !$(this).hasClass('disabled')) {
            getChecksO();

            $('.selected:not(.piece)').off('click');
            $('.selected-o:not(.piece-o)').off('click');

            $('.selected').removeClass('selected');
            $('.selected-o').removeClass('selected-o');
            
            $('.origin').removeClass('origin');
            //$('.tile:not(.selected, piece)').off('click');
            //$('.tile-d:not(.selected, piece)').off('click');

            var piece = $(this);
            piece.addClass('selected');
            if (piece.hasClass('knight_w')) {
                var knight1 = getPieceRelative(this, [1, -2]);
                var knight2 = getPieceRelative(this, [2, -1]);
                var knight3 = getPieceRelative(this, [1, 2]);
                var knight4 = getPieceRelative(this, [2, 1]);
                var knight5 = getPieceRelative(this, [-1, 2]);
                var knight6 = getPieceRelative(this, [-2, 1]);
                var knight7 = getPieceRelative(this, [-1, -2]);
                var knight8 = getPieceRelative(this, [-2, -1]);
                var knightMoves = [knight1, knight2, knight3, knight4, knight5, knight6, knight7, knight8];
                for (var i = 0; i < knightMoves.length; i++) {
                    if (!knightMoves[i].hasClass('piece')) {
                        knightMoves[i].addClass('selected');
                    }
                }
            } else if (piece.hasClass('rook_w')) {
                var run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [0, i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [0, -i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, 0])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, 0])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
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
                    var move = getPieceRelative(this, [i, i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, -i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, -i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
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
                    var move = getPieceRelative(this, [0, i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [0, -i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, 0])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, 0])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, -i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, -i])
                    if (!move.hasClass('piece') && run == true) {
                        move.addClass('selected');
                        if (move.hasClass('piece-o')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
            } else if (piece.hasClass('king_w')) {
                var king1 = getPieceRelative(this, [0, -1]);
                var king2 = getPieceRelative(this, [1, -1]);
                var king3 = getPieceRelative(this, [1, 0]);
                var king4 = getPieceRelative(this, [1, 1]);
                var king5 = getPieceRelative(this, [0, 1]);
                var king6 = getPieceRelative(this, [-1, 1]);
                var king7 = getPieceRelative(this, [-1, 0]);
                var king8 = getPieceRelative(this, [-1, -1]);
                var kingMoves = [king1, king2, king3, king4, king5, king6, king7, king8];
                for (var i = 0; i < kingMoves.length; i++) {
                    if (!kingMoves[i].hasClass('piece') && !kingMoves[i].hasClass('check-o')) {
                        kingMoves[i].addClass('selected');
                    }
                }
                if (piece.hasClass('castle')) {
                    var rook1 = $('[data-row=7][data-col=0]');
                    if (rook1.hasClass('rook_w')) {
                        if (!$('[data-row=7][data-col=1]').hasClass('piece')
                         && !$('[data-row=7][data-col=2]').hasClass('piece')
                         && !$('[data-row=7][data-col=1]').hasClass('piece-o')
                         && !$('[data-row=7][data-col=2]').hasClass('piece-o')
                         && !$('[data-row=7][data-col=1]').hasClass('check-o')
                         && !$('[data-row=7][data-col=2]').hasClass('check-o')) {
                            $('[data-row=7][data-col=1]').addClass('selected');
                            $('[data-row=7][data-col=1]').addClass('castleable');
                        }
                    }
                    var rook1 = $('[data-row=7][data-col=7]');
                    if (rook1.hasClass('rook_w')) {
                        if (!$('[data-row=7][data-col=6]').hasClass('piece')
                         && !$('[data-row=7][data-col=5]').hasClass('piece')
                         && !$('[data-row=7][data-col=4]').hasClass('piece')
                         && !$('[data-row=7][data-col=6]').hasClass('piece-o')
                         && !$('[data-row=7][data-col=5]').hasClass('piece-o')
                         && !$('[data-row=7][data-col=4]').hasClass('piece-o')
                         && !$('[data-row=7][data-col=6]').hasClass('check-o')
                         && !$('[data-row=7][data-col=5]').hasClass('check-o')
                         && !$('[data-row=7][data-col=4]').hasClass('check-o')) {
                            $('[data-row=7][data-col=5]').addClass('selected');
                            $('[data-row=7][data-col=5]').addClass('castleable');
                        }
                    }
                }
                if (!$('.selected:not(.piece)')[0]) {
                    if (piece.hasClass('check-o')) {
                        blackWin();
                    } else {
                        if (!checkStalemate()) {
                            gameDraw();
                        }
                    }
                }
            } else if (piece.hasClass('pawn_w')) {
                var pawn1 = getPieceRelative(this, [0, -1]);
                var pawn2 = getPieceRelative(this, [0, -2]);
                var pawnTake1 = getPieceRelative(this, [1, -1]);
                var pawnTake2 = getPieceRelative(this, [-1, -1]);
                if (pawnTake1.hasClass('piece-o') || pawnTake1.hasClass('en-passant-o')) {
                    pawnTake1.addClass('selected');
                }
                if (pawnTake2.hasClass('piece-o') || pawnTake2.hasClass('en-passant-o')) {
                    pawnTake2.addClass('selected');
                }
                if (piece.hasClass('pawn') && !pawn1.hasClass('piece') && !pawn1.hasClass('piece-o')) {
                    var pawnMoves = [pawn1, pawn2];
                } else {
                    var pawnMoves = [pawn1];
                }
                for (var i = 0; i < pawnMoves.length; i++) {
                    if (!pawnMoves[i].hasClass('piece') && !pawnMoves[i].hasClass('piece-o')) {
                        pawnMoves[i].addClass('selected');
                    }
                }
            }
            $('.selected:not(.piece)').off('click');
            $('.selected:not(.piece)').click(function() {
                var piece = $(this);
                var origin = $('.selected.piece');
                origin.addClass('origin');

                origin.removeClass('piece');
                piece.removeClass('piece-o');
                piece.addClass('piece');

                piece.removeClass('knight_b');
                piece.removeClass('rook_b');
                piece.removeClass('bishop_b');
                piece.removeClass('queen_b');
                piece.removeClass('king_b');
                piece.removeClass('pawn_b');

                if (origin.hasClass('knight_w')) {
                    origin.removeClass('knight_w');
                    piece.addClass('knight_w');
                } else if (origin.hasClass('rook_w')) {
                    origin.removeClass('castle');
                    origin.removeClass('rook_w');
                    piece.addClass('rook_w');
                } else if (origin.hasClass('bishop_w')) {
                    origin.removeClass('bishop_w');
                    piece.addClass('bishop_w');
                } else if (origin.hasClass('queen_w')) {
                    origin.removeClass('queen_w');
                    piece.addClass('queen_w');
                } else if (origin.hasClass('king_w')) {
                    if (piece.hasClass('castleable')) {
                        if (piece.is('[data-row=7][data-col=1]')) {
                            var rook = $('[data-row=7][data-col=0]');
                            var castle = $('[data-row=7][data-col=2]');
                        } else if (piece.is('[data-row=7][data-col=5]')) {
                            var rook = $('[data-row=7][data-col=7]');
                            var castle = $('[data-row=7][data-col=4]');
                        }
                        rook.removeClass('rook_w');
                        rook.removeClass('piece');
                        rook.removeClass('castle');
                        castle.addClass('rook_w');
                        castle.addClass('piece');
                        piece.removeClass('castleable');
                    }
                    origin.removeClass('castle');
                    origin.removeClass('king_w');
                    piece.addClass('king_w');
                } else if (origin.hasClass('pawn_w')) {
                    origin.removeClass('pawn_w');
                    origin.removeClass('pawn');
                    if (piece.is('[data-row=0]')) {
                        $('#promotion').css('display', 'flex');
                        $('.p-queen_w').click(function() {
                            piece.addClass('queen_w');
                            $('#promotion').css('display', 'none');
                        });
                        $('.p-bishop_w').click(function() {
                            piece.addClass('bishop_w');
                            $('#promotion').css('display', 'none');
                        });
                        $('.p-knight_w').click(function() {
                            piece.addClass('knight_w');
                            $('#promotion').css('display', 'none');
                        });
                        $('.p-rook_w').click(function() {
                            piece.addClass('rook_w');
                            $('#promotion').css('display', 'none');
                        });
                    } else {
                        piece.addClass('pawn_w');
                    }
                    if (piece.is('[data-row=4]') && origin.is('[data-row=6]')) {
                        getPieceRelative(this, [0, 1]).addClass('en-passant');
                    }
                    if (piece.hasClass('en-passant-o')) {
                        getPieceRelative(this, [0, 1]).removeClass('piece-o');
                        getPieceRelative(this, [0, 1]).removeClass('pawn_b');
                    }
                }
                $('.en-passant-o').removeClass('en-passant-o');
                $('.check-o').removeClass('check-o');
                $('.disabled').removeClass('disabled');
                turn += 1;
                prepareForMove();
            });
        }
    });
    $('.piece-o:not(.disabled)').click(function() {
        if (turn  % 2 == 0 && !$(this).hasClass('disabled')) {
            getChecks();

            $('.selected:not(.piece)').off('click');
            $('.selected-o:not(.piece-o)').off('click');

            $('.selected').removeClass('selected');
            $('.selected-o').removeClass('selected-o');
            
            $('.origin').removeClass('origin');
            //$('.tile-d:not(.selected-o, piece-o)').off('click');
            //$('.tile:not(.selected-o, piece-o)').off('click');
            
            var piece = $(this);
            piece.addClass('selected-o');
            if (piece.hasClass('knight_b')) {
                var knight1 = getPieceRelative(this, [1, -2]);
                var knight2 = getPieceRelative(this, [2, -1]);
                var knight3 = getPieceRelative(this, [1, 2]);
                var knight4 = getPieceRelative(this, [2, 1]);
                var knight5 = getPieceRelative(this, [-1, 2]);
                var knight6 = getPieceRelative(this, [-2, 1]);
                var knight7 = getPieceRelative(this, [-1, -2]);
                var knight8 = getPieceRelative(this, [-2, -1]);
                var knightMoves = [knight1, knight2, knight3, knight4, knight5, knight6, knight7, knight8];
                for (var i = 0; i < knightMoves.length; i++) {
                    if (!knightMoves[i].hasClass('piece-o')) {
                        knightMoves[i].addClass('selected-o');
                    }
                }
            } else if (piece.hasClass('rook_b')) {
                var run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [0, i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [0, -i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, 0])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, 0])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
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
                    var move = getPieceRelative(this, [i, i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, -i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, -i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
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
                    var move = getPieceRelative(this, [0, i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [0, -i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, 0])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, 0])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [i, -i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
                run = true;
                for (i = 1; i <= 7; i++) {
                    var move = getPieceRelative(this, [-i, -i])
                    if (!move.hasClass('piece-o') && run == true) {
                        move.addClass('selected-o');
                        if (move.hasClass('piece')) {
                            run = false;
                        }
                    } else {
                        run = false;
                    }
                }
            } else if (piece.hasClass('king_b')) {
                var king1 = getPieceRelative(this, [0, -1]);
                var king2 = getPieceRelative(this, [1, -1]);
                var king3 = getPieceRelative(this, [1, 0]);
                var king4 = getPieceRelative(this, [1, 1]);
                var king5 = getPieceRelative(this, [0, 1]);
                var king6 = getPieceRelative(this, [-1, 1]);
                var king7 = getPieceRelative(this, [-1, 0]);
                var king8 = getPieceRelative(this, [-1, -1]);
                var kingMoves = [king1, king2, king3, king4, king5, king6, king7, king8];
                for (var i = 0; i < kingMoves.length; i++) {
                    if (!kingMoves[i].hasClass('piece-o') && !kingMoves[i].hasClass('check')) {
                        kingMoves[i].addClass('selected-o');
                    }
                }
                if (piece.hasClass('castle')) {
                    var rook1 = $('[data-row=0][data-col=0]');
                    if (rook1.hasClass('rook_b')) {
                        if (!$('[data-row=0][data-col=1]').hasClass('piece')
                         && !$('[data-row=0][data-col=2]').hasClass('piece')
                         && !$('[data-row=0][data-col=1]').hasClass('piece-o')
                         && !$('[data-row=0][data-col=2]').hasClass('piece-o')
                         && !$('[data-row=0][data-col=1]').hasClass('check')
                         && !$('[data-row=0][data-col=2]').hasClass('check')) {
                            $('[data-row=0][data-col=1]').addClass('selected-o');
                            $('[data-row=0][data-col=1]').addClass('castleable');
                        }
                    }
                    var rook1 = $('[data-row=0][data-col=7]');
                    if (rook1.hasClass('rook_b')) {
                        if (!$('[data-row=0][data-col=6]').hasClass('piece')
                         && !$('[data-row=0][data-col=5]').hasClass('piece')
                         && !$('[data-row=0][data-col=4]').hasClass('piece')
                         && !$('[data-row=0][data-col=6]').hasClass('piece-o')
                         && !$('[data-row=0][data-col=5]').hasClass('piece-o')
                         && !$('[data-row=0][data-col=4]').hasClass('piece-o')
                         && !$('[data-row=0][data-col=6]').hasClass('check')
                         && !$('[data-row=0][data-col=5]').hasClass('check')
                         && !$('[data-row=0][data-col=4]').hasClass('check')) {
                            $('[data-row=0][data-col=5]').addClass('selected-o');
                            $('[data-row=0][data-col=5]').addClass('castleable');
                        }
                    }
                }
                if (!$('.selected-o:not(.piece-o)')[0]) {
                    if (piece.hasClass('check')) {
                        whiteWin();
                    } else {
                        if (!checkStalemateO()) {
                            gameDraw();
                        }
                    }
                }
            } else if (piece.hasClass('pawn_b')) {
                var pawn1 = getPieceRelative(this, [0, 1]);
                var pawn2 = getPieceRelative(this, [0, 2]);
                var pawnTake1 = getPieceRelative(this, [1, 1]);
                var pawnTake2 = getPieceRelative(this, [-1, 1]);
                if (pawnTake1.hasClass('piece') || pawnTake1.hasClass('en-passant')) {
                    pawnTake1.addClass('selected-o');
                }
                if (pawnTake2.hasClass('piece') || pawnTake2.hasClass('en-passant')) {
                    pawnTake2.addClass('selected-o');
                }
                if (piece.hasClass('pawn') && !pawn1.hasClass('piece') && !pawn1.hasClass('piece-o')) {
                    var pawnMoves = [pawn1, pawn2];
                } else {
                    var pawnMoves = [pawn1];
                }
                for (var i = 0; i < pawnMoves.length; i++) {
                    if (!pawnMoves[i].hasClass('piece-o') && !pawnMoves[i].hasClass('piece')) {
                        pawnMoves[i].addClass('selected-o');
                    }
                }
            }
            $('.selected-o:not(.piece-o)').off('click');
            $('.selected-o:not(.piece-o)').click(function() {
                var piece = $(this);
                var origin = $('.selected-o.piece-o');
                origin.addClass('origin');

                origin.removeClass('piece-o');
                piece.removeClass('piece');
                piece.addClass('piece-o');

                piece.removeClass('knight_w');
                piece.removeClass('rook_w');
                piece.removeClass('bishop_w');
                piece.removeClass('queen_w');
                piece.removeClass('king_w');
                piece.removeClass('pawn_w');

                if (origin.hasClass('knight_b')) {
                    origin.removeClass('knight_b');
                    piece.addClass('knight_b');
                } else if (origin.hasClass('rook_b')) {
                    origin.removeClass('castle');
                    origin.removeClass('rook_b');
                    piece.addClass('rook_b');
                } else if (origin.hasClass('bishop_b')) {
                    origin.removeClass('bishop_b');
                    piece.addClass('bishop_b');
                } else if (origin.hasClass('queen_b')) {
                    origin.removeClass('queen_b');
                    piece.addClass('queen_b');
                } else if (origin.hasClass('king_b')) {
                    if (piece.hasClass('castleable')) {
                        if (piece.is('[data-row=0][data-col=1]')) {
                            var rook = $('[data-row=0][data-col=0]');
                            var castle = $('[data-row=0][data-col=2]');
                        } else if (piece.is('[data-row=0][data-col=5]')) {
                            var rook = $('[data-row=0][data-col=7]');
                            var castle = $('[data-row=0][data-col=4]');
                        }
                        rook.removeClass('rook_b');
                        rook.removeClass('piece-o');
                        rook.removeClass('castle');
                        castle.addClass('rook_b');
                        castle.addClass('piece-o');
                        piece.removeClass('castleable');
                    }
                    origin.removeClass('castle');
                    origin.removeClass('king_b');
                    piece.addClass('king_b');
                } else if (origin.hasClass('pawn_b')) {
                    origin.removeClass('pawn_b');
                    origin.removeClass('pawn');
                    if (piece.is('[data-row=7]')) {
                        $('#promotion-o').css('display', 'flex');
                        $('.p-queen_b').click(function() {
                            piece.addClass('queen_b');
                            $('#promotion-o').css('display', 'none');
                        });
                        $('.p-bishop_b').click(function() {
                            piece.addClass('bishop_b');
                            $('#promotion-o').css('display', 'none');
                        });
                        $('.p-knight_b').click(function() {
                            piece.addClass('knight_b');
                            $('#promotion-o').css('display', 'none');
                        });
                        $('.p-rook_b').click(function() {
                            piece.addClass('rook_b');
                            $('#promotion-o').css('display', 'none');
                        });
                    } else {
                        piece.addClass('pawn_b');
                    }
                    if (piece.is('[data-row=3]') && origin.is('[data-row=1]')) {
                        getPieceRelative(this, [0, -1]).addClass('en-passant-o');
                    }
                    if (piece.hasClass('en-passant')) {
                        getPieceRelative(this, [0, -1]).removeClass('piece');
                        getPieceRelative(this, [0, -1]).removeClass('pawn_w');
                    }
                }
                $('.en-passant').removeClass('en-passant');
                $('.check').removeClass('check');
                $('.disabled').removeClass('disabled');
                turn += 1;
                prepareForMove();
            });
        }
    });
    // check
    if ($('.king_w').hasClass('check-o')) {
        $('.piece:not(.king_w)').addClass('disabled');
        $('.king_w').click();
    }
    if ($('.king_b').hasClass('check')) {
        $('.piece-o:not(.king_b)').addClass('disabled');
        $('.king_b').click();
    }
}

/* ---------- start ---------- */
$(document).ready(function() {
    prepareForMove();
});