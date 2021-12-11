import Diagram from "./Diagram.ts";
import input from './input.ts';


const diagram = new Diagram(input);
const count = diagram.countOverlappingLines();

console.log('[Part 1] No. of overlapping lines: ' + count);