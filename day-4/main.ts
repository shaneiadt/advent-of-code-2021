import { readline } from "https://deno.land/x/readline/mod.ts";
import Board from './Board.ts';
import numbersToCall from './example/call.ts';

const getBoards = async (path: string) => {
    const f = await Deno.open(path);

    let boards: Board[] = [];
    let board = [];

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
            boards.push(new Board(board));
            board = [];
        }
    }

    boards.push(new Board(board));

    f.close();

    return boards;
}

const boards = await getBoards('./example/boards.txt');

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

const result = callNumbers(boards, numbersToCall);

console.log(result);