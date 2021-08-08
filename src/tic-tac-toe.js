class TicTacToe {
    constructor() {
        this.field = [
            [null, null, null, ],
            [null, null, null, ],
            [null, null, null, ]
        ]
        this.currentPlayerSymbol = "x";
        this.count = 0;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] == null) {
            this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.count++;
            this.currentPlayerSymbol = this.currentPlayerSymbol == "x" ? "o" : "x";
        }
    }

    isFinished() {
        return this.getWinner() || this.isDraw() ? true : false;
    }

    getWinner() {
        if ((this.field[0][0] == 'x' && this.field[0][1] == 'x' && this.field[0][2] == 'x') ||
            (this.field[1][0] == 'x' && this.field[1][1] == 'x' && this.field[1][2] == 'x') ||
            (this.field[2][0] == 'x' && this.field[2][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][0] == 'x' && this.field[2][0] == 'x') ||
            (this.field[0][1] == 'x' && this.field[1][1] == 'x' && this.field[2][1] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][2] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][0] == 'x' && this.field[1][1] == 'x' && this.field[2][2] == 'x') ||
            (this.field[0][2] == 'x' && this.field[1][1] == 'x' && this.field[2][0] == 'x')) {
            return 'x';
        } else if ((this.field[0][0] == 'o' && this.field[0][1] == 'o' && this.field[0][2] == 'o') ||
            (this.field[1][0] == 'o' && this.field[1][1] == 'o' && this.field[1][2] == 'o') ||
            (this.field[2][0] == 'o' && this.field[2][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][0] == 'o' && this.field[2][0] == 'o') ||
            (this.field[0][1] == 'o' && this.field[1][1] == 'o' && this.field[2][1] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][2] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][0] == 'o' && this.field[1][1] == 'o' && this.field[2][2] == 'o') ||
            (this.field[0][2] == 'o' && this.field[1][1] == 'o' && this.field[2][0] == 'o')) {
            return 'o';
        } else {
            return null;
        }
    }

    noMoreTurns() {
        return this.count == 9 ? true : false;

    }

    isDraw() {
        return (this.noMoreTurns() && (this.getWinner() == null)) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;