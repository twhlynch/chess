function getChecks() {
	$('.check').removeClass('check');
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
				knightMoves[i].addClass('check');
			}
		} else if (piece.hasClass('rook_w')) {
			var run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [0, i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [0, -i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, 0])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, 0])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
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
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, -i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, -i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
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
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [0, -i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, 0])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, 0])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, -i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, -i])
				if (run == true) {
					move.addClass('check');
					if (move.hasClass('piece-o') || move.hasClass('piece')) {
						move.addClass('check');
						run = false;
					}
				} else {
					run = false;
				}
			}
		} else if (piece.hasClass('king_w')) {
			var king1 = getPieceRelative(p, [0, -1]);
			var king2 = getPieceRelative(p, [1, -1]);
			var king3 = getPieceRelative(p, [1, 0]);
			var king4 = getPieceRelative(p, [1, 1]);
			var king5 = getPieceRelative(p, [0, 1]);
			var king6 = getPieceRelative(p, [-1, 1]);
			var king7 = getPieceRelative(p, [-1, 0]);
			var king8 = getPieceRelative(p, [-1, -1]);
			var kingMoves = [king1, king2, king3, king4, king5, king6, king7, king8];
			for (var i = 0; i < kingMoves.length; i++) {
				kingMoves[i].addClass('check');
			}
		} else if (piece.hasClass('pawn_w')) {
			var pawnTake1 = getPieceRelative(p, [1, -1]);
			var pawnTake2 = getPieceRelative(p, [-1, -1]);
			pawnTake1.addClass('check');
			pawnTake2.addClass('check');
		}
	});
}

function getChecksO() {
	$('.check-o').removeClass('check-o');
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
				knightMoves[i].addClass('check-o');
			}
		} else if (piece.hasClass('rook_b')) {
			var run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [0, i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [0, -i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, 0])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, 0])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
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
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, -i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, -i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
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
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [0, -i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, 0])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, 0])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [i, -i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
			run = true;
			for (i = 1; i <= 7; i++) {
				var move = getPieceRelative(p, [-i, -i])
				if (run == true) {
					move.addClass('check-o');
					if (move.hasClass('piece') || move.hasClass('piece-o')) {
						move.addClass('check-o');
						run = false;
					}
				} else {
					run = false;
				}
			}
		} else if (piece.hasClass('king_b')) {
			var king1 = getPieceRelative(p, [0, -1]);
			var king2 = getPieceRelative(p, [1, -1]);
			var king3 = getPieceRelative(p, [1, 0]);
			var king4 = getPieceRelative(p, [1, 1]);
			var king5 = getPieceRelative(p, [0, 1]);
			var king6 = getPieceRelative(p, [-1, 1]);
			var king7 = getPieceRelative(p, [-1, 0]);
			var king8 = getPieceRelative(p, [-1, -1]);
			var kingMoves = [king1, king2, king3, king4, king5, king6, king7, king8];
			for (var i = 0; i < kingMoves.length; i++) {
				kingMoves[i].addClass('check-o');
			}
		} else if (piece.hasClass('pawn_b')) {
			var pawnTake1 = getPieceRelative(p, [1, 1]);
			var pawnTake2 = getPieceRelative(p, [-1, 1]);
			pawnTake1.addClass('check-o');
			pawnTake2.addClass('check-o');
		}
	});
}