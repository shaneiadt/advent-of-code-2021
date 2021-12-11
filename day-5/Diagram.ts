export default class Diagram {
    private diagram: number[][];

    constructor(list: number[][]) {
        const array = list.map(item => ([item.slice(0, 2), item.slice(2, 4)]));
        const lines = this.getLines(array);
        const highestAxis = this.getHighestAxis(lines);
        const linesDrawn = this.drawLines(lines);

        this.diagram = this.createDiagram(highestAxis);

        this.buildDiagram(linesDrawn);
    }

    public get = () => this.diagram;

    public countOverlappingLines = () => {
        let count = 0;

        for (const row of this.diagram) {
            for (const num of row) {
                if (num >= 2) count++;
            }
        }

        return count;
    }

    private buildDiagram = (lines: number[][][]) => {
        for (const row of lines) {
            for (const coord of row) {
                this.diagram[coord[1]][coord[0]] += 1;
            }
        }
    }

    private drawLines = (lines: number[][][]) => {
        return lines.map(line => {
            const [x1, y1] = line[0];
            const [x2, y2] = line[1];

            let entry = [x1, y1];
            let array = [[x1, y1]];

            const fn = (entry: number, axis: number) => entry === axis ? axis : entry < axis ? entry + 1 : entry - 1

            while (entry[0] !== x2 || entry[1] !== y2) {
                const xDir = fn(entry[0], x2);
                const yDir = fn(entry[1], y2);

                array.push([xDir, yDir]);

                entry[0] = xDir;
                entry[1] = yDir;
            }

            return array;
        });
    }

    private createDiagram = (axis: { x: number, y: number }) => {
        const diagram = [];

        for (let index = 0; index < axis.y + 1; index++) {
            const row = Array.from({ length: axis.x + 1 }, () => 0);

            diagram.push(row);
        }

        return diagram;
    }

    private getLines = (array: number[][][]) => {
        return array.filter(lines => {
            const [x1, y1] = lines[0];
            const [x2, y2] = lines[1];

            if (x1 === x2 || y1 === y2) return lines;
        })
    }

    private getHighestAxis = (lines: number[][][]) => {
        return lines.reduce((prev, line) => {
            const [x1, y1] = line[0];
            const [x2, y2] = line[1];

            let x = prev.x;
            let y = prev.y;

            if (x1 > x) x = x1;
            if (x2 > x) x = x2;
            if (y1 > y) y = y1;
            if (y2 > y) y = y2;

            return { x, y };
        }, { x: 0, y: 0 });
    }
}