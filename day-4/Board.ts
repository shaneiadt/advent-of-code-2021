export default class Board {
    public bid: number;
    public rows: Row[] = [];

    constructor(numbers: number[][], bid: number) {
        const cells: Cell[][] = [];

        for (const rowOfNumbers of numbers) {
            cells.push(rowOfNumbers.map(num => new Cell(num)));
        }

        this.rows = cells.map(cell => new Row(cell));
        this.bid = bid;
    }

    public checkNumber = (number: number) => {
        this.rows.forEach(row => row.cells.forEach(cell => {
            if (cell.number === number) cell.checked = true;
        }));

        return this.isWinningBoard();
    }

    private isWinningBoard = () => {
        if (this.checkHorizontal() || this.checkVertical()) return true;

        return false;
    }

    public getAllUnmarkedNumbers = () => {
        const unmarkedNumbers: number[] = [];

        for (const row of this.rows) {
            for (const cell of row.cells) {
                if (!cell.checked) unmarkedNumbers.push(cell.number);
            }
        }

        return unmarkedNumbers;
    }

    private checkHorizontal = () => {
        for (const row of this.rows) {
            if (row.cells.every(cell => cell.checked)) return row
        }
    }

    private checkVertical = () => {
        for (let x = 0; x < this.rows.length; x++) {
            const row = this.rows[x];
            const cellsToCheck: Cell[] = [];

            for (let y = 0; y < row.cells.length; y++) {
                const cell = this.rows[y].cells[x];

                cellsToCheck.push(cell);
            }

            if (cellsToCheck.every(cell => cell.checked)) return new Row(cellsToCheck);
        }
    }
}

class Cell {
    constructor(public number: number, public checked: boolean = false) { }
}

class Row {
    constructor(public cells: Cell[]) { }
}