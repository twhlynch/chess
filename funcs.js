/*function getPieceLocation(tile) {
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
}*/
function inCheck(team) {
    if (team == 'w'){
        if ($('.king_w').hasClass('check-o')) {
            return true
        } else {
            return false    
        }
    } else if (team == 'b') {
        if ($('.king_b').hasClass('check')) {
            return true
        } else {
            return false    
        }
    }
}
function movePiece(origin, moveTo, piecethis) {
    if (origin.is('[data-team=w]')) {
        var team = 'w';
        var oteam = 'b';
        var suffix = '';
        var osuffix = '-o';
    } else if (origin.is('[data-team=b]')) {
        var team = 'b';
        var suffix = '-o';
        var osuffix = '';
        var oteam = 'w';
    }
    if (origin.hasClass('king_b') || origin.hasClass('king_w')) {
        var type = 'king';
    } else if (origin.hasClass('queen_b') || origin.hasClass('queen_w')) {
        var type = 'queen';
    } else if (origin.hasClass('bishop_b') || origin.hasClass('bishop_w')) {
        var type = 'bishop';
    } else if (origin.hasClass('knight_b') || origin.hasClass('knight_w')) {
        var type = 'knight';
    } else if (origin.hasClass('rook_b') || origin.hasClass('rook_w')) {
        var type = 'rook';
    } else if (origin.hasClass('pawn_b') || origin.hasClass('pawn_w')) {
        var type = 'pawn';
    }
    var moveFrom = getPieceLocation(piecethis);
    var piece = getPiece(moveTo);
    var backupTake = piece;
    var backupSelf = origin;
    origin.addClass('origin');

    origin.removeClass('piece'+suffix);
    piece.removeClass('piece'+osuffix);
    piece.addClass('piece'+suffix);

    piece.removeClass('knight_'+oteam);
    piece.removeClass('rook_'+oteam);
    piece.removeClass('bishop_'+oteam);
    piece.removeClass('queen_'+oteam);
    piece.removeClass('king_'+oteam);
    piece.removeClass('pawn_'+oteam);

    if (origin.hasClass('knight_'+team)) {
        origin.removeClass('knight_'+team);
        piece.addClass('knight_'+team);
    } else if (origin.hasClass('rook_'+team)) {
        origin.removeClass('castle');
        origin.removeClass('rook_'+team);
        piece.addClass('rook_'+team);
    } else if (origin.hasClass('bishop_'+team)) {
        origin.removeClass('bishop_'+team);
        piece.addClass('bishop_'+team);
    } else if (origin.hasClass('queen_'+team)) {
        origin.removeClass('queen_'+team);
        piece.addClass('queen_'+team);
    } else if (origin.hasClass('king_'+team)) {
        if (piece.hasClass('castleable')) {
            if (piece.is('[data-row=7][data-col=1]')) {
                var rook = $('[data-row=7][data-col=0]');
                var castle = $('[data-row=7][data-col=2]');
            } else if (piece.is('[data-row=7][data-col=5]')) {
                var rook = $('[data-row=7][data-col=7]');
                var castle = $('[data-row=7][data-col=4]');
            }
            rook.removeClass('rook_'+team);
            rook.removeClass('piece'+suffix);
            rook.removeClass('castle');
            castle.addClass('rook_'+team);
            castle.addClass('piece'+suffix);
            piece.removeClass('castleable');
        }
        origin.removeClass('castle');
        origin.removeClass('king_'+team);
        piece.addClass('king_'+team);
    } else if (origin.hasClass('pawn_'+team)) {
        origin.removeClass('pawn_'+team);
        origin.removeClass('pawn');
        if (piece.is('[data-row=0]')) {
            $('#promotion').css('display', 'flex');
            $('.p-queen_'+team).click(function() {
                piece.addClass('queen_'+team);
                $('#promotion').css('display', 'none');
            });
            $('.p-bishop_'+team).click(function() {
                piece.addClass('bishop_'+team);
                $('#promotion').css('display', 'none');
            });
            $('.p-knight_'+team).click(function() {
                piece.addClass('knight_'+team);
                $('#promotion').css('display', 'none');
            });
            $('.p-rook_'+team).click(function() {
                piece.addClass('rook_'+team);
                $('#promotion').css('display', 'none');
            });
        } else {
            piece.addClass('pawn_'+team);
        }
        if (piece.is('[data-row=4]') && origin.is('[data-row=6]')) {
            getPieceRelative(this, [0, 1]).addClass('en-passant'+suffix);
        }
        if (piece.hasClass('en-passant'+osuffix)) {
            getPieceRelative(this, [0, 1]).removeClass('piece'+osuffix);
            getPieceRelative(this, [0, 1]).removeClass('pawn_'+oteam);
        }
    }
    if (inCheck(team)) {
        origin = backupSelf;
        piece = backupTake;
        turn -= 1;
        print('no'+turn);
    } else {
        $('.en-passant'+osuffix).removeClass('en-passant'+osuffix);
        $('.check'+osuffix).removeClass('check'+osuffix);
        $('.disabled').removeClass('disabled');
        turn += 1;
        print('yes'+turn);
        prepareForMove();
    }
}