import { MOVEMENT } from './enums.ts';

export default class Submarine {
    constructor(public horizontal: number = 0, public depth: number = 0, public aim: number = 0) { }

    public move = (movement: MOVEMENT, value: number) => {
        debugger;
        if (movement === MOVEMENT.FORWARD) {
            this.horizontal += value;
            this.depth += this.aim * value;
        } else if (movement === MOVEMENT.UP) {
            this.aim -= value;
        } else if (movement === MOVEMENT.DOWN) {
            this.aim += value;
        }
    }
}