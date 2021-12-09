import exampleInput from './example.ts';

class Diagram {
    constructor(public list: number[][]) {}
}

const diagram = new Diagram(exampleInput);

console.log(diagram.list);