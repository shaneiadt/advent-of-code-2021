import CrabSubmarine from "./CrabSubmarine.ts";
import inputs from './inputs/input.ts';

const getFuelConsumptionByPosition = (submarines: CrabSubmarine[]) => {
    const allFuelForThisPosition = submarines.map((_, index) => submarines.reduce((prev, cur) => prev + cur.fuelConsumptionByPosition[index], 0));
    const fuelCost = allFuelForThisPosition.reduce((prev, cur) => cur < prev || prev === 0 ? cur : prev, 0);
    const pos = allFuelForThisPosition.findIndex(i => i === fuelCost);

    return {
        pos,
        fuelCost
    }
}

const submarines = inputs.map(position => new CrabSubmarine(position, inputs));
const fuelConsumed = getFuelConsumptionByPosition(submarines);

console.log(`[Part 1] - How much fuel must they spend to align to that position? - ${fuelConsumed.fuelCost}`);