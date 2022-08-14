/* ---------- setup ---------- */
var turn = 1;
// pieces
$('[data-row=6], [data-row=7]').addClass('piece');
$('[data-row=0], [data-row=1]').addClass('piece-o');
// black
$('[data-row=0][data-col=0]').addClass('rook_b');
$('[data-row=0][data-col=1]').addClass('knight_b');
$('[data-row=0][data-col=2]').addClass('bishop_b');
$('[data-row=0][data-col=3]').addClass('queen_b');
$('[data-row=0][data-col=4]').addClass('king_b');
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
$('[data-row=7][data-col=3]').addClass('queen_w');
$('[data-row=7][data-col=4]').addClass('king_w');
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

$('[data-row=6], [data-row=1]').addClass('pawn');
/* ---------- functions ---------- */
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

    $('.piece, .selected, .piece-o, .selected-o').off('click');
    //$('*').off('click');

    $('.selected').removeClass('selected');
    $('.selected-o').removeClass('selected-o');

    $('.origin').removeClass('origin');

    $('.piece').click(function() {
        if (turn  % 2 == 1) {
            var piece = $(this);

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

            } else if (piece.hasClass('bishop_w')) {

            } else if (piece.hasClass('queen_w')) {

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
                    if (!kingMoves[i].hasClass('piece')) {
                        kingMoves[i].addClass('selected');
                    }
                }
            } else if (piece.hasClass('pawn_w')) {
                var pawn1 = getPieceRelative(this, [0, -1]);
                var pawn2 = getPieceRelative(this, [0, -2]);
                if (piece.hasClass('pawn')) {
                    var pawnMoves = [pawn1, pawn2];
                } else {
                    var pawnMoves = [pawn1];
                }
                for (var i = 0; i < pawnMoves.length; i++) {
                    if (!pawnMoves[i].hasClass('piece')) {
                        pawnMoves[i].addClass('selected');
                    }
                }
            }
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
                    origin.removeClass('rook_w');
                    piece.addClass('rook_w');
                } else if (origin.hasClass('bishop_w')) {
                    origin.removeClass('bishop_w');
                    piece.addClass('bishop_w');
                } else if (origin.hasClass('queen_w')) {
                    origin.removeClass('queen_w');
                    piece.addClass('queen_w');
                } else if (origin.hasClass('king_w')) {
                    origin.removeClass('king_w');
                    piece.addClass('king_w');
                } else if (piece.hasClass('pawn_w')) {
                    origin.removeClass('pawn_w');
                    piece.addClass('pawn_w');
                }

                turn += 1;
                prepareForMove();
            });
        }
    });
}

/* ---------- start ---------- */
$(document).ready(function() {
    prepareForMove();
});