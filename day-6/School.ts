import LanternFish from "./LanternFish.ts";

export default class School {
    private _fish: LanternFish[] = [];

    constructor(list: number[]) {
        for (const age of list) {
            this._fish.push(new LanternFish(age));
        }
    }

    get fish() { return this._fish };

    public processDays = (days: number) => {
        for (let daysLeft = days; daysLeft > 0; daysLeft--) {
            const newFish: LanternFish[] = [];

            for (const fish of this._fish) {
                if (fish.age === 0) {
                    fish.age = 6;

                    newFish.push(new LanternFish(8, fish));
                } else {
                    fish.age -= 1;
                }
            }

            this._fish.push(...newFish);
        }
    }
}