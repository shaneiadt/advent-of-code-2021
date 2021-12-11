export default class Diagram {
    private diagram: number[][];

    constructor(list: number[][]) {
        const array = list.map(item => ([item.slice(0, 2), item.slice(2, 4)]));
        const lines = this.getLines(array);
        const highestAxis = this.getHighestAxis(lines);

        this.diagram = this.createDiagram(highestAxis);
        const linesDrawn = this.drawLines(lines);
        debugger;
    }

    public get = () => this.diagram;

    private drawLines = (lines: number[][][]) => {
        return lines.map(line => {
            const [x1, y1] = line[0];
            const [x2, y2] = line[1];

            let entry = [x1, y1];
            let array = [[x1, y1]];

            while (entry[0] !== x2 || entry[1] !== y2) {
                const xDir = entry[0] === x2 ? x2 : entry[0] < x2 ? entry[0] + 1 : entry[0] - 1;
                const yDir = entry[1] === y2 ? y2 : entry[1] < y2 ? entry[1] + 1 : entry[1] - 1;

                array.push([xDir, yDir]);

                entry[0] = xDir;
                entry[1] = yDir;
            }

            return array;
        });
    }

    private createDiagram = (axis: { x: number, y: number }) => {
        const diagram = [];

        for (let index = 0; index < axis.y; index++) {
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