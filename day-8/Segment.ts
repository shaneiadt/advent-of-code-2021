export default class Segment {
    private digits: string[][] = [];

    constructor() {
        // this.digits = [
        //     ['.', '.', '.', '.'],
        //     ['.', '.', '.', '.'],
        //     ['.', '.', '.', '.'],
        //     ['.', '.', '.', '.'],
        //     ['.', '.', '.', '.'],
        //     ['.', '.', '.', '.'],
        //     ['.', '.', '.', '.']
        // ];
        this.digits = [Array(4).fill(Digit.BLANK)];

        debugger;
    }
}

enum Digit {
    'BLANK' = '.',
    'A' = 'A',
    'B' = 'B',
    'C' = 'C',
    'D' = 'D',
    'E' = 'E',
    'F' = 'F',
    'G' = 'G'
}