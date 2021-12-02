export default (inputs: number[]) => {
    const slidingWindows = [];

    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index + 2]) slidingWindows.push([inputs[index], inputs[index + 1], inputs[index + 2]]);
    }

    const mapped = slidingWindows.map(window => window.reduce((prev, cur) => prev + cur, 0));

    let currentValue = mapped[0];
    let numOfIncreases = 0;

    for (const value of mapped) {
        if (value > currentValue) numOfIncreases++;

        currentValue = value;
    }

    return numOfIncreases;
}
