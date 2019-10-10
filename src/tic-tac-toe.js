class TicTacToe {
    constructor() {
        this.player = true; // true = 'x' : false = 'o'
        this.field = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ]; // 1 = 'x', 2 = 'o'

    }

    getCurrentPlayerSymbol() {
        return  this.player?'x':'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.player ? 1 : 2; 
            this.player = !this.player;
        }
    }

    isFinished() {

        return (this.noMoreTurns() || !(this.getWinner() == null));
    }

    getWinner() {
        let xWinnerRow;
        let yWinnerRow;
        let xWinnerCol;
        let yWinnerCol;

        for (let i = 0; i < 3; i++) {
            xWinnerRow = true;
            yWinnerRow = true;
            xWinnerCol = true;
            yWinnerCol = true;
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] == 0) {
                    xWinnerRow = false;
                    yWinnerRow = false;
                } else if (this.field[i][j] == 1){
                    yWinnerRow = false;
                } else {
                    xWinnerRow = false;
                }

                if (this.field[j][i] == 0) {
                    xWinnerCol = false;
                    yWinnerCol = false;
                } else if (this.field[j][i] == 1) {
                    yWinnerCol = false;
                } else {
                    xWinnerCol = false;
                }
            }
            if (xWinnerCol || xWinnerRow) {
                return 'x';
            }

            if (yWinnerCol || yWinnerRow) {
                return 'o';
            }
        }

        let xWinnerDiag = true;
        let yWinnerDiag = true;
        let xWinnerReDiag = true;
        let yWinnerReDiag = true; 

        for (let i = 0; i < 3; i++){
            if (this.field[i][i] == 0){
                xWinnerDiag = false;
                yWinnerDiag = false;
            } else if (this.field[i][i] == 1){
                yWinnerDiag = false;
            } else {
                xWinnerDiag = false;
            }

            let j = 2 - i;

            if (this.field[i][j] == 0) {
                xWinnerReDiag = false;
                yWinnerReDiag = false;
            } else if (this.field[i][j] == 1) {
                yWinnerReDiag = false;
            } else {
                xWinnerReDiag = false;
            }
        }

        if (xWinnerDiag || xWinnerReDiag){
            return 'x';
        }

        if (yWinnerDiag || yWinnerReDiag) {
            return 'o';
        }

        return null;
    }

    noMoreTurns() {
        let haveNULL = false;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (!this.field[i][j]) {
                    haveNULL = true;
                }
            }
        }
        return !haveNULL;
    }

    isDraw() {
        return (this.getWinner() == null && this.noMoreTurns() == true)
    }

    getFieldValue(rowIndex, colIndex) {
        switch (this.field[rowIndex][colIndex]){
            case 0:
                return null;
            case 1:
                return 'x';
            case 2:
                return 'o';
        }
    }
}

module.exports = TicTacToe;
