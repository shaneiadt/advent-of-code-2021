import { readline } from "https://deno.land/x/readline/mod.ts";
import Board from './Board.ts';
import numbersToCall from './inputs/call.ts';

const getBoards = async (path: string) => {
    const f = await Deno.open(path);

    let boards: Board[] = [];
    let board = [];
    let i = 0;

    for await (const line of readline(f)) {
        const temp = new TextDecoder().decode(line)
            .replace('\r', '')
            .trim()
            .replaceAll(' ', ',')
            .replaceAll(',,', ',')
            .split(',');

        if (temp.length === 5) {
            board.push(temp.map(v => parseInt(v)));
        } else {
            boards.push(new Board(board, i));
            board = [];
        }

        i++;
    }

    boards.push(new Board(board, i));

    f.close();

    return boards;
}

const boards = await getBoards('./inputs/boards.txt');

const callNumbers = (boards: Board[], numbersToCall: number[]) => {
    for (const number of numbersToCall) {
        for (const board of boards) {
            const isWinningBoard = board.checkNumber(number);

            if (isWinningBoard) {
                const unmarkedNumbers = board.getAllUnmarkedNumbers();
                const sum = unmarkedNumbers.reduce((prev, cur) => cur + prev, 0);

                return sum * number;
            }
        }
    }
}

const getLastBoardToWin = (boards: Board[], numbersToCall: number[]) => {
    let winningBoards: { bid: number, calledNumber: number }[] = [];
    let allBoards: Board[] = boards;

    for (const number of numbersToCall) {
        for (const board of allBoards) {
            const isWinningBoard = board.checkNumber(number);

            if (isWinningBoard) {
                winningBoards.push({ bid: board.bid, calledNumber: number });
                allBoards = allBoards.filter(b => b.bid !== board.bid);
            }
        }
    }

    const board = boards.find(board => board.bid === winningBoards[winningBoards.length - 1].bid);

    if (!board) return;

    const unmarkedNumbers = board.getAllUnmarkedNumbers();
    const sum = unmarkedNumbers.reduce((prev, cur) => cur + prev, 0);

    return sum * winningBoards[winningBoards.length - 1].calledNumber;
}

const partOne = callNumbers(boards, numbersToCall);

console.log('Part 1: ', partOne);

const partTwo = getLastBoardToWin(boards, numbersToCall);

console.log('Part 2: ', partTwo);
