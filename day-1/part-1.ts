export default (inputs: number[]) => {
    let currentValue = inputs[0];
    let numOfIncreases = 0;

    for (const value of inputs) {
        if (value > currentValue) numOfIncreases++;

        currentValue = value;
    }

    return numOfIncreases;
}