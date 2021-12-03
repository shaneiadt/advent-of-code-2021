import { example, inputs } from './inputs.ts';
import Submarine from './Submarine.ts';
import { MOVEMENT } from './enums.ts';

const submarine = new Submarine();

for(const pos of inputs){
    submarine.move(pos[0] as MOVEMENT, pos[1] as number);
}

console.log(submarine.horizontal * submarine.depth);