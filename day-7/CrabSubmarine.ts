export default class CrabSubmarine {
    public fuelConsumptionByPosition: number[];

    constructor(public position: number, public allSubmarinePositions: number[]) {
        this.fuelConsumptionByPosition = allSubmarinePositions.map(posToMove => this.calculateFuelConsumption(posToMove));
    }

    public calculateFuelConsumption = (positionToMove: number) => {
        return Math.abs(this.position - positionToMove);
    }
}